import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import Manufacturer from "./pages/Manufacturer"
import Distributor from "./pages/Distributor"
import Pharmacy from "./pages/Pharmacy"
import Patient from "./pages/Patient"
import Error from "./components/Error"
import Register from "./pages/Register"

function AppLayout() {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Header />
                <Outlet />
            </NotificationProvider>
        </MoralisProvider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/manufacturer",
                element: <Manufacturer />,
            },
            {
                path: "/distributor",
                element: <Distributor />,
            },
            {
                path: "/pharmacy",
                element: <Pharmacy />,
            },
            {
                path: "/patient",
                element: <Patient />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
