import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { Provider } from "react-redux";
import Layout from "./index";
import store from "../../store";
import { createMockRouter } from "../../utils/test-create-mock-router";

describe("Layout component.", () => {
	it("Render layout component", () => {
		render(
			<Provider store={store}>
				<RouterContext.Provider value={createMockRouter({})}>
					<Layout children={<></>} />
				</RouterContext.Provider>
			</Provider>
		);
		expect(screen.getByTestId("testid-layout")).toBeInTheDocument();
	});
});
