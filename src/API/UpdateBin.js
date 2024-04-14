import axios from "./axios";

const fail = 1;

export default async function (data) {
    try {
        const res = await axios.post("/bin/update", data);

        return res.data.result;
    } catch (e) {
        return fail;
    }
}