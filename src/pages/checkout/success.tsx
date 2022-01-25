import { NavLink } from "react-router-dom";
import Bag from "../../assets/images/bag.svg";

const Success = () => {
  document.title = "TakTuku - Order Success ";
  return (
    <div className="success">
      <div className="container mt-4 mb-5">
        <div className="row justify-content-center">
          <div className="col-11 col-md-8 col-lg-6">
            <div className="text-center mt-5">
              <a href="/">
                <img src={Bag} className="mb-4" alt="" />
              </a>
              <h3 className="mt-3">Yay! Completed</h3>
              <p className="text mt-5">
                Terimakasih telah berbelaja di TakTuku Store. Status order mu
                akan kami update di halaman Transaksi mu.
              </p>
              <div className="row justify-content-center mt-4">
                <div className="col-lg-5 col-10 col-md-8">
                  <NavLink
                    to="/account/transaction"
                    className="btn btn-save my-3 px-4 py-2"
                  >
                    My Transaction
                  </NavLink>
                  <NavLink to="/" className="btn btn-shop my-2  px-4 py-2">
                    Go to Shopping
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
