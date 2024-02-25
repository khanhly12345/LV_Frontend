
import { jwtDecode } from "jwt-decode";

export const BASE_URL = "http://localhost:3001/api/"

export const accessToken = () => {
	const getAuth = localStorage.getItem('access_token')
	return getAuth
}

export const accessTokenAdmin = () => {
	const getAuth = localStorage.getItem('access_token_admin')
	return getAuth
}

export const refreshToken = () => {
	const getAuth = localStorage.getItem('refresh_token')
	return getAuth
}

export const HandlePrice = (value: any) => {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    value = VND.format(value)
    return value
}

export const getCart = () => {
	const cartString = localStorage.getItem('cart');
	const cart = cartString ? JSON.parse(cartString) : []
	return cart
}

export const decodedToken = () => {
	const token: any = accessToken()
	const decoded = jwtDecode(token)
	return decoded;
}

export const decodedTokenAdmin = () => {
	const token: any = accessTokenAdmin()
	let decoded;
	if(token) {
		decoded = jwtDecode(token)
	}
	return decoded;
}

export const getIdFromToken = () => {
	const decode: any = decodedToken()
	console.log(decode.email._id)
	return decode.email._id;
}

export const getQuantities = () => {
	const quantities: any = localStorage.getItem('quantity')
	return JSON.parse(quantities);
}

export const getTotal = () => {
	const total: any = localStorage.getItem('total')
	return total;
}

export const removeAccessToken = () => {
	localStorage.removeItem('access_token')
}

export const removeRefreshToken = () => {
	localStorage.removeItem('refresh_token')
}