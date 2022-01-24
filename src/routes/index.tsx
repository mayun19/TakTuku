/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import ScrollToTop from "../components/scrollToTop";
import Home from "../pages";
import Account from "../pages/account";
import Dashboard from "../pages/account/dashboard";
import Transaction from "../pages/account/transaction";
import Detail from "../pages/account/transaction/detail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { reduxAction } from "../stores/actions/action";
import { RootState } from "../stores/reducers/reducer";
import ProductDetail from "../pages/product/detail";
import DetailAccount from "../pages/account/detail";
import Address from "../pages/account/address";
import Product from "../pages/account/my_product";
import ProductUpdate from "../pages/account/my_product/update";
import CreateProduct from "../pages/account/my_product/create";
import axios from "axios";
import Cart from "../pages/account/cart";
import Success from "../pages/checkout/success";
import Checkout from "../pages/checkout";

const Index = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);

  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString || "{}");
    userToken.token
      ? dispatch(reduxAction("isLoggedIn", true))
      : dispatch(reduxAction("isLoggedIn", false));
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userToken.token}`;
  });

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Navigate to="/" />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route
              path="account"
              element={isLoggedIn ? <Account /> : <Navigate to="/" />}
            >
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="userid" element={<DetailAccount />} />
              <Route path="transaction" element={<Transaction />} />
              <Route path="transaction/:id" element={<Detail />} />
              <Route path="address" element={<Address />} />
              <Route path="product" element={<Product />} />
              <Route path="product/create" element={<CreateProduct />} />
              <Route path="product/update" element={<ProductUpdate />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="success" element={<Success />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Index;
