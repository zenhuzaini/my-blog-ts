import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ArrowBack, Home, HomeMaxRounded } from "@mui/icons-material";
import { OptionsContext } from "../../../context/OptionsContextProvider";
import { contextType } from "../../../context/contextTypes";
import Link from "next/link";

export default function MediaControlCard() {
	const { dispatch } = useContext(OptionsContext);

	return (
		<Card sx={{ display: "flex" }}>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						SORRYYYYYYYY
					</Typography>
					<Typography variant="subtitle1" color="text.secondary" component="div">
						Only this Handsome guy can access the admin part :D
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
					<IconButton
						onClick={() => {
							dispatch({ type: contextType.IS_LOADING, data: false });
							dispatch({ type: contextType.IS_NOT_AUTHENTICATED_USER, data: false });
						}}
						aria-label="previous"
					>
						<ArrowBack />
					</IconButton>
					<Link
						href={"/"}
						onClick={() => {
							dispatch({ type: contextType.IS_LOADING, data: false });
							dispatch({ type: contextType.IS_NOT_AUTHENTICATED_USER, data: false });
						}}
					>
						<IconButton aria-label="play/pause">
							<Home sx={{ height: 38, width: 38 }} />
						</IconButton>
					</Link>
				</Box>
			</Box>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image="/images/me/me.jpg"
				alt="Live from space album cover"
			/>
		</Card>
	);
}
