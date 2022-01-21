import { NavLink, Outlet } from "react-router-dom";
import { MdDashboard, MdLogout } from "react-icons/md";
import { BsCardList, BsBasket3 } from "react-icons/bs";
import { FaMapMarkerAlt, FaRegMoneyBillAlt, FaRegUser } from "react-icons/fa";
import "../../assets/scss/account.scss";

const Index = () => {
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
              <a href="/" className="list-group-item list-group-item-action">
                <BsBasket3 className="mb-1 me-2" /> Shopping Cart
              </a>
              <a href="/" className="list-group-item list-group-item-action">
                <BsCardList className="mb-1 me-2" /> My Product
              </a>
              <NavLink
                to="/account/transaction"
                className="list-group-item list-group-item-action"
              >
                <FaRegMoneyBillAlt className="mb-1 me-2" /> Transaction
              </NavLink>
              <a href="/" className="list-group-item list-group-item-action">
                <FaRegUser className="mb-1 me-2" /> Account Detail
              </a>
              <a href="/" className="list-group-item list-group-item-action">
                <FaMapMarkerAlt className="mb-1 me-2" /> Address
              </a>
              <a href="/" className="list-group-item list-group-item-action">
                <MdLogout className="mb-1 me-2" />
                Log Out
              </a>
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
