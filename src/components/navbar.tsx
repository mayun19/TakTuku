import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useSelector } from "react-redux";
import { RootState } from "../stores/reducers/reducer";
import { BsBasket3Fill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/users/myprofile`)
      .then((res) => {
        const { data } = res;
        setName(data.name);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            height="60"
            className="d-inline-block align-text-top"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {isLoggedIn ? (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-lg-4">
                <NavLink
                  className="nav-link d-none d-lg-block"
                  to="/account/cart"
                >
                  <BsBasket3Fill className="fs-4 text-dark" />
                </NavLink>
                <NavLink
                  className="nav-link d-block d-lg-none"
                  to="/account/cart"
                >
                  Shopping Cart
                </NavLink>
              </li>
              <li className="nav-item my-auto py-2 py-lg-0">
                <NavLink
                  className="avatar bg-dark p-2 fs-6 rounded-circle text-white"
                  to="/account"
                >
                  <FaUserAlt />
                </NavLink>
                <NavLink
                  to="/account"
                  className="text-decoration-none text-dark ms-2"
                >
                  Hi, {name.split(" ")[0]}
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-lg-4">
                <NavLink className="nav-link" to="/register">
                  Sign up
                </NavLink>
              </li>
              <li className="nav-item py-2 py-lg-0">
                <NavLink className="btn btn-success px-3" to="/login">
                  Sign in
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
