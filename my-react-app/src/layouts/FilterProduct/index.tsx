import Product from "../../components/Product";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { getAllProduct } from "../../redux/slice/ProductsSlice";
import { useSelector } from "react-redux";
import { filterProduct } from "../../redux/slice/FilterSlice";

function FilterProduct() {
	const [category, setCategory] = useState('')
	const [brand, setBrand] = useState('')
	const [price, setPrice] = useState('')
	const [filter, setFilter] = useState([])

	const dispacth = useAppDispatch()
	const products = useSelector((state: any) => state.filters.list)

	console.log(products)

	const categories = ["smartphone", "tablet", "laptop"]
	const brandStatic = ["samsung", "oppo", "xiaomi", "apple"]
	const priceStatic = ["21000000", "22000000"]


	useEffect(() => {
		dispacth(getAllProduct())
	}, [])

	useEffect(() => {
	    if (category !== "" || brand !== "" || price !== "") {
			const filteredProducts = products.filter((product: any) => {
			  const categoryMatch = !category || product.category.toLowerCase() === category.toLowerCase();
			  const brandMatch = !brand || product.brand.toLowerCase() === brand.toLowerCase();
			  let priceMatch = false;

				if (price === "21000000") {
					console.log(price)
				  priceMatch = product.price < parseInt(price);
				} else if (price === "22000000") {
				  priceMatch = product.price > parseInt(price);
				}

			  return categoryMatch && brandMatch && priceMatch;
			});
			setFilter(filteredProducts);
		  } else {
			setFilter(products);
		  }
	}, [category, brand, products, price])

  return (
    <>
	<Breadcrumbs value="Filter Product" />
      <section className="flex justify-center mt-4">
		<div className="w-10/12 flex justify-center rounded-md">
			<div className="w-3/12 h-screen bg-white mr-4 rounded-md">
					<div className="about_branch  p-5 font-normal  mt-4">
                        <span>Category</span><br></br>
                        <div className="mt-5"></div>
						<div className="text-gray-500">
							{
								categories.map((categori) => (
									<div>
										<input
											type="checkbox" id="brand1" value={categori}  className="rounded-md"
											checked ={ categori === category ? true : false}
											onChange={(e) => setCategory(e.target.value)}
										/>
										{' '}<label htmlFor="brand1" className="text-1xl">{categori.toUpperCase()}</label>
									</div>
								))
							}
						</div>
						<hr className="mt-5"></hr>
                    </div>
					<div className="about_branch  p-5 font-normal">
                        <span>Brand</span><br></br>
                        <div className="mt-5"></div>
						<div className="text-gray-500">
						<div className="text-gray-500">
							{
								brandStatic.map((value) => (
									<div>
										<input
											type="checkbox" id="brand1" value={value}  className="rounded-md"
											checked ={ value === brand ? true : false}
											onChange={(e) => setBrand(e.target.value)}
										/>
										{' '}<label htmlFor="brand1" className="text-1xl">{value.toUpperCase()}</label>
									</div>
								))
							}
						</div>
						</div>
						<hr className="mt-5"></hr>
                    </div>
					<div className="about_branch  p-5 font-normal">
                        <span>Price</span><br></br>
                        <div className="mt-5"></div>
						<div className="text-gray-500">
							{
								priceStatic.map((value) => (
									<div>
										<input
											type="checkbox" id="brand1" value={value}  className="rounded-md"
											checked ={ value === price ? true : false}
											onChange={(e) => setPrice(e.target.value)}
										/>
										{' '}<label htmlFor="brand1" className="text-1xl">
												{ value === "21000000" ? "<" + value.toUpperCase() : ">" + value.toUpperCase()}
											</label>
									</div>
								))
							}
						</div>
						<hr className="mt-5"></hr>
                    </div>
			</div>
			<div className="w-9/12 rounded-md pl-4 pb-4">
				<div className="grid grid-cols-3 bg-white overflow-y-scroll custom-scroll-container h-screen pl-4">
					{
						filter?.map((product: any, index: number) => (
							<Product
								productId={product._id}
								productName={product.productName}
								price={product.price}
								idUrl={product.image[0]}

							/>
						))
					}
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</div>
      </section>
    </>
  );
}

export default FilterProduct;
