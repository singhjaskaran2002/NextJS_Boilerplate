import React from "react";
import Button from "./FormUI/Button";
import ButtonGroup from "./FormUI/ButtonGroup";

interface IDialogueProps {
	title: string;
	show: boolean;
	successButtonLabel: string;
	cancelButtonLabel: string;
	successButtonHandler: any;
	cancelButtonHandler: any;
}

const Dialogue: React.FC<IDialogueProps> = ({
	title,
	show,
	successButtonHandler,
	cancelButtonHandler,
	cancelButtonLabel,
	successButtonLabel,
}) => {
	const successHandler = () => {
		successButtonHandler();
		return true;
	};

	return (
		<>
			{show && (
				<div className="dialogue-box-div">
					<div className="dialogue-box">
						<h2>{title}</h2>
						<ButtonGroup className="form-button button-groups text-center">
							<Button
								label={successButtonLabel || "Yes!"}
								onClick={successHandler}
								className="btn btn-md btn-primary"
								type="button"
							/>
							<Button
								label={cancelButtonLabel || "Cancel"}
								onClick={cancelButtonHandler}
								className="btn btn-md btn-danger"
								type="button"
							/>
						</ButtonGroup>
					</div>
				</div>
			)}
		</>
	);
};

export default Dialogue;
