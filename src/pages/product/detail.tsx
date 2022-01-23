import ProductPic from "../../assets/images/product_pic.png";

const ProductDetail = () => {
  document.title = "TakTuku - Detail Product ";
  return (
    <div className="detail-product">
      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="col-10 p-lg-0 ps-md-0">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" className="text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Product Details</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-8 ps-lg-0 ps-md-0 pe-lg-4">
            <div className="product-item">
              <img src={ProductPic} alt="" />
              <div className="product-desc mt-4 py-3 px-2">
                The Nike Air Max 720 SE goes bigger than ever before with Nike's
                tallest Air unit yet for unimaginable, all-day comfort. There's
                super breathable fabrics on the upper, while colours add a
                modern edge. <br /> Bring the past into the future with the Nike
                Air Max 2090, a bold look inspired by the DNA of the iconic Air
                Max 90. Brand-new Nike Air cushioning underfoot adds
                unparalleled comfort while transparent mesh and vibrantly
                coloured details on the upper are blended with timeless OG
                features for an edgy, modernised look.
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-md-4 mt-lg-0">
            <div className="card card-right p-4">
              <h4 className="product-name">Sofa Ternyaman</h4>
              <p className="seller">By TutuMatang</p>
              <h3 className="price mt-3 text-end">Rp 1.409.000</h3>
              <div className="row quanti my-2">
                <p className="stock">Stock 4</p>
              </div>
              <button className="btn btn-cart my-3 py-2">Add to Cart</button>
              <button className="btn btn-co">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
