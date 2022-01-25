import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";

const Dashboard = () => {
	const [user, setUser] = useState({
		id: "",
		name: "",
		email: "",
		address: "string",
		phone_number: "string",
		birth_date: "string",
	});

	const [birth] = useState(new Date());

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		await axios
			.get(`/users/myprofile`)
			.then((res) => {
				const { data } = res;
				setUser(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const { id } = useParams();

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
	const PriceCell = (cell: any) => {
		return <p className="m-0">Rp. {ThousandSeparator(cell)}</p>;
	};
	const IdCell = (cell: any) => {
		return (
			<NavLink
				className="text-decoration-none text-dark"
				to={`/account/transaction/${cell}`}
			>
				{cell}
			</NavLink>
		);
	};
	const products = [
		{ id: 1, date: "1 Feb 2022", status: "completed", price: 101000 },
		{ id: 2, date: "2 Feb 2022", status: "completed", price: 102000 },
		{ id: 3, date: "3 Feb 2022", status: "completed", price: 103000 },
	];
	const columns = [
		{
			dataField: "id",
			text: "#ID",
			formatter: IdCell,
		},
		{
			dataField: "date",
			text: "DATE",
			sort: true,
		},
		{
			dataField: "status",
			text: "STATUS",
			sort: true,
		},
		{
			dataField: "price",
			text: "TOTAL",
			formatter: PriceCell,
		},
	];

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-6 text-center">
					<div className="border rounded py-5 h-100">
						<div className="avatar bg-dark p-4 mb-3 fs-1 rounded-circle text-white">
							<FaUserAlt />
						</div>
						<h5 className="mb-0">{user.name}</h5>
						<p>{user.email}</p>
						<NavLink
							type="button"
							className="btn btn-outline-success px-3 shadow"
							to={`/account/${user.id}`}
						>
							Edit Profile
						</NavLink>
					</div>
				</div>
				<div className="col-6">
					<div className="border rounded p-5">
						<h5 className="mb-0">Contact Detail</h5>
						<br />
						<p className="text-capitalize">
							Birth Date <br /> {user.birth_date}
						</p>
						<p className="text-capitalize">
							Address <br /> {user.address}
						</p>
						<p>
							Phone Number <br />
							{user.phone_number}
						</p>
					</div>
				</div>
			</div>
			<div className="row my-4">
				<div className="col">
					<div className="border rounded">
						<div className="p-4">
							<h5 className="m-0">Recent Transaction</h5>
						</div>
						<BootstrapTable
							bootstrap4
							classes="border-white text-center m-0"
							rowClasses="border-bottom"
							keyField="id"
							data={products}
							columns={columns}
						/>
						<div className="p-4 text-end">
							<NavLink
								type="button"
								className="btn btn-outline-success px-3 shadow"
								to="/account/transaction"
							>
								See All
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
