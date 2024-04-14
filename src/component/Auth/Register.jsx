import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormValidate from "../../core/FormValidate";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux';

import register from "../../API/Register";
import SetToken from '../../utils/State/SetToken';
function Register() {
    const token = useSelector(state => state.user.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token]);

    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState(false);
    const [displayNameError, setDisplayNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();

    const handler = async () => {
        if (validate()) return;

        const result = await register(username, password, displayName);

        if (result) {
            SetToken(result, dispatch);
            alert("Đã đăng ký thành công!");
        } else {
            alert("Đăng ký không thành công!")
        }
    }

    const validate = () => {
        //username
        let flag = false;

        if (FormValidate.LessThanNchar(4, username)) {
            setUsernameError("Tên người dùng phải có ít nhất 4 ký tự");
            flag = true;
        } else if (FormValidate.haveSpecialChar(username)) {
            setUsernameError("Tên người dùng không được chứa ký tự đặc biệt");
            flag = true;
        } else {
            setUsernameError(false);
        }
        //display name
        if (FormValidate.LessThanNchar(8, displayName)) {
            setDisplayNameError("Tên hiển thị phải có ít nhất 8 ký tự");
            flag = true;
        } else {
            setDisplayNameError(false);
        }
        //password
        if (FormValidate.LessThanNchar(8, password)) {
            setPasswordError("Mật khẩu phải có ít nhất 8 ký tự");
            flag = true;
        } else {
            setPasswordError(false);
        }

        return flag;
    }
    return (
        <div className='w-[80%] shadow-md mx-auto absolute top-[50%] left-[50%] bg-card rounded-lg px-10 py-5 flex justify-center items-center flex-wrap flex-col' style={{
            transform: "translate(-50%, -50%)"
        }}>
            <div className="label font-bold text-2xl text-center text-white">Đăng Ký</div>

            <div className="form w-4/5 mt-5">
                <input type="text" placeholder='Tên người dùng' className="username px-2 py-[12px] focus:outline-none w-full mt-3 border-none rounded-md" value={username} onChange={(e) => setUsername(e.target.value)} />
                {usernameError && <div className="error text-white bg-[red] p-1 text-sm mt-[1px]">{usernameError}</div>}

                <input type="text" placeholder='Tên hiển thị' className="username px-2 py-[12px] focus:outline-none w-full mt-3 border-none rounded-md" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                {displayNameError && <div className="error text-white bg-[red] p-1 text-sm mt-[1px]">{displayNameError}</div>}
                <div className="pass-group flex items-center mt-3">
                    <input type={showPassword ? "text" : "password"} placeholder='Mật khẩu' className="password px-2 py-[12px] focus:outline-none w-full  border-none rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {showPassword ? <FaEye size={25} color="white" className='ml-1 cursor-pointer' onClick={() => setShowPassword(false)}></FaEye> : <FaEyeSlash size={25} color="white" className='ml-1 cursor-pointer' onClick={() => setShowPassword(true)}></FaEyeSlash>}
                </div>
                {passwordError && <div className="error text-white bg-[red] p-1 text-sm mt-[1px]">{passwordError}</div>}
            </div>
            <div onClick={handler} className="register-btn p-4 bg-primary hover:bg-secondary cursor-pointer rounded-lg mt-5 w-3/5 text-center text-white">Đăng ký</div>
            <Link className="text-white hover:underline" to="/login">Đã có tài khoản? Đăng nhập</Link>

        </div>
    )
}

export default Register