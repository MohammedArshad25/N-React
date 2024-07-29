import React, {lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './App';
import Main from "./components/Main";
import Page1 from "./components/Page1";
const Page2 = lazy(()=> import("./components/Page2"));

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([

  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Main />,
      },
      {
        path : "/page1",
        element : <Page1 />,
      },
      {
        path : "/page2",
        element : <Suspense fallback={<h1>fallback of page2</h1>}>
            <Page2 />
        </Suspense>,
      },
    ],
    errorElement : <h1>Error Page</h1>,
  },


]);


root.render(<RouterProvider router={appRouter}/>);
