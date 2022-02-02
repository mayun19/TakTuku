/* eslint-disable react-hooks/exhaustive-deps */
import { TextInputAccount } from "../../../components/TextInput";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";

type credential = {
  name: string;
  email: string;
  phone_number: string;
  address: string;
  password?: string;
  birth_date?: string;
  gender?: string;
  id?: number;
};

const DetailAccount = () => {
  document.title = "TakTuku - Account Detail ";

  const [data, setData] = useState({});
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [birth, setBirth] = useState(new Date());
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/users/myprofile`)
      .then((res) => {
        const { data } = res;
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone_number);
        setAddress(data.address);
        setBirth(data.birth_date);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = async (e: FormEvent) => {
    e.preventDefault();
    const temp: any = data;
    delete temp["id"];
    delete temp["photo"];
    await editUser({
      ...data,
      name: name,
      email: email,
      phone_number: phone,
      address: address,
      birth_date: moment(birth).format("YYYY-MM-DD"),
    });
  };

  const editUser = async (credential: credential) => {
    console.log(credential);

    await axios
      .put(`/users/${id}`, credential)
      .then((res) => {
        Swal.fire("Success!", "Your Account has been updated.", "success").then(
          (res) => {
            if (res.isConfirmed) {
              Navigate("/account/dashboard");
            }
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded">
            <div className="p-4">
              <h5 className="m-0">Account Detail</h5>
              <div className="row">
                <div className="col-12 col-md-10 col-lg-5 ">
                  <form onSubmit={handleEdit} className="mt-4">
                    <TextInputAccount
                      label="Full Name"
                      type="text"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                      }
                      value={name}
                    />
                    <TextInputAccount
                      label="Email Address"
                      type="email"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                      value={email}
                    />
                    <TextInputAccount
                      label="Phone Number"
                      type="text"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPhone(e.target.value)
                      }
                      value={phone}
                    />
                    <TextInputAccount
                      label="Address"
                      type="text"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setAddress(e.target.value)
                      }
                      placeholder="address"
                      value={address}
                    />
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="btn btn-save text-white px-4"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAccount;
