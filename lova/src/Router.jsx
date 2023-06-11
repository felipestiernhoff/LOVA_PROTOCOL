import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import { Layout } from "./components/Layout/Layout"
import { Dashboard } from "./components/AppPage/Dashboard"
import './styles/style.css'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
                index: true,
            },
            {
                path: "/dapp",
                element: <Dashboard />,
            },
        ],
    },
    
]);