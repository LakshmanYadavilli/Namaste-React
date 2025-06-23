const parentElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", { id: "heading" }, "Hello World!"),
    React.createElement("p", { id: "paragraph" }, "This is a paragraph"),
  ])
);
// const h1Element = React.createElement("h1", { id: "heading" }, "Hello World!");
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(parentElement);
