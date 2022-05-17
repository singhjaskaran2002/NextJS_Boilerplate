import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../components/UI/Toast";
import store from "../store/index";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Toast />
			<Component {...pageProps} />
		</Provider>
	);
}
