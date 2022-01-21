import React from "react";

import { TextInput } from "../components/TextInput";
import Logo from "../assets/images/logo.svg";

const Register = () => {
	document.title = "TakTuku - Register ";
	return (
		<div className="register">
			<div className="container mt-3 mb-5">
				<div className="row justify-content-center">
					<div className="col-11 col-md-6 col-lg-4">
						<div className="logo text-center">
							<a href="">
								<img src={Logo} className="mb-4" alt="" />
							</a>
							<h4 className="register">Daftar Sekarang</h4>
						</div>
						<form className="mt-4" action="#">
							<TextInput
								label="Full Name"
								type="text"
								onChange={(e: any) => console.log(e.target.value)}
							/>
							<TextInput
								label="Username"
								type="text"
								onChange={(e: any) => console.log(e.target.value)}
							/>
							<TextInput
								label="Email Address"
								type="email"
								onChange={(e: any) => console.log(e.target.value)}
							/>
							<TextInput
								label="Password"
								type="password"
								onChange={(e: any) => console.log(e.target.value)}
							/>
							<div className="form-group mt-2">
								<p>
									Gender
									<span className="input text-danger">*</span>
								</p>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label className="form-check-label">Male</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="option2"
									/>
									<label className="form-check-label">Female</label>
								</div>
							</div>
							<div className="col d-grid gap-2 mt-4">
								<button className="btn btn-sign-in text-white">Sign Up Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
