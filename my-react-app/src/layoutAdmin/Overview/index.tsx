import SideNavAdmin from "../../components/SideNavAdmin";
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import {
  getChartOrder,
  getChartUser,
  getOrder,
} from "../../redux/slice/OrderSlice";
import { useSelector } from "react-redux";
import { getAllProduct } from "../../redux/slice/ProductsSlice";
import { getAllUser } from "../../redux/slice/UserSlice";

Chart.register(ArcElement, Tooltip, Legend);

function Overview() {
  const dispacth = useAppDispatch();
  const order = useSelector((state: any) => state.orders.order);
  const product = useSelector((state: any) => state.products.data);
  const user = useSelector((state: any) => state.users.data);
  const dataChartUser = useSelector((state: any) => state.orders.dataChartUser);
  const dataChartOrder = useSelector(
    (state: any) => state.orders.dataChartOrder
  );
  console.log(dataChartUser);
  useEffect(() => {
    dispacth(getOrder());
    dispacth(getAllProduct());
    dispacth(getAllUser());
    dispacth(getChartUser());
    dispacth(getChartOrder());
  }, [dispacth]);

  const lables = dataChartUser.map((user: any) => `user ${user._id}`);
  const totalOrder = dataChartUser.map((user: any) => user.totalOrders);

  const dataUser = {
    labels: lables,
    datasets: [
      {
        label: "Tổng 5 đơn hàng có giá trị cao nhất",
        data: totalOrder, // Dữ liệu thể hiện giá trị của các đơn hàng
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Màu nền của cột biểu đồ
      },
    ],
  };

  const lablesPie = dataChartOrder.map((order: any) => `Đơn hàng ${order._id}`);
  const totalOrderPie = dataChartOrder.map((order: any) => order.totalAmount);
  console.log(totalOrderPie)
  const dataUserPie = {
    labels: lablesPie,
    datasets: [
      {
        label: 'Tổng lượt mua',
        data: totalOrderPie, // Dữ liệu thể hiện giá trị của các đơn hàng
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Màu nền của cột biểu đồ
      },
    ],
  };

  return (
    <>
      <SideNavAdmin />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className=" h-32 rounded bg-gray-50 dark:bg-gray-800 relative imgChart">
              <div className="flex justify-between p-2 px-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold text-green-700">
                    {user.length}
                  </span>
                  <span className="opacity-50">USERS</span>
                </div>
                <div className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 text-green-700"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute right-0 left-0 bottom-0 bg-gradient-to-r from-green-400 to-green-300 p-2 px-6 rounded flex justify-between">
                <div className="text-white">% change</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-6 text-white"
                    fill="currentColor"
                  >
                    <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className=" h-32 rounded bg-gray-50 dark:bg-gray-800 relative imgChart">
              <div className="flex justify-between p-2 px-6 ">
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold text-red-700">
                    {order.length}
                  </span>
                  <span className="opacity-50">ORDERS</span>
                </div>
                <div className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 text-red-700"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute right-0 left-0 bottom-0 bg-gradient-to-r from-red-400 to-red-300 p-2 px-6 rounded flex justify-between">
                <div className="text-white">% change</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-6 text-white"
                    fill="currentColor"
                  >
                    <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className=" h-32 rounded bg-gray-50 dark:bg-gray-800 relative imgChart">
              <div className="flex justify-between p-2 px-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold text-orange-500">
                    {product.length}
                  </span>
                  <span className="opacity-50">PRODUCTS</span>
                </div>
                <div className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute right-0 left-0 bottom-0 bg-gradient-to-r from-orange-400 to-orange-300 p-2 px-6 rounded flex justify-between">
                <div className="text-white">% change</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-6 text-white"
                    fill="currentColor"
                  >
                    <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div> */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded">
              <Bar data={dataUser} height="250px" width="250px" />
            </div>
            <div className="bg-white rounded ">
              <Pie
                data={dataUserPie}
                height="250px"
                width="250px"
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
