import "./App.css";

import { Outlet } from "react-router-dom";
import AppSideBar from "./components/layout/AppSideBar";
import AppHeader from "./components/layout/AppHeader";

function App() {
  return (
      <div className="veiaco">
        <AppHeader />
        <AppSideBar />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
  );
}

export default App;
