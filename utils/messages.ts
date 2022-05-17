export const messages = {
	formik: {
		REQUIRED: (field: string): string => `${field} is required.`,
		MAX_CHAR: (field: string, maxChar: number): string =>
			`${field} must be less than ${maxChar} characters.`,
		MIN_CHAR: (field: string, minChar: number): string =>
			`${field} must be of atleast ${minChar} characters long.`,
	},
	auth: {
		UNAUTHORIZED: "Unauthorized access!",
		LOGGED_OUT: "Logged out successfully.",
	},
};
