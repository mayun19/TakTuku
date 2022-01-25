import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom";

const Transaction = () => {
  const [order, setOrder] = useState<object[]>([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
        <div className="col">
          <div className="border rounded">
            <div className="p-4">
              <h5 className="m-0">Transaction</h5>
            </div>
            <DataTable
              data={order}
              columns={columns}
              pagination
              progressPending={pending}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
