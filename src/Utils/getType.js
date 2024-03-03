export default function getType(path) {
	return path.split("?")[0].split("/")[3]
		? path.split("?")[0].split("/")[3] == "exam"
			? "exam"
			: "topic"
		: "categorie";
}
