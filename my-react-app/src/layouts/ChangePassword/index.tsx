import { useForm } from "react-hook-form";
import Breadcrumbs from "../../components/Breadcrumbs";
import NavUser from "../../components/NavUser";
import { useAppDispatch } from "../../redux/store";
import { useState } from "react";
import { changePassword } from "../../redux/slice/UserSlice";
import { ToastContainer, toast } from "react-toastify";

function ChangePassword() {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const submitForm = (data: any) => {
	setLoading(true)
	dispatch(changePassword(data))
		.then((res: any) => {
			console.log(res.payload)
			if(res.payload.status === 401) {
				setMessage(res.payload.message)
				setLoading(false)
			}
			if(res.payload.status === 200) {
				toast.success(res.payload.message, {
					autoClose: 1000,
				});
				setMessage("")
				setLoading(false)
			}
		})
		.catch((errors: any) => {
			console.log(errors)
		})
  };
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
				<span className="text-red-700">{message}</span>
                <form onSubmit={handleSubmit(submitForm)}>
                  <table className="min-w-full bg-white">
                    <tbody className="tbody">
                      <tr className="mb-6">
                        <td className="py-2 px-4 w-4/12">Old Password</td>
                        <div>
                          <input
                            type="password"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                            {...register("password")}
                          />
                        </div>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 w-4/12">New Password</td>
                        <div>
                          <input
                            type="password"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                            {...register("new_password")}
                          />
                        </div>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 w-4/12">Confirm Password</td>
                        <div>
                          <input
                            type="password"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                            {...register("confirmPassword", {
                              required: "This field is required",
                              validate: (value) =>
                                value === watch("new_password") ||
                                "Passwords do not match",
                            })}
                          />
                          <span className="text-red-500">
                            {errors.confirmPassword?.message?.toString()}
                          </span>
                        </div>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            { loading ?
							<div role="status">
								<svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
									<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
								</svg>
								<span className="sr-only">Loading...</span>
							</div>
							: "Submit" }
                          </button>
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
	  <ToastContainer />
    </>
  );
}

export default ChangePassword;
