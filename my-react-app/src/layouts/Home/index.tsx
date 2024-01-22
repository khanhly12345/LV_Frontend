import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Carousel as MultiCarousel } from "@material-tailwind/react";
import slider1 from "../../assets/carousel/unnamed (1).webp";
import slider2 from "../../assets/carousel/unnamed.webp";
import slider3 from "../../assets/carousel/2065242_f316670d03ba9a69f30a31d579c25afa.jpg";
import Product from "../../components/Product";
import banner from "../../assets/logo/Deal-ngon-tgdd-1200x120-2.webp";
import weekSlider1 from "../../assets/logo/TLTT-OPPO-Banners-9-380x200-1.webp";
import weekSlider2 from "../../assets/logo/4-380x200-2.webp";
import weekSlider3 from "../../assets/logo/2-380x200-3.webp";
import weekSlider4 from "../../assets/logo/6-380x200-4.webp";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getAllProduct } from "../../redux/slice/ProductsSlice";
import { useSelector } from "react-redux";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  const dispatch = useAppDispatch();
  const products = useSelector((state: any) => state.products.data);
	console.log(products)
  useEffect(() => {
    dispatch(getAllProduct());
	window.scroll(0, 0)
  }, []);

  return (
    <>
      <MultiCarousel
        className="rounded-xl h-200 mt-4 w-125 ml-2"
        placeholder=""
      >
        <img src={slider2} alt="" className="h-full w-full object-cover" />
        <img src={slider1} alt="" className="h-full w-full object-cover" />
        <img src={slider3} alt="" className="h-full w-full object-cover" />
      </MultiCarousel>
      <div className="h-500px my-custom-bg-class m-4">
        <img src={banner} alt="" className="w-full h-24" />
        <Carousel responsive={responsive} className="ml-4" autoPlay={true}>
          {products
            .filter((product: any) => product.category === "smartphone")
            .map((product: any, index: any) => (
              <>
                {
                  <Product
					productId={product._id}
                    productName={product.productName}
                    price={product.price}
                    idUrl={product.image[index]}
                  />
                }
              </>
            ))}
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Carousel>
      </div>
      <div className="weekOfGold">
        <p className="prd-promo__title">TUẦN LỄ - GIẢM TỚI 1 TRIỆU</p>
        <Carousel responsive={responsive} className="ml-4 mr-4" autoPlay={true}>
          <img src={weekSlider1} alt="" className="p-2 " />
          <img src={weekSlider2} alt="" className="p-2 rounded-md" />
          <img src={weekSlider3} alt="" className="p-2 rounded-md" />
          <img src={weekSlider4} alt="" className="p-2" />
          <img src={weekSlider4} alt="" className="p-2" />
          <img src={weekSlider4} alt="" className="p-2" />
          <img src={weekSlider2} alt="" className="p-2" />
          <img src={weekSlider3} alt="" className="p-2" />
          <img src={weekSlider4} alt="" className="p-2" />
        </Carousel>
        <div className="grid grid-cols-5 ml-4">
          {products
            .filter((product: any) => product.category === "laptop")
            .map((product: any, index: any) => (
              <>
                {
                  <Product
				  	productId={product._id}
                    productName={product.productName}
                    price={product.price}
                    idUrl={product.image[index]}
                  />
                }
              </>
            ))}
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <a href="#" className="seeall">
          <span className="mb-3 relative bottom-1">Xem tất cả sản phẩm</span>
        </a>
      </div>
      <div className="bg-white m-4 rounded">
        <div className="flex justify-center">
          <h1 className="text-4xl text-red-600 font-semibold ml-4 tracking-widest underlin pt-4">
            SẢN PHẨM LAPTOP MỚI
          </h1>
        </div>
        <div className="grid grid-cols-5 ml-4 pb-4">
          {products
            .filter((product: any) => product.category === "tablet")
            .map((product: any, index: any) => (
              <>
                {
                  <Product
				 	productId={product._id}
                    productName={product.productName}
                    price={product.price}
                    idUrl={product.image[index]}
                  />
                }
              </>
            ))}
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
}

export default Home;
