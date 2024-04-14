import axios from "./axios";

const fail = 1;

export default async function () {
    try {
        const data = await axios.get("/bin");

        return data.data.result;
    } catch(e) {
        return fail;
    }
}