import { Button } from "@material-tailwind/react";
import SideNavAdmin from "../../components/SideNavAdmin";

function Products() {
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
						PRODUCT
					</h2>
					<Button placeholder="" size="sm" color="blue">Add Product</Button>
				</div>
                <div className="pt-2 relative text-gray-600">
                  <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-4"
                  >
                    <svg
                      className="text-gray-600 h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                      viewBox="0 0 56.966 56.966"
                      // xml:space="preserve"
                      width="512px"
                      height="512px"
                    >
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4 overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-xs text-left text-gray-500 dark:text-gray-400">
                      <th className="px-6 pb-3 font-medium">Transaction ID</th>
                      <th className="px-6 pb-3 font-medium ">Date </th>
                      <th className="px-6 pb-3 font-medium">Email </th>
                      <th className="px-6 pb-3 font-medium">Status </th>
                      <th className="px-6 pb-3 font-medium">Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                      <td className="px-6 py-5 font-medium">018276td45</td>
                      <td className="px-6 py-5 font-medium ">08.4.2021</td>
                      <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                      <td>
                        <span className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">
                          Completed
                        </span>
                      </td>
                      <td className="px-6 py-5 w-3">
                        <a
                          href="goole.com"
                          className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                        >
                          Edit
                        </a>
						<a
                          href="goole.com"
                          className="px-4 py-2 ml-2 font-medium text-red-500 border border-red-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-red-500"
                        >
                          delete
                        </a>
                      </td>
                    </tr>
                    <tr className="text-xs dark:text-gray-400">
                      <td className="px-6 py-5 font-medium">018276td45</td>
                      <td className="px-6 py-5 font-medium ">08.4.2021</td>
                      <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                      <td>
                        <span className="inline-block px-2 py-1 text-center text-yellow-600 bg-yellow-100 rounded-full dark:text-yellow-700 dark:bg-yellow-200">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <a
                          href="goole.com"
                          className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="text-xs bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
                      <td className="px-6 py-5 font-medium">018276td45</td>
                      <td className="px-6 py-5 font-medium ">08.4.2021</td>
                      <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                      <td>
                        <span className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">
                          Completed
                        </span>
                      </td>
                      <td className="px-6 py-5 ">
                        <a
                          href="goole.com"
                          className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="text-xs dark:text-gray-400">
                      <td className="px-6 py-5 font-medium">018276td45</td>
                      <td className="px-6 py-5 font-medium ">08.4.2021</td>
                      <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
                      <td>
                        <span className="inline-block px-2 py-1 text-center text-red-600 bg-red-100 rounded-full dark:text-red-700 dark:bg-red-200">
                          Cancelled
                        </span>
                      </td>
                      <td className="px-6 py-5 ">
                        <a
                          href="goole.com"
                          className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* </div> */}
      </div>
    </>
  );
}

export default Products;
