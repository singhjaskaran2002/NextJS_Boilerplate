import { Head, Html, Main, NextScript } from "next/document";
import generateNonce from "../utils/generate-nonce";
import getCsp from "../utils/get-csp";

export default function Document() {
	const nonce: string = generateNonce();
	const csp: string = getCsp(nonce);

	return (
		<Html>
			<Head>
				<meta httpEquiv="Content-Security-Policy" content={csp} />
				<link
					nonce={`nonce-${nonce}`}
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
					integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</Head>
			<body>
				<Main />
				<NextScript nonce={`nonce-${nonce}`} />
			</body>
		</Html>
	);
}
