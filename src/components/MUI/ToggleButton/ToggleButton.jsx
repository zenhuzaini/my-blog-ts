import * as React from "react";
import ArtTrack from "@mui/icons-material/ArtTrack";
import VerticalSplit from "@mui/icons-material/VerticalSplit";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleWithButton({ setSideBySideView }) {
	const [alignment, setAlignment] = React.useState("tab");

	const handleChange = (event, newAlignment) => {
		if (newAlignment === "sideBySide") {
			setSideBySideView(true);
			setAlignment(newAlignment);
		} else {
			setSideBySideView(false);
			setAlignment(newAlignment);
		}
	};

	const children = [
		<ToggleButton value="sideBySide" key="left">
			<VerticalSplit />
		</ToggleButton>,

		<ToggleButton value="tab" key="justify">
			<ArtTrack />
		</ToggleButton>,
	];

	const control = {
		value: alignment,
		onChange: handleChange,
		exclusive: true,
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				// TODO Replace with Stack
				"& > :not(style) + :not(style)": { mt: 2 },
			}}
		>
			<ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
				{children}
			</ToggleButtonGroup>
		</Box>
	);
}
