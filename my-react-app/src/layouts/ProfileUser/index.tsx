import Breadcrumbs from "../../components/Breadcrumbs";
import Avatar from "../../assets/avatar/79d31e406fe3d3d7322b18666184911d.jpg";
import NavUser from "../../components/NavUser";
function ProfileUser() {
  return (
    <>
      <Breadcrumbs value="Profile User" />
      <section className=" flex justify-center">
        <div className="w-10/12 flex justify-center">
          <NavUser />
          <div className="bg-white w-9/12 p-4">
            <div className="text-2xl text-blue-600">PROFILE</div>
            <hr className="mt-4" />
            <div className="p-4 grid  grid-cols-3">
              <div className="pt-4 col-span-2">
                <table className="min-w-full bg-white">
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 w-4/12">Tên</td>
                      <td className="py-2 px-4 ">Content 1</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 ">SĐT</td>
                      <td className="py-2 px-4 ">Content 2</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 ">Thành phố</td>
                      <td className="py-2 px-4 ">Content 2</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 ">Huyện</td>
                      <td className="py-2 px-4 ">Content 2</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 ">Ghi chú thêm</td>
                      <td className="py-2 px-4 ">Content 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <img src={Avatar} alt="" className="w-20 h-20 rounded-full" />
                <div className="text-lg relative left-4">Avatar</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileUser;
