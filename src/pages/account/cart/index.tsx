/* eslint-disable react-hooks/exhaustive-deps */
import { RiDeleteBinLine } from "react-icons/ri";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = (props: any) => {
  document.title = "TakTuku - Shopping Cart ";
  const [products, setProducts] = useState<object[]>([]);
  const [checkout, setCheckout] = useState<number[]>([]);
  const [total, setTotal] = useState(0);
  const [pending, setPending] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setPending(true);
    await axios
      .get("/carts")
      .then((res) => {
        const { data } = res;
        if(data!=null){
          setProducts(data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setPending(false));
  };

  const handleDelete = async (item: number) => {
    setPending(true);
    await axios
      .delete(`/carts/${item}`)
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTotal = (e: any, sub_total: number, id: number) => {
    const checked = e.target.checked;
    if (checked) {
      setTotal(total + sub_total);
      const temp = checkout;
      temp.push(id);
      setCheckout(temp);
    } else {
      setTotal(total - sub_total);
      const temp = checkout;
      temp.splice(temp.indexOf(id), 1);
      setCheckout(temp);
    }
  };

  const handleCheckout = () => {
    Navigate("/checkout");
    const temp: object[] = [];
    products.map(async (item: any) => {
      if (checkout.includes(item.id)) {
        temp.push(item);
      }
    });
    props.checkout(checkout);
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

  const columns = [
    {
      selector: (row: any) => row.id,
      format: (row: any) => (
        <input
          className="form-check-input"
          type="checkbox"
          value={row.id}
          onClick={(e) => handleTotal(e, row.sub_total, row.id)}
          id="flexCheckDefault"
        />
      ),
    },
    {
      selector: (row: any) => row.id,
      name: "#ID",
    },
    {
      selector: (row: any) => row.product.name,
      name: "PRODUCT",
    },
    {
      selector: (row: any) => row.product.price,
      name: "PRICE",
      sortable: true,
      format: (row: any) => (
        <p className="m-0">Rp. {ThousandSeparator(row.product.price)}</p>
      ),
    },
    {
      selector: (row: any) => row.quantity,
      name: "QUANTITY",
    },
    {
      selector: (row: any) => row.sub_total,
      name: "TOTAL",
      sortable: true,
      format: (row: any) => (
        <p className="m-0">Rp. {ThousandSeparator(row.sub_total)}</p>
      ),
    },
    {
      name: "ACTION",
      cell: (row: any) => (
        <RiDeleteBinLine
          className="text-dark me-2"
          size={24}
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(row.id)}
        />
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded">
            <div className="p-4 d-flex align-items-center">
              <h5 className="flex-grow-1 m-0">Shopping Cart</h5>
            </div>
            <DataTable
              data={products}
              columns={columns}
              pagination
              progressPending={pending}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4 flex-row-reverse ">
        <div className="col-lg-5 col-12 col-md-12 mt-md-4">
          <div className="card shopping-cart p-4">
            <h4 className="product-name">Cart Total</h4>
            <div className="cart d-flex justify-content-between mt-3">
              <p className="sub">Subtotal</p>
              <h6 className="subprice">Rp {ThousandSeparator(total)}</h6>
            </div>
            <div className="cart d-flex justify-content-between">
              <p className="sub">Shipping Price</p>
              <p className="subprice">Free</p>
            </div>
            <div className="total d-flex justify-content-between">
              <p className="total">Total Price</p>
              <h5 className="total">Rp {ThousandSeparator(total)}</h5>
            </div>
            <div className="mt-4 text-center">
              <button
                className="btn btn-save text-white px-3"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
