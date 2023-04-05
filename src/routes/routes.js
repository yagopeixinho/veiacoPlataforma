import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Veiacos from "../pages/Veiacos";
import VeiacoDashboard from "../pages/VeiacoDashboard";
import VeiacoForm from "../pages/VeiacoForm";
import DebtForm from "../pages/DebtForm";
import Dashboard from "../pages/Dashboard";

export function Private({ children }) {
  // """" Temporary mock logic to get the authenticated user
  const authenticated = localStorage.getItem("TOKEN");

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      {
        path: "/dashboard",
        element: (
          <Private>
            <Dashboard />
          </Private>
        ),
      },
      {
        path: "/veiacos",
        element: (
          <Private>
            <Veiacos />
          </Private>
        ),
      },
      {
        path: "/veiaco/adicionar",
        element: (
          <Private>
            <VeiacoForm />
          </Private>
        ),
      },
      {
        path: "/veiaco/:id/editar",
        element: (
          <Private>
            <VeiacoForm />
          </Private>
        ),
      },
      {
        path: "/veiaco/:idVeiaco/divida/:idDivida",
        element: (
          <Private>
            <DebtForm />
          </Private>
        ),
      },
      {
        path: "/veiaco/:idVeiaco/divida/adicionar",
        element: (
          <Private>
            <DebtForm />
          </Private>
        ),
      },
      {
        path: "/veiaco/:id/dashboard",
        element: (
          <Private>
            <VeiacoDashboard />
          </Private>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
