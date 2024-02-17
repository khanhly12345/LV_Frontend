import { Outlet, Navigate } from "react-router-dom";

const PrivateRouters = () => {
	const token = localStorage.getItem('access_token')
	let checkAuth = false
	if(token) {
		checkAuth = true
	}
	// console.log(checkAuth)

	return (
		checkAuth ? <Outlet /> : <Navigate to='/login'/>
	)
}

export default PrivateRouters