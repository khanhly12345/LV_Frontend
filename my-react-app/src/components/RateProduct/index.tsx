import { Rating } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import avatar from "../../assets/product/iphone-14-pro-max-256gb-(52).webp";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getIdFromToken } from "../../utils/constant";
import { useAppDispatch } from "../../redux/store";
import { createRate, getRateById } from "../../redux/slice/RateSlice";
import { useSelector } from "react-redux";

function RateProduct() {
	const [rate, setRate] = useState(0)
	const [comment, setComment] = useState('')
	const dispacth = useAppDispatch()

	const { id } = useParams()
	const navigate = useNavigate()
	const rates = useSelector((state: any) => state.rates.rate)
	console.log(rates);
	const userId = getIdFromToken()

	const handleSubmit = async () => {
		// if(userId) {
		// 	navigate('/login')
		// }
		console.log(id, userId, comment, rate)
		await dispacth(createRate({ productId: id, userId, comment, rate }))
		dispacth(getRateById(id))
		setComment('')
		setRate(0)
	}

	useEffect(() => {
		dispacth(getRateById(id))
	}, [dispacth])

	const averageRating = () => {
		if (rates.length === 0) return 0;

		const totalRating = rates.reduce((sum: any, current: any) => sum + current.rate, 0);
		return totalRating / rates.length;
	};

	const calculateStarPercentage = (star: any) => {
		if (rates.length === 0) return 0;

		const starCount = rates.filter((rate: any) => rate.rate === star).length;
		return (starCount / rates.length) * 100;
	};

	const calculateDay = (dateString: any)  => {

		const dateObject = new Date(dateString);
		const year = dateObject.getFullYear();
		const month = dateObject.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
		const day = dateObject.getDate();
		return `${day}-${month}-${year}`;
	}

	return (
		<>
		<div className="flex justify-center pt-4">
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
						value={rate}
						onChange={(value) => setRate(value)}
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
					value={comment}
					onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
				  onClick={() => handleSubmit()}
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
                  {averageRating()}
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
			  {
				[5, 4, 3, 2, 1].map((star, index) => (
					<div className="flex items-center mt-4">
						<a
						href="google.com"
						className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
						>
						{ star} star
						</a>
						<div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div
							className="h-5 bg-yellow-300 rounded"
							style={{ width: `${calculateStarPercentage(star)}%` }}
						></div>
						</div>
						<span className="text-sm font-medium text-gray-500 dark:text-gray-400">
							{calculateStarPercentage(star).toFixed(2) + "%"}
						</span>
					</div>
				))
			  }
            </div>
          </div>
          <div className="m-16 h-200 overflow-y-scroll custom-scroll-container">
			{
				rates.map((rate: any) => (
					<article className="mb-6">
					<div className="flex items-center mb-4">
						<img
						className="w-10 h-10 me-4 rounded-full"
						src={`https://drive.google.com/thumbnail?id=${rate?.userId?.urlId}`}
						alt=""
						/>
						<div className="font-medium dark:text-white">
						<p>
							{rate?.userId?.fullname}{" "}
							<time className="block text-sm text-gray-500 dark:text-gray-400">
							Reviewed in Vietnamese on <time>{calculateDay(rate.createdAt)}</time>
							</time>
						</p>
						</div>
					</div>
					<div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
						<Rating
							placeholder=""
							unratedColor="amber"
							ratedColor="amber"
							value={rate?.rate}
							readonly
						/>
						<h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
						Thinking to buy another one!
						</h3>
					</div>
					<p className="mb-2 text-gray-500 dark:text-gray-400">
						{rate.comment}
					</p>
					</article>
				))
			}
          </div>
        </section>
        <ToastContainer />
      </div>
		</>
	)
}

export default RateProduct;