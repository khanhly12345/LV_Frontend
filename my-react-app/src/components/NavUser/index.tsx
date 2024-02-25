import { Link } from "react-router-dom";
import Avatar from "../../assets/avatar/79d31e406fe3d3d7322b18666184911d.jpg";
import { useEffect, useState } from "react";
import { getPathName } from "../../utils/getPathName";
import { useSelector } from "react-redux";
import ModelEdit from "../ModelEdit";
import { useForm } from "react-hook-form";

function NavUser() {
  const [pathName, setPathName] = useState<String>("");
  const [open, setOpen] = useState(false)

  const navLink = [
    {
      title: "Profile User",
      path: "/user/profile",
      viewBox: "0 0 20 18",
      color: "text-blue-500",
      icon: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z",
    },
    {
      title: "Purchase",
      path: "/user/purchase",
      viewBox: "0 0 448 512",
      color: "text-red-500",
      icon: "M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z",
    },
    {
      title: "Change Password",
      path: "/user/changepassword",
      viewBox: "0 0 448 512",
      color: "text-yellow-500",
      icon: "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z",
    },
  ];

  const profile = useSelector((state: any) => state?.users.profile)

  useEffect(() => {
    const currentUrl = window.location.href;
    const path = getPathName(currentUrl);
    setPathName(path);
    console.log(path);
  }, [pathName]);

  return (
    <div className="w-3/12 mr-4">
      <div className="p-4">
        <div className="flex">
          <img src={`https://drive.google.com/thumbnail?id=${profile.urlId}`} alt="" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col pl-4 font-semibold">
            <span className="truncate w-48">{ profile.email }</span>
            <span className=" flex text-gray-400">
              <svg
                style={{
                  marginTop: "5px",
                  height: "14px",
                  marginRight: "5px",
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="20"
                viewBox="0 0 640 512"
                className="text-gray-500"
                fill="currentColor"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z" />
              </svg>
			  { open ? <ModelEdit setOpen={setOpen} /> : "" }
              <span
			  	onClick={() => setOpen(true)}
			  >Sửa hồ sơ</span>
            </span>
          </div>
        </div>
        <hr className="w-48 mt-4" />
        <div>
          <ul className="space-y-2 font-medium">
            {navLink.map((nav) => (
              <li>
                <Link
                  to={nav.path}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className={`flex-shrink-0 w-5 h-5 ${nav.color} transition duration-75 dark:text-gray-400 group-hover:opacity-70 dark:group-hover:text-white`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox={nav.viewBox}
                  >
                    <path d={nav.icon} />
                  </svg>
                  <span
                    className={`flex-1 ms-3 whitespace-nowrap ${
                      pathName === nav.path ? "text-red-600" : ""
                    }`}
                  >
                    {nav.title}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="google.com"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavUser;
