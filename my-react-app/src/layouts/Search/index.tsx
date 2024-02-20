import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useEffect, useState } from "react";
import axiosAdmin from "../../api/axios";
import Product from "../../components/Product";

function Search() {
	const { value } = useParams()
	const [products, setProducts] = useState([])
	console.log(products)
	useEffect(() => {
		axiosAdmin.post("/products/search", {value})
			.then((res: any) => {
				setProducts(res)
			})
			.catch((e) => {
				console.log(e)
			})
	}, [])

	return (
		<>
			<Breadcrumbs value="Search" />
			<div className="flex justify-center">
				<div className="w-10/12">
					<h1 className="text-2xl mb-2">Kết Quả Tìm Kiếm: {products.length}</h1>
					{
						products?.length === 0 ?
							<div className="text-center bg-white">
								<h1>Không tìm thấy sản phẩm!</h1>
							</div>
						:
							<section className="bg-white p-4 rounded">
								{
									products?.map((product: any, index: number) => (
										<div className="grid grid-cols-4 ml-4">
											<Product
												productId={product._id}
												productName={product.productName}
												price={product.price}
												idUrl={product.image[index]}
											/>
										</div>
									))
								}
							</section>

						}
				</div>
			</div>
		</>
	)
}

export default Search;