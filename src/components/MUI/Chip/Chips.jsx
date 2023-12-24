import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Box from "@mui/system/Box";
import { tags } from "../../../utils/postData";

const ListItem = styled("li")(({ theme }) => ({
	margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
	const [chipData, setChipData] = useState([]);

	useEffect(() => {
		const tagChips = tags.map((tag, index) => {
			return { selected: true, key: index, label: tag };
		});
		setChipData(tagChips);
	}, []);

	const handleSelect = (chipToDelete) => () => {
		const newChipData = chipData.map((chip) => {
			if (chipToDelete.key === chip.key) {
				return { ...chip, selected: !chip.selected };
			}
			return chip;
		});
		setChipData(newChipData);
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap",
				listStyle: "none",
				p: 0.5,
				m: 0,
			}}
			component="ul"
		>
			{chipData.map((data) => {
				let icon;

				return (
					<ListItem key={data.key} onClick={handleSelect(data)}>
						<Chip
							icon={icon}
							label={data.label}
							onDelete={!data.selected ? undefined : handleSelect(data)} //just to show the x
							color="primary"
							variant={!data.selected ? "outlined" : ""}
						/>
					</ListItem>
				);
			})}
		</Box>
	);
}
