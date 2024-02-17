import Breadcrumbs from "../../components/Breadcrumbs";
import Avatar from "../../assets/avatar/79d31e406fe3d3d7322b18666184911d.jpg";
import NavUser from "../../components/NavUser";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
function ProfileUser() {
	const profile = useSelector((state: any) => state?.users.profile)

  return (
    <>
      <Breadcrumbs value="Profile User" />
      <section className=" flex justify-center">
        <div className="w-10/12 flex justify-center">
          <NavUser />
          <div className="bg-white w-9/12 p-4">
            <div className="text-2xl text-blue-600 mb-2">PROFILE</div>
			{
				Object.keys(profile).length === 0 ?
					<Link to="/user/addprofile" className="bg-blue-500 text-white px-2 py-1 font-medium border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 ">
						Add Profile
					</Link>
					: ""
			}
            <hr className="mt-4" />
            <div className="p-4 grid  grid-cols-3">
              <div className="pt-4 col-span-2">
                <table className="min-w-full bg-white">
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 w-4/12">Tên</td>
                      <td className="py-2 px-4 text-red-600">{ profile.fullname }</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 ">SĐT</td>
                      <td className="py-2 px-4 text-red-600">{ profile.phone }</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 ">Thành phố</td>
                      <td className="py-2 px-4 text-red-600">{ profile.city }</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 ">Huyện</td>
                      <td className="py-2 px-4 text-red-600">{ profile.distrist }</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 ">Ghi chú thêm</td>
                      <td className="py-2 px-4 text-red-600">{ profile.inforMore || 'Giao hàng ở gần hẻm' }</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border flex justify-center items-center border-[#9c27b0] rounded-md">
				<div>
					<img src={`https://drive.google.com/thumbnail?id=${profile.urlId}`} alt="" className="w-20 h-20 rounded-full left-12 bottom-4 relative" />
					<div className="text-lg relative left-4 text-[#9c27b0] tracking-widest">{ profile.fullname }</div>
				</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileUser;
