import React from "react";
import { FaTimes } from "react-icons/fa";
import "../../assets/css/home/Menu.css";

function Menu(props) {
	return (
		<div className={"menu " + (props.active ? "active" : "")}>
			<FaTimes className="quit" onClick={props.quit}></FaTimes>
			<div className="menu__item">
				<a href="https://github.com/Spidust/CashFlard">Github Dự Án</a>
			</div>
			<div className="menu__item">
				<a href="https://www.facebook.com/profile.php?id=100085815830663">
					Liên hệ facebook cá nhân
				</a>
			</div>
			<div className="menu__item">
				<a href="/soan-de">Trang Soạn đề</a>
			</div>
			<div className="menu__item">
				<a href="https://github.com/Spidust/SoanDeCashflard">
					Github trang Soạn đề
				</a>
			</div>
		</div>
	);
}

export default Menu;
