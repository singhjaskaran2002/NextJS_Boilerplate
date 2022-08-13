export const httpMethods = {
	POST: "POST",
	GET: "GET",
	PUT: "PUT",
	DELETE: "DELETE",
};

export const appRoutes = {
	HOME: "/",
	LOGIN: "/login",
	PROFILE: "/profile",
	REGISTER: "/register",
	DASHBOARD: "/dashboard",
	PRODUCTS: "/product",
	USERS: "/user",
	PRODUCT_DETAILS: "/product/:id",
};

export const apiRoutes = {
	products: {
		BASE_URL: "/products",
	},
	users: {
		BASE_URL: "/users",
		FETCH_PAGINATED_DATA: ({
			limit,
			page,
			sort,
			order,
		}: {
			limit: number;
			page: number;
			sort: string;
			order: string;
		}) =>
			`/users?_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}`,
	},
};

export const defaults = {
	SORT_KEY: "id",
	SORT_ORDER: "ASC",
	LIMIT: 10,
	PAGE: 1,
	DELETE_TITLE: "Are you sure?",
};
