import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      {/* <Body />
      <About />
      <Contact /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },

      // {
      //   path: "/services",
      //   element: <Services />,
      // },

      // {
      //   path: "/blogs",
      //   element: <Blogs />,
      // },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
