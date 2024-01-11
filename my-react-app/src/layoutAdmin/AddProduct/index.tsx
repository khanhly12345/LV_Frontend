import { Button } from "@material-tailwind/react";
import SideNavAdmin from "../../components/SideNavAdmin";
import { useState } from "react";
import { addProduct } from "../../redux/slice/ProductsSlice";
import { useAppDispatch } from "../../redux/store";

function AddProduct() {
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [ram, setRam] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [img, setImg] = useState<File | null>(null);
  const [thumNail1, setThumNail1] = useState<File>();
  const [thumNail2, setThumNail2] = useState<File>();
  const [thumNail3, setThumNail3] = useState<File>();
  const [thumNail4, setThumNail4] = useState<File>();

  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price.toString());
    formData.append("description", description);
    formData.append("brand", brand);
	formData.append("color", color);
	formData.append("ram", ram);
	formData.append("quantity", quantity.toString());
    if (img) formData.append("image", img);
    if (thumNail1) formData.append("image", thumNail1);
    if (thumNail2) formData.append("image", thumNail2);
    if (thumNail3) formData.append("image", thumNail3);
    if (thumNail4) formData.append("image", thumNail4);

    dispatch(addProduct(formData));
  };

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
                    ADD PRODUCT
                  </h2>
                  <Button placeholder="" size="sm" color="blue">
                    Add Product
                  </Button>
                </div>
                <div className="pt-2 relative text-gray-600">
                  <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-4"
                  >
                    <svg
                      className="text-gray-600 h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                      viewBox="0 0 56.966 56.966"
                      // xml:space="preserve"
                      width="512px"
                      height="512px"
                    >
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
              </div>
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
                          placeholder="Product Name"
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
                          placeholder="Price"
                          value={price}
                          onChange={(e) => setPrice(parseFloat(e.target.value))}
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
                          placeholder="Discription"
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
                          placeholder="Brand"
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                          required
                        />
                      </div>
					  <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"
                        >
                          Color
                        </label>
                        <input
                          className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Color"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          required
                        />
                      </div>
					  <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"
                        >
                          Ram
                        </label>
                        <input
                          className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Ram"
                          value={ram}
                          onChange={(e) => setRam(e.target.value)}
                          required
                        />
                      </div>
					  <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"
                        >
                          Quantity
                        </label>
                        <input
                          className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Quantity"
                          value={quantity.toString()}
                          onChange={(e) => setQuantity(parseFloat(e.target.value))}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4 p-4">
                      {/* <div className="flex">
							{Array.from(img).map((item) => {
							return (
								<span>
								<img
									src={
									item ? URL.createObjectURL(item) : undefined
									}
									alt=""
									width={70}
									height={70}
								/>
								</span>
							);
							})}
						</div> */}
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"
                        >
                          Image
                        </label>
                        <input
                          className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="file"
                          name="image"
                          onChange={(event) => {
                            if (!event.target.files) return;
                            setImg(event.target.files[0]);
                          }}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"
                        >
                          Thumnail 1
                        </label>
                        <input
                          className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="file"
                          placeholder="Product Name"
                          name="image"
                          onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                              setThumNail1(e.target.files[0]);
                            }
                          }}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"
                        >
                          Thumnail 2
                        </label>
                        <input
                          className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="file"
                          placeholder="Product Name"
                          name="image"
                          onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                              setThumNail2(e.target.files[0]);
                            }
                          }}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"
                        >
                          Thumnail 3
                        </label>
                        <input
                          className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="file"
                          placeholder="Product Name"
                          name="image"
                          onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                              setThumNail3(e.target.files[0]);
                            }
                          }}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"
                        >
                          Thumnail 4
                        </label>
                        <input
                          className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="file"
                          placeholder="Product Name"
                          name="image"
                          onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                              setThumNail4(e.target.files[0]);
                            }
                          }}
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
            </div>
          </div>
        </section>
        {/* </div> */}
      </div>
    </>
  );
}

export default AddProduct;
