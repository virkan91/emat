import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import News from "./pages/news/News";
import Nothing from "./pages/nothing/Nothing";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import References from "./pages/references/References";
import Anasayfa from "./pages/services/dropdown/anasayfa/Anasayfa";
import Projeler from "./pages/services/dropdown/projeler/Projeler";
import Hakkımızda from "./pages/services/dropdown/hakkımızda/Hakkımızda";
import Contact from "./pages/contact/Contact";

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
        // path: "about",
        index: true,
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
        // children: [
        //   {
        //     path: "anasayfa",
        //     element:<Anasayfa/>,
        //   },
        //   {
        //     path: "projeler",
        //     element:<Projeler/>,
        //   },
        //   {
        //     path: "hakkimizda",
        //     element:<Hakkımızda/>,
        //   }
        // ]
      },
      {
        path: "anasayfa",
        element: <Anasayfa />,
      },
      {
        path: "projeler",
        element: <Projeler />,
      },
      {
        path: "hakkimizda",
        element: <Hakkımızda />,
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
        path: "contact",
        element: <Contact />,
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
