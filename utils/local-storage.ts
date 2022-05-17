export const getItem = (key: string) => {
	if (typeof window != 'undefined') {
		localStorage.getItem(key);
	}
};

export const setItem = (key: string, value: string) => {
	if (typeof window != 'undefined') {
		localStorage.setItem(key, value);
	}
};

export const clear = () => {
	if (typeof window != 'undefined') {
		localStorage.clear();
	}
};
