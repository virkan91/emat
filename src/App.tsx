import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import News from "./pages/news/News";
import Nothing from "./pages/nothing/Nothing";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Communication from "./pages/communication/Communication";
import References from "./pages/references/References";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   index: true,
      //   element: <Company />,
      // },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "References",
        element: <References />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "communication",
        element: <Communication />,
      },
      {
        path: "*",
        element: <Nothing />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
