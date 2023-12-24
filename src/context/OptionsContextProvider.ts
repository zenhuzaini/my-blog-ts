import { createContext, useReducer } from "react";
import { headerType } from "../constants/constants";
import { OptionsContextReducer } from "./OptionsContextReducer";
import { IState } from "./state.interface";

const INITIAL_STATE: IState = {
	isMobileMenuVisible: false,
	isSearchPopupVisible: false,
	windowSize: [],
	menuOptionsDropDown: {
		about: false,
		adventure: false,
	},
	headerStyle: headerType.MAIN_HEADER,
	isAdminPanel: false,
	isLoading: false,
	isNotAuthenticatedUser: false,
	isRegistrationSuccessful: false,
};

export const OptionsContext = createContext(INITIAL_STATE);

export const OptionsContextProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(OptionsContextReducer, INITIAL_STATE);

	return (
		<OptionsContext.Provider value={{ ...state, dispatch }}>{children}</OptionsContext.Provider>
	);
};
