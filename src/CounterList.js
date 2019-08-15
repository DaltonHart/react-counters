import React from "react";
import Counter from "./Counter";

const displayCounters = total => {
  return [...Array(total)].map((counter, i) => <Counter key={i} />);
};

const CounterList = props => {
  return <div className="Counter-row">{displayCounters(props.counters)}</div>;
};

export default CounterList;
