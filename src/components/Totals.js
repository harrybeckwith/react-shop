import React from "react";

class Totals extends React.Component {
  getDiscount = e => {
    const discountCode = e.target.value.toLowerCase();
    this.props.getDiscountCode(discountCode);
  };

  discount = () => {
    const fiveOff = "5";
    const TenOff = "10";
    const fifteenOff = "15";
    const total = this.props.total;
    const code = this.props.discountCode;

    let amount = 0;

    if (code === fiveOff && this.props.basket.length > 0) {
      amount = 5;

      alert("£5.00 off your order, press okay to apply!");
    } else if (code === TenOff && total > 50) {
      amount = 10;
      alert("£10.00 off your order, press okay to apply!");
    } else if (code === fifteenOff && total > 75 && this.props.shoeDiscount) {
      amount = 15;
      alert("£15.00 off your order, press okay to apply!");
    } else if (code !== fiveOff && code !== TenOff && code !== fifteenOff) {
      alert("invalid code");
    }

    this.props.checkDiscount(amount);
  };

  render() {
    return (
      <div>
        <p className="title-bold">
          Total: £{this.props.total - this.props.discountAmount}
        </p>
        <p className="title-bold"> Enter voucher code:</p>

        <div className="discount">
          <input
            type="text"
            onKeyUp={this.getDiscount}
            placeholder="voucher code"
          />
          <div className="btn" onClick={this.discount}>
            check code
          </div>
        </div>

        <div className="voucher">
          <p className="title-bold">Discount voucher codes!</p>
          <p> £5.00 off your order use code: 5 </p>
          <p> £10.00 off when you spend over £50.00 use code: 10 </p>
          <p>
            £15.00 off when you have bought at least one footwear item and spent
            over £75.00 use code: 15
          </p>
        </div>
      </div>
    );
  }
}
export default Totals;
