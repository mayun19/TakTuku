/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductPic from "../../assets/images/product_pic.png";

const ProductDetail = () => {
  document.title = "TakTuku - Detail Product ";
  const [product, setProduct] = useState({
    id: 0,
    name: "string",
    price: 0,
    quantity: 0,
    id_category: 0,
    description: "string",
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/products/${id}`)
      .then((res) => {
        const { data } = res;
        setProduct(data);
        fetchUser(data.id_user);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUser = async (id: number) => {
    await axios
      .get(`/users/${id}`)
      .then((res) => {
        const { data } = res;
        setUser(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const thousandSeparator = (amount: number) => {
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
                <li className="breadcrumb-item active">Product Details</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-8 ps-lg-0 ps-md-0 pe-lg-4">
            <div className="product-item">
              <img src={ProductPic} alt="" />
              <div className="product-desc mt-4 py-3 px-2">
                {product.description}
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-md-4 mt-lg-0">
            <div className="card card-right p-4">
              <h4
                className="product-name"
                style={{ textTransform: "capitalize" }}
              >
                {product.name}
              </h4>
              <p className="seller">{`By ${user.name}`}</p>
              <h3 className="price mt-3 text-end">{`Rp ${thousandSeparator(
                product.price
              )}`}</h3>
              <div className="row quanti my-2">
                <p className="stock">{`Stock ${product.quantity}`}</p>
              </div>
              <button className="btn btn-cart my-3 py-2">Add to Cart</button>
              <button className="btn btn-co">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
