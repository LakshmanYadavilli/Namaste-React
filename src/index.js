import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";

// const h1Element = React.createElement("h1", { id: "heading" }, "Hello World!");
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
