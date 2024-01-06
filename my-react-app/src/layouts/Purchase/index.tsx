import Breadcrumbs from "../../components/Breadcrumbs";
import NavUser from "../../components/NavUser";
import product from "../../assets/product/iphone-14-pro-max-256gb-(52).webp"

function Purchase() {
  return (
    <>
      <Breadcrumbs value="Purchase" />
      <section className=" flex justify-center">
        <div className="w-10/12 flex justify-center">
          <NavUser />
          <div className="bg-white w-9/12 p-4">
            <div className="text-2xl text-blue-600">PURCHASE</div>
            <hr className="mt-4" />
            <div className="">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Payment.M
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      PRICES
                    </th>
					<th></th>
                  </tr>
                </thead>
                <tbody>
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
                        <div className="font-normal text-gray-500">
                          x1
                        </div>
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
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
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
                        <div className="font-normal text-gray-500">
                          x1
                        </div>
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
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
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
                        <div className="font-normal text-gray-500">
                          x1
                        </div>
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
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
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
                        <div className="font-normal text-gray-500">
                          x1
                        </div>
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
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Purchase;
