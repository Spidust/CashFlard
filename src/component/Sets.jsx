import React, { useState } from "react";
import Item from "./Item";
import "../assets/css/home/Topic.css";
import "../assets/css/Items.css";
import SelectMenu from "./Home/SelectMenu";
import { Navigate } from "react-router-dom";

function Sets(props) {
	const [selecting, Select] = useState(0);

	return (
		<>
			{!props.data ? (
				<Navigate />
			) : (
				<div className="sets">
					<div className="items">
						{props.data.map((topic, index) => {
							return (
								<Item
									key={index}
									id={topic.id}
									name={topic.name}
									selectFunction={Select}
									type={props.type}
								/>
							);
						})}
					</div>
					{selecting ? (
						<SelectMenu
							quit={() => Select(0)}
							selecting={selecting}
							type={props.type}
						/>
					) : null}
				</div>
			)}
		</>
	);
}

export default Sets;
