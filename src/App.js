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
    highDiscount: false,
    discountAmount: 0,
    discountCode: "",
    show: false
  };

  addToBag = curr => {
    const basket = this.state.basket.slice();
    basket.push(this.state.stock[curr]);

    this.setState({
      basket
    });
  };

  removeFromBag = curr => {
    const basket = this.state.basket.slice();
    basket.splice(curr, 1);

    this.setState({
      basket,
      discountAmount: 0
    });
  };
  // check if footwear is in basket
  // apply higher discount
  checkCodes = () => {
    const checkCategory = obj =>
      obj.category === "Women’s Footwear" || obj.category === "Men’s Footwear";
    const highDiscount = this.state.basket.some(checkCategory);
    return highDiscount;
  };

  showBasket = () => {
    this.setState({
      show: !this.state.show
    });
  };

  checkDiscount = discountAmount => {
    this.setState({
      discountAmount
    });
  };

  getDiscountCode = discountCode => {
    this.setState({
      discountCode
    });
  };

  render() {
    // get a total from basket
    const total = this.state.basket.reduce(function(prev, cur) {
      return prev + cur.price;
    }, 0);

    const shoeDiscount = this.checkCodes();

    return (
      <div className="container">
        <img
          className="shopping-bag"
          src="/icons/shopping-bag.svg"
          alt="shopping bag icon"
          onClick={this.showBasket}
        />
        <div className={`bag ${this.state.show ? "show" : "hide"}`}>
          <h3 className="bag__title"> Basket </h3>

          <Totals
            discountAmount={this.state.discountAmount}
            getDiscountCode={this.getDiscountCode}
            discountCode={this.state.discountCode}
            total={total}
            basket={this.state.basket}
            shoeDiscount={shoeDiscount}
            checkDiscount={this.checkDiscount}
          />

          <div className="baskets">
            {Object.keys(this.state.basket).map((item, index) => (
              <Basket
                key={index}
                index={index}
                item={this.state.basket[item]}
                removeFromBag={this.removeFromBag}
              />
            ))}
          </div>
        </div>

        <div className="products">
          {Object.keys(this.state.stock).map((item, index) => (
            <Product
              key={index}
              index={index}
              item={this.state.stock[item]}
              addToBag={this.addToBag}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
