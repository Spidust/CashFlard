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
						let t = {
							question: i.question,
							"answer-f": i["answer-f"],
							"answer-b": i["answer-b"],
							type: i.type,
							image: i.image,
						};
						//Âm thanh
						if (i.sentence && i.lang) {
							t = { ...t, sentence: i.sentence, lang: i.lang };
						}

						return t;
					}
				});
			}
		}

		return cards;
	} catch (e) {
		return {};
	}
}
