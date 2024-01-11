export const BASE_URL = "http://localhost:3001/api/"

export const accessToken = () => {
	const getAuth = localStorage.getItem('access_token')
	return getAuth
}