import React, { useEffect } from "react";
import Sets from "./../Sets";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";

function CategorieSet() {
	const categories = useSelector((state) => state.categorie.value);
	console.log(store.getState());
	return (
		<div className="categorie-set">
			<Sets data={categories} type="categorie" />
		</div>
	);
}

export default CategorieSet;
