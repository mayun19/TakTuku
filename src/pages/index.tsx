import React from "react";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ImgProd1 from "../assets/images/pic1.png";

const Home = () => {
	document.title = "TakTuku - Home ";
	return (
		<div className="home">
			<div className="container mt-5">
				<div className="row justify-content-center banner rounded-3">
					<div className="banner-hero ms-5 mt-5">
						<h1 className="banner-title mt-4">
							Welcome To <br /> TakTuku Store
						</h1>
						<p className="banner-desc">Find what you need here</p>
					</div>
					{/* <img src={ImgBanner} alt="" /> */}
				</div>
				<div className="row category mt-5">
					<ul className="navbar-nav d-flex flex-row justify-content-center">
						<li className="nav-item mx-4">
							<a className="nav-link active" aria-current="page" href="#">
								All
							</a>
						</li>
						<li className="nav-item mx-4">
							<a className="nav-link" href="#">
								Women
							</a>
						</li>
						<li className="nav-item mx-4">
							<a className="nav-link" href="#">
								Men
							</a>
						</li>
						<li className="nav-item mx-4">
							<a className="nav-link" href="#">
								Kids
							</a>
						</li>
					</ul>
				</div>
				<div className="row product-list mt-5 justify-content-center">
					<div className="col-11 col-md-4 col-lg-3 mt-2">
						<div className="row product-item">
							<img className="rounded-3" src={ImgProd1} alt="" />
							<h5 className="produc-name mt-3">Sofa Ternyaman</h5>
							<p className="product-price">RP 1.409.000</p>
						</div>
					</div>
					<div className="col-11 col-md-4 col-lg-3 mt-2">
						<div className="row product-item">
							<img className="rounded-3" src={ImgProd1} alt="" />
							<h5 className="produc-name mt-3">Sofa Ternyaman</h5>
							<p className="product-price">RP 1.409.000</p>
						</div>
					</div>
					<div className="col-11 col-md-4 col-lg-3 mt-2">
						<div className="row product-item">
							<img className="rounded-3" src={ImgProd1} alt="" />
							<h5 className="produc-name mt-3">Sofa Ternyaman</h5>
							<p className="product-price">RP 1.409.000</p>
						</div>
					</div>
					<div className="col-11 col-md-4 col-lg-3 mt-2">
						<div className="row product-item">
							<img className="rounded-3" src={ImgProd1} alt="" />
							<h5 className="produc-name mt-3">Sofa Ternyaman</h5>
							<p className="product-price">RP 1.409.000</p>
						</div>
					</div>
					<div className="col-11 col-md-4 col-lg-3 mt-2">
						<div className="row product-item">
							<img className="rounded-3" src={ImgProd1} alt="" />
							<h5 className="produc-name mt-3">Sofa Ternyaman</h5>
							<p className="product-price">RP 1.409.000</p>
						</div>
					</div>
					<div className="col-11 col-md-4 col-lg-3 mt-2">
						<div className="row product-item">
							<img className="rounded-3" src={ImgProd1} alt="" />
							<h5 className="produc-name mt-3">Sofa Ternyaman</h5>
							<p className="product-price">RP 1.409.000</p>
						</div>
					</div>
					<div className="col-11 col-md-4 col-lg-3 mt-2">
						<div className="row product-item">
							<img className="rounded-3" src={ImgProd1} alt="" />
							<h5 className="produc-name mt-3">Sofa Ternyaman</h5>
							<p className="product-price">RP 1.409.000</p>
						</div>
					</div>
					<div className="col-11 col-md-4 col-lg-3 mt-2">
						<div className="row product-item">
							<img className="rounded-3" src={ImgProd1} alt="" />
							<h5 className="produc-name mt-3">Sofa Ternyaman</h5>
							<p className="product-price">RP 1.409.000</p>
						</div>
					</div>
				</div>
				<div className="row pages justify-content-end my-4">
					<div className="col-12 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
						<div
							className="fs-5 me-3 mb-0 shadow rounded-circle"
							style={{ cursor: "pointer" }}
						>
							<BiChevronLeft className="m-2" />
						</div>
						<div className="fs-5 mb-0  mx-2">1</div>
						<div
							className="fs-5 mb-0  ms-3 shadow rounded-circle"
							style={{ cursor: "pointer" }}
						>
							<BiChevronRight className="m-2" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
