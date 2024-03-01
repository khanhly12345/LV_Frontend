import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation()
  useEffect(() => {
	setLoading(true)
  	setInterval(() => {
      setLoading(false);
    }, 2000);

  }, [location.pathname]);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
		<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
		  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
			Loading...
		  </span>
		</div>
	  </div>
      ) : (
	  		<>
				<Header />
				<Outlet />
				<Footer />
			</>
      )}
    </>
  );
}

export default Layout;
