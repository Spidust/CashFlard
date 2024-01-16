export default function LoadCards() {
	let cards = window.localStorage.getItem("cards");

	try {
		const cardsPre = JSON.parse(cards);
		cards = {};
		if (cardsPre) {
			for (const [key, value] of Object.entries(cardsPre)) {
				cards[key] = value.map((i) => {
					if (
						i.question &&
						i["answer-f"] &&
						i["answer-b"] &&
						i.type &&
						i.image
					) {
						return i;
					}
				});
			}
		}

		return cards;
	} catch (e) {
		return {};
	}
}
