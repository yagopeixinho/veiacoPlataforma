import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Veiacos from "../pages/Veiacos";
import VeiacoDashboard from "../pages/VeiacoDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/veiacos",
        element: <Veiacos />,
      },
      {
        path: "/veiaco/:id/dashboard",
        element: <VeiacoDashboard />,
      },
    ],
  },
]);
