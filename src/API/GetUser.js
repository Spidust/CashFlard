import axios from "./axios";

export default async function () {
    try {
        const data = await axios.get("/auth");

        return data.data.result;
    } catch(e) {
        return false;
    }
}