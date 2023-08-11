import { FaPlus, FaBars, FaHome } from "react-icons/fa";
import "../assets/css/ControlBar.css";
import { Link } from "react-router-dom";

function ControlBar() {
  return (
    <div className="control-bar bar">
      <div className="new-button">
        <FaPlus />
      </div>
      <Link to="/" className="home-btn hover-up">
        <FaHome />
      </Link>
      <div className="menu-btn">
        <FaBars />
      </div>
    </div>
  );
}

export default ControlBar;
