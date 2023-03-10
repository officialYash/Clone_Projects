import React from "react";
import Navabar from "./components/Navbar/Navabar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Add from "./pages/add/Add";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/orders/Orders";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import MyGigs from "./pages/myGigs/MyGigs";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import  "./app.scss"




function App() {

  const Layout = () =>{
    return(
      <div>
      <Navabar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        }
        ,
        {
          path:"/orders",
          element:<Orders/>
        }
        ,
        {
          path:"/mygigs",
          element:<MyGigs/>
        }
     ,  {
          path:"/add",
          element:<Add/>
        }
      ,
        {
          path:"/messages",
          element:<Messages/>
        }
      ,
        {
          path:"/message/:id",
          element:<Message/>
        }
      ]







    },
  ]);
  

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
