import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, BrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "../components/Header"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import Manufacturer from "./manufacturer"
import Distributor from "./distributor"
import Pharmacy from "./pharmacy"
import Patient from "./patient"
import Error from "../components/Error"

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
