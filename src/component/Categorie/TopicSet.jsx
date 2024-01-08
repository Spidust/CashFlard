import React from "react";
import { useSelector } from "react-redux";
import Sets from "./../Sets";
import { validate } from "uuid";
import { Navigate } from "react-router-dom";

function TopicSet() {
	const id = window.location.href.split("?")[0].split("/")[3];

	if (!validate(id)) {
		return <Navigate to="/" />;
	}
	const topics = useSelector((state) => state.topic[id]);
	return (
		<div className="topics sets">
			<Sets data={topics} type="topic" />
		</div>
	);
}

export default TopicSet;
