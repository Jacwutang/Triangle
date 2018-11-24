import React, { Component } from "react";
import "./calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side_one: "",
      side_two: "",
      side_three: "",
      type: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let type = event.target.name;
    let val = event.target.validity.valid
      ? event.target.value
      : this.state[type];
    this.setState({
      [type]: val
    });
  }

  calculate() {
    const { side_one, side_two, side_three } = this.state;

    if (!side_one || !side_two || !side_three) return "";

    if (side_one === side_two && side_one === side_three) {
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

  render() {
    console.log(this.state);
    return (
      <div className="">
        <input
          type="text"
          name="side_one"
          pattern="[0-9]*"
          value={this.state.side_one}
          onChange={this.handleChange}
          placeholder="Side 1"
        />
        <input
          type="text"
          name="side_two"
          pattern="[0-9]*"
          value={this.state.side_two}
          onChange={this.handleChange}
          placeholder="Side 2"
        />
        <input
          type="text"
          name="side_three"
          pattern="[0-9]*"
          value={this.state.side_three}
          onChange={this.handleChange}
          placeholder="Side 3"
        />
        <div>
          <h2> The Triangle is: {this.calculate()} </h2>
        </div>
      </div>
    );
  }
}

export default Calculator;
