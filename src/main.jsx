import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Canvas from "./Components/Canvas.jsx";
import Search from "./Components/Search.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import Terms from "./Components/Terms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Canvas />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
