import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const LazyAbout = lazy(() => import("./Components/About.jsx"));
import Home from "./Components/Home.jsx";
import RestuarantMenu from "./Components/RestuarantMenu.jsx";

import { Provider } from "react-redux";
import store from "./utils/store.js";
import CounterContextProvider from "./utils/context.js";
import Cart from "./Components/Cart.jsx";

// const h1Element = React.createElement("h1", { id: "heading" }, "Hello World!");
const rootElement = document.getElementById("root");

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading About page....</h1>}>
            <LazyAbout />
          </Suspense>
        ),
      },
      { path: "/restaurant/menu/:res_id", element: <RestuarantMenu /> },
      { path: "/cart", element: <Cart /> },
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

root.render(
  <Provider store={store}>
    <CounterContextProvider>
      <RouterProvider router={Router} />
    </CounterContextProvider>
  </Provider>
);
