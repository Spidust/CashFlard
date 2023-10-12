import React from "react";
import Sets from "./../Sets";
import { useSelector } from "react-redux";

function CategorieSet() {
	const categories = useSelector((state) => state.categorie.value);
	return (
		<div className="categorie-set">
			<Sets data={categories} type="categorie" />
		</div>
	);
}

export default CategorieSet;
