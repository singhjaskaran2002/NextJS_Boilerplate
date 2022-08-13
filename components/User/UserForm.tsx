import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { messages } from "../../utils/messages";

interface IUserForm {
	hideModal: (flag: boolean) => {};
}

interface IAddUserState {
	email: string;
	name: string;
}

const UserForm: React.FC<IUserForm> = ({ hideModal }) => {
	const initialValues: IAddUserState = { email: "", name: "" };
	const formik: FormikProps<IAddUserState> = useFormik({
		initialValues,
		validationSchema: Yup.object({
			email: Yup.string()
				.email()
				.required(messages.formik.REQUIRED("Email")),
			name: Yup.string().required(messages.formik.REQUIRED("Name")),
		}),
		onSubmit: async (values) => {
			console.log(values);
			hideModal(false);
			return;
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<TextField
				className="mb-3"
				fullWidth
				error={
					formik.errors["email"] && formik.touched["email"]
						? true
						: false
				}
				helperText={formik.errors["email"]}
				id="outlined-error-helper-text"
				name="email"
				onChange={formik.handleChange}
				label="Email"
				variant="outlined"
			/>
			<TextField
				id="outlined-error-helper-text"
				fullWidth
				error={
					formik.errors["name"] && formik.touched["name"]
						? true
						: false
				}
				helperText={formik.errors["name"]}
				label="Full name"
				name="name"
				onChange={formik.handleChange}
				className="mb-3"
				variant="outlined"
			/>
			<div className="button-group">
				<Button type="submit" variant="outlined" size="large">
					Submit
				</Button>
			</div>
		</form>
	);
};

export default UserForm;
