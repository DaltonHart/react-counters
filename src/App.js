import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  state = {
    counters: 0
  };

  handleDecrement = () => {
    if (this.state.counters > 0) {
      this.setState({ counters: this.state.counters - 1 });
    }
  };

  handleIncrement = () => {
    this.setState({ counters: this.state.counters + 1 });
  };

  render() {
    return (
      <div className="App">
        <Header
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
        />
        <CounterList counters={this.state.counters} />
      </div>
    );
  }
}
export default App;
