import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import "../index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const App = () => {
    return (
        <>
            <Header />
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        element:<App/>,
        path:"/"
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)