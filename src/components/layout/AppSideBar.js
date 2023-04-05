import { Link } from "react-router-dom";
import houseIcon from "../../assets/icons/temp1.svg";
import veiacoIcon from "../../assets/icons/temp2.svg";
import logoutIcon from "../../assets/icons/sair-veiaco-icon.svg";

export default function AppSideBar() {
  return (
    <div className="veiaco-sidebar">
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
                localStorage.removeItem("TOKEN");
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
