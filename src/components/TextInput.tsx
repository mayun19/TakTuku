import React from "react";

type register = {
	label: string;
	type: any;
	onChange: any;
	placeholder?: any;
	value?: string;
};

const TextInput = (register: register) => {
	return (
		<div className="form-group mt-3">
			<p>
				{register.label}
				<span className="input text-danger">*</span>
			</p>
			<input
				className="form-control"
				type={register.type}
				onChange={register.onChange}
			/>
		</div>
	);
};

const TextInputAccount = (register: register) => {
	return (
		<div className="form-group mt-3">
			<p className="mb-1 form-label">{register.label}</p>
			<input
				className="form-control"
				type={register.type}
				onChange={register.onChange}
				placeholder={register.placeholder}
				value={register.value}
			/>
		</div>
	);
};

export { TextInput, TextInputAccount };
