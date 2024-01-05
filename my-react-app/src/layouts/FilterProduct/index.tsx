import Product from "../../components/Product";
import Breadcrumbs from "../../components/Breadcrumbs";

function FilterProduct() {
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
							<div>
								<input type="checkbox" id="brand1" value="brand1" className="rounded-md"/>
								{' '}<label htmlFor="brand1">Smart Phone</label>
							</div>
							<div>
								<input type="checkbox" id="brand2" value="brand2" className="rounded-md"/>
								{' '}<label htmlFor="brand2">Tablet</label>
							</div>
							<div>
								<input type="checkbox" id="brand1" value="brand1" className="rounded-md"/>
								{' '}<label htmlFor="brand1">Laptop</label>
							</div>
						</div>
						<hr className="mt-5"></hr>
                    </div>
					<div className="about_branch  p-5 font-normal">
                        <span>Brand</span><br></br>
                        <div className="mt-5"></div>
						<div className="text-gray-500">
							<div>
								<input type="checkbox" id="brand1" value="brand1" className="rounded-md"/>
								{' '}<label htmlFor="brand1">Samsum</label>
							</div>
							<div>
								<input type="checkbox" id="brand2" value="brand2" className="rounded-md"/>
								{' '}<label htmlFor="brand2">Oppo</label>
							</div>
							<div>
								<input type="checkbox" id="brand1" value="brand1" className="rounded-md"/>
								{' '}<label htmlFor="brand1">Xiaomi</label>
							</div>
							<div>
								<input type="checkbox" id="brand1" value="brand1" className="rounded-md"/>
								{' '}<label htmlFor="brand1">iPhone</label>
							</div>
						</div>
						<hr className="mt-5"></hr>
                    </div>
					<div className="about_branch  p-5 font-normal">
                        <span>Ram</span><br></br>
                        <div className="mt-5"></div>
						<div className="text-gray-500">
							<div>
								<input type="checkbox" id="brand1" value="brand1" className="rounded-md"/>
								{' '}<label htmlFor="brand1">4GB</label>
							</div>
							<div>
								<input type="checkbox" id="brand2" value="brand2" className="rounded-md"/>
								{' '}<label htmlFor="brand2">8GB</label>
							</div>
							<div>
								<input type="checkbox" id="brand1" value="brand1" className="rounded-md"/>
								{' '}<label htmlFor="brand1">16GB</label>
							</div>
							<div>
								<input type="checkbox" id="brand1" value="brand1" className="rounded-md"/>
								{' '}<label htmlFor="brand1">32GB</label>
							</div>
						</div>
						<hr className="mt-5"></hr>
                    </div>
			</div>
			<div className="w-9/12 rounded-md pl-4 pb-4">
				<div className="grid grid-cols-3 bg-white overflow-y-scroll custom-scroll-container h-screen pl-4">
					<Product />
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
