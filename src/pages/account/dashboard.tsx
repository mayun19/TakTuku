import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import moment from "moment";
import DataTable from "react-data-table-component";

const Dashboard = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    address: "",
    phone_number: "",
    birth_date: "",
  });
  const [order, setOrder] = useState<object[]>([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetchData();
    fetchOrder();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/users/myprofile`)
      .then((res) => {
        const { data } = res;
        setUser(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchOrder = async () => {
    setPending(true);
    await axios
      .get("/order")
      .then((res) => {
        const { data } = res;
        setOrder(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setPending(false));
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
          to={`/account/transaction/${row.id}`}
        >
          {row.id}
        </NavLink>
      ),
    },
    {
      selector: (row: any) => row.date,
      name: "DATE",
      format: (row: any) => (
        <p className="m-0">{moment(row.date).format("DD MMM YYYY")}</p>
      ),
    },
    {
      selector: (row: any) => row.status,
      name: "STATUS",
    },
    {
      selector: (row: any) => row.sub_total,
      name: "TOTAL",
      sortable: true,
      format: (row: any) => (
        <p className="m-0">Rp. {ThousandSeparator(row.sub_total)}</p>
      ),
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
            <h5 className="mb-0">{user.name}</h5>
            <p>{user.email}</p>
            <NavLink
              type="button"
              className="btn btn-outline-success px-3 shadow"
              to={`/account/userid`}
            >
              Edit Profile
            </NavLink>
          </div>
        </div>
        <div className="col-6">
          <div className="border rounded p-5">
            <h5 className="mb-0">Contact Detail</h5>
            <br />
            <p className="text-capitalize">
              Birth Date <br /> {moment(user.birth_date).format("MMMM Do YYYY")}
            </p>
            <p className="text-capitalize">
              Address <br /> {user.address}
            </p>
            <p>
              Phone Number <br />
              {user.phone_number}
            </p>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col">
          <div className="border rounded">
            <div className="p-4">
              <h5 className="m-0">Recent Transaction</h5>
            </div>
            <DataTable
              data={order}
              columns={columns}
              progressPending={pending}
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
