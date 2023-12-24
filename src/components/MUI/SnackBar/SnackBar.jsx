import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";

const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ status, open, setOpen, content }) {
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</Alert>
		</Snackbar>
	);
}
