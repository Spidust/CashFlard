export default function SaveTopics(topics) {
	//Handle topics
	topics = topics.map((i) => {
		if (i.id && i.name) {
			return i;
		}
	});

	window.localStorage.setItem("topics", JSON.stringify(topics));
}
