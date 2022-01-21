import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Account from "../pages/account";
import Dashboard from "../pages/account/dashboard";
import Transaction from "../pages/account/transaction";
import Detail from "../pages/account/transaction/detail";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="account" element={<Account />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="transaction/:id" element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
