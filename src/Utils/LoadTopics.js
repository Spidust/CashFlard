export default function LoadTopics() {
	let topics = window.localStorage.getItem("topics");

	try {
		topics = JSON.parse(topics).map((i) => {
			if (i.id && i.name) {
				return i;
			}
		});
		return topics;
	} catch (e) {
		return [];
	}
}
