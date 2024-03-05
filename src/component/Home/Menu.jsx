import React from "react";
import { FaTimes, FaFolderPlus } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa6";
import "../../assets/css/home/Menu.css";
function Menu(props) {
	return (
		<div className={"menu " + (props.active ? "active" : "")}>
			<FaTimes className="quit z-10" onClick={props.quit}></FaTimes>
			<div className="menu__item">
				<a href="https://github.com/Spidust/CashFlard">
					<TbBrandGithubFilled size={20} /> Github Dự Án
				</a>
			</div>
			<div className="menu__item">
				<a href="https://www.facebook.com/profile.php?id=100085815830663">
					<FaFacebookF size={20} />
					Liên hệ facebook cá nhân
				</a>
			</div>
			<div className="menu__item">
				<a href="/soan-de">
					<FaFolderPlus size={20} />
					Trang Soạn đề
				</a>
			</div>
			<div className="menu__item">
				<a href="https://github.com/Spidust/SoanDeCashflard">
					<TbBrandGithubFilled size={20} /> Github trang Soạn đề
				</a>
			</div>
		</div>
	);
}

export default Menu;
