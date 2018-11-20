import React, { Component } from 'react';
import './calculator.css';
import TriangleRender from "../triangle_render/triangle_render";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side_one: "",
      side_two: "",
      side_three: "",
      type : ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let type = event.target.name;
    this.setState({
      [type] : event.target.value
    });
  }

  calculate() {
    const {side_one, side_two, side_three} = this.state;

    if(!side_one || !side_two || !side_three) return "";

    if(side_one === side_two && side_one === side_three) {
      return 'Equilateral';
    }
    else if(side_one === side_two || side_one === side_three || side_two === side_three) {
      return 'Isoceles';
    }
    else{
      return 'Scalene'
    }

  }


  render() {
    console.log(this.state);
    return (
      <div className="">
        <input type="text" name="side_one" value={this.state.side_one} onChange={this.handleChange} placeholder="Side 1"></input>
        <input type="text" name="side_two" value={this.state.side_two} onChange={this.handleChange} placeholder="Side 2"></input>
        <input type="text" name="side_three" value={this.state.side_three} onChange={this.handleChange} placeholder="Side 3"></input>
        <TriangleRender
        side_one   = {this.state.side_one}
        side_two   = {this.state.side_two}
        side_three = {this.state.side_three}
        type       = { this.calculate() }
         />


      </div>
    );
  }
}

export default Calculator;
