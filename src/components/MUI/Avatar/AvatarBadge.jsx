import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logout from "@mui/icons-material/Logout";
import Dashboard from "@mui/icons-material/Dashboard";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

export default function AvatarBadge() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const router = useRouter();
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Stack direction="row" spacing={2}>
				<StyledBadge
					style={{ cursor: "pointer" }}
					onClick={handleClick}
					overlap="circular"
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					variant="dot"
				>
					<Avatar alt="Zen Huzaini" src="/images/me/IMG_20210114_152118_2.jpg" />
				</StyledBadge>
			</Stack>

			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<Link legacyBehavior href={"/admin/profile"} style={{ textDecoration: "none" }}>
					<MenuItem>
						<Avatar src="/images/me/IMG_20210114_152118_2.jpg" /> Profile
					</MenuItem>
				</Link>
				<Link legacyBehavior href={"/admin"} style={{ textDecoration: "none" }}>
					<MenuItem>
						<ListItemIcon>
							<Dashboard fontSize="small" />
						</ListItemIcon>
						Dashboard
					</MenuItem>
				</Link>
				<hr />

				<MenuItem
					onClick={async () => {
						//https://next-auth.js.org/getting-started/client#using-the-redirect-false-option-1
						const data = await signOut({ redirect: false, callbackUrl: "/" });
						router.push(data.url);
					}}
				>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
}
