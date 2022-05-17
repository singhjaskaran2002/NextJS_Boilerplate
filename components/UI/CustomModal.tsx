import React, { ReactNode } from "react";
import { Modal } from "react-bootstrap";

interface IModalProps {
	show: boolean;
	hideModal: Function;
	children: ReactNode;
}

const CustomModal: React.FC<IModalProps> = ({ show, hideModal, children }) => {
	return (
		<Modal
			show={show}
			backdrop="static"
			onHide={() => hideModal(false)}
			keyboard={false}
			centered
		>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>{children}</Modal.Body>
		</Modal>
	);
};

export default CustomModal;
