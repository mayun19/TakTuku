import { TextInputAccount } from "../../../components/TextInput";

const Address = () => {
  document.title = "TakTuku - Address ";
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded">
            <div className="p-4">
              <h5 className="m-0">Address</h5>
              <div className="row">
                <form action="#" className="">
                  <div className="col-12 col-md-10 col-lg-8 mt-4">
                    <TextInputAccount
                      label="Street Address"
                      type="text"
                      onChange={(e: any) => console.log(e.target.value)}
                      placeholder="address"
                    />
                    <div className="form-group mt-3">
                      <label className="form-label">Province</label>
                      <select className="form-select">
                        <option selected>Select Province</option>
                        <option value="1">West Java</option>
                        <option value="2">Centarl Java</option>
                        <option value="3">DKI Jakarta</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <TextInputAccount
                        label="City"
                        type="text"
                        onChange={(e: any) => console.log(e.target.value)}
                        placeholder="city"
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <TextInputAccount
                        label="Postal Code"
                        type="string"
                        onChange={(e: any) => console.log(e.target.value)}
                        placeholder="zip"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-save text-white px-4">
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
  );
};

export default Address;
