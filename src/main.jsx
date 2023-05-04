import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./Posts.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={route} />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
