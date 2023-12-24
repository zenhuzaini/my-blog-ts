import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { headerClassType } from "../../constants/constants";
import { contextType } from "../../context/contextTypes";
import { OptionsContext } from "../../context/OptionsContextProvider";
import { useSession } from "next-auth/react";
import AvatarBadge from "../MUI/Avatar/AvatarBadge";

const Navigation = () => {
	const { data } = useSession();

	const { dispatch, isMobileMenuVisible, headerStyle, isSearchPopupVisible, menuOptionsDropDown } =
		useContext(OptionsContext);

	return (
		<header className={headerClassType[headerStyle]}>
			<div className="main-box">
				<div className="auto-container clearfix">
					<div className="logo-box">
						<div className="logo" style={{ cursor: "pointer" }}>
							<Link href={"/"} style={{ textDecoration: "none" }}>
								<Image src="/images/zen-logo.png" height={50} width={50} alt="" title="Zen" />
							</Link>
						</div>
					</div>

					{/* <!--Nav Box--> */}
					<div className="nav-outer clearfix">
						{/* <!--Mobile Navigation Toggler--> */}
						<div
							style={{ cursor: "pointer" }}
							onClick={() => {
								dispatch({ type: "SHOW_MOBILE_MENU", data: !isMobileMenuVisible });
							}}
							className="mobile-nav-toggler"
						>
							<span className="icon flaticon-menu"></span>
						</div>
						{/* <!-- Main Menu --> */}
						<nav className="main-menu navbar-expand-md navbar-light">
							<div className="navbar-header">
								{/* <!-- Togg le Button --> */}
								<button
									className="navbar-toggler"
									type="button"
									data-toggle="collapse"
									data-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="icon flaticon-menu-button"></span>
								</button>
							</div>

							<div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
								<ul className="navigation clearfix">
									<li className="">
										<Link href={"/"} style={{ textDecoration: "none" }}>
											Home
										</Link>
									</li>
									<li className="dropdown">
										<a>About</a>
										<ul>
											<li>
												<Link href={"/about/zen-huzaini"} style={{ textDecoration: "none" }}>
													Me
												</Link>
											</li>
											<li>
												<Link href={"/about/portofolio"} style={{ textDecoration: "none" }}>
													Portofolio
												</Link>
											</li>
										</ul>
									</li>
									<li className="dropdown current">
										<a>Adventure</a>
										<ul>
											<li>
												<Link href={"/blog/filter/tag/cycling"} style={{ textDecoration: "none" }}>
													Cycling
												</Link>
											</li>

											<li>
												<Link href={"/blog/filter/tag/hiking"} style={{ textDecoration: "none" }}>
													Hiking
												</Link>
											</li>
											<li>
												<Link href={"/blog/filter/tag/camping"} style={{ textDecoration: "none" }}>
													Camping
												</Link>
											</li>
											<li>
												<Link href={"/blog/filter/tag/explore"} style={{ textDecoration: "none" }}>
													Explore
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link href={"/contact"} style={{ textDecoration: "none" }}>
											Contact
										</Link>
									</li>
								</ul>
							</div>
						</nav>
						{/* <!-- Main Menu End--> */}

						{/* <!-- Outer box --> */}
						<div className="outer-box">
							{/* <!--Search Box--> */}
							<div className="search-box-outer">
								<div
									style={{ cursor: "pointer" }}
									className="search-box-btn"
									onClick={() => {
										dispatch({
											data: !isSearchPopupVisible,
											type: contextType.SHOW_POP_UP_SEARCH,
										});
									}}
								>
									<span className="flaticon-search"></span>
								</div>
							</div>

							{/* <!-- Button Box --> */}
							{data?.user ? (
								<div className="btn-box">
									<AvatarBadge />
								</div>
							) : (
								<div className="btn-box">
									<Link
										className="theme-btn btn-style-one"
										href={"/login"}
										style={{ textDecoration: "none" }}
									>
										<span className="btn-title">Login</span>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Mobile Menu  --> */}
			<div className="mobile-menu">
				<div className="menu-backdrop"></div>
				<div className="close-btn">
					<span className="icon flaticon-cancel-1"></span>
				</div>

				{/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
				<nav className="menu-box">
					<div className="nav-logo">
						<Link
							onClick={() => {
								dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
							}}
							href={"/"}
							style={{ cursor: "pointer", textDecoration: "none" }}
						>
							<Image width={50} height={50} src="/images/zen-logo.png" alt="" title="" />
						</Link>
					</div>

					<ul className="navigation clearfix">
						{/* <!--Keep This Empty / Menu will come through Javascript--> */}
						<li className="current">
							<Link
								onClick={() => {
									dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
								}}
								href={"/"}
								style={{ textDecoration: "none" }}
							>
								Home
							</Link>
						</li>

						<li className="dropdown">
							<a>About</a>
							<ul
								style={{
									display: menuOptionsDropDown.about ? "block" : "none",
									marginLeft: "5%",
								}}
							>
								<li>
									<Link
										onClick={() => {
											dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
										}}
										href={"/about/zen-huzaini"}
										style={{ textDecoration: "none" }}
									>
										Me
									</Link>
								</li>
								<li>
									<Link
										onClick={() => {
											dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
										}}
										href={"/about/portofolio"}
										style={{ textDecoration: "none" }}
									>
										Portofolio
									</Link>
								</li>
							</ul>
							<div
								className="dropdown-btn"
								onClick={() => {
									dispatch({
										type: contextType.MENU_OPTION_DROP_DOWN,
										data: { ...menuOptionsDropDown, about: !menuOptionsDropDown.about },
									});
								}}
							>
								<span className="fa fa-angle-down"></span>
							</div>
						</li>

						<li className="dropdown">
							<a>Adventure</a>
							<ul
								style={{
									display: menuOptionsDropDown.adventure ? "block" : "none",
									marginLeft: "5%",
								}}
							>
								<li>
									<Link
										onClick={() => {
											dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
										}}
										href={"/blog/filter/tag/cycling"}
										style={{ textDecoration: "none" }}
									>
										Cycling
									</Link>
								</li>
								<li>
									<Link
										onClick={() => {
											dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
										}}
										href={"/blog/filter/tag/hiking"}
										style={{ textDecoration: "none" }}
									>
										Hiking
									</Link>
								</li>
								<li>
									<Link
										onClick={() => {
											dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
										}}
										href={"/blog/filter/tag/camping"}
										style={{ textDecoration: "none" }}
									>
										Camping
									</Link>
								</li>
								<li>
									<Link
										onClick={() => {
											dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
										}}
										href={"/blog/filter/tag/explore"}
										style={{ textDecoration: "none" }}
									>
										Explore
									</Link>
								</li>
							</ul>
							<div
								className="dropdown-btn"
								onClick={() => {
									dispatch({
										type: contextType.MENU_OPTION_DROP_DOWN,
										data: { ...menuOptionsDropDown, adventure: !menuOptionsDropDown.adventure },
									});
								}}
							>
								<span className="fa fa-angle-down"></span>
							</div>
						</li>

						<li>
							<Link
								onClick={() => {
									dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
								}}
								href={"/contact"}
								style={{ textDecoration: "none" }}
							>
								Contact
							</Link>
						</li>

						{data?.user ? (
							<li>
								<Link
									onClick={() => {
										dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
									}}
									href={"/admin"}
									style={{ textDecoration: "none" }}
								>
									Dashboard
								</Link>
							</li>
						) : (
							<div className="btn-box">
								<Link
									className="theme-btn btn-style-one"
									href={"/login"}
									style={{
										textDecoration: "none",
										marginTop: 30,
										marginLeft: 20,
									}}
									onClick={() => {
										dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
									}}
								>
									<span className="btn-title">Login</span>
								</Link>
							</div>
						)}
					</ul>
				</nav>

				<div
					className="close-btn"
					onClick={() => {
						dispatch({ type: "SHOW_MOBILE_MENU", data: !isMobileMenuVisible });
					}}
				>
					<span className="icon flaticon-cancel-music"></span>
				</div>
			</div>
			{/* <!-- End Mobile Menu --> */}
		</header>
	);
};

export default Navigation;
