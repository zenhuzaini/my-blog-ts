import { useContext, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import Footer from "../../Sections/Footer";
import Link from "next/link";
import { Book, Home, Logout, Map } from "@mui/icons-material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { StyledBadge } from "../Avatar/AvatarBadge";
import { Avatar } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	backgroundColor: "#023549",
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
		boxSizing: "border-box",
		...(open && {
			...openedMixin(theme),
			"& .MuiDrawer-paper": openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			"& .MuiDrawer-paper": closedMixin(theme),
		}),
	})
);

export default function MiniDrawer({ children }) {
	const router = useRouter();
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 5,
							...(open && { display: "none" }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<div className="logo-box">
						<div className="logo" style={{ cursor: "pointer" }}>
							<Link href={"/"} style={{ textDecoration: "none" }}>
								<Image src="/images/zen-logo.png" height={50} width={50} alt="" title="Zen" />
							</Link>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />

				<List>
					<ListItem disablePadding sx={{ display: "block" }}>
						<Link legacyBehavior href={"/admin/profile"}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<StyledBadge
										style={{ cursor: "pointer" }}
										overlap="circular"
										anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
										variant="dot"
									>
										<Avatar alt="Zen Huzaini" src="/images/me/IMG_20210114_152118_2.jpg" />
									</StyledBadge>
								</ListItemIcon>

								<ListItemText primary={"Zen Huzaini"} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</Link>
					</ListItem>
					{[
						{
							name: "Home",
							icon: <Home />,
							link: "/admin",
						},
						{
							name: "Post",
							icon: <Book />,
							link: "/admin/post",
						},
						{
							name: "Map",
							icon: <Map />,
							link: "/admin/map",
						},
					].map(({ name, icon, link }, index) => (
						<ListItem key={name} disablePadding sx={{ display: "block" }}>
							<Link legacyBehavior href={link}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? "initial" : "center",
										px: 2.5,
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : "auto",
											justifyContent: "center",
										}}
									>
										{icon}
									</ListItemIcon>

									<ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
								</ListItemButton>
							</Link>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					<ListItem
						disablePadding
						sx={{ display: "block" }}
						onClick={async () => {
							//https://next-auth.js.org/getting-started/client#using-the-redirect-false-option-1
							const data = await signOut({ redirect: false, callbackUrl: "/" });
							router.push(data.url);
						}}
					>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : "auto",
									justifyContent: "center",
								}}
							>
								<Logout />
							</ListItemIcon>
							<ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{children}
				<Footer />
			</Box>
		</Box>
	);
}
