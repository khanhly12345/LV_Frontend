import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {

	const products = useSelector((state: any) => state.products.data);
	const [search, setSearch] = useState('')
	const [value, setValue] = useState('')
	const navigate = useNavigate()

	console.log(products);
	let productName
	if(products.length !== 0) {
		productName = products?.map((product: any) => {
			return product.productName
		})
	}

	const handleSearch = () => {
		navigate("/search/" + search)
	}
  return (
    <>
      {" "}
      <div className="w-full mt-2 relative">
        <div className="relative flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-light-blue-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(173, 216, 230)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-light-blue-300"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
			value={search}
			onChange={(e) => setSearch(e.target.value)}
          />

          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
			onClick={() => handleSearch()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
        <ul className="bg-white absolute w-95 pl-2 z-10 rounded py-2 mt-1 shadow-2xl">
			{
				productName
				?.filter((product: any) => {
					const searchTerm = search.toLowerCase()
					const productName = product.toLowerCase()
					return search && productName.startsWith(searchTerm) && productName !== searchTerm
				})
				?.map((product: any) => (
					<li
						className="flex"
						onClick={() => setSearch(product)}
					>
						<span className="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
							fill-rule="evenodd"
							d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
							clip-rule="evenodd"
							/>
						</svg>
						</span>
						<span className="pl-2">{product}</span>
					</li>
				))
			}
        </ul>
      </div>
    </>
  );
}
export default Search;
