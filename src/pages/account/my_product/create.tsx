import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInputAccount } from "../../../components/TextInput";

type body = {
  name: string;
  price: number;
  quantity: number;
  description: string;
  id_category: number;
};

const CreateProduct = () => {
  document.title = "TakTuku - Create My Product ";
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    await createProduct({
      name: name,
      price: Number(price),
      quantity: Number(quantity),
      description: desc,
      id_category: Number(category),
    });
  };

  const createProduct = async (body: body) => {
    await axios
      .post("/products", body)
      .then((res) => {
        Navigate("/account/product");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded">
            <div className="p-2">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-10 ">
                  <form action="#" className="my-4" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6">
                        <TextInputAccount
                          label="Product Name"
                          type="text"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                          }
                          placeholder="Papel La Casa"
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        <TextInputAccount
                          label="Price"
                          type="number"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPrice(e.target.value)
                          }
                          placeholder="Rp 100.000"
                        />
                      </div>
                    </div>
                    <div className="row align-items-end">
                      <div className="col-12 col-md-6 col-lg-6">
                        <TextInputAccount
                          label="Quantity"
                          type="number"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setQuantity(e.target.value)
                          }
                          placeholder={100}
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        <div className="form-group mt-3">
                          <label className="form-label">Category</label>
                          <select
                            className="form-select"
                            onChange={handleCategory}
                            required
                          >
                            <option selected>Select Category</option>
                            <option value={1}>Men</option>
                            <option value={2}>Women</option>
                            <option value={3}>Kid</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group mt-3">
                        <label className="form-label">Description</label>
                        <textarea
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            setDesc(e.target.value)
                          }
                          className="form-control"
                          style={{ height: "100px" }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-4 d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-save text-white px-4"
                      >
                        Create Product
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

export default CreateProduct;
