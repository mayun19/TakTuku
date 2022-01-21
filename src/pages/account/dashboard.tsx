import BootstrapTable from "react-bootstrap-table-next";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
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
        <div className="col-6 text-center">
          <div className="border rounded py-5 h-100">
            <div className="avatar bg-dark p-4 mb-3 fs-1 rounded-circle text-white">
              <FaUserAlt />
            </div>
            <h5 className="mb-0">username</h5>
            <p>example@domain.com</p>
            <NavLink
              type="button"
              className="btn btn-outline-success px-3 shadow"
              to="/"
            >
              Edit Profile
            </NavLink>
          </div>
        </div>
        <div className="col-6">
          <div className="border rounded p-5">
            <h5 className="mb-0">Full Name</h5>
            <br />
            <p>Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178</p>
            <p>
              Phone Number <br />
              08123456789
            </p>
            <p>
              Email Address <br />
              example@domain.com
            </p>
            <NavLink
              type="button"
              className="btn btn-outline-success px-3 shadow"
              to="/"
            >
              Edit Address
            </NavLink>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col">
          <div className="border rounded">
            <div className="p-4">
              <h5 className="m-0">Recent Transaction</h5>
            </div>
            <BootstrapTable
              bootstrap4
              classes="border-white text-center m-0"
              rowClasses="border-bottom"
              keyField="id"
              data={products}
              columns={columns}
            />
            <div className="p-4 text-end">
              <NavLink
                type="button"
                className="btn btn-outline-success px-3 shadow"
                to="/account/transaction"
              >
                See All
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
