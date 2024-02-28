import React from "react";

function Input(props) {
	return (
		<input
			type={props.type}
			className={`${props.className} mt-3 rounded-full border-[1px] ${
				props.error ? "border-[red]" : "border-[#ccc]"
			} px-4 py-3 focus:outline-none `}
			value={props.value}
			placeholder={props.placeholder}
			onChange={props.onChange}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
		/>
	);
}

export default Input;
