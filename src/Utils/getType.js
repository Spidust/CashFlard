export default function getType(path) {
	return path.split("?")[0].split("/")[3] ? "topic" : "categorie";
}
