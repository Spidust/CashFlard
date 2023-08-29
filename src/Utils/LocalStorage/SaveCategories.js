export default function SaveCategorie(categories) {
	localStorage.setItem("categories", JSON.stringify(categories));
}
