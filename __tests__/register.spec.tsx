import { render, screen } from "@testing-library/react";
import Register from "../pages/register";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../utils/test-create-mock-router";
import { Provider } from "react-redux";
import store from "../store";

describe("Register page tests", () => {
	it("Renders register text", () => {
		render(
			<Provider store={store}>
				<RouterContext.Provider value={createMockRouter({})}>
					<Register />
				</RouterContext.Provider>
			</Provider>
		);
		expect(screen.getByTestId("title-label")).toBeInTheDocument();
	});
});
