import axios from "axios";
import { BASE_URL, accessToken } from "../utils/constant";

const axiosAdmin = axios.create({
	// withCredentials: true,
	baseURL: BASE_URL,
	headers: {
		// "Content-Type": "application/json",
		// Accept: "application/json",
	},
});

axiosAdmin.interceptors.request.use(
	function (config) {
		// const { info = null } = store.getState().employee;
		const getAuth = accessToken()
		if (getAuth) {
			config.headers.Authorization = `Bearer ${getAuth}`;
		}

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	},
);

// Add a response interceptor
axiosAdmin.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	},
);

export default axiosAdmin;