export const BASE_URL = "http://localhost:3001/api/"

export const accessToken = () => {
	const getAuth = localStorage.getItem('access_token')
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