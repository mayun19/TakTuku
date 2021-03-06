/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
import CreateProduct from "../pages/account/my_product/create";
import axios from "axios";
import Cart from "../pages/account/cart";
import Success from "../pages/checkout/success";
import Checkout from "../pages/checkout";
import CheckoutProduct from "../pages/checkout/id";

const Index = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const [checkout, setCheckout] = useState("");
  const [quantity, setQuantity] = useState("");
  const data = (data: any) => {
    setCheckout(data);
  };
  const dataQuantity = (data: any) => {
    setQuantity(data);
  };

  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString || "{}");
    if (userToken.token) dispatch(reduxAction("isLoggedIn", true));
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userToken.token}`;
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Navigate to="/" />} />
            <Route
              path="product/:id"
              element={<ProductDetail quantity={dataQuantity} />}
            />
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
              <Route path="cart" element={<Cart checkout={data} />} />
            </Route>
            <Route path="checkout" element={<Checkout checkout={checkout} />} />
            <Route
              path="checkout/:id"
              element={<CheckoutProduct quantity={quantity} />}
            />
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
