import React, { ReactNode } from "react";
import { Modal } from "react-bootstrap";

interface IModalProps {
	show: boolean;
	hideModal: Function;
	children: ReactNode;
	heading: string;
}

const CustomModal: React.FC<IModalProps> = ({
	show,
	hideModal,
	children,
	heading,
}) => {
	return (
		<Modal
			size={"xl"}
			show={show}
			backdrop="static"
			onHide={() => hideModal(false)}
			keyboard={false}
			centered
		>
			<Modal.Header closeButton>
				<h2>{heading}</h2>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
		</Modal>
	);
};

export default CustomModal;
