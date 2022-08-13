import { FormikProps, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { RootState } from "../../store";
import { userLogin } from "../../store/reducers/authSlice";
import { appRoutes } from "../../utils/constants";
import { messages } from "../../utils/messages";
import Button from "../UI/FormUI/Button";
import ButtonGroup from "../UI/FormUI/ButtonGroup";
import TextField from "../UI/FormUI/TextField";

interface ILoginUserState {
	email: string;
	password: string;
}

const LoginUser: React.FC = () => {
	const router = useRouter();

	const dispatch = useDispatch();

	const initialValues: ILoginUserState = { email: "", password: "" };

	const loading = useSelector((state: RootState) => state.common.loading);

	const formik: FormikProps<ILoginUserState> = useFormik({
		initialValues,
		validationSchema: Yup.object({
			email: Yup.string()
				.email()
				.required(messages.formik.REQUIRED("Email")),
			password: Yup.string().required(
				messages.formik.REQUIRED("Password")
			),
		}),
		onSubmit: async (values) => {
			await dispatch(
				userLogin({
					email: values.email,
					name: "Abc",
					id: 1,
					token: "token",
				})
			);
			localStorage.setItem("access-token", values.email);
			router.replace(appRoutes.DASHBOARD);
			return;
		},
	});

	return (
		<div className="loginDiv">
			<div className="user-login-image">
				<img src="images/login-user.png" />
			</div>
			<form
				className="px-5 py-5 login-form"
				onSubmit={formik.handleSubmit}
			>
				<TextField
					name="email"
					placeholder="Enter email"
					formik={formik}
					id="email"
					type="email"
					label="Email"
					onChange={formik.handleChange}
				/>
				<TextField
					name="password"
					placeholder="Enter password"
					formik={formik}
					id="password"
					label="Password"
					type="password"
					onChange={formik.handleChange}
				/>
				<ButtonGroup className="form-group button-groups loginbtn-grp">
					<span className="register-link">
						<Link href={appRoutes.REGISTER}>
							Don't have an account? Register.
						</Link>
					</span>
					<Button
						type="submit"
						disabled={loading ? true : false}
						className="btn btn-primary"
						label={loading ? "Signing in..." : "Sign in"}
					/>
				</ButtonGroup>
			</form>
		</div>
	);
};

export default LoginUser;
