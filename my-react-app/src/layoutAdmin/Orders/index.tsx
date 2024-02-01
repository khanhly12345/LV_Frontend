import { Avatar, Button } from "@material-tailwind/react";
import SideNavAdmin from "../../components/SideNavAdmin";
import { Link } from "react-router-dom";
import ModalDelete from "../../components/ModalDelete";
import Loading from "../../components/Loading";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteOrder, getOrder } from "../../redux/slice/OrderSlice";
import { HandlePrice } from "../../utils/constant";

function Orders() {
  const dispatch = useAppDispatch();
  const orders = useSelector((state: any) => state.orders.order);

  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  console.log(orders);
  useEffect(() => {
    dispatch(getOrder());
  }, []);


  const handleDelete = (id: string) => {
    setId(id);
    setOpen(true);
  };
  return (
    <>
      <SideNavAdmin />
      <div className="p-4 sm:ml-60">
        {/* <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-14 ">
			<h1 className="text-3xl space-y-4 tracking-widest text-blue-500">PRODUCT</h1> */}
        <section className="lg:flex lg:h-screen font-poppins dark:bg-gray-800 pt-10">
          <div className="justify-center flex-1 max-w-6xl  py-4 mx-auto lg:py-8 ">
            <div className="pt-4 bg-white rounded shadow dark:bg-gray-900">
              <div className="flex px-6 pb-4 border-b dark:border-gray-700 justify-between">
                <div>
                  <h2 className="text-xl font-bold dark:text-gray-400 tracking-widest pb-4">
                    ORDERS
                  </h2>
                </div>
              </div>
              <div className="p-4 overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-xs text-left text-gray-500 dark:text-gray-400">
                      <th className="px-6 pb-3 font-medium text-center">
                        Image
                      </th>
                      <th className="px-6 pb-3 font-medium text-center ">
                        Full Name
                      </th>
                      <th className="px-6 pb-3 font-medium text-center ">
                        Status
                      </th>
                      <th className="px-6 pb-3 font-medium text-center">
                        Total
                      </th>
                      <th className="px-6 pb-3 font-medium text-center">
                        Date
                      </th>
                      <th className="px-6 pb-3 font-medium text-center">
                        Action{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <>
                      {orders.map((order: any) => (
						<>
                        <tr className="text-xs">
                          <td className="px-6 py-2 font-medium text-center">
                            <Avatar
                              placeholder=""
                              src={`https://drive.google.com/thumbnail?id=${order.userId.urlId}`}
                              alt="avatar"
                            />
                          </td>
                          <td className="px-6 py-5 font-medium text-center">
                            <Link to={"/admin/orders/" + order._id} className="text-red-600">{ order.userId.fullname }</Link>
                          </td>
                          <td className="px-6 py-5 font-medium text-center">
                            <span className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">
                              <div>{ order.status}</div>
                            </span>
                          </td>
                          <td className="text-center">
                            <span className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">
                              <div>{ HandlePrice(order.total)}</div>
                            </span>
                          </td>
                          <td className="text-center">
                            <span className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">
                              1995-12-17T03:24:00
                            </span>
                          </td>
                          <td className="px-6 py-5 w-3">
                            <a
							className="px-4 py-2 ml-2 font-medium cursor-pointer text-red-500 border border-red-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-red-500"
							onClick={() => handleDelete(order?._id)}
							>
                              delete
                            </a>
                          </td>
                        </tr>

						</>
                      ))}
                    </>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {open ? (
          <ModalDelete id={id} action={deleteOrder} close={setOpen} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Orders;
