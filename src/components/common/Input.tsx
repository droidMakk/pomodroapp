import React, { FunctionComponent } from "react";

import { InputText, InputTextProps } from "primereact/inputtext";

export function Input(props: InputTextProps) {
	let { ref, ...rest } = props;

	let inputStyle:React.CSSProperties = {
		margin: "20px 0px"
	}

	return (
		<span className="p-float-label" style={inputStyle} >
			<InputText
				id="float-input"
				{...rest}
			/>
			<label htmlFor="float-input">{props.label}</label>
		</span>
	);
	
}
