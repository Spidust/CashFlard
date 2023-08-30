export default function SaveCards(cards) {
	localStorage.setItem("cards", JSON.stringify(cards));
}
