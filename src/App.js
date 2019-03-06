import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
      <span>Age:{this.props.age}</span>
      <button onClick={this.props.onAgeUp}>AGE UP</button>
      <button onClick={this.props.onAgeDown}>AGE DOWN</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}
const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => {dispach({type:'AGE_UP'})},
    onAgeDown: () => {dispach({type:'AGE_DOWN'})}

  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
