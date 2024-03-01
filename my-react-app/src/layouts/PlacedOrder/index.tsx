import { Button } from "@material-tailwind/react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

function PlacedOder() {
	return (
		<>
			{/* <Breadcrumbs value="Placed Order"/> */}
			<div className="flex justify-center mt-4">
				<div className="w-10/12 bg-white h-96 flex justify-center">
					<div className="text-center mt-10">
						<div className="bg-green-400 inline-block rounded-full h-10 w-10">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 relative left-1 top-1 text-white" fill="currentColor" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
						</div>
						<div className="text-green-500">
							Success
						</div>
						<div className="text-2xl font-bold">
							Your order have been placed
						</div>
						<div className="mt-10">
							<Link to="/" className="px-5 py-2.5  text-sm font-medium text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								Continue Shopping
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PlacedOder;