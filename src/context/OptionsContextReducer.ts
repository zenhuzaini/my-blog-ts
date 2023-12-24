import { contextType } from "./contextTypes";
import { IState } from "./state.interface";

export const OptionsContextReducer = (
	state: IState,
	{ type, data }: { type: string; data: any }
) => {
	switch (type) {
		case contextType.SHOW_MOBILE_MENU: {
			return { ...state, isMobileMenuVisible: data };
		}

		case contextType.SHOW_POP_UP_SEARCH: {
			return { ...state, isSearchPopupVisible: data };
		}

		case contextType.WINDOW_SIZE: {
			return { ...state, windowSize: data };
		}

		case contextType.MENU_OPTION_DROP_DOWN: {
			return { ...state, menuOptionsDropDown: data };
		}

		case contextType.SET_HEADER_STYLE: {
			return { ...state, headerStyle: data };
		}

		case contextType.IS_ADMIN_PANEL: {
			return { ...state, isAdminPanel: data };
		}

		case contextType.IS_LOADING: {
			return { ...state, isLoading: data };
		}

		case contextType.IS_NOT_AUTHENTICATED_USER: {
			return { ...state, isNotAuthenticatedUser: data };
		}

		case contextType.IS_REGISTRATION_SUCCESSFUL: {
			return { ...state, isRegistrationSuccessful: data };
		}

		default: {
			return state;
		}
	}
};
