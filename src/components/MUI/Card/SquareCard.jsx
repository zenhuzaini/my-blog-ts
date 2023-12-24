import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { OptionsContext } from "../../../context/OptionsContextProvider";
import Link from "next/link";
import { contextType } from "../../../context/contextTypes";

export default function MultiActionAreaCard({ title, description, image }) {
	const { dispatch, isNotAuthenticatedUser, isRegistrationSuccessful } =
		React.useContext(OptionsContext);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={image ? image : "/images/cyclist/cyclingTogether.jpg"}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					onClick={() => {
						dispatch({ type: contextType.IS_LOADING, data: false });
						if (isRegistrationSuccessful) {
							dispatch({ type: contextType.IS_REGISTRATION_SUCCESSFUL, data: false });
						}

						if (isNotAuthenticatedUser) {
							dispatch({ type: contextType.IS_NOT_AUTHENTICATED_USER, data: false });
						}
					}}
					size="small"
					color="primary"
				>
					Back
				</Button>

				<Link
					href={"/login"}
					onClick={() => {
						dispatch({ type: contextType.IS_LOADING, data: false });
						if (isRegistrationSuccessful) {
							dispatch({ type: contextType.IS_REGISTRATION_SUCCESSFUL, data: false });
						}

						if (isNotAuthenticatedUser) {
							dispatch({ type: contextType.IS_NOT_AUTHENTICATED_USER, data: false });
						}
					}}
				>
					<Button size="small" color="primary">
						Login
					</Button>
				</Link>

				<Link
					href={"/"}
					onClick={() => {
						dispatch({ type: contextType.IS_LOADING, data: false });
						if (isRegistrationSuccessful) {
							dispatch({ type: contextType.IS_REGISTRATION_SUCCESSFUL, data: false });
						}

						if (isNotAuthenticatedUser) {
							dispatch({ type: contextType.IS_NOT_AUTHENTICATED_USER, data: false });
						}
					}}
				>
					<Button size="small" color="primary">
						Home
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
