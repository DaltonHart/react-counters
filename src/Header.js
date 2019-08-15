import React, { Component } from "react";

const Header = props => {
  return (
    <header className="App-header">
      <h1 className="App-title">React Counters</h1>
      <button onClick={props.handleIncrement}>+</button>
      <button onClick={props.handleDecrement}>-</button>
    </header>
  );
};

export default Header;
