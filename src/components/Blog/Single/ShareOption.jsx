import Link from "next/link";
import FacebookShareButton from "react-share/lib/FacebookShareButton";
import TwitterShareButton from "react-share/lib/TwitterShareButton";
import WhatsappShareButton from "react-share/lib/WhatsappShareButton";
import LinkedinShareButton from "react-share/lib/LinkedinShareButton";
import { normalizedResponse } from "../../../utils/normalizedResponse";

/* eslint-disable jsx-a11y/anchor-is-valid */
const ShareOption = ({ content }) => {
	const title = `Check this out! A great articel about ${content.title}`;
	const url = `https://zenhuzaini.vercel.app/blog/${content.url}`;

	const parsedCategory = normalizedResponse(content.category);
	const tags = parsedCategory.map((data, index) => {
		return (
			<li key={index}>
				<Link href={data.tagUrl} style={{ textDecoration: "none" }}>
					{data.tag}
				</Link>
			</li>
		);
	});
	return (
		<div className="post-share-options clearfix">
			<div className="pull-left">
				<ul className="tags">{tags}</ul>
			</div>

			<div className="social-icon-three pull-right">
				<ul className="social-icon-three">
					<li>
						<a>
							<FacebookShareButton title={title} url={url}>
								<span className="fab fa-facebook-f"></span>
							</FacebookShareButton>
						</a>
					</li>
					<li>
						<a>
							<TwitterShareButton title={title} url={url}>
								<span className="fab fa-twitter"></span>
							</TwitterShareButton>
						</a>
					</li>
					<li>
						<a>
							<WhatsappShareButton title={title} url={url}>
								<span className="fab fa-whatsapp"></span>
							</WhatsappShareButton>
						</a>
					</li>
					<li>
						<a>
							<LinkedinShareButton title={title} url={url}>
								<span className="fab fa-linkedin-in"></span>
							</LinkedinShareButton>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ShareOption;
