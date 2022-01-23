import { TextInputAccount } from "../../../components/TextInput";

const DetailAccount = () => {
  document.title = "TakTuku - Account Detail ";

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded">
            <div className="p-4">
              <h5 className="m-0">Account Detail</h5>
              <div className="row">
                <div className="col-12 col-md-10 col-lg-5 ">
                  <form action="#" className="mt-4">
                    <TextInputAccount
                      label="Full Name"
                      type="text"
                      onChange={(e: any) => console.log(e.target.value)}
                      placeholder="full name"
                    />
                    <TextInputAccount
                      label="Email Address"
                      type="email"
                      onChange={(e: any) => console.log(e.target.value)}
                      placeholder="email address"
                    />
                    <TextInputAccount
                      label="Phone Number"
                      type="tel"
                      onChange={(e: any) => console.log(e.target.value)}
                      placeholder="phone number"
                    />
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
    </div>
  );
};

export default DetailAccount;
