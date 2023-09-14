import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Company from "./pages/company/Company";
import Products from "./pages/products/Products";
import Partners from "./pages/partners/Partners";
import Catalog from "./pages/catalog/Catalog";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import Nothing from "./pages/nothing/Nothing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Company />,
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "catalog",
        element: <Catalog/>
      },
      
      {
        path: "news",
        element: <News/>
      },
      {
        path: "partners",
        element: <Partners/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "*",
        element:<Nothing/>
        
      }
      
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
};

export default App;
