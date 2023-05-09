import { Link, useNavigate } from "react-router-dom";
import houseIcon from "../../assets/icons/temp1.svg";
import veiacoIcon from "../../assets/icons/temp2.svg";
import logoutIcon from "../../assets/icons/sair-veiaco-icon.svg";
import appLogo from "../../assets/logos/VeiacoLightLogo.png";

export default function AppSideBar() {
  const navigate = useNavigate();

  return (
    <div className="veiaco-sidebar">
      <img
        src={appLogo}
        id="logo-side-bar"
        alt="Logo do aplicativo. Um símbolo de uma moeda '$' com o nome 'Veiaco' ao lado"
        onClick={() => {
          navigate(`/dashboard`);
        }}
      />

      <nav className="veiaco-nav">
        <div className="nav-links">
          <label className="veiaco-container">
            <span>
              <img src={houseIcon} alt="Dashboard icon" />
            </span>
            <Link to="/dashboard" className="veiaco-link">
              Dashboard
            </Link>
          </label>

          <label className="veiaco-container">
            <span>
              <img src={veiacoIcon} alt="Veiaco icon" />
            </span>
            <Link to="/veiacos" className="veiaco-link">
              Veiacos
            </Link>
          </label>

          <label className="veiaco-container">
            <span>
              <img src={veiacoIcon} alt="Veiaco icon" />
            </span>
            <Link to="/agenda" className="veiaco-link">
              Agenda
            </Link>
          </label>
        </div>

        <div>
          <label className="veiaco-container">
            <span>
              <img src={logoutIcon} alt="Veiaco icon" />
            </span>
            <Link
              to="/login"
              className="veiaco-link"
              onClick={() => {
                localStorage.removeItem("TOKEN_KEY");
              }}
            >
              Sair
            </Link>
          </label>
        </div>
      </nav>
    </div>
  );
}
