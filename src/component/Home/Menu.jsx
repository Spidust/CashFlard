import React from "react";
import { FaTimes, FaFolderPlus } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa6";
import "../../assets/css/home/Menu.css";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/UserSlice";

function Menu(props) {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

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

			<div className="user absolute bottom-10 w-full">
				{
					user.token
						? <div className="logged-in w-full">
							<img className="avt w-3/5 mx-auto block" src="/image/avatar.svg"></img>
							<div className="display_name text-lg text-center w-full">{user.display_name}</div>
							<div className="username text-gray-600 text-center w-full">@{user.username}</div>

							<div className="logout mt-10 text-center cursor-pointer underline" onClick={() => dispatch(setToken(""))}>Đăng xuất</div>
						</div>
						: <div className="not-logged-in text-center w-full">
							<Link className="underline cursor-pointer" to="/login" onClick={props.quit}>Đăng nhập</Link>/<Link className="underline cursor-pointer" to="/register" onClick={props.quit}>Đăng ký</Link>
						</div>
				}
			</div>
		</div>
	);
}

export default Menu;
