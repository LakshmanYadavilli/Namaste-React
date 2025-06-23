import React from "react";
import ReactDOM from "react-dom/client";
const parentElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("h1", { id: "heading" }, "Hello World!")
  )
);
// const h1Element = React.createElement("h1", { id: "heading" }, "Hello World!");
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(parentElement);
