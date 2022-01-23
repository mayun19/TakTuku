import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { NavLink } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const Product = () => {
  document.title = "TakTuku - My Product ";
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
    { id: 1, name: "Sofa ternyaman", price: 101000, quantity: 100 },
    { id: 2, name: "Apple Watch 4", price: 890000, quantity: 8 },
    { id: 3, name: "Mavic Kawe", price: 5030000, quantity: 4 },
  ];
  const columns = [
    {
      dataField: "name",
      text: "PRODUCT",
      formatter: IdCell,
    },
    {
      dataField: "price",
      text: "PRICE",
      sort: true,
      formatter: PriceCell,
    },
    {
      dataField: "quantity",
      text: "QUANTITY",
      sort: true,
    },
    {
      dataField: "link",
      text: "ACTION",
      formatter: (rowContent: any, row: any) => {
        return (
          <div>
            <NavLink to={"detail/" + row.id}>
              <BiEditAlt className="text-dark me-2" size={24} />
            </NavLink>
            <NavLink to={"delete/" + row.id}>
              <RiDeleteBinLine className="text-dark me-2" size={24} />
            </NavLink>
          </div>
        );
      },
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded">
            <div className="p-4 d-flex align-items-center">
              <h5 className="flex-grow-1">My Product</h5>
              <div className="p-4">
                <NavLink
                  to="/account/product/create"
                  className="btn btn-success"
                >
                  Add Product
                </NavLink>
              </div>
              <div className="row flex-row"></div>
            </div>
            <BootstrapTable
              bootstrap4
              classes="border-white text-center"
              rowClasses="border-bottom"
              keyField="id"
              data={products}
              columns={columns}
              pagination={paginationFactory({
                sizePerPage: 10,
                paginationSize: 3,
                alwaysShowAllBtns: true,
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
