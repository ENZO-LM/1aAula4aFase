import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Generica from "../pages/Generica";
import Contato from "../pages/Contato";
import Final from "../pages/Final";

const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/contato", element: <Contato/>},
    {path: "/generica", element: <Generica/>},
    {path: "/final", element: <Final/>}
])

export default router;