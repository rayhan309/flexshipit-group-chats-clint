import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Chats from "../Pages/Chats/Chats";
import Features from "../Pages/Home/Features/Features";
import PrivetPage from "../Context/PrivetPage";
import AboutPage from "../Pages/AboutUS/AboutUS";
import AllUsers from "../Pages/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/contact',
                Component: Contact,
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/chats',
                element: <PrivetPage>
                    <Chats />
                </PrivetPage>,
            },
            {
                path: "/features",
                Component: Features
            },
            {
                path: "/about",
                Component: AboutPage
            },
            {
                path: "/freinds",
                element: <PrivetPage>
                    <AllUsers />
                </PrivetPage>
            },
        ]
    }
])