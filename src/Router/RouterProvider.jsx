import About from "../Page/About";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Root from "../RootLayout/Root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/about",
            element:<About></About>,
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
            path:"/login",
            element:<Login></Login>,
        },
        {
            path:"/register",
            element:<Register></Register>
        }
    ],
    
  },
]);

export default router;
