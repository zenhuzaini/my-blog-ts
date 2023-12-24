import Box from "@mui/material/Box";
import React from "react";

const TitleBar = ({ children, title }) => {
	return (
		<div>
			<div className="row">
				<Box
					sx={{
						width: "100%",
						position: "relative",
						display: "flex",
						padding: 1,
					}}
					style={{
						alignContent: "space-between",
						justifyContent: "space-between",
					}}
				>
					<h3>{title}</h3>
					{children}
				</Box>
			</div>
			<hr />
		</div>
	);
};

export default TitleBar;
