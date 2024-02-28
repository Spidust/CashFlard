import React from "react";
import { FaTimes, FaFolderPlus } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa6";
import "../../assets/css/home/Menu.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ClearToken from "../../utils/LocalStorage/ClearToken";
function Menu(props) {
	const user = useSelector((state) => state.user.value);
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

			<div className="auth absolute bottom-8 w-full">
				{user.username ? (
					<>
						<div className="user flex justify-center flex-wrap w-full">
							<img
								src={user.avatar || "/image/avatar.svg"}
								className="avatar w-full px-[20%]"
							></img>
							<div className="display_name text-lg text-center w-full">
								{user.display_name}
							</div>
							<div className="name text-sm text-gray-600 text-center w-full">
								@{user.username}
							</div>
						</div>
						<div className="control flex w-fit mx-auto">
							<div
								className="hover:underline text-blue-600 cursor-pointer"
								onClick={() => ClearToken(dispatch)}
							>
								Đăng xuất
							</div>
						</div>
					</>
				) : (
					<div className="control flex w-fit mx-auto">
						<Link
							to="/login"
							className="hover:underline text-blue-600"
							onClick={props.quit}
						>
							Đăng nhập
						</Link>
						/
						<Link
							to="/register"
							className="hover:underline text-blue-600"
							onClick={props.quit}
						>
							Đăng ký
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default Menu;
