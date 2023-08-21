import React, { useState } from "react";
import TopicItem from "./TopicItem";
import "../../assets/css/home/Topic.css";
import SelectMenu from "./SelectMenu";
import { useSelector } from "react-redux";

function TopicSets() {
	const [selecting, Select] = useState(0);
	const topics = useSelector((state) => state.topics.value);

	return (
		<div className="topic-sets">
			<div className="topic-items">
				{topics.map((topic, index) => {
					return (
						<TopicItem
							key={index}
							id={topic.id}
							name={topic.name}
							selectFunction={Select}
						/>
					);
				})}
			</div>
			{selecting ? (
				<SelectMenu quit={() => Select(0)} selecting={selecting} />
			) : null}
		</div>
	);
}

export default TopicSets;
