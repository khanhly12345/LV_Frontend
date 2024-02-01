import { Rating } from "@material-tailwind/react";
import avatar from "../../assets/product/iphone-14-pro-max-256gb-(52).webp";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { getProductById } from "../../redux/slice/ProductsSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { HandlePrice, getCart } from "../../utils/constant";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getProductOptionsById } from "../../redux/slice/OptionsProductSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { stringify } from "querystring";
import { addCartId } from "../../redux/slice/CartSlice";
import RateProduct from "../../components/RateProduct";

interface option {
  _id: string;
  color: string;
  ram: string;
  productId: string;
  quantity: number;
}

function Detail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useSelector((state: any) => state?.products?.data);
  const productOptions = useSelector(
    (state: any) => state?.productOptions?.dataOptions
  );

  const [filedId, setFiledId] = useState({ thumnails: "", index: -1 });
  const [colorId, setColorId] = useState({ id: "", index: -1 });
  const [ramId, setRamId] = useState({ id: "", index: -1 });
  const [idOption, setIdOption] = useState("");
  const cartId = getCart();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getProductById(id));
    dispatch(getProductOptionsById(id));
  }, []);

  const handleAddCart = () => {
    if (idOption && !cartId.includes(idOption)) {
    //   localStorage.setItem("cart", JSON.stringify([...cartId, idOption]));
		dispatch(addCartId(idOption))
      toast.success("Success Notification !", {
        autoClose: 1000,
      });
    }else {
		toast.warning("Chose option or the option have existed in cart", {
			autoClose: 1000,
		});
	}
  };

  return (
    <>
      <Breadcrumbs value="Product Detail" />
      <div className="flex justify-center">
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800 w-10/12 rounded-lg">
          <div className="max-w-6xl px-4 mx-auto md:px-6">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full mb-8 md:w-1/2 md:mb-0">
                <div className="sticky top-0 z-50 overflow-hidden ">
                  <div className="mb-6 lg:mb-10 lg:h-2/4 flex justify-center">
                    {product && product.image && product.image[0] && (
                      <img
                        src={`https://drive.google.com/thumbnail?id=${
                          filedId.thumnails
                            ? filedId.thumnails
                            : product.image[0]
                        }&sz=w600-h400`}
                        alt="drive image"
                        // className="w-full h-80"
                      />
                    )}
                  </div>
                  <div className="flex-wrap hidden md:flex ">
                    {product?.image
                      ?.slice(-4)
                      .map((thumnails: string, index: number) => (
                        <div
                          className="w-1/2 p-2 sm:w-1/4"
                          onClick={() => setFiledId({ thumnails, index })}
                        >
                          <a
                            className={`block ${
                              filedId.index === index
                                ? "border border-purple-600"
                                : ""
                            } b hover:border-fuchsia-300`}
                          >
                            <img
                              src={`https://drive.google.com/thumbnail?id=${thumnails}&sz=w100-h100`}
                              alt=""
                              className="object-cover w-full lg:h-20"
                            />
                          </a>
                        </div>
                      ))}
                  </div>
                  <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 ">
                    <div className="flex flex-wrap items-center mt-6">
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-truck"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </svg>
                      </span>
                      <h2 className="text-lg font-bold text-gray-700 dark:text-gray-400">
                        Free Shipping
                      </h2>
                    </div>
                    <div className="mt-2 px-7">
                      <a
                        className="text-sm text-fuchsia-400 dark:text-fuchsia-200"
                        href="google.com"
                      >
                        Get delivery dates
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                  <div className="mb-8 ">
                    <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                      {product?.productName}
                    </h2>
                    <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                      <span>{HandlePrice(product?.price)}</span>
                      <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                        {HandlePrice(
                          product?.price + (product?.price * 12) / 100
                        )}
                      </span>
                    </p>
                    <p className="max-w-md text-gray-700 dark:text-gray-400">
                      {product?.description}
                    </p>
                  </div>
                  <div className="mb-8">
                    <h2 className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-purple-600">
                      Colors
                    </h2>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      {productOptions?.map(
                        (productOption: option, index: number) => (
                          <button
                            className={`px-4 py-2 mb-2 mr-4 font-semibold border ${
                              productOption._id === ramId.id ||
                              index === colorId.index
                                ? "border-purple-600"
                                : ""
                            } rounded-md hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400`}
                            onClick={() => {
                              setColorId({ id: productOption._id, index });
                              setRamId({ id: "", index: -1 });
                              setIdOption(productOption._id);
                            }}
                          >
                            {productOption?.color}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                  <div className="mb-8 ">
                    <h2 className="w-16 pb-1 mb-4 text-xl font-semibold border-b border-purple-600 dark:border-gray-600 dark:text-gray-400">
                      RAM
                    </h2>
                    <div>
                      <div className="flex flex-wrap -mb-2">
                        {productOptions?.map(
                          (productOption: option, index: number) => (
                            <button
                              className={`px-4 py-2 mb-2 mr-4 font-semibold border ${
                                index === ramId.index ||
                                productOption._id === colorId.id
                                  ? "border-purple-600"
                                  : ""
                              } rounded-md hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400`}
                              onClick={() => {
                                setRamId({ id: productOption._id, index });
                                setColorId({ id: "", index: -1 });
                                setIdOption(productOption._id);
                              }}
                            >
                              {productOption?.ram}
                            </button>
                          )
                        )}
                        {/* <button className="px-4 py-2 mb-2 mr-4 font-semibold border border-purple-600 rounded-md hover:border-fuchsia-400 dark:border-gray-400 hover:text-fuchsia-600 dark:hover:border-gray-300 dark:text-gray-400">
                          8 GB
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      className="w-full p-4 bg-purple-500 rounded-md lg:w-5/5  text-gray-50 hover:bg-purple-600 "
                      onClick={() => handleAddCart()}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="flex justify-center pt-4">
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800 w-10/12 rounded-lg">
          <h1 className="font-bold relative left-24">ĐÁNH GIÁ SẢN PHẨM</h1>
          <div className="grid grid-cols-2">
            <div>
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-lg mr-2">Rate the product:</span>
                  <div>
                    <div className="flex flex-col gap-4">
                      <Rating
                        placeholder=""
                        unratedColor="amber"
                        ratedColor="amber"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Write a review:
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    rows={4}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Submit Review
                </button>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center mb-2">
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.95
                </p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  out of
                </p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  5
                </p>
              </div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                1,745 global ratings
              </p>
              <div className="flex items-center mt-4">
                <a
                  href="google.com"
                  className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  5 star
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  70%
                </span>
              </div>
              <div className="flex items-center mt-4">
                <a
                  href="google.com"
                  className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  4 star
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "17%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  17%
                </span>
              </div>
              <div className="flex items-center mt-4">
                <a
                  href="google.com"
                  className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  3 star
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "8%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  8%
                </span>
              </div>
              <div className="flex items-center mt-4">
                <a
                  href="google.com"
                  className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  2 star
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "4%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  4%
                </span>
              </div>
              <div className="flex items-center mt-4">
                <a
                  href="google.com"
                  className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  1 star
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "1%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  1%
                </span>
              </div>
            </div>
          </div>
          <div className="m-16 h-200 overflow-y-scroll custom-scroll-container">
            <article>
              <div className="flex items-center mb-4">
                <img
                  className="w-10 h-10 me-4 rounded-full"
                  src={avatar}
                  alt=""
                />
                <div className="font-medium dark:text-white">
                  <p>
                    Jese Leos{" "}
                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                      Joined on August 2014
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Thinking to buy another one!
                </h3>
              </div>
              <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  Reviewed in the United Kingdom on <time>March 3, 2017</time>
                </p>
              </footer>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This is my third Invicta Pro Diver. They are just fantastic
                value for money. This one arrived yesterday and the first thing
                I did was set the time, popped on an identical strap from
                another Invicta and went in the shower with it to test the
                waterproofing.... No problems.
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                It is obviously not the same build quality as those very
                expensive watches. But that is like comparing a Citroën to a
                Ferrari. This watch was well under £100! An absolute bargain.
              </p>
              <a
                href="google.com"
                className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Read more
              </a>
              <aside>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  19 people found this helpful
                </p>
                <div className="flex items-center mt-3">
                  <a
                    href="google.com"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Helpful
                  </a>
                  <a
                    href="google.com"
                    className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
                  >
                    Report abuse
                  </a>
                </div>
              </aside>
            </article>
            <article>
              <div className="flex items-center mb-4">
                <img
                  className="w-10 h-10 me-4 rounded-full"
                  src={avatar}
                  alt=""
                />
                <div className="font-medium dark:text-white">
                  <p>
                    Jese Leos{" "}
                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                      Joined on August 2014
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Thinking to buy another one!
                </h3>
              </div>
              <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  Reviewed in the United Kingdom on <time>March 3, 2017</time>
                </p>
              </footer>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This is my third Invicta Pro Diver. They are just fantastic
                value for money. This one arrived yesterday and the first thing
                I did was set the time, popped on an identical strap from
                another Invicta and went in the shower with it to test the
                waterproofing.... No problems.
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                It is obviously not the same build quality as those very
                expensive watches. But that is like comparing a Citroën to a
                Ferrari. This watch was well under £100! An absolute bargain.
              </p>
              <a
                href="google.com"
                className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Read more
              </a>
              <aside>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  19 people found this helpful
                </p>
                <div className="flex items-center mt-3">
                  <a
                    href="google.com"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Helpful
                  </a>
                  <a
                    href="google.com"
                    className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
                  >
                    Report abuse
                  </a>
                </div>
              </aside>
            </article>
            <article>
              <div className="flex items-center mb-4">
                <img
                  className="w-10 h-10 me-4 rounded-full"
                  src={avatar}
                  alt=""
                />
                <div className="font-medium dark:text-white">
                  <p>
                    Jese Leos{" "}
                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                      Joined on August 2014
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Thinking to buy another one!
                </h3>
              </div>
              <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  Reviewed in the United Kingdom on <time>March 3, 2017</time>
                </p>
              </footer>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This is my third Invicta Pro Diver. They are just fantastic
                value for money. This one arrived yesterday and the first thing
                I did was set the time, popped on an identical strap from
                another Invicta and went in the shower with it to test the
                waterproofing.... No problems.
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                It is obviously not the same build quality as those very
                expensive watches. But that is like comparing a Citroën to a
                Ferrari. This watch was well under £100! An absolute bargain.
              </p>
              <a
                href="google.com"
                className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Read more
              </a>
              <aside>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  19 people found this helpful
                </p>
                <div className="flex items-center mt-3">
                  <a
                    href="google.com"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Helpful
                  </a>
                  <a
                    href="google.com"
                    className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
                  >
                    Report abuse
                  </a>
                </div>
              </aside>
            </article>
          </div>
        </section>
        <ToastContainer />
      </div> */}
	  <RateProduct />
    </>
  );
}

export default Detail;
