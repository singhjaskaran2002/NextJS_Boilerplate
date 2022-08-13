import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { Provider } from "react-redux";
import Header from "./index";
import store from "../../store";
import { createMockRouter } from "../../utils/test-create-mock-router";

describe("Header component.", () => {
	it("Renders application name on navbar's top-left corner", () => {
		render(
			<Provider store={store}>
				<RouterContext.Provider value={createMockRouter({})}>
					<Header />
				</RouterContext.Provider>
			</Provider>
		);
		expect(screen.getByTestId("testid-header")).toBeInTheDocument();
	});
});
