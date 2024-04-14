import axios from "./axios";

export default async function (username, password) {
    const data = await axios.post("/auth/login", {
        username,
        password
    });
    if (data.data.sucess)
        return data.data.token
    else return false;
}