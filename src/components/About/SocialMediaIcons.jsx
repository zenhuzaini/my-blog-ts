import Link from "next/link";
import React from "react";

const SocialMediaIcons = ({ clsname }) => {
	return (
		<ul className={clsname}>
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
	);
};

export default SocialMediaIcons;
