export default function SaveTopics(topics) {
	localStorage.setItem("topics", JSON.stringify(topics));
}
