import React, { Component } from "react";
import "./calculator.css";
import { validateSide, validateAllSides, determineType } from "./util/validation";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side_one: "",
      side_two: "",
      side_three: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /* Determine corresponding input to update w/ value */
  handleChange(event) {
    let side = event.target.name;
    let val = event.target.value;
    this.setState({
      [side]: val
    });
  }

  /* Calls utility methods */
  calculate() {
    let { side_one, side_two, side_three } = this.state;
    side_one = parseFloat(side_one);
    side_two = parseFloat(side_two);
    side_three = parseFloat(side_three);

    /* Proceed to calculation only when all sides are valid inputs */
    if(validateAllSides(side_one, side_two, side_three)) {
      return determineType(side_one, side_two, side_three);
    }
    else {
      return "";
    }
  }

  /* Render validation errors */
  renderErrors(side) {
    let error_msg = side ? validateSide(this.state[side]).error : "";
    return error_msg;
  }

  render() {
    return (
      <div className="calc_container">
        <div className="inputs_container">
          <div className="side_container">
            <h3> Side 1 </h3>
            <input
              type="text"
              name="side_one"
              value={this.state.side_one}
              onChange={this.handleChange}
              placeholder="Side 1"
            />
            <div className="error_display">
              {" "}
              {this.renderErrors("side_one")}{" "}
            </div>
          </div>

          <div className="side_container">
            <h3> Side 2 </h3>
            <input
              type="text"
              name="side_two"
              value={this.state.side_two}
              onChange={this.handleChange}
              placeholder="Side 2"
            />
            <div className="error_display">
              {" "}
              {this.renderErrors("side_two")}{" "}
            </div>
          </div>

          <div className="side_container">
            <h3> Side 3 </h3>
            <input
              type="text"
              name="side_three"
              value={this.state.side_three}
              onChange={this.handleChange}
              placeholder="Side 3"
            />
            <div className="error_display">
              {" "}
              {this.renderErrors("side_three")}{" "}
            </div>
          </div>
        </div>

        <div className="results_container">
          <h2>
            The Triangle is:
            <mark> {this.calculate()} </mark>
          </h2>
        </div>
      </div>
    );
  }
}

export default Calculator;
