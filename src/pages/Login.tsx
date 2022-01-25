import { Form } from "react-bootstrap";
import ImgModel from "../assets/images/Photo Login.png";
import ImgLogo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { reduxAction } from "../stores/actions/action";

type credential = {
  email: string;
  password: string;
};

const Login = () => {
  document.title = "TakTuku - Login ";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    await LoginUser({
      email: email,
      password: password,
    });
  };

  const LoginUser = async (credential: credential) => {
    await axios
      .post("/login", credential)
      .then((res) => {
        const { data } = res;
        localStorage.setItem("token", JSON.stringify(data.Data));
        dispatch(reduxAction("isLoggedIn", true));
      })
      .catch((err) => {
        setIsInvalid(true);
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="container mt-5">
        <div className="row login-row d-flex align-items-center pt-5 pb-4">
          <div className="col-12 col-md-6 lg-6 d-none d-sm-block text-center ">
            <img className="imgModel" src={ImgModel} alt="model" />
          </div>
          <div className="col-12 col-md-6 lg-6">
            <div className="row d-flex justify-content-center">
              <div className="col-10 col-md-8">
                <div className="logo text-center">
                  <NavLink to="/">
                    <img src={ImgLogo} className="mb-4 mb-md-none" alt="logo" />
                  </NavLink>
                </div>
                <Form onSubmit={handleSubmit}>
                  <div className="form-group mt-2">
                    <label className="form-label">Email Address</label>
                    <input
                      className={`form-control ${
                        isInvalid ? "is-invalid" : ""
                      }`}
                      type="text"
                      required
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                    />
                    <div
                      className={`${isInvalid ? "invalid-feedback" : "d-none"}`}
                    >
                      Please enter correct email.
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <label className="form-label">Password</label>
                    <input
                      className={`form-control ${
                        isInvalid ? "is-invalid" : ""
                      }`}
                      type="password"
                      required
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                    />
                    <div
                      className={`${isInvalid ? "invalid-feedback" : "d-none"}`}
                    >
                      Please enter correct password.
                    </div>
                  </div>
                  <p className="text-end">
                    <a href="/" className="text-dark text-decoration-none">
                      Forget Password ?
                    </a>
                  </p>
                  <div className="col d-grid gap-2 mt-4">
                    <button
                      className="btn btn-sign-in text-white"
                      type="submit"
                    >
                      Sign In to My Account
                    </button>
                  </div>
                </Form>
                <div className="direct-register d-grid gap-2 mt-3">
                  <NavLink to="/register" className="btn btn-light">
                    Sign Up
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

export default Login;
