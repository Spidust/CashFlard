export default function LoadCards() {
	let cards = window.localStorage.getItem("cards");

	try {
		const cardsPre = JSON.parse(cards);
		cards = {};
		for (const [key, value] of Object.entries(cardsPre)) {
			cards[key] = value.map((i) => {
				if (
					i.question &&
					i["answer-f"] &&
					i["answer-b"] &&
					i.type &&
					i.image
				) {
					if (i.type != "tl") {
						i["answer-f"] = i["answer-f"].split(",");
					}
					return i;
				}
			});
		}
		return cards;
	} catch (e) {
		console.log(e);
		return {};
	}
}
