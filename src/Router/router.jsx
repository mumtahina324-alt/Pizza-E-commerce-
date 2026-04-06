import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
