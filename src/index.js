import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import RestuarantMenu from "./Components/RestuarantMenu.jsx";

// const h1Element = React.createElement("h1", { id: "heading" }, "Hello World!");
const rootElement = document.getElementById("root");

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/restaurant/menu/:res_id", element: <RestuarantMenu /> },
      { path: "*", element: <h1>404 Not Found</h1> },
    ],
  },
]);

const root = ReactDOM.createRoot(rootElement);
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/about" element={<About />} />
//       <Route path="*" element={<h1>404 Not Found</h1>} />
//     </Routes>
//   </Router>
// );

root.render(<RouterProvider router={Router} />);
