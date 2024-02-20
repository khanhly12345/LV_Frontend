import { useForm } from "react-hook-form";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useAppDispatch } from "../../redux/store";
import { signUp } from "../../redux/slice/UserSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [message, setMessage] = useState("")
  console.log(message)
  const onSubmit = async (data: any) => {
    try {
		const response: any = await dispatch(signUp(data));
		if (response?.payload?.status === 500) {
			console.log(response?.payload?.message);
		  setMessage(response?.payload?.message);
		} else {
		  navigate('/login');
		}
	  } catch (error) {
		console.error(error);
		setMessage("An error occurred during sign up.");
	  }
  };

  return (
    <>
      <Breadcrumbs value="Sign Up" />
      <div className="flex justify-center">
        <section className="h-screen w-10/12 bg-white rounded-md m-4">
          <div className="flex items-center justify-center">
            <h1 className="text-6xl tracking-widest text-blue-800">Sign Up</h1>
          </div>
          <div className="container h-full px-6 py-4 relative bottom-16">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="w-full"
                  alt=""
                />
              </div>

              <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
			  <span className="text-red-600"> {message ? message: ''}</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6">
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email Address{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="
						  w-full
						  rounded-md
						  border
						  bordder-[#E9EDF4]
						  py-3
						  px-5
						  bg-[#FCFDFE]
						  text-base text-body-color
						  placeholder-[#ACB6BE]
						  outline-none
						  focus-visible:shadow-none
						  focus:border-primary
						  "
                      {...register("email", {
                        required: "This field is required",
						pattern: {
							value: /^\S+@\S+$/i,
							message: "Invalid email address"
						},
                      })}
                    />
                    <span className="text-red-500">
                      {errors.email?.message?.toString()}
                    </span>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password{" "}
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="
						  w-full
						  rounded-md
						  border
						  bordder-[#E9EDF4]
						  py-3
						  px-5
						  bg-[#FCFDFE]
						  text-base text-body-color
						  placeholder-[#ACB6BE]
						  outline-none
						  focus-visible:shadow-none
						  focus:border-primary
						  "
                      {...register("password", {
                        required: "This field is required",
                        minLength: {
                          value: 6,
                          message: "Min length is 6",
                        },
                      })}
                    />
                    <span className="text-red-500">
                      {errors.password?.message?.toString()}
                    </span>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Confirm Password{" "}
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="
						  w-full
						  rounded-md
						  border
						  bordder-[#E9EDF4]
						  py-3
						  px-5
						  bg-[#FCFDFE]
						  text-base text-body-color
						  placeholder-[#ACB6BE]
						  outline-none
						  focus-visible:shadow-none
						  focus:border-primary
						  "
                      {...register("confirmPassword", {
                        required: "This field is required",
                        validate: (value) =>
                          value === watch("password") ||
                          "Passwords do not match",
                      })}
                    />
                    <span className="text-red-500">
                      {errors.confirmPassword?.message?.toString()}
                    </span>
                  </div>

                  <div className="mb-6 flex items-center justify-between">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="exampleCheck3"
                        checked
                      />
                      <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                        Remember me
                      </label>
                    </div>

                    <a
                      href="#!"
                      className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Sign up
                  </button>
                </form>
                <div className="float-right">
                  <a
                    href="google.com"
                    className="flex font-semibold text-indigo-600 text-sm mt-10"
                  >
                    <svg
                      className="fill-current mr-2 text-indigo-600 w-4"
                      viewBox="0 0 448 512"
                    >
                      <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignUp;
