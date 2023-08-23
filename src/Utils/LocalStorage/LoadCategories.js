export default function LoadCategories() {
	let topics = window.localStorage.getItem("categories");

	try {
		topics = JSON.parse(topics).map((i) => {
			if (i.id && i.name) {
				return i;
			}
		});
		return topics;
	} catch (e) {
		return [];
	}
}
