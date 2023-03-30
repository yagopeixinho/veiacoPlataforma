import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Veiacos from "../pages/Veiacos";
import VeiacoDashboard from "../pages/VeiacoDashboard";
import VeiacoForm from "../pages/VeiacoForm";
import DebtForm from "../pages/DebtForm";

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
        path: "/veiaco/adicionar",
        element: <VeiacoForm />,
      },
      {
        path: "/veiaco/:id/editar",
        element: <VeiacoForm />,
      },
      {
        path: "/veiaco/:idVeiaco/divida/:idDivida",
        element: <DebtForm />,
      },
      {
        path: "/veiaco/:idVeiaco/divida/adicionar",
        element: <DebtForm />,
      },
      {
        path: "/veiaco/:id/dashboard",
        element: <VeiacoDashboard />,
      },
    ],
  },
]);
