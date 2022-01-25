import { TextInputAccount } from "../../../components/TextInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

type credential = {
	name: string;
	email: string;
	password: string;
	phone_number: string;
	address: string;
};

const DetailAccount = () => {
	document.title = "TakTuku - Account Detail ";

	const [user, setUser] = useState({
		id: "",
		name: "",
		email: "",
		password: "",
		address: "string",
		phone_number: "string",
	});

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const Navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		await axios
			.get(`/users/${id}`)
			.then((res) => {
				const { data } = res;
				setUser(data);
				setName(data.name);
				setEmail(data.email);
				setPhone(data.phone_number);
				setAddress(data.address);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleEdit = async (e: any) => {
		e.preventDefault();
		await editUser({
			name: name,
			email: email,
			password: password,
			phone_number: phone,
			address: address,
		});
	};

	const editUser = async (credential: credential) => {
		await axios
			.put(`/users/${id}`, credential)
			.then((res) => {
				Swal.fire("Success!", "Your Account has been updated.", "success").then(
					(res) => {
						if (res.isConfirmed) {
							Navigate("/account/dashboard");
						}
					}
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<div className="border rounded">
						<div className="p-4">
							<h5 className="m-0">Account Detail</h5>
							<div className="row">
								<div className="col-12 col-md-10 col-lg-5 ">
									<form onSubmit={handleEdit} className="mt-4">
										<TextInputAccount
											label="Full Name"
											type="text"
											onChange={(e: any) => setName(e.target.value)}
											value={name}
										/>
										<TextInputAccount
											label="Email Address"
											type="email"
											onChange={(e: any) => setEmail(e.target.value)}
											value={email}
										/>
										<TextInputAccount
											label="Password"
											type="password"
											onChange={(e: any) => setPassword(e.target.value)}
											value={email}
										/>
										<TextInputAccount
											label="Phone Number"
											type="text"
											onChange={(e: any) => setPhone(e.target.value)}
											value={phone}
										/>
										<TextInputAccount
											label="Address"
											type="text"
											onChange={(e: any) => setAddress(e.target.value)}
											placeholder="address"
											value={address}
										/>
										<div className="mt-4">
											<button type="submit" className="btn btn-save text-white px-4">
												Save
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailAccount;
