import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./layouts/Home";
import Detail from "./layouts/Detail";
import Cart from "./layouts/Cart";
import Checkout from "./layouts/Checkout";
import Login from "./layouts/Login";
import SignUp from "./layouts/SignUp";
import FilterProduct from "./layouts/FilterProduct";
import ProfileUser from "./layouts/ProfileUser";
import ChangePassword from "./layouts/ChangePassword";
import Purchase from "./layouts/Purchase";
import LayoutAdmin from "./layoutAdmin/layout";
import Overview from "./layoutAdmin/Overview";
import Products from "./layoutAdmin/Products";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
		  <Route path="/product-detail/:id" element={<Detail />} />
		  <Route path="/cart" element={<Cart />} />
		  <Route path="/checkout" element={<Checkout />} />
		  <Route path="/login" element={<Login />} />
		  <Route path="/signup" element={<SignUp />} />
		  <Route path="/filter-product" element={<FilterProduct />} />
		  <Route path="/user/profile" element={<ProfileUser />} />
		  <Route path="/user/changepassword" element={<ChangePassword />} />
		  <Route path="/user/purchase" element={<Purchase />} />
        </Route>
		<Route path="/admin" element={<LayoutAdmin />}>
			<Route path="" element={<Overview />} />
			<Route path="products" element={<Products />} />
		</Route>
      </Routes>
    </>
  );
}

export default App;
