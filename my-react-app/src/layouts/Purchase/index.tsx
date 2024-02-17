import Breadcrumbs from "../../components/Breadcrumbs";
import NavUser from "../../components/NavUser";
import product from "../../assets/product/iphone-14-pro-max-256gb-(52).webp";
import { useEffect, useState } from "react";
import { HandlePrice, getIdFromToken } from "../../utils/constant";
import { useAppDispatch } from "../../redux/store";
import { deleteOrder, getInvoiceById } from "../../redux/slice/OrderSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ModalDelete from "../../components/ModalDelete";
import empty_cart from "../../assets/logo/empty_cart.webp"

function Purchase() {
  const dispatch = useAppDispatch();
  const invoices = useSelector((state: any) => state.orders.orderById);
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  console.log(invoices);

  useEffect(() => {
    const id = getIdFromToken();
    dispatch(getInvoiceById(id));
  }, [dispatch]);

  const handleDelete = (id: string) => {
    setId(id);
    setOpen(true);
  };

  return (
    <>
      <Breadcrumbs value="Purchase" />
      <section className=" flex justify-center">
        <div className="w-10/12 flex justify-center">
          <NavUser />
          <div className="bg-white w-9/12 p-4">
            <div className="text-2xl text-blue-600">PURCHASE</div>
            <hr className="mt-4" />
			{
				invoices.length === 0
				?
					<img src={empty_cart} alt="" className="w-full h-96"/>
				:
					<div className="">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
							STT
							</th>
							<th scope="col" className="px-6 py-3">
							Code
							</th>
							<th scope="col" className="px-6 py-3">
							Payment.M
							</th>
							<th scope="col" className="px-6 py-3">
							Status
							</th>
							<th scope="col" className="px-6 py-3">
							Total
							</th>
							<th></th>
						</tr>
						</thead>
						<tbody>
						{invoices.map((invoice: any, index: number) => (
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td className="px-6 w-3">
									<span>{index + 1 + "."}</span>
								</td>
							<th
								scope="row"
								className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
							>
								<div className="text-red-600 py-4 hover:cursor-pointer hover:opacity-50">
									<Link to={`/user/purchase/` + invoice._id}>
										{invoice._id}
									</Link>
								</div>
							</th>
							<td className="px-6 py-4">{invoice.payment.method}</td>
							<td className="px-6 py-4">
								<div className="flex items-center">
								<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
								{invoice.status}
								</div>
							</td>
							<td className="px-6 py-4">
								<a
								href="google"
								className="font-medium text-red-600 dark:text-blue-500 hover:underline"
								>
								{HandlePrice(invoice.total)}
								</a>
							</td>
							<td className="px-6 py-4">

								<button
									type="button"
									className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
									onClick={() => handleDelete(invoice?._id)}
								>
									Cancel
								</button>

							</td>
							</tr>
						))}
						{/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th
							scope="row"
							className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
							>
							<img
								className="w-10 h-10 rounded-full"
								src={product}
								alt=""
							/>
							<div className="ps-3">
								<div className="text-base font-semibold">Neil Sims</div>
								<div className="font-normal text-gray-500">x1</div>
							</div>
							</th>
							<td className="px-6 py-4">Paypal</td>
							<td className="px-6 py-4">
							<div className="flex items-center">
								<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
								Pending
							</div>
							</td>
							<td className="px-6 py-4">
							<a
								href="google"
								className="font-medium text-red-600 dark:text-blue-500 hover:underline"
							>
								200.000
							</a>
							</td>
							<td className="px-6 py-4">
							<a
								href="google"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								<button
								type="button"
								className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
								>
								Cancel
								</button>
							</a>
							</td>
						</tr>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th
							scope="row"
							className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
							>
							<img
								className="w-10 h-10 rounded-full"
								src={product}
								alt=""
							/>
							<div className="ps-3">
								<div className="text-base font-semibold">Neil Sims</div>
								<div className="font-normal text-gray-500">x1</div>
							</div>
							</th>
							<td className="px-6 py-4">Paypal</td>
							<td className="px-6 py-4">
							<div className="flex items-center">
								<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
								Pending
							</div>
							</td>
							<td className="px-6 py-4">
							<a
								href="google"
								className="font-medium text-red-600 dark:text-blue-500 hover:underline"
							>
								200.000
							</a>
							</td>
							<td className="px-6 py-4">
							<a
								href="google"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								<button
								type="button"
								className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
								>
								Cancel
								</button>
							</a>
							</td>
						</tr>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th
							scope="row"
							className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
							>
							<img
								className="w-10 h-10 rounded-full"
								src={product}
								alt=""
							/>
							<div className="ps-3">
								<div className="text-base font-semibold">Neil Sims</div>
								<div className="font-normal text-gray-500">x1</div>
							</div>
							</th>
							<td className="px-6 py-4">Paypal</td>
							<td className="px-6 py-4">
							<div className="flex items-center">
								<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
								Pending
							</div>
							</td>
							<td className="px-6 py-4">
							<a
								href="google"
								className="font-medium text-red-600 dark:text-blue-500 hover:underline"
							>
								200.000
							</a>
							</td>
							<td className="px-6 py-4">
							<a
								href="google"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								<button
								type="button"
								className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
								>
								Cancel
								</button>
							</a>
							</td>
						</tr> */}
						</tbody>
					</table>
					</div>
			}
          </div>
        </div>
		{open ? (
          <ModalDelete id={id} action={deleteOrder} close={setOpen} />
        ) : (
          ""
        )}
      </section>
    </>
  );
}

export default Purchase;
