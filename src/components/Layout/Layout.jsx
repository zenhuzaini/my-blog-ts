import { useContext, useEffect, useState } from "react";
import { classNames } from "../../constants/constants";
import { roboto } from "../../constants/fonts";
import { OptionsContext } from "../../context/OptionsContextProvider";
import { commonLayoutSetting } from "../../utils/commonLayoutSetting";
import Navigation from "../Navigation/Navigation";
import Scroller from "../Scroller/Scroller";
import SearchPopup from "../Search/Popup/SearchPopup";
import Footer from "../Sections/Footer";
import HeadTag from "../SEO/HeadTag";
import MiniDrawer from "../MUI/Drawer/Drawer";

const Layout = ({ children }) => {
	const { dispatch, isAdminPanel, isMobileMenuVisible } = useContext(OptionsContext);

	useEffect(() => {
		commonLayoutSetting(dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className={roboto.className}>
			<div className={isMobileMenuVisible ? classNames.MOBILE_CLASS_NAME_VISIBLE : ""}>
				{/* <div className="page-wrapper"> */}
				{isAdminPanel ? (
					<>
						<MiniDrawer>{children}</MiniDrawer>
					</>
				) : (
					<>
						<HeadTag />
						<Navigation />
						{children}
						<Footer />
						<SearchPopup />
						<Scroller />
					</>
				)}
				{/* </div> */}
			</div>
		</main>
	);
};

export default Layout;
