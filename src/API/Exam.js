import axios from "./axios";

export default class ExamAPI {
	static async getOne(id) {
		const res = await axios.get("/exam/get/" + id);
		if (!res.data.sucess) {
			return res.status;
		}

		return res.data.result;
	}
}
