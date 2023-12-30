import Carousel   from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Carousel as MultiCarousel } from "@material-tailwind/react";
import slider1 from "../../assets/carousel/unnamed (1).webp"
import slider2 from "../../assets/carousel/unnamed.webp"
import slider3 from "../../assets/carousel/2065242_f316670d03ba9a69f30a31d579c25afa.jpg"
import Product from "../../components/Product";
import banner from "../../assets/logo/Deal-ngon-tgdd-1200x120-2.webp"

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

function Home() {
  return (
    <>
      <MultiCarousel className="rounded-xl h-200 mt-4 w-125 ml-2" placeholder="">
        <img
          src={slider2}
		  alt=""
          className="h-full w-full object-cover"
        />
        <img
          src={slider1}
          alt=""
          className="h-full w-full object-cover"
        />
        <img
          src={slider3}
          alt=""
          className="h-full w-full object-cover"
        />
      </MultiCarousel>
	  <div className="h-500px my-custom-bg-class m-4">
			<img src={banner} alt="" className="w-full h-24"/>
			<Carousel responsive={responsive} className="ml-4">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</Carousel>
	  </div>
    </>
  );
}

export default Home;
