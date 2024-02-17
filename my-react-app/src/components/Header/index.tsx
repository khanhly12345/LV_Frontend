import { useSelector } from "react-redux";
import logoTop from "../../assets/logo/logotop.webp";
import { accessToken, getCart, removeAccessToken, removeRefreshToken } from "../../utils/constant";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { getAllCartId, addCartId } from "../../redux/slice/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import { getUser, removeProfile } from "../../redux/slice/UserSlice";
import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Search from "../Search";

interface Profile {
  email: string;
  urlId: string;
}

function Header() {
  const cart = useSelector((state: any) => state?.carts?.cartId);
  const profile	:Profile = useSelector((state: any) => state?.users.profile);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  //   const [profile, setProfile] = useState<Profile>();

  const token = accessToken();
  useEffect(() => {
    if (token) {
      //   dispatch(getUser()).then((res: any) => {
      //     setProfile(res.payload);
      //   });
      dispatch(getUser());
    }
  }, [dispatch, token]);

  const handleLogOut = () => {
	removeAccessToken()
	removeRefreshToken()
	dispatch(removeProfile())
	navigate("/login")
  }

  return (
    <>
      <div>
        <img src={logoTop} alt="" />
      </div>
      <div className="bg-white ">
        <div className="border py-3 px-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              <span className="ml-2 font-semibold text-[#252C32]">
                What a Market
              </span>
            </div>

            <div className="ml-6 flex flex-1 gap-x-3">
              <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="text-sm font-medium">Categories</span>
              </div>

              {/* <div className="w-full mt-2 relative">
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="search"
                    className="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-light-blue-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(173, 216, 230)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-light-blue-300"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />

                  <span
                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <ul className="bg-white absolute w-95 pl-2 z-10 rounded py-2 mt-1 shadow-2xl">
                  <li className="flex">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">hi</span>
                  </li>
                </ul>
              </div> */}
			  <Search />
            </div>

            <div className="ml-2 flex">
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fill-rule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Orders</span>
              </div>

              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Favorites</span>
              </div>

              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <Link to="/cart" className="flex">
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      {cart.length}
                    </span>
                  </div>
                  <span className="text-sm font-medium pl-2">Cart</span>
                </Link>
              </div>
              {Object.keys(profile).length !== 0 ? (
                <Tooltip content={profile.email}>
                  <Menu>
                    <MenuHandler>
                      <Avatar
                        placeholder=""
                        src={`https://drive.google.com/thumbnail?id=${profile.urlId}`}
                        alt="avatar"
                      />
                    </MenuHandler>
                    <MenuList placeholder="">
                      <MenuItem placeholder="">
					  	<Link to="/user/profile">
							<Typography
							// variant="text"
							color="red"
							className="mb-1 font-normal"
							placeholder=""
							>
								profile
							</Typography>
						</Link>
                      </MenuItem>
                      <hr />
                      <MenuItem placeholder="">
                        <Typography
                          // variant="text"
                          color="blue-gray"
                          className="mb-1 font-normal"
                          placeholder=""
						  onClick={() => handleLogOut()}
                        >
                          Log Out
                        </Typography>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Tooltip>
              ) : (
                <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                  <span className="text-sm font-medium">
					<Link to="/login">
						Sign in
					</Link>
				</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-x-2 py-1 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">California</span>
            </div>

            <div className="flex gap-x-8">
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Best seller
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                New Releases
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Books
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Computers
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Fashion
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Health
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Pharmacy
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Toys & Games
              </span>
            </div>

            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              Becoma a seller
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
