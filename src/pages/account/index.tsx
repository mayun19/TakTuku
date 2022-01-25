import { NavLink, Outlet } from "react-router-dom";
import { MdDashboard, MdLogout } from "react-icons/md";
import { BsCardList, BsBasket3 } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaRegUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { reduxAction } from "../../stores/actions/action";

const Index = () => {
	const dispatch = useDispatch();

	const handleLoggetOut = () => {
		localStorage.removeItem("token");
		dispatch(reduxAction("isLoggedIn", false));
	};

	return (
		<div>
			<div id="banner" className="container d-flex justify-content-center my-4">
				<div className="my-5">
					<h1>My Account</h1>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb justify-content-center">
							<li className="breadcrumb-item">
								<NavLink to="/" className="text-decoration-none text-dark">
									Home
								</NavLink>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Account
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className="container py-4">
				<div className="row mb-4">
					<div className="col-lg-3 ps-0">
						<div className="list-group fs-5">
							<NavLink
								to="/account/dashboard"
								className="list-group-item list-group-item-action"
							>
								<MdDashboard className="mb-1 me-2" /> Dashboard
							</NavLink>
							<NavLink
								to="/account/cart"
								className="list-group-item list-group-item-action"
							>
								<BsBasket3 className="mb-1 me-2" /> Shopping Cart
							</NavLink>
							<NavLink
								to="/account/product"
								className="list-group-item list-group-item-action"
							>
								<BsCardList className="mb-1 me-2" /> My Product
							</NavLink>
							<NavLink
								to="/account/transaction"
								className="list-group-item list-group-item-action"
							>
								<FaRegMoneyBillAlt className="mb-1 me-2" /> Transaction
							</NavLink>
							<NavLink
								to="/account/:id"
								className="list-group-item list-group-item-action"
							>
								<FaRegUser className="mb-1 me-2" /> Account Detail
							</NavLink>
							<NavLink
								to="/"
								className="list-group-item list-group-item-action"
								onClick={handleLoggetOut}
							>
								<MdLogout className="mb-1 me-2" />
								Log Out
							</NavLink>
						</div>
					</div>
					<div className="col-9">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
