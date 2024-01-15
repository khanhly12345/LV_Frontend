import { useEffect, useState } from "react";
import SideNavAdmin from "../../components/SideNavAdmin";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { editProduct, getProductById } from "../../redux/slice/ProductsSlice";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

function EditProduct() {
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [brand, setBrand] = useState<string>("");

  const products = useSelector((state: any) => state.products.data);
  const status = useSelector((state: any) => state.products.status);
  const { id } = useParams();
  const dispacth = useAppDispatch();
  const navigate = useNavigate()

  console.log(status)

  const handleSubmit = async (event: any) => {
    event.preventDefault();

	const payload = {
		id,
		data: {
			productName,
			price,
			description,
			brand
		}
	}

	await dispacth(editProduct(payload))
	navigate("/admin/products")
  };

  useEffect(() => {
    if (products) {
      setProductName(products.productName);
      setBrand(products.brand);
	  setDescription(products.description);
	  setPrice(products.price)
    }
  }, [products]);

  useEffect(() => {
    dispacth(getProductById(id));
  }, [dispacth]);


  return (
    <>
      <SideNavAdmin />
      <div className="p-4 sm:ml-60">
        {/* <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-14 ">
				<h1 className="text-3xl space-y-4 tracking-widest text-blue-500">PRODUCT</h1> */}
        <section className="lg:flex lg:h-screen font-poppins dark:bg-gray-800 pt-10">
          <div className="justify-center flex-1 max-w-6xl  py-4 mx-auto lg:py-8 ">
            <div className="pt-4 bg-white rounded shadow dark:bg-gray-900">
              <div className="flex px-6 pb-4 border-b dark:border-gray-700 justify-between">
                <div>
                  <h2 className="text-xl font-bold dark:text-gray-400 tracking-widest pb-4">
                    EDIT PRODUCT
                  </h2>
                </div>
              </div>
			  {
				status === "loading" ? <Loading /> :
				<div className="p-4 overflow-x-auto">
					<form onSubmit={handleSubmit} encType="multipart/form-data">
					<div className="grid grid-cols-2">
						<div className="mb-4 p-4">
						<div className="mb-4">
							<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
							>
							Product Name
							</label>
							<input
							className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							value={productName}
							onChange={(e) => setProductName(e.target.value)}
							required
							/>
						</div>
						<div className="mb-4">
							<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
							>
							Price
							</label>
							<input
							className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							required
							/>
						</div>
						<div className="mb-4">
							<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
							>
							Discription
							</label>
							<input
							className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Quantity"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
							/>
						</div>
						<div className="mb-4">
							<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
							>
							Brand
							</label>
							<input
							className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Quantity"
							value={brand}
							onChange={(e) => setBrand(e.target.value)}
							required
							/>
						</div>
						</div>
					</div>
					<button className="bg-blue-600 ml-4 text-white font-bold py-2 px-4 rounded hover:opacity-50">
						Submit
					</button>
					</form>
				</div>
			  }
            </div>
          </div>
        </section>
        {/* </div> */}
      </div>
    </>
  );
}

export default EditProduct;
