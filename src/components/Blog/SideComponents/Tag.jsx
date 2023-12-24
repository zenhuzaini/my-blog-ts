/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from "next/link";

const Tag = ({ tags }) => {
	const tagList = tags.map((tag, index) => {
		return (
			<Link key={index} href={`/blog/filter/tag/${tag}`} style={{ textDecoration: "none" }}>
				{tag}
			</Link>
		);
	});
	return (
		<div className="sidebar-widget popular-tags">
			<h4 className="sidebar-title">Tags</h4>
			<div className="widget-content">{tagList}</div>
		</div>
	);
};

export default Tag;
