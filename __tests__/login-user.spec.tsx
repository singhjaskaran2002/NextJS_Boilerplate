import { render, screen } from "@testing-library/react";
import Login from "../pages/login";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../utils/test-create-mock-router";
import { Provider } from "react-redux";
import store from "../store";

describe("Login page tests", () => {
	it("Renders register link text", () => {
		render(
			<Provider store={store}>
				<RouterContext.Provider value={createMockRouter({})}>
					<Login />
				</RouterContext.Provider>
			</Provider>
		);
		expect(
			screen.getByText("Don't have an account? Register.")
		).toBeInTheDocument();
	});

	it("Renders login button", () => {
		render(
			<Provider store={store}>
				<RouterContext.Provider value={createMockRouter({})}>
					<Login />
				</RouterContext.Provider>
			</Provider>
		);
		expect(screen.getByText("Sign in")).toBeInTheDocument();
	});
});
