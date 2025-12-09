
import DashboardLayout from "../Components/Dashboard/DashboardLayout";
import UserProfile from "../Components/Dashboard/UserProfile";

import PrivateRoute from "../Components/PrivateRoute";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
import Login from "../Page/Login";
import MyBookingPage from "../Page/MyBookingPage";
import Register from "../Page/Register";
import TicketDetails from "../Page/TicketDetails";

import TicketsList from "../Page/TicketsList";
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
        },
        {
            path:'/ticket',
            element:<TicketsList></TicketsList>
        },


    ],
    
    
  },
          {
  path: "/tickets/:id",
  element: (
    <PrivateRoute>
         <TicketDetails/>
    </PrivateRoute>
    
   
    
  ),
},
{
  path:"/book/:id",
  element:(
    <PrivateRoute>
      <MyBookingPage></MyBookingPage>
    </PrivateRoute>
  )

},

{
  path:"dashboard",
  element:
  <PrivateRoute>
    <DashboardLayout></DashboardLayout>
  </PrivateRoute>,
  
  children:[
    {
      path:"profile",
      element:<UserProfile></UserProfile>
    }
  ]

}
]);

export default router;
