import React, { Component } from "react";
import "./calculator.css";
import { validateSide, validateAllSides } from "./util/validation";
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

  handleChange(event) {
    /* Determine corresponding side to update w/ proposed value */
    let side = event.target.name;
    let val = event.target.value;
    this.setState({
      [side]: val
    });
  }

  calculate() {
    let { side_one, side_two, side_three } = this.state;

    side_one = parseFloat(side_one);
    side_two = parseFloat(side_two);
    side_three = parseFloat(side_three);
    console.log(side_one, side_two, side_three);
    if (
      side_one > side_two + side_three ||
      side_two > side_one + side_three ||
      side_three > side_one + side_two
    ) {
      return "Cannot form a Triangle with these lengths";
    } else if (side_one === side_two && side_one === side_three) {
      return "Equilateral";
    } else if (
      side_one === side_two ||
      side_one === side_three ||
      side_two === side_three
    ) {
      return "Isoceles";
    } else {
      return "Scalene";
    }
  }

  renderErrors(side) {
    let error = side ? validateSide(this.state[side]) : "";
    return error;
  }

  render() {
    console.log(this.state);
    const { side_one, side_two, side_three } = this.state;
    return (
      <div className="">
        <div className="">
          <input
            type="text"
            name="side_one"
            value={this.state.side_one}
            onChange={this.handleChange}
            placeholder="Side 1"
          />
          <div> {this.renderErrors("side_one")} </div>
        </div>

        <div className="">
          <input
            type="text"
            name="side_two"
            value={this.state.side_two}
            onChange={this.handleChange}
            placeholder="Side 2"
          />
          <div> {this.renderErrors("side_two")} </div>
        </div>
        <div className="">
          <input
            type="text"
            name="side_three"
            value={this.state.side_three}
            onChange={this.handleChange}
            placeholder="Side 3"
          />
          <div> {this.renderErrors("side_three")} </div>
        </div>

        <div>
          <h2>
            {" "}
            The Triangle is:
            {validateAllSides(side_one, side_two, side_three) === true
              ? this.calculate()
              : ""}
          </h2>
        </div>
      </div>
    );
  }
}

export default Calculator;
