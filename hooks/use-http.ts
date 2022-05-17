import axios, { AxiosRequestHeaders, AxiosResponse, Method } from "axios";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/reducers/commonSlice";
import { httpMethods } from "../utils/constants";

const SERVER_URL: string = process.env.SERVER_URL || "https://fakestoreapi.com";

interface RequestAgrs {
	apiUrl: string;
	method?: Method;
	headers?: AxiosRequestHeaders;
	data?: any;
	params?: any;
}

type applyDataCallback = (args: AxiosResponse) => void;

function useHttp() {
	const [error, setError] = useState<any>(null);
	const dispatch = useDispatch();

	const sendRequest = useCallback(
		async (
			requestConfig: RequestAgrs,
			applyData?: applyDataCallback
		): Promise<void> => {
			dispatch(setLoading(true));
			try {
				const response: AxiosResponse = await axios({
					url: requestConfig.apiUrl,
					method: requestConfig.method
						? requestConfig.method
						: httpMethods.GET,
					baseURL: SERVER_URL,
					headers: {
						...(localStorage.getItem("accessToken") && {
							Authorization: localStorage.getItem("accessToken"),
						}),
						Accept: "application/json",
					},
					...(requestConfig.data && { data: requestConfig.data }),
					...(requestConfig.params && {
						params: requestConfig.params,
					}),
				});

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

				if (applyData) {
					applyData(response);
				}
				setError(null);
			} catch (err: any) {
				setError(err?.response?.data);
			}
			dispatch(setLoading(false));
		},
		[dispatch]
	);

	return {
		sendRequest,
		error,
	};
}

export default useHttp;
