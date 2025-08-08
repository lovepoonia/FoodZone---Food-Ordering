import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body  from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";
import UserContext from "./utils/UserContext";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
const Grocery = lazy(()=> import("./components/Grocery"))


    const App = ()  => {
        const [userName, setUserName] = useState("Default User");
        const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <Provider store={appStore}>
         <UserContext.Provider value={{loggedInUser:userName , setUserName, isLoggedIn, setIsLoggedIn} }>
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
         </UserContext.Provider>
      </Provider> 
    )
}

const routerFirst = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<AboutUs/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/> ,
    },
]);

const root =  ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={routerFirst}/>);