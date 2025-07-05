import { createContext, useReducer } from "react";
export const CounterContext = createContext();
const CounterContextProvider = ({ children }) => {
  const reducerFn = (state, action) => {
    const { type } = action;
    switch (type) {
      case "INCREMENT":
        return { counter: state.counter + 1 };
      case "DECREMENT":
        return { counter: state.counter - 1 };
      default:
        return state;
    }
  };
  const initialState = {
    counter: 0,
  };
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
export default CounterContextProvider;
