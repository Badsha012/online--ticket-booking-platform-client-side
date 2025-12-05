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
            element:<Home></Home>
        }
    ]
  },
]);

export default router;
