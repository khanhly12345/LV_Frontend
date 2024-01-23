import Breadcrumbs from "../../components/Breadcrumbs";
import Avatar from "../../assets/avatar/79d31e406fe3d3d7322b18666184911d.jpg";
import NavUser from "../../components/NavUser";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/store";
import { addUser } from "../../redux/slice/UserSlice";

function AddProfile() {
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	  } = useForm();
	  const submitForm = (data: any) => {
		console.log(data?.fullname)
		const formData = new FormData();
		const fullName = data.fullname
		formData.append("fullname", fullName);
		formData.append("avatar", data.avatar[0]);
		formData.append("phone", data?.phone);
		formData.append("city", data?.city);
		formData.append("distrist", data?.district);
		formData.append("moreInfor", data?.note);

		console.log(formData);
		dispatch(addUser(formData))
	  };

  return (
    <>
      <Breadcrumbs value="Profile User" />
      <section className="flex justify-center">
        <div className="w-10/12 flex justify-center">
          <NavUser />
          <div className="bg-white w-9/12 p-4">
            <div className="text-2xl text-blue-600 mb-2">ADD PROFILE</div>
            <hr className="mt-4" />
            <div className="p-4 ">
              <form onSubmit={handleSubmit(submitForm)} encType="multipart/form-data">
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
							{...register("district")}
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
							{...register("moreInfor")}
						/>
					</div>
					<div className="mb-1 p-2">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
						>
							Avatar
						</label>
						<input
							className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="file"
							required
							{...register("avatar")}
						/>
					</div>
					<div className="mb-1 p-2">
						<button className="bg-blue-600  text-white font-bold py-2 px-4 rounded hover:opacity-50">
							Submit
						</button>
					</div>
				</div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddProfile;
