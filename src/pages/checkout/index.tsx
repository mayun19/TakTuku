import { TextInputAccount } from "../../components/TextInput";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const Checkout = (props: any) => {
	document.title = "TakTuku - Checkout Cart ";
	const [products, setProducts] = useState<object[]>([]);
	const [total, setTotal] = useState(0);
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");
	const [type, setType] = useState("");
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [cvv, setCVV] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const Navigate = useNavigate();

	useEffect(() => {
		fetchData();
		console.log(props.checkout);
	}, []);

	const fetchData = async () => {
		await axios
			.get("/carts")
			.then((res) => {
				const { data } = res;
				const temp: any = [];
				data.map((item: any) => {
					if (props.checkout.includes(item.id)) {
						temp.push(item);
					}
				});
				setProducts(temp);
				setTotal(
					temp
						.map((item: any) => item.sub_total)
						.reduce((prev: any, next: any) => prev + next)
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleType = (e: ChangeEvent<HTMLSelectElement>) => {
		setType(e.target.value);
	};

	const handleSubmit = async (e: FormEvent<HTMLElement>) => {
		e.preventDefault();
		await createOrder({
			id_cart: products.map((item: any) => item.id),
			address: {
				street: street,
				city: city,
				state: state,
				zip: Number(zip),
			},
			credit_card: {
				type: type,
				name: name,
				number: number,
				cvv: Number(cvv),
				month: Number(month),
				year: Number(year),
			},
		});
	};

	const createOrder = async (body: any) => {
		await axios
			.post(`/order/cart`, body)
			.then((res) => {
				Navigate("/success");
				products.map(async (item: any) => {
					await axios
						.delete(`/carts/${item.id}`)
						.then((res) => {
							console.log(res);
						})
						.catch((err) => {
							console.log(err);
						});
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const ThousandSeparator = (amount: number) => {
		if (
			amount !== undefined ||
			amount !== 0 ||
			amount !== "0" ||
			amount !== null
		) {
			return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		} else {
			return amount;
		}
	};

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
								<form onSubmit={handleSubmit}>
									<h5 className="title">Shipping Details</h5>
									<div className="col-12 col-md-10 col-lg-11 mt-4">
										<TextInputAccount
											label="Street Address"
											type="text"
											onChange={(e: ChangeEvent<HTMLInputElement>) =>
												setStreet(e.target.value)
											}
											placeholder="address"
										/>
									</div>
									<div className="row">
										<div className="col-12 col-md-6 col-lg-4">
											<TextInputAccount
												label="City"
												type="text"
												onChange={(e: ChangeEvent<HTMLInputElement>) =>
													setCity(e.target.value)
												}
												placeholder="city"
											/>
										</div>
										<div className="col-12 col-md-6 col-lg-4">
											<TextInputAccount
												label="State"
												type="text"
												onChange={(e: ChangeEvent<HTMLInputElement>) =>
													setState(e.target.value)
												}
												placeholder="Indonesia"
											/>
										</div>
										<div className="col-12 col-md-6 col-lg-3">
											<TextInputAccount
												label="Postal Code"
												type="text"
												onChange={(e: ChangeEvent<HTMLInputElement>) =>
													setZip(e.target.value)
												}
												placeholder="zip"
											/>
										</div>
									</div>
									<h5 className="title mt-5">Billing Info</h5>
									<div className="row">
										<div className="col-12 col-md-6 col-lg-3">
											<div className="form-group mt-3">
												<label className="form-label">Card</label>
												<select className="form-select" onChange={handleType}>
													<option selected>Select Card</option>
													<option value="visa">Visa</option>
													<option value="mastercard">Mastercard</option>
												</select>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-12 col-md-6 col-lg-5">
											<TextInputAccount
												label="Card Number"
												type="text"
												onChange={(e: ChangeEvent<HTMLInputElement>) =>
													setNumber(e.target.value)
												}
												placeholder="card number"
											/>
										</div>
										<div className="col-12 col-md-6 col-lg-6">
											<TextInputAccount
												label="Card Holder Name"
												type="text"
												onChange={(e: ChangeEvent<HTMLInputElement>) =>
													setName(e.target.value)
												}
												placeholder="card holder name"
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-12 col-md-6 col-lg-3">
											<TextInputAccount
												label="CVV2 Number"
												type="password"
												onChange={(e: ChangeEvent<HTMLInputElement>) =>
													setCVV(e.target.value)
												}
											/>
										</div>
										<div className="col-12 col-md-6 col-lg-4">
											<TextInputAccount
												label="Exp Month"
												type="text"
												onChange={(e: ChangeEvent<HTMLInputElement>) =>
													setMonth(e.target.value)
												}
												placeholder="MM"
											/>
										</div>
										<div className="col-12 col-md-6 col-lg-4">
											<TextInputAccount
												label="Exp Year"
												type="text"
												onChange={(e: ChangeEvent<HTMLInputElement>) =>
													setYear(e.target.value)
												}
												placeholder="YYYY"
											/>
										</div>
									</div>
									<div className="col-12 col-md-10 col-lg-11">
										<div className="mt-5 d-grid gap-2">
											<button type="submit" className="btn btn-save text-white px-4">
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
							<h5 className="product-name mb-3">Order Summary</h5>
							{products ? (
								products.map((item: any) => (
									<div key={item.id} className="cart d-flex justify-content-between">
										<div className="item-product">
											<h6 className="sub" style={{ textTransform: "capitalize" }}>
												{item.product.name}
											</h6>
										</div>
										<p>{item.quantity}</p>
										<h6 className="subprice">Rp {ThousandSeparator(item.sub_total)}</h6>
									</div>
								))
							) : (
								<div className="cart d-flex justify-content-between">
									<div className="item-product">
										<h6 className="sub">Sofa Ternyaman</h6>
									</div>
									<p>0</p>
									<h6 className="subprice">Rp 0</h6>
								</div>
							)}
							<div className="cart d-flex justify-content-between">
								<p className="sub">Shipping Price</p>
								<p className="subprice">Free</p>
							</div>
							<div className="total d-flex justify-content-between">
								<p className="total">Total Price</p>
								<h5 className="total">Rp {ThousandSeparator(total)}</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
