import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa"
import FormValidate from "../../core/FormValidate";

import login from "../../API/Login";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SetToken from '../../utils/State/SetToken';

function Login() {

    const token = useSelector(state => state.user.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    
    const handler = async () => {
        if (validate()) return;

        try {

            const result = await login(username, password);
        
            if (result) {
                SetToken(result, dispatch);
                alert("Đã đăng nhập thành công!")
            } else {
                alert("Đăng nhập không thành công!")
            }} catch(e) {
                alert("Đăng nhập không thành công!")

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
        } else if (FormValidate.MoreThanNchar(20, username)) {
            setUsernameError("Tên người dùng không được dài quá 20 ký tự");
            flag = true;
        } else {
            setUsernameError(false);
        }
        //password
        if (FormValidate.LessThanNchar(8, password) || FormValidate.MoreThanNchar(32, password)) {
            setPasswordError("Mật khẩu phải có ít nhất 8 và không quá 32 ký tự");
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
            <div className="label font-bold text-2xl text-center text-white">Đăng nhập</div>

            <div className="form w-4/5 mt-5">
                <input type="text" placeholder='Tên người dùng' className="username px-2 py-[12px] focus:outline-none w-full mt-3 border-none rounded-md" value={username} onChange={(e) => setUsername(e.target.value)} />
                {usernameError && <div className="error text-white bg-[red] p-1 text-sm mt-[1px]">{usernameError}</div>}

                <div className="pass-group flex items-center mt-3">
                    <input type={showPassword ? "text" : "password"} placeholder='Mật khẩu' className="password px-2 py-[12px] focus:outline-none w-full  border-none rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {showPassword ? <FaEye size={25} color="white" className='ml-1 cursor-pointer' onClick={() => setShowPassword(false)}></FaEye> : <FaEyeSlash size={25} color="white" className='ml-1 cursor-pointer' onClick={() => setShowPassword(true)}></FaEyeSlash>}
                </div>
                {passwordError && <div className="error text-white bg-[red] p-1 text-sm mt-[1px]">{passwordError}</div>}
            </div>
            <div onClick={handler} className="login-btn p-4 bg-primary hover:bg-secondary cursor-pointer rounded-lg mt-5 w-3/5 text-center text-white">Đăng nhập</div>
            <Link className="text-white hover:underline" to="/register">Chưa có tài khoản? Đăng ký</Link>
        </div>
    )
}

export default Login