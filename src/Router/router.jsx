import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
