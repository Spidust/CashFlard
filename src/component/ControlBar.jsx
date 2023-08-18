import { FaPlus, FaBars, FaHome } from "react-icons/fa";
import "../assets/css/ControlBar.css";
import { Link } from "react-router-dom";
import CreateModal from "./Home/CreateModal";
import { useState } from "react";

function ControlBar() {
  const [creating, setCreating] = useState(false);
  return (
    <>
      <div className="control-bar bar">
        <div className="new-button" onClick={() => setCreating(true)}>
          <FaPlus />
        </div>
        <Link to="/" className="home-btn hover-up">
          <FaHome />
        </Link>
        <div className="menu-btn">
          <FaBars />
        </div>
      </div>

      {creating && <CreateModal quit={() => setCreating(false)} />}
    </>
  );
}

export default ControlBar;
