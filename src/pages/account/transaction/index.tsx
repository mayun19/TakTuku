import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { NavLink } from "react-router-dom";

const Transaction = () => {
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
    { id: 1, date: "1 Feb 2022", status: "completed", price: 101000 },
    { id: 2, date: "2 Feb 2022", status: "completed", price: 102000 },
    { id: 3, date: "3 Feb 2022", status: "completed", price: 103000 },
    { id: 4, date: "4 Feb 2022", status: "completed", price: 104000 },
    { id: 5, date: "5 Feb 2022", status: "completed", price: 105000 },
  ];
  const columns = [
    {
      dataField: "id",
      text: "#ID",
      formatter: IdCell,
    },
    {
      dataField: "date",
      text: "DATE",
      sort: true,
    },
    {
      dataField: "status",
      text: "STATUS",
      sort: true,
    },
    {
      dataField: "price",
      text: "TOTAL",
      formatter: PriceCell,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded">
            <div className="p-4">
              <h5 className="m-0">Transaction</h5>
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

export default Transaction;
