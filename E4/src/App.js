import React,{ lazy, Suspense }from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import AppLayout from "./Components/AppLayout";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu.";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./Components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body />,
      },
      {
        path : "/about",
        element : <About />,
      },
      {
        path : "/contact",
        element : <Contact />,
      },
      {
        path : "/grocery",
        element : <Suspense fallback={<h1>fallback of Grocery</h1>}>
            <Grocery />
        </Suspense>,
      },
      {
        path : "/cart",
        element :<Cart />
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />,
      }
    ],
    errorElement : <Error />,
  },

]);

root.render(<RouterProvider router={appRouter}/>);
