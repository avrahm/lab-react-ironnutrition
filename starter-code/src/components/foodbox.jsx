import React from "react";

import "../App.css";
import "bulma/css/bulma.css";

class FoodBox extends React.Component {
  state = { ...this.props };

  updateTheQuantity = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="quantity"
                  defaultValue={this.props.quantity}
                  onChange={this.updateTheQuantity}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={e => {
                    this.props.addFoodTodayFunction(
                      this.state.name,
                      this.state.calories,
                      this.state.quantity
                    );
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
