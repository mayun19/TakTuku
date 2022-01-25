/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<any>({});
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/order/${id}`)
      .then((res) => {
        const { data } = res;
        setProducts(data);
        setProduct(data.product);
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
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded">
            <div className="p-4">
              <h5 className="mb-4">Transaction #{id}</h5>
              <div className="cart d-flex justify-content-between">
                <div className="item-product">
                  <h6 className="sub" style={{ textTransform: "capitalize" }}>
                    {product.name} @{products.quantity}
                  </h6>
                </div>
                <h6 className="subprice">
                  Rp {ThousandSeparator(Number(product.price))}
                </h6>
              </div>
              <div className="cart d-flex justify-content-between">
                <p className="sub">Shipping Price</p>
                <p className="subprice">Free</p>
              </div>
              <div className="total d-flex justify-content-between">
                <p className="total">Total Price</p>
                <h5 className="total">
                  Rp {ThousandSeparator(Number(products.sub_total))}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
