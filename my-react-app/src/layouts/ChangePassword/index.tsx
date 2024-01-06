import Breadcrumbs from "../../components/Breadcrumbs";
import NavUser from "../../components/NavUser";
function ChangePassword() {
  return (
    <>
      <Breadcrumbs value="Profile User" />
      <section className=" flex justify-center">
        <div className="w-10/12 flex justify-center">
          <NavUser />
          <div className="bg-white w-9/12 p-4">
            <div className="text-2xl text-blue-600">CHANGE PASSWORD</div>
            <hr className="mt-4" />
            <div className="p-4 grid  grid-cols-3">
              <div className="pt-4 col-span-2">
                <form action="">
                  <table className="min-w-full bg-white">
                    <tbody className="tbody">
                      <tr className="mb-6">
                        <td className="py-2 px-4 w-4/12">New Password</td>
                        <div>
                          <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                          />
                        </div>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 w-4/12">Confirm Password</td>
                        <div>
                          <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                          />
                        </div>
                      </tr>
					  <tr>
                        <td className="py-2 px-4 w-4/12">Old Password</td>
                        <div>
                          <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                          />
                        </div>
                      </tr>
					  <tr>
						<td></td>
						<td>
						<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
						</td>
					  </tr>
                    </tbody>
                  </table>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChangePassword;
