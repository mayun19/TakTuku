import React from "react";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { NavLink } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";

const Cart = () => {
	document.title = "TakTuku - Shopping Cart ";

	const ThousandSeparator = (amount: number) => {
		if (
			amount !== undefined ||
			amount !== 0 ||
			amount !== "0" ||
			amount !== null
		) {
			return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		} else {
			return amount;
		}
	};

	const PriceCell = (cell: any) => {
		return <p className="m-0">Rp. {ThousandSeparator(cell)}</p>;
	};

	const IdCell = (cell: any) => {
		return (
			<NavLink
				className="text-decoration-none text-dark"
				to={`/account/transaction/${cell}`}
			>
				{cell}
			</NavLink>
		);
	};

	const CountCell = (cell: any) => {
		return (
			<div className="d-flex qt align-items-center justify-content-between">
				<button>
					<FiMinus />
				</button>
				<div className="count">{cell}</div>
				<button>
					<FiPlus />
				</button>
			</div>
		);
	};

	const products = [
		{
			id: 1,
			name: "Sofa ternyaman",
			price: 2000000,
			quantity: 10,
			totalprice: 20000000,
		},
		{
			id: 2,
			name: "Apple Watch 4",
			price: 890000,
			quantity: 8,
			totalprice: 7120000,
		},
		{
			id: 3,
			name: "Mavic Kawe",
			price: 5030000,
			quantity: 4,
			totalprice: 20120000,
		},
	];

	const columns = [
		{
			dataField: "name",
			text: "PRODUCT",
			formatter: IdCell,
		},
		{
			dataField: "price",
			text: "PRICE",
			sort: true,
			formatter: PriceCell,
		},
		{
			dataField: "quantity",
			text: "QUANTITY",
			formatter: CountCell,
		},
		{
			dataField: "totalprice",
			text: "TOTAL",
			formatter: PriceCell,
		},
		{
			dataField: "link",
			text: "ACTION",
			formatter: (rowContent: any, row: any) => {
				return (
					<div>
						<NavLink to={"delete/" + row.id}>
							<RiDeleteBinLine className="text-dark me-2" size={24} />
						</NavLink>
					</div>
				);
			},
		},
	];

	const selectRow: any = {
		mode: "checkbox",
		clickToSelect: true,
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<div className="border rounded">
						<div className="p-4 d-flex align-items-center">
							<h5 className="flex-grow-1">Shopping Cart</h5>
						</div>
						<BootstrapTable
							bootstrap4
							classes="border-white text-center"
							rowClasses="border-bottom"
							keyField="id"
							data={products}
							columns={columns}
							selectRow={selectRow}
							pagination={paginationFactory({
								sizePerPage: 10,
								paginationSize: 3,
								alwaysShowAllBtns: true,
							})}
							wrapperClasses="table-responsive"
						/>
					</div>
				</div>
			</div>
			<div className="row mt-4 flex-row-reverse ">
				<div className="col-lg-5 col-12 col-md-12 mt-md-4">
					<div className="card shopping-cart p-4">
						<h4 className="product-name">Cart Total</h4>
						<div className="cart d-flex justify-content-between mt-3">
							<p className="sub">Subtotal</p>
							<h6 className="subprice">Rp 1.409.000</h6>
						</div>
						<div className="cart d-flex justify-content-between">
							<p className="sub">Shipping Price</p>
							<p className="subprice">Free</p>
						</div>
						<div className="total d-flex justify-content-between">
							<p className="total">Total Price</p>
							<h5 className="total">Rp 1.409.000</h5>
						</div>
						<div className="mt-4 text-center">
							<button className="btn btn-save text-white px-3">
								Proceed to Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
