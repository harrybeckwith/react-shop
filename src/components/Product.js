import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <img
          className="product__img"
          src={`/icons/${this.props.item.icon}.svg`}
          alt={`${this.props.item.name}`}
        />
        <p className="product__text product__text--title">
          {this.props.item.name}
        </p>
        <p className="product__text">{this.props.item.category}</p>

        <p className="product__text">{this.props.item.discount}</p>
        <p className="product__text">Quanity: {this.props.item.quanity}</p>
        <p className="product__text">£{this.props.item.price}</p>

        {//Check if message failed
        this.props.item.quanity > 0 ? (
          <div
            className="product__add btn"
            onClick={() => this.props.addToBag(this.props.index)}
          >
            Add to bag
          </div>
        ) : (
          <div className="product__out">Out of stock !</div>
        )}
      </div>
    );
  }
}

export default Product;
