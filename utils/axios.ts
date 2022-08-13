import axios, { AxiosRequestHeaders, AxiosResponse, Method } from "axios";
import { CustomType } from "./interfaces/custom-type.interface";

export const apiRequest = async (options: {
	url: string;
	method?: Method;
	headers?: AxiosRequestHeaders;
	data?: CustomType;
	params?: CustomType;
}): Promise<AxiosResponse> => {
	return await axios({
		method: "get",
		baseURL: process.env.SERVER_URL,
		...options,
	});
};

// request interceptor
axios.interceptors.request.use(
	(config) => {
		// Do something before request is sent
		// dispatch(setLoading(true));
		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	}
);

// response interceptor
axios.interceptors.response.use(
	(response) => {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		// dispatch(setLoading(false));
		return response;
	},
	(error) => {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);
