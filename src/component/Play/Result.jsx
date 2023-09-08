import React from "react";

function Result(props) {
	const [Right, setRight] = React.useState(0);

	React.useEffect(() => {
		props.indexed.forEach((i) => {
			if (i[i.length - 1] == "d") {
				setRight((prev) => prev + 1);
			}
		});
	}, []);
	return (
		<div
			className={"result " + (Right > props.length / 2 ? "good" : "bad")}
		>
			Kết quả: <br />
			{Right}/{props.length}
			<button onClick={() => props.setIndexed([])}>Chơi lại</button>
		</div>
	);
}

export default Result;
