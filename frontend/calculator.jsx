import React, { Component } from 'react';

class Calcuator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rightNum: '',
      leftNum: '',
      result: 0,
    }

    this.setRightNum = this.setRightNum.bind(this);
    this.setLeftNum = this.setLeftNum.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }


  setRightNum(e) {
    // e.preventDefault();
    const rightNum = e.target.value ? parseInt(e.target.value) : '';
    this.setState({ rightNum });
  }

  setLeftNum(e) {
    // e.preventDefault();
    const leftNum = e.target.value ? parseInt(e.target.value) : '';
    this.setState({ leftNum });
  }

  add(e) {
    e.preventDefault();
    const result =  this.state.leftNum + this.state.rightNum;
    this.setState({ result });
  }

  multiply(e) {
    e.preventDefault();
    const result =  this.state.leftNum * this.state.rightNum;
    this.setState({ result });
  }

  subtract(e) {
    e.preventDefault();
    const result =  this.state.leftNum - this.state.rightNum;
    this.setState({ result });
  }

  divide(e) {
    e.preventDefault();
    const result =  this.state.leftNum / this.state.rightNum;
    this.setState({ result });
  }

  clear(e) {
    e.preventDefault();
    this.setState({
      result: 0,
      leftNum: '',
      rightNum: '',
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setLeftNum} value={this.state.leftNum}></input>
        <input onChange={this.setRightNum} value={this.state.rightNum}></input>
        <button onClick={this.clear}>Clear</button>
        <div>
          <button onClick={this.add}>+</button>
          <button onClick={this.multiply}>*</button>
          <button onClick={this.subtract}>-</button>
          <button onClick={this.divide}>/</button>
        </div>
      </div>
    );
  }
}

export default Calcuator;
