import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { editUser } from "../../redux/slice/UserSlice";

function ModelEdit({ setOpen }: any) {
  const user = useSelector((state: any) => state.users.profile);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    dispatch(editUser(data));
  };
  return (
    <>
      <div className="absolute flex justify-center  left-0 top-0 bottom-0 right-0 pt-14">
        <div className="fixed bg-black opacity-50 inset-0 z-50"></div>
        <div
          data-te-modal-init
          data-te-backdrop="false"
          className="left-0 top-0 z-[1055] block h-full w-4/12 overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModalComponents"
          aria-labelledby="exampleModalComponentsLabel"
          aria-hidden="true"
        >
          <div
            data-te-modal-dialog-ref
            className="pointer-events-none relative w-auto opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:my-7 min-[576px]:max-w-[500px]"
          >
            <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <h5
                  className="text-xl font-medium leading-normal text-blue-700 dark:text-neutral-200"
                  id="exampleModalComponentsLabel"
                >
                  EDIT PROFILE
                </h5>
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-modal-dismiss
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative flex-auto p-4" data-te-modal-body-ref>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  encType="multipart/form-data"
                >
                  <div className="mb-4 grid  grid-cols-2">
                    <div className="mb-1 p-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Full Name
                      </label>
                      <input
                        className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Full Name"
                        required
                        defaultValue={user?.fullname}
                        {...register("fullname")}
                      />
                    </div>
                    <div className="mb-1 p-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Phone
                      </label>
                      <input
                        className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Phone"
                        required
                        defaultValue={user?.phone}
                        {...register("phone")}
                      />
                    </div>
                    <div className="mb-1 p-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        City
                      </label>
                      <input
                        className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="City"
                        required
                        defaultValue={user?.city}
                        {...register("city")}
                      />
                    </div>
                    <div className="mb-1 p-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        District
                      </label>
                      <input
                        className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Distrist"
                        required
                        defaultValue={user?.distrist}
                        {...register("distrist")}
                      />
                    </div>
                    <div className="mb-1 p-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Note
                      </label>
                      <input
                        className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Note"
                        required
                        defaultValue={user?.moreInfor}
                        {...register("moreInfor")}
                      />
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button
                      type="button"
                      className="inline-block rounded bg-red-700 px-6 pb-2 pt-2.5 hover:opacity-80 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                      data-te-modal-dismiss
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="ml-1 inline-block rounded bg-blue-700 hover:opacity-80 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
					  onClick={() => setOpen(false)}
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelEdit;
