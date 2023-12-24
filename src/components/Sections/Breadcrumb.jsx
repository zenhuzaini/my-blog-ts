import Link from "next/link";

const Breadcrumb = ({ pageLocation, content, tag }) => {
	let backgroundImage = "url(/images/me/IMG_20210531_174820.jpg)";
	let blogSidebarTitle = "wherever we go";
	let links = (
		<li>
			<Link href={"/blog"} style={{ textDecoration: "none" }}>
				Blog
			</Link>
		</li>
	);

	switch (pageLocation) {
		case "blog":
			break;

		case "blogFilter":
			blogSidebarTitle = tag.toUpperCase();
			links = (
				<>
					<li>
						<Link href={"/blog"} style={{ textDecoration: "none" }}>
							Blog
						</Link>
					</li>

					<li>
						<Link href={"/blog/filter/tag/" + tag} style={{ textDecoration: "none" }}>
							{tag}
						</Link>
					</li>
				</>
			);
			break;

		case "blogPage":
			blogSidebarTitle = content.title ? content.title : blogSidebarTitle;
			backgroundImage = `url(${content.headerPhoto})`;
			links = (
				<>
					<li>
						<Link href={"/blog"} style={{ textDecoration: "none" }}>
							Blog
						</Link>
					</li>

					<li>
						<Link href={"/blog/" + content.url} style={{ textDecoration: "none" }}>
							{content.title}
						</Link>
					</li>
				</>
			);
			break;

		case "aboutMe":
			blogSidebarTitle = "About Me!";
			backgroundImage = `url(/images/me/IMG_20221029_135432_2.jpg)`;
			links = (
				<>
					<li>
						<Link href={"/about/zen-huzaini"} style={{ textDecoration: "none" }}>
							About Me
						</Link>
					</li>
				</>
			);
			break;

		default:
			break;
	}

	return (
		<div>
			<section className="page-title" style={{ backgroundImage }}>
				<div className="auto-container">
					<h1>{blogSidebarTitle}</h1>
					<ul className="bread-crumb clearfix">
						<li>
							<Link href={"/"} style={{ textDecoration: "none" }}>
								Home
							</Link>
						</li>
						{links}
					</ul>
				</div>
			</section>
		</div>
	);
};

export default Breadcrumb;
