import { FormikProps, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { RootState } from "../../store";
import { appRoutes } from "../../utils/constants";
import { messages } from "../../utils/messages";
import Button from "../UI/FormUI/Button";
import ButtonGroup from "../UI/FormUI/ButtonGroup";
import RadioButton, { RadioButtonItems } from "../UI/FormUI/RadioButton";
import TextArea from "../UI/FormUI/TextArea";
import TextField from "../UI/FormUI/TextField";

const possibleGender: RadioButtonItems[] = [
	{
		id: 1,
		key: "Male",
		value: "male",
	},
	{
		id: 2,
		key: "Female",
		value: "female",
	},
];

interface RegisterFormikState {
	name: string;
	email: string;
	password: string;
	bio: string;
	gender: string;
}

const Register: React.FC = () => {
	const router = useRouter();

	const loading = useSelector((state: RootState) => state.common.loading);

	const initialValues: RegisterFormikState = {
		name: "",
		email: "",
		password: "",
		bio: "",
		gender: "",
	};

	const formik: FormikProps<RegisterFormikState> = useFormik({
		initialValues,
		validationSchema: Yup.object({
			email: Yup.string()
				.email()
				.required(messages.formik.REQUIRED("Email")),
			name: Yup.string().required(messages.formik.REQUIRED("Name")),
			password: Yup.string().required(
				messages.formik.REQUIRED("Password")
			),
			bio: Yup.string().required(messages.formik.REQUIRED("Bio")),
			gender: Yup.string()
				.required(messages.formik.REQUIRED("Gender"))
				.nullable(),
		}),
		onSubmit: async (values) => {
			console.log(values);
			router.replace(appRoutes.LOGIN);
			return;
		},
	});

	return (
		<div className="loginDiv">
			<div className="user-login-image">
				<img src="images/login-user.png" />
			</div>
			<form
				className="p-5 py-5 login-form"
				onSubmit={formik.handleSubmit}
			>
				<TextField
					name="email"
					placeholder="Enter email"
					label="Email"
					id="email"
					type="email"
					onChange={formik.handleChange}
					formik={formik}
				/>
				<TextField
					name="password"
					placeholder="Enter password"
					label="Password"
					id="password"
					type="password"
					onChange={formik.handleChange}
					formik={formik}
				/>
				<TextField
					name="name"
					placeholder="Enter name"
					label="Name"
					id="name"
					type="text"
					onChange={formik.handleChange}
					formik={formik}
				/>
				<RadioButton
					formik={formik}
					label="Gender"
					name="gender"
					options={possibleGender}
				/>
				<TextArea
					name="bio"
					placeholder="Enter bio"
					label="Bio"
					id="bio"
					onChange={formik.handleChange}
					formik={formik}
					cols={10}
					rows={5}
				/>
				<ButtonGroup className="form-group button-groups loginbtn-grp">
					<span className="register-link">
						<i className="fa-solid fa-arrow-left"></i>
						<Link href={appRoutes.LOGIN}>Sign in</Link>
					</span>
					<Button
						type="submit"
						className="btn btn-primary"
						label={loading ? "Registering..." : "Register"}
						disabled={loading ? true : false}
					/>
				</ButtonGroup>
			</form>
		</div>
	);
};

export default Register;
