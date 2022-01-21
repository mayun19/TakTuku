import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded">
            <div className="p-4">
              <h5 className="m-0">Transaction #{id}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
