import React from "react";

class Basket extends React.Component {
  render() {
    return (
      <div className="basket">
        <img
          className="basket__img"
          src={`/icons/${this.props.item.icon}.svg`}
          alt={`${this.props.item.name}`}
        />
        <p className="basket__text basket__text--title">
          {this.props.item.name}
        </p>
        <p className="basket__text">{this.props.item.category}</p>
        <p className="basket__text">{this.props.item.discount}</p>
        <p className="basket__text">Quanity: {this.props.item.quanity}</p>
        <p className="basket__text">£{this.props.item.price}</p>
        <div
          className="basket__add btn"
          onClick={() => this.props.removeFromBag(this.props.index)}
        >
          Remove from bag
        </div>
      </div>
    );
  }
}

export default Basket;
