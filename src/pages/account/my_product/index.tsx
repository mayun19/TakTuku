import { NavLink } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const Product = () => {
  document.title = "TakTuku - My Product ";
  const [products, setProducts] = useState<object[]>([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setPending(true);
    await axios
      .get("/products/myproduct")
      .then((res) => {
        const { data } = res;
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setPending(false));
  };

  const handleDelete = async (item: number) => {
    setPending(true);
    await axios
      .delete(`/products/${item}`)
      .then((res) => {
        fetchData();
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

  const columns = [
    {
      selector: (row: any) => row.id,
      name: "#ID",
      format: (row: any) => (
        <NavLink
          className="text-decoration-none text-dark"
          to={`/product/${row.id}`}
        >
          {row.id}
        </NavLink>
      ),
    },
    {
      selector: (row: any) => row.name,
      name: "PRODUCT",
    },
    {
      selector: (row: any) => row.price,
      name: "PRICE",
      sortable: true,
      format: (row: any) => (
        <p className="m-0">Rp. {ThousandSeparator(row.price)}</p>
      ),
    },
    {
      selector: (row: any) => row.quantity,
      name: "QUANTITY",
      sortable: true,
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
              <h5 className="flex-grow-1 m-0">My Product</h5>
              <div className="me-4">
                <NavLink
                  to="/account/product/create"
                  className="btn btn-success"
                >
                  Add Product
                </NavLink>
              </div>
              <div className="row flex-row"></div>
            </div>
            <DataTable
              data={products}
              columns={columns}
              progressPending={pending}
              pagination
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
