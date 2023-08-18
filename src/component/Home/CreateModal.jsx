import React from "react";
import "../assets/css/CreateModal.css";
import { FaTimes } from "react-icons/fa";
function CreateModal(props) {
  return (
    <div className="create-modal">
      <FaTimes className="quit" onClick={props.quit}></FaTimes>
      <label htmlFor="name-input">Tên: </label>
      <input type="text" id="name-input" />
      <button className="create-btn">Tạo</button>
    </div>
  );
}

export default CreateModal;
