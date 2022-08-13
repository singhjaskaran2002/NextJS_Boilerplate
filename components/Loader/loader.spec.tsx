import { render, screen } from "@testing-library/react";
import Loader from "./index";

describe("Loader component.", () => {
	it("Render loader spinner", () => {
		render(<Loader />);
		expect(screen.getByTestId("testid-spinner")).toBeInTheDocument();
	});

	it("Render loader div element", () => {
		render(<Loader />);
		expect(screen.getByTestId("testid-loader-div")).toBeInTheDocument();
	});
});
