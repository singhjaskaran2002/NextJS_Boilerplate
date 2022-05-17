import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { userLogout } from "../../store/reducers/authSlice";
import { appRoutes } from "../../utils/constants";
import { messages } from "../../utils/messages";
import { notify } from "../../utils/notify";

const Header: React.FC = () => {
	const [dispatch, router] = [useDispatch(), useRouter()];

	const { loggedUser } = useSelector((state: RootState) => state.auth);

	const [dropDownClass, setDropDownClass] = useState<string>("dropdown-menu");

	const logoutHandler = async () => {
		await dispatch(userLogout());
		notify("success", messages.auth.LOGGED_OUT);
		router.replace({ pathname: appRoutes.LOGIN });
	};

	const navigationHandler = (route: string) => {
		router.replace(route);
	};

	const toggleDropDown = () => {
		dropDownClass === "dropdown-menu"
			? setDropDownClass("dropdown-menu show")
			: setDropDownClass("dropdown-menu");
	};

	return (
		<Navbar
			className="nav-top"
			collapseOnSelect
			expand="lg"
			bg="light"
			variant="light"
		>
			<Container className="navbar-container">
				<Navbar.Brand
					href="#"
					onClick={(e) => navigationHandler(appRoutes.DASHBOARD)}
				>
					NextApp
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="auth-nav">
						<div className="dropdown show">
							<a
								className="btn btn-light dropdown-toggle"
								href="#"
								onClick={toggleDropDown}
								role="button"
								id="dropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<img
									className="nav-profile-img"
									src={
										loggedUser?.image ||
										"https://cdn-icons-png.flaticon.com/512/149/149071.png"
									}
								/>
							</a>

							<div
								className={dropDownClass}
								id="dropdownMenu"
								aria-labelledby="dropdownMenuLink"
							>
								<a
									className="dropdown-item"
									href="#"
									onClick={(e) =>
										navigationHandler(appRoutes.PROFILE)
									}
								>
									<i className="fa-solid fa-user dropdown-icon"></i>
									My account
								</a>
								<a
									onClick={logoutHandler}
									className="dropdown-item"
									href="#"
								>
									<i className="fa-solid fa-right-from-bracket dropdown-icon"></i>
									Sign out
								</a>
							</div>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;