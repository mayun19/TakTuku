import React from "react";

const TextInput = (label: any, onChange: any, type: any) => {
	return (
		<div>
			<div className="form-group mt-2">
				<p style={{ fontWeight: "bold" }}>
					{label}
					<span className="input text-danger">*</span>
				</p>
				<input className="form-control" onChange={onChange} type={type} />
			</div>
		</div>
	);
};

export default TextInput;
