import React, { FunctionComponent } from "react";

import { InputText, InputTextProps } from "primereact/inputtext";


export function Input(props: InputTextProps){

  let { ref, ...rest } = props;

	return (
		<div ref={ref} >
			<span className="p-float-label">
				<InputText {...rest} />
				<label htmlFor="float-input">{props.label}</label>
			</span>
		</div>
	);
}
