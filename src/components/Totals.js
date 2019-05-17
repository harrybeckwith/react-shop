import React from 'react';

class Totals extends React.Component {

   state = {
       discountAmount: null,
   }

    discount = (e) => {
        console.log(e.target.value);
   
        const fiveOff = '5';
        const TenOff = '10';
        const fifteenOff = '15';
        const code = e.target.value.toLowerCase();
        const total = this.props.total;

        let amount = 0;

        if(code === fiveOff && this.props.basket.length > 0) {
            amount = 5;

            alert('£5.00 off your order, press okay to apply!');
        }

        else if(code === TenOff && total > 50) {
            amount = 10;
            alert('£10.00 off your order, press okay to apply!');
        }
       else if(code === fifteenOff && total > 75 && this.props.shoeDiscount) {
            amount = 15;
            alert('£15.00 off your order, press okay to apply!');
        }

        this.setState({
            discountAmount: amount
        })
    }

    render() {

        return (
            <div className ="Totals">
                <p> total:   {this.props.total - this.state.discountAmount} </p>
              

                discount code: 
                <input type ="text" onKeyUp={this.discount} placeholder="enter discount"/>
                <p>Voucher codes!</p>
                <p> £5.00 off your order use code: 5 </p>
                <p> £10.00 off when you spend over £50.00 use code: 10 </p>
                <p> £15.00 off when you have bought at least one footwear item and spent over £75.00 use code: 15 </p>
            </div>
        )
    }
}
export default Totals;