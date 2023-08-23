import React from "react";
import { useSelector } from "react-redux";
import Sets from "./../Sets";

function TopicSet() {
	const id = window.location.href.split("/")[3];

	const topics = useSelector((state) => state.topic[id]);
	return (
		<div className="topics">
			<Sets data={topics} type="topic" />
		</div>
	);
}

export default TopicSet;
