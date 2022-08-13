// generates 50 chars long nonce
const generateNonce = (): string => {
	let result = "";
	const chars =
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (let i = 50; i > 0; --i)
		result += chars[Math.floor(Math.random() * chars.length)];
	return result;
};

export default generateNonce;
