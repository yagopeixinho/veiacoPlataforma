import { Link } from "react-router-dom";
import houseIcon from "../../assets/icons/temp1.svg";
import veiacoIcon from "../../assets/icons/temp2.svg";

export default function AppSideBar() {
  return (
    <div className="veiaco-sidebar">
      <nav className="veiaco-nav">
        <label className="veiaco-container">
          <span>
            <img src={houseIcon} />
          </span>
          <Link to="/home" className="veiaco-link">
            Home
          </Link>
        </label>

        <label className="veiaco-container">
          <span>
            <img src={veiacoIcon} />
          </span>
          <Link to="/veiacos" className="veiaco-link">
            Veiacos
          </Link>
        </label>
      </nav>
    </div>
  );
}
