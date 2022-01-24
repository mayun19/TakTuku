import { TextInputAccount } from "../../components/TextInput";
import { NavLink } from "react-router-dom";

const Checkout = () => {
	document.title = "TakTuku - Checkout Cart ";
	return (
		<div className="detail-product">
			<div className="container mt-5 mb-4">
				<div className="row">
					<div className="col-10 p-lg-0 ps-md-0">
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<NavLink to="/" className="text-decoration-none">
										Home
									</NavLink>
								</li>
								<li className="breadcrumb-item active">Checkout</li>
							</ol>
						</nav>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-lg-8 ps-lg-0 ps-md-0 pe-lg-4">
						<div className="shipping">
							<div className="row">
								<form action="#" className="">
									<h5 className="title">Shipping Details</h5>
									<div className="col-12 col-md-10 col-lg-11 mt-4">
										<TextInputAccount
											label="Street Address"
											type="text"
											onChange={(e: any) => console.log(e.target.value)}
											placeholder="address"
										/>
									</div>
									<div className="row">
										<div className="col-12 col-md-6 col-lg-4">
											<TextInputAccount
												label="City"
												type="text"
												onChange={(e: any) => console.log(e.target.value)}
												placeholder="city"
											/>
										</div>
										<div className="col-12 col-md-6 col-lg-4">
											<TextInputAccount
												label="State"
												type="text"
												onChange={(e: any) => console.log(e.target.value)}
												placeholder="Indonesia"
											/>
										</div>
										<div className="col-12 col-md-6 col-lg-3">
											<TextInputAccount
												label="Postal Code"
												type="text"
												onChange={(e: any) => console.log(e.target.value)}
												placeholder="zip"
											/>
										</div>
									</div>
									<h5 className="title mt-5">Billing Info</h5>
									<div className="row">
										<div className="col-12 col-md-6 col-lg-3">
											<div className="form-group mt-3">
												<label className="form-label">Card</label>
												<select className="form-select">
													<option selected>Select Card</option>
													<option value="1">Visa</option>
													<option value="2">Mastercard</option>
												</select>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-12 col-md-6 col-lg-5">
											<TextInputAccount
												label="Card Number"
												type="text"
												onChange={(e: any) => console.log(e.target.value)}
												placeholder="card number"
											/>
										</div>
										<div className="col-12 col-md-6 col-lg-6">
											<TextInputAccount
												label="Card Holder Name"
												type="text"
												onChange={(e: any) => console.log(e.target.value)}
												placeholder="card holder name"
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-12 col-md-6 col-lg-3">
											<TextInputAccount
												label="CVV2 Number"
												type="password"
												onChange={(e: any) => console.log(e.target.value)}
											/>
										</div>
										<div className="col-12 col-md-6 col-lg-4">
											<TextInputAccount
												label="Exp Month"
												type="text"
												onChange={(e: any) => console.log(e.target.value)}
												placeholder="MM"
											/>
										</div>
										<div className="col-12 col-md-6 col-lg-4">
											<TextInputAccount
												label="Exp Year"
												type="text"
												onChange={(e: any) => console.log(e.target.value)}
												placeholder="YYYY"
											/>
										</div>
									</div>
									<div className="col-12 col-md-10 col-lg-11">
										<div className="mt-5 d-grid gap-2">
											<button className="btn btn-save text-white px-4">
												Checkout Now
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-4 mt-3 mt-lg-0">
						<div className="card card-right px-2 py-4 p-lg-4">
							<h5 className="product-name">Order Summary</h5>
							<div className="cart d-flex justify-content-between mt-3">
								<div className="item-product">
									<h6 className="sub">Sofa Ternyaman</h6>
									<p className="seller">By TutuMatang</p>
								</div>
								<p className="qt">1</p>
								<h6 className="subprice">Rp 1.409.000</h6>
							</div>
							<div className="cart d-flex justify-content-between">
								<div className="item-product">
									<h6 className="sub">Sofa Ternyaman</h6>
									<p className="seller">By TutuMatang</p>
								</div>
								<p className="qt">1</p>
								<h6 className="subprice">Rp 1.409.000</h6>
							</div>
							<div className="cart d-flex justify-content-between">
								<p className="sub">Shipping Price</p>
								<p className="subprice">Free</p>
							</div>
							<div className="total d-flex justify-content-between">
								<p className="total">Total Price</p>
								<h5 className="total">Rp 1.409.000</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
