import axios from "./axios";

export default async function (username, password, display_name) {
    const data = await axios.post("/auth/register", {
        username,
        password,
        display_name
    });
    if (data.data.sucess)
        return data.data.token
    else return false;
}