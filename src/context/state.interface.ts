import { headerType } from "@/constants/constants";

export interface IState {
	isMobileMenuVisible: boolean;
	isSearchPopupVisible: boolean;
	windowSize: [];
	menuOptionsDropDown: IMenuOptionDropdown;
	headerStyle:
		| typeof headerType.HEADER_STYLE_2
		| typeof headerType.MAIN_HEADER
		| typeof headerType.NO_HEADER;
	isAdminPanel: boolean;
	isLoading: boolean;
	isNotAuthenticatedUser: boolean;
	isRegistrationSuccessful: boolean;
}

interface IMenuOptionDropdown {
	about: boolean;
	adventure: boolean;
}
