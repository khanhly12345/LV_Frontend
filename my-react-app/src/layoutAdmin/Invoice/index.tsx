import { Avatar } from "@material-tailwind/react";
import SideNavAdmin from "../../components/SideNavAdmin";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getInvoice } from "../../redux/slice/OrderSlice";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { HandlePrice } from "../../utils/constant";

function Invoice() {
	const  { id } = useParams()
	const dispatch = useAppDispatch()

	const invoice = useSelector((state: any) => state.orders.invoice)

	console.log(invoice)

	useEffect(()=> {
		dispatch(getInvoice(id))
	}, [dispatch, id])

  return (
    <>
      <SideNavAdmin />
      <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-4xl mx-auto mt-20 mb-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img
              className="h-8 w-8 mr-2"
              src="https://tailwindflex.com/public/images/logos/favicon-32x32.png"
              alt="Logo"
            />
            <div className="text-gray-700 font-semibold text-lg">
              Your Company Name
            </div>
          </div>
          <div className="text-gray-700">
            <div className="font-bold text-xl mb-2">INVOICE</div>
            <div className="text-sm">Date: 01/05/2023</div>
            <div className="text-sm">Invoice: { invoice._id }</div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 pb-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
          <div className="text-gray-700 mb-2">{ invoice?.userId?.fullname}</div>
          <div className="text-gray-700 mb-2">{ invoice?.userId?.phone}</div>
          <div className="text-gray-700 mb-2">{ invoice?.userId?.city + ', ' + invoice?.userId?.distrist} </div>
          <div className="text-gray-700">status: { invoice?.status}</div>
        </div>
        <table className="w-full text-left mb-8">
          <thead>
            <tr>
              <th className="text-gray-700 font-bold uppercase py-2">
				Image
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">
                Product Name
              </th>
			  <th className="text-gray-700 font-bold uppercase py-2">
                Option
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">
                Quantity
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">Price</th>
            </tr>
          </thead>
          <tbody>
			{
				invoice?.items?.map((product: any) => (
					<>
						<tr>
							<td className="py-4 text-gray-700">
								<img
                                  src={`https://drive.google.com/thumbnail?id=${product.item.productId.image[0]}`}
                                  alt=""
                                  width="50"
                                  height="50"
                                />
							</td>
							<td className="py-4 text-gray-700">{product.item.productId.productName}</td>
							<td className="py-4 text-gray-700">{product.item.color + ', ' + product.item.ram}</td>
							<td className="py-4 text-gray-700">{product.quantity}</td>
							<td className="py-4 text-gray-700">{HandlePrice(product.item.productId.price)}</td>

						</tr>
					</>
				))
			}

          </tbody>
        </table>
        <div className="flex justify-end mb-8">
          <div className="text-gray-700 mr-2">Total:</div>
          <div className="text-red-600 font-bold text-xl">{ HandlePrice(invoice.total)}</div>
        </div>
        <div className="border-t-2 border-gray-300 pt-8 mb-8">
          <div className="text-gray-700 mb-2">
            Payment is due within 30 days. Late payments are subject to fees.
          </div>
          <div className="text-gray-700 mb-2">
            Please make checks payable to Your Company Name and mail to:
          </div>
          <div className="text-gray-700">123 Main St., Anytown, USA 12345</div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
