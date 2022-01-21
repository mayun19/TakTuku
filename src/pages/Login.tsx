import React from "react";
// import TextInput from "../components/TextInput";
import { Form } from "react-bootstrap";
import ImgModel from "../assets/images/Photo Login.png";
import ImgLogo from "../assets/images/logo.svg";

const Login = () => {
	document.title = "TakTuku - Login ";
	return (
		<div className="login">
			<div className="container mt-5">
				<div className="row login-row d-flex align-items-center pt-5 pb-4">
					<div className="col-12 col-md-6 lg-6 d-none d-sm-block text-center ">
						<img className="imgModel" src={ImgModel} alt="" />
					</div>
					<div className="col-12 col-md-6 lg-6">
						<div className="row d-flex justify-content-center">
							<div className="col-10 col-md-8  col-lg-6">
								<div className="logo text-center">
									<a href="">
										<img src={ImgLogo} className="mb-4 mb-md-none" alt="" />
									</a>
								</div>
								<Form>
									<div className="form-group mt-2">
										<label className="form-label">Email Address</label>
										<input className="form-control" type="text" />
									</div>
									<div className="form-group mt-2">
										<label className="form-label">Password</label>
										<input className="form-control" type="password" />
									</div>
									<p className="text-end">
										<a href="" className="text-dark text-decoration-none">
											Forget Password ?
										</a>
									</p>
									<div className="col d-grid gap-2 mt-4">
										<button className="btn btn-sign-in text-white">
											Sign In to My Account
										</button>
									</div>
								</Form>
								<div className="direct-register d-grid gap-2 mt-3">
									<a href="#" className="btn btn-light">
										Sign Up
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
