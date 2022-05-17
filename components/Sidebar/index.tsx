import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { appRoutes } from "../../utils/constants";

interface ISideBarMenu {
	className: string;
	title: string;
	href: string;
	icon: any;
}

const Sidebar: NextPage = () => {
	const [sideMenuClass, activeSideMenuClass, router, [route, setRoute]] = [
		"sidemenu",
		"sidemenu active",
		useRouter(),
		useState<string>(""),
	];

	useEffect(() => {
		setRoute(router.asPath);
	}, [router]);

	const navigationHandler = (route: string) => {
		router.push(route);
	};

	const sidebarMenu: ISideBarMenu[] = [
		{
			title: "Dashboard",
			icon: <i className="fa-solid fa-chart-line sidemenu-icon"></i>,
			href: appRoutes.DASHBOARD,
			className:
				route === appRoutes.DASHBOARD
					? activeSideMenuClass
					: sideMenuClass,
		},
		{
			title: "Products",
			href: appRoutes.PRODUCTS,
			icon: <i className="fa-solid fa-box sidemenu-icon"></i>,
			className:
				route === appRoutes.PRODUCTS
					? activeSideMenuClass
					: sideMenuClass,
		},
	];
	return (
		<div className="sidebar">
			{sidebarMenu.map((item: ISideBarMenu, index: number) => (
				<nav className={item.className} key={index}>
					{item.icon}
					<span onClick={(e) => navigationHandler(item.href)}>
						{item.title}
					</span>
				</nav>
			))}
		</div>
	);
};

export default Sidebar;
