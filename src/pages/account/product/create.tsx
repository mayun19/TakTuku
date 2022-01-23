import React from "react";
import { TextInputAccount } from "../../../components/TextInput";

const CreateProduct = () => {
	document.title = "TakTuku - Create My Product ";
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<div className="border rounded">
						<div className="p-2">
							<div className="row justify-content-center">
								<div className="col-12 col-md-10 col-lg-10 ">
									<form action="#" className="my-4">
										<div className="row">
											<div className="col-12 col-md-6 col-lg-6">
												<TextInputAccount
													label="Product Name"
													type="text"
													onChange={(e: any) => console.log(e.target.value)}
													placeholder="Papel La Casa"
												/>
											</div>
											<div className="col-12 col-md-6 col-lg-6">
												<TextInputAccount
													label="Price"
													type="string"
													onChange={(e: any) => console.log(e.target.value)}
													placeholder="Rp 100.000"
												/>
											</div>
										</div>
										<div className="row align-items-end">
											<div className="col-12 col-md-6 col-lg-6">
												<TextInputAccount
													label="Quantity"
													type="number"
													onChange={(e: any) => console.log(e.target.value)}
													placeholder={100}
												/>
											</div>
											<div className="col-12 col-md-6 col-lg-6">
												<div className="form-group mt-3">
													<label className="form-label">Category</label>
													<select className="form-select">
														<option selected>Select Category</option>
														<option value="1">Furniture</option>
														<option value="2">Fashion</option>
														<option value="3">Tools</option>
													</select>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="form-group mt-3">
												<label className="form-label">Description</label>
												<textarea
													name=""
													id=""
													className="form-control"
													style={{ height: "100px" }}
												></textarea>
											</div>
										</div>
										<div className="mt-4 d-grid gap-2">
											<button className="btn btn-save text-white px-4">
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
