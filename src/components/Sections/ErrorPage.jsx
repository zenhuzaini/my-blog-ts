import Link from "next/link";
import { useRef, useState } from "react";
import CustomizedSnackbars from "../MUI/SnackBar/SnackBar";

const ErrorPage = ({ errorType, isForAdminPage }) => {
	const emailInputRef = useRef();
	const [open, setOpen] = useState(false);
	const [status, setStatus] = useState("success");
	const [content, setContent] = useState("success");

	async function submitEmailHandler(event) {
		event.preventDefault();
		const email = emailInputRef.current.value;

		const res = await fetch("/api/subscription", {
			method: "POST",
			body: JSON.stringify({
				email,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await res.json();

		if (data) {
			setStatus("success");
			setOpen(true);

			setContent(`Thanks ${data.email}. You'll hear from us soon &#128513`);
		}
	}

	let message,
		title,
		style = { marginTop: isForAdminPage ? 0 : "10%" };
	switch (errorType) {
		case "404Error":
			title = "Not Found &#128557";
			message = "It seems the page you are looking for is not available.";
			break;

		case "UnderConstruction":
			title = "OH EH &#128557";
			message =
				"This page or feature is currently under construction or planned as a future feature. Stay tuned &#128521";
			break;

		case "404ContentNotAvailable":
			title = "Sorry &#128557 &#128557 &#128557";
			message = "It seems the content you are looking for is not available at this moment...";
			style = { padding: 0 };
			break;

		case "500Error":
			title = "Something Went Wrong :(";
			message =
				"There is an internal server error. The engineers has been noiced and will soon working on it to fix it! :( sorry for the inconvinient.";
			break;

		default:
			break;
	}
	return (
		<section className="coming-soon" style={style}>
			<div className="auto-container">
				<div className="content">
					<h1>
						<div dangerouslySetInnerHTML={{ __html: title }} />
					</h1>
					<div className="text">
						<div dangerouslySetInnerHTML={{ __html: message }} />
						<br />
						Subscribe to our newsletter to stay updated.
					</div>
					<div className="emailed-form">
						<form method="post" onSubmit={(e) => submitEmailHandler(e)}>
							<div className="form-group">
								<input
									type="email"
									name="email"
									placeholder="Enter your email"
									required=""
									ref={emailInputRef}
								/>
								<button type="submit" className="theme-btn">
									<i className="flaticon-arrow-pointing-to-right"></i>
								</button>
							</div>
						</form>
					</div>
					<div className="social-links">
						<ul className="social-icon-two social-icon-colored">
							<li>
								<Link
									href={"https://www.facebook.com/zenhuzainii/"}
									style={{ cursor: "pointer", textDecoration: "none" }}
									target="_blank"
								>
									<span className="fab fa-facebook-f"></span>
								</Link>
							</li>
							<li>
								<Link
									href={"https://twitter.com/zenhuzaini"}
									style={{ cursor: "pointer", textDecoration: "none" }}
									target="_blank"
								>
									<span className="fab fa-twitter"></span>
								</Link>
							</li>
							<li>
								<Link
									href={"https://www.instagram.com/zenhuzaini"}
									style={{ cursor: "pointer", textDecoration: "none" }}
									target="_blank"
								>
									<span className="fab fa-instagram"></span>
								</Link>
							</li>
							<li>
								<Link
									href={"https://pl.linkedin.com/in/zenhuzaini"}
									style={{ cursor: "pointer", textDecoration: "none" }}
									target="_blank"
								>
									<span className="fab fa-linkedin-in"></span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<CustomizedSnackbars status={status} open={open} setOpen={setOpen} content={content} />
		</section>
	);
};

export default ErrorPage;
