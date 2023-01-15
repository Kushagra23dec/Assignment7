import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About.js";
import  Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Cart from  "./components/Cart.js";

const AppLayout = ()=>{
    return(
        <>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    );
}

  const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            }
             
        ]
    }
  ])




const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);