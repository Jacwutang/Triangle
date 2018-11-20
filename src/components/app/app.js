import React, { Component } from 'react';
import './app.css';
import Calculator from "../calculator/calculator";


class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1> Triangle </h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
