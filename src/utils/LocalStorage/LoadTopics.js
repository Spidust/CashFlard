export default function LoadTopics() {
	let topics = window.localStorage.getItem("topics");

	try {
		const TopicsPre = JSON.parse(topics);
		topics = {};
		for (const [key, value] of Object.entries(TopicsPre)) {
			topics[key] = value.map((i) => {
				if (i && i.id && i.name) {
					return i;
				}
			});
		}
		return topics;
	} catch (e) {
		console.log(e);
		return {};
	}
}
