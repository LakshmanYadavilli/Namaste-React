import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../utils/counterSlice.js";
import { CounterContext } from "../utils/context";

const About = () => {
  // const dispatch = useDispatch();
  const value = useContext(CounterContext);
  console.log("value", value);
  const { state, dispatch } = value;

  const { counter } = state;

  // const counter = useSelector((store) => store.counter.counter);
  return (
    <>
      <h1>About Us!</h1>
      <h1>Counter:{counter}</h1>
      <button
        className="p-2 mr-2 bg-amber-400"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="p-2 bg-amber-400"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </>
  );
};

export default About;
