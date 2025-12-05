import About from "../Page/About";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
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
        }
    ]
  },
]);

export default router;
