import { Kalam, Nunito_Sans, Roboto, Saira_Condensed, Slabo_27px } from "next/font/google";

export const nunitoSans = Nunito_Sans({
	weight: ["200", "300", "400", "800", "700", "900"],
	style: ["italic", "normal"],
	subsets: ["latin"],
});

export const slabo27 = Slabo_27px({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});

export const saira = Saira_Condensed({
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal"],
	subsets: ["latin"],
});

//for quote
export const kalam = Kalam({
	weight: ["300", "400", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

export const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["italic", "normal"],
	subsets: ["latin"],
});
