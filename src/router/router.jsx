import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../components/About.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/about',
        element: <About />,
    },
]);

export default router; 