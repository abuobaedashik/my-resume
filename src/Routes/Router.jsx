import {
    createBrowserRouter,
    
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
  ]);

export default Router
