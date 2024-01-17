import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useAppDispatch } from "../../redux/store";
import { useCallback, useEffect, useState } from "react";
import { getProductOptions } from "../../redux/slice/CartSlice";
import { HandlePrice } from "../../utils/constant";

function Cart() {
	const dispatch = useAppDispatch()
	const carts = useSelector((state: any) => state?.carts?.cartItems)
	const [quantities, setQuantities] = useState<number[]>([])

	useEffect(() => {
		dispatch(getProductOptions())
		setQuantities(new Array(carts.length).fill(1))
	}, [dispatch, carts.length])

	const arrayPrice = carts.map((cart: any) => parseInt(cart.productId.price));
	const newTotalPrice = arrayPrice.reduce((initPrice: number, currentPrice: number, index: number) => (
		initPrice + (currentPrice || 0) * (quantities[index])
	), 0);


	const inCreaseQuantity = (index: number) => {
        const newQuantities = [...quantities]
        newQuantities[index] = newQuantities[index]  + 1
        setQuantities(newQuantities)
    }

    const deCreaseQuantity = useCallback((index: number) => {
        const newQuantities = [...quantities]
        if(newQuantities[index] > 1) {
             newQuantities[index] = newQuantities[index]  - 1
            setQuantities(newQuantities)
        }
    }, [quantities])


  return (
    <>
	<Breadcrumbs value="Shopping Cart" />
      <div className="bg-gray-100 h-screen ">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>

						{
							carts?.map((cart: any, index: any) => (
								<>
								<tr>
									<td className="py-4">
									<div className="flex items-center">
										<img
										className="h-16 w-20 mr-4"
										src={`https://drive.google.com/thumbnail?id=${cart.productId.image[0]}&sz=w200-h100`}
										alt=""
										/>
										<span className="font-semibold">{cart.productId.productName}</span>
									</div>
									</td>
									<td className="py-4">{HandlePrice(cart.productId.price)}</td>
									<td className="py-4">
									<div className="flex items-center">
										<button
											className="border rounded-md py-2 px-4 mr-2"
											onClick={() => deCreaseQuantity(index)}
										>
										-
										</button>
										<span className="text-center w-8">{quantities[index]}</span>
										<button
											className="border rounded-md py-2 px-4 ml-2"
											onClick={() => inCreaseQuantity(index)}
										>
										+
										</button>
									</div>
									</td>
									<td className="py-4">{ HandlePrice(quantities[index] * cart.productId.price)}</td>
									<td>X</td>
									</tr>
								</>
							))
						}

                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src="https://via.placeholder.com/150"
                            alt=""
                          />
                          <span className="font-semibold">Product name</span>
                        </div>
                      </td>
                      <td className="py-4">$19.99</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            -
                          </button>
                          <span className="text-center w-8">1</span>
                          <button
						  	className="border rounded-md py-2 px-4 ml-2"
							// onClick={() => setQuantities(index)}
						  >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">$19.99</td>
					  <td>X</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-red-600">{ HandlePrice(newTotalPrice) }</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-24">
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
    </>
  );
}

export default Cart;
