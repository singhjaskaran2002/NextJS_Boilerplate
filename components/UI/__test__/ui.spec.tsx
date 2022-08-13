import { render, screen } from "@testing-library/react";
import Dialogue from "../Dialogue";
import Table from "../Table";
import Toast from "../Toast";

describe("Application UI components.", () => {
	it("Render toastr", () => {
		render(<Toast />);
		expect(screen.getByTestId("testid-toast")).toBeInTheDocument();
	});

	it("Render table", () => {
		render(
			<Table
				columns={[]}
				data={[]}
				count={0}
				pageNumber={1}
				limit={1}
				onSort={() => {}}
				columnsWithoutSorting={[]}
				onPageChange={() => {}}
				onLimitChange={() => {}}
			/>
		);
		expect(screen.getByTestId("testid-react-table")).toBeInTheDocument();
	});

	it("Render dialogue box", () => {
		render(
			<Dialogue
				cancelButtonHandler={() => {}}
				successButtonHandler={() => {}}
				cancelButtonLabel=""
				show={true}
				successButtonLabel=""
				title=""
			/>
		);
		expect(screen.getByTestId("testid-dialogue")).toBeInTheDocument();
	});
});
