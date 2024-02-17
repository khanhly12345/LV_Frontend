import Breadcrumbs from "../../components/Breadcrumbs";
import NavUser from "../../components/NavUser";
import product from "../../assets/product/iphone-14-pro-max-256gb-(52).webp";
import { useEffect } from "react";
import { HandlePrice, getIdFromToken } from "../../utils/constant";
import { useAppDispatch } from "../../redux/store";
import { getInvoiceById } from "../../redux/slice/OrderSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function PurchasingInformatin() {
  const dispatch = useAppDispatch();
  const invoices = useSelector((state: any) => state.orders.orderById);
  const { id } = useParams()

	const purchaseInfor = invoices.filter((invoice: any) => invoice._id === id)
	console.log(purchaseInfor[0].items)
  useEffect(() => {
    const id = getIdFromToken();
    dispatch(getInvoiceById(id));
  }, [dispatch]);
  return (
    <>
      <Breadcrumbs value="Purchase" />
      <section className=" flex justify-center">
        <div className="w-10/12 flex justify-center">
          <NavUser />
          <div className="bg-white w-9/12 p-4">
            <div className="text-2xl text-blue-600">PURCHASING INFORMATION</div>
            <hr className="mt-4" />
            <div className="">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
					<th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Payment.M
                    </th>
					<th scope="col" className="px-6 py-3">
                      Option
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
					{
						purchaseInfor[0].items.map((invoice: any) => (
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<th
								scope="row"
								className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
								>
								<img
									className="w-20 h-16 "
									src={`https://drive.google.com/thumbnail?id=${invoice.item.productId.image[0]}`}
									alt=""
								/>
								<div className="ps-3">
									<div className="text-base font-semibold">{invoice.item.productId.productName}</div>
									<div className="font-normal text-gray-500">{"x" + invoice.quantity}</div>
								</div>
								</th>
								<td className="px-6 py-4">{purchaseInfor[0].payment.method}</td>
								<td className="px-6 py-4">
								<a
									href="google"
									className="font-medium  dark:text-blue-500 hover:underline"
								>
									{invoice.item.color + ","}  {invoice.item.ram}
								</a>
								</td>
								<td className="px-6 py-4">
								<div className="flex items-center">
									<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
									{purchaseInfor[0].status}
								</div>
								</td>

								<td className="px-6 py-4">
								<a
									href="google"
									className="font-medium text-red-600 dark:text-blue-500 hover:underline"
								>
									{HandlePrice(invoice.item.productId.price)}
								</a>
								</td>
							</tr>
						))
					}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PurchasingInformatin;
