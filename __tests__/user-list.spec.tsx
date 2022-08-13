import { render, screen } from "@testing-library/react";
import UserListing from "../components/User/UserListing";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../utils/test-create-mock-router";
import { Provider } from "react-redux";
import store from "../store";
import { IUser } from "../utils/interfaces/user.interface";

const users = {
	rows: [],
	count: 0,
};

describe("User page tests", () => {
	it("Renders user listing", () => {
		render(
			<Provider store={store}>
				<RouterContext.Provider value={createMockRouter({})}>
					<UserListing userData={users} />
				</RouterContext.Provider>
			</Provider>
		);
		expect(screen.getByTestId("user-list-table")).toBeInTheDocument();
	});

	// it("Renders pagination", () => {
	// 	render(
	// 		<Provider store={store}>
	// 			<RouterContext.Provider value={createMockRouter({})}>
	// 				<UserListing userData={users} />
	// 			</RouterContext.Provider>
	// 		</Provider>
	// 	);
	// 	expect(screen.getByTestId("pagination-test-id")).toBeInTheDocument();
	// });
});
