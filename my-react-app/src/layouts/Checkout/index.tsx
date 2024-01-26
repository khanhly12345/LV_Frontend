import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductOptions } from "../../redux/slice/CartSlice";
import { HandlePrice, getQuantities, getTotal } from "../../utils/constant";
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { createOrder } from "../../redux/slice/OrderSlice";

function Checkout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const carts = useSelector((state: any) => state?.carts?.cartItems);
  const profile = useSelector((state: any) => state?.users.profile);

  const quantities = getQuantities();
  const total = getTotal();
  const userId = profile._id;

  useEffect(() => {
    dispatch(getProductOptions());
  }, [dispatch]);

  console.log(carts);

  const initialOptions = {
    clientId:
      "AbPTZu5SfuYYgHmtQwLIOP6ecl9KaVZlpSUGjv6_XHwjRUZtqsdjjwUwdnQGQHdMMAnnwd1a-ZHda7dh",
    currency: "USD",
    intent: "capture",
  };

  const onCreateOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApproveOrder =  (data: any, actions: any) => {
	const detailCart2 = detailCart
    return actions.order.capture().then((details: any) => {
      const name = details.payer.name.given_name;
      console.log(details);
    	handleSubit(details.status, "PAYPAL", detailCart2, userId);
    });
  };

  let detailCart = carts.map((cart: any, index: number) => ({
    item: cart._id,
    quantity: quantities[index],
  }));

  const handleSubit = (status: string, method: string, detailCart: any, userId: string) => {
    const  order = {
      userId: userId,
      items: detailCart,
      payment: {
        status,
        method: method,
      },
      total: total,
    };
    console.log(order);
	dispatch(createOrder(order))
  };

  return (
    <>
      <Breadcrumbs value="Check Out" />
      <div className="relative mx-auto w-10/12 bg-white mt-4 rounded-md">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Secure Checkout
                <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
              </h1>
              {/* <form action="" className="mt-10 flex flex-col space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.capler@fang.com"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="relative">
                  <label className="text-xs font-semibold text-gray-500">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    placeholder="1234-5678-XXXX-XXXX"
                    className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    className="absolute bottom-3 right-3 max-h-4"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    Expiration date
                  </p>
                  <div className="mr-6 flex flex-wrap">
                    <div className="my-1">
                      <label className="sr-only">Select expiration month</label>
                      <select
                        name="month"
                        id="month"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Month</option>
                      </select>
                    </div>
                    <div className="my-1 ml-3 mr-6">
                      <label className="sr-only">Select expiration year</label>
                      <select
                        name="year"
                        id="year"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Year</option>
                      </select>
                    </div>
                    <div className="relative my-1">
                      <label className="sr-only">Security code</label>
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        placeholder="Security code"
                        className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="sr-only">Card name</label>
                  <input
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="Name on the card"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </form> */}
              <div className="bg-gray-100  py-8 mt-4">
                <div className="container mx-auto px-4">
                  <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* User Info */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-lg font-semibold mb-4">
                        User Information
                      </h2>
                      <div className="mb-2">
                        <span className="font-semibold">Name:</span>{" "}
                        {profile.fullname}
                      </div>
                      <div className="mb-2 break-words">
                        <span className="font-semibold">Email:</span>{" "}
                        {profile.email}
                      </div>
                      {/* Add more user information as needed */}
                    </div>

                    {/* Address Info */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-lg font-semibold mb-4">
                        Shipping Address
                      </h2>
                      <div className="mb-2">
                        <span className="font-semibold">City:</span>{" "}
                        {profile.city}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">District:</span>{" "}
                        {profile.distrist}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Phone:</span>{" "}
                        {profile.phone}
                      </div>
                      {/* Add more address information as needed */}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                By placing this order you agree to the{" "}
                <a
                  href="google.com"
                  className="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
                >
                  Terms and Conditions
                </a>
              </p>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
                onClick={() => handleSubit("1", "1", detailCart, userId)}
              >
                Place Order
              </button>
              <div>OR</div>
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  style={{ layout: "horizontal" }}
                  createOrder={(data, actions) => onCreateOrder(data, actions)}
                  onApprove={(data, actions) => onApproveOrder(data, actions)}
                />
              </PayPalScriptProvider>
            </div>
            <div className="ml-28">
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
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <h2 className="sr-only">Order summary</h2>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
            </div>
            <div className="relative">
              <ul className="space-y-5">
                {carts.map((cart: any, index: number) => (
                  <li className="flex justify-between">
                    <div className="inline-flex">
                      <img
                        src={`https://drive.google.com/thumbnail?id=${cart.productId.image[0]}`}
                        alt=""
                        className="max-h-16"
                      />
                      <div className="ml-3">
                        <p className="text-base font-semibold text-white">
                          {cart.productId.productName}
                        </p>
                        <p className="text-sm font-medium text-white text-opacity-80">
                          {cart.color}
                        </p>
                        <p className="text-sm font-medium text-white text-opacity-80">
                          {"x " + quantities[index]}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-white">
                      {HandlePrice(cart.productId.price)}
                    </p>
                  </li>
                ))}
                <li className="flex justify-between">
                  <div className="inline-flex">
                    <img
                      src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="max-h-16"
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-white">
                        Luisia H35
                      </p>
                      <p className="text-sm font-medium text-white text-opacity-80">
                        Hair Dryer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white">$350.00</p>
                </li>
              </ul>
              <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
              <div className="space-y-2">
                <p className="flex justify-between text-lg font-bold text-white">
                  <span>Total price:</span>
                  <span>{HandlePrice(total)}</span>
                </p>
                <p className="flex justify-between text-sm font-medium text-white">
                  <span>Vat: 10%</span>
                  <span>$55.00</span>
                </p>
              </div>
            </div>
            <div className="relative mt-10 text-white">
              <h3 className="mb-5 text-lg font-bold">Support</h3>
              <p className="text-sm font-semibold">
                +01 653 235 211{" "}
                <span className="font-light">(International)</span>
              </p>
              <p className="mt-1 text-sm font-semibold">
                support@nanohair.com <span className="font-light">(Email)</span>
              </p>
              <p className="mt-2 text-xs font-medium">
                Call us now for payment related issues
              </p>
            </div>
            <div className="relative mt-10 flex">
              <p className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  Money Back Guarantee
                </span>
                <span className="text-xs font-medium text-white">
                  within 30 days of purchase
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
