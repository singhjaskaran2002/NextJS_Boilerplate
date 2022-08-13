const getCsp = (nonce: string): string => {
	let csp = ``;
	csp += ` default-src 'self';`;
	if (process.env.NODE_ENV == "development") {
		csp += ` script-src 'self' 'unsafe-eval';`;
	} else {
		csp += ` script-src 'self' 'nonce-${nonce}';`;
	}
	csp += ` script-src-elem 'self';`;
	csp += ` connect-src 'self' http://localhost:8000/ http://0.0.0.0:8000/;`;
	csp += ` img-src 'self' https://fakestoreapi.com/ https://images.pexels.com/ http://dummyimage.com/ data:;`;
	csp += ` style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ https://fonts.gstatic.com/ https://cdnjs.cloudflare.com/;`;
	csp += ` font-src 'self' https://fonts.gstatic.com/ https://cdnjs.cloudflare.com/;`;
	csp += ` base-uri 'none';`;
	csp += ` object-src 'none';`;
	return csp;
};

export default getCsp;
