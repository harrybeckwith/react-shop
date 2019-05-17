import React from "react";
import "./styles/App.scss";
import stock from "./stock";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Totals from "./components/Totals";

class App extends React.Component {
  state = {
    stock,
    basket: [],
  };

  addToBag = (curr) => {

    const basket = this.state.basket.slice();
    basket.push(this.state.stock[curr]);


    this.setState({
        basket,
    })


  }

  removeFromBag = (curr) => {

    const basket = this.state.basket.slice();
    basket.splice(curr, 1)


    this.setState({
        basket,
    })


  }

  render() {

    const total = this.state.basket.reduce(function(prev, cur) {

        return prev + cur.price;
    }, 0)

    const checkUsername = obj => obj.category === 'Women’s Footwear';
    console.log(this.state.basket.some(checkUsername))

  
    return (
      <div className="container">

      <div className="products">
      
        {Object.keys(this.state.stock).map((item, index)=> (

            <Product key={index}index={index} item={this.state.stock[item]} addToBag={this.addToBag}/>
        ))}

      </div>
      {Object.keys(this.state.basket).map((item, index)=> (
         <Basket key={index}index={index} item={this.state.basket[item]} removeFromBag={this.removeFromBag}/>
      ))}

        <Totals total={total} basket={this.state.basket}/>
   
      </div>
    );
  }
}

export default App;
