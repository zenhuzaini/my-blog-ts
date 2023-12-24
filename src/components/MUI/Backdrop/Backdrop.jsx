import { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { OptionsContext } from "../../../context/OptionsContextProvider";
import MultiActionAreaCard from "../Card/SquareCard";

export default function SimpleBackdrop() {
	const { isLoading, isNotAuthenticatedUser, isRegistrationSuccessful } =
		useContext(OptionsContext);

	let backdropContent = <CircularProgress color="inherit" />;

	if (isNotAuthenticatedUser) {
		const title = "Sorryyyyy";
		const description =
			"We are so sorry, only that guy can acces the admin panel. Not fair, isn't it ?";
		backdropContent = (
			<MultiActionAreaCard title={title} description={description} image={"/images/me/me.jpg"} />
		);
	}

	if (isRegistrationSuccessful) {
		const title = "Congratulations.. ";
		const description =
			"Thanks for trying to register, however the user feature is still on progress.. we will let you know when it is ready..";

		backdropContent = <MultiActionAreaCard title={title} description={description} />;
	}

	return (
		<Backdrop
			sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={isLoading || isRegistrationSuccessful || isNotAuthenticatedUser}
		>
			{backdropContent}
		</Backdrop>
	);
}
