export default function (ans) {
	const answer = ans.split(",");
	const finalAnswer = [];

	while (answer.length > 0) {
		const i = Math.round((answer.length - 1) * Math.random());
		finalAnswer.push(answer[i]);

		answer.splice(i, 1);
	}

	return finalAnswer.join(",");
}
