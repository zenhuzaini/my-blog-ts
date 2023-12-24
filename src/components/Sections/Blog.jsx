import Image from "next/image";
import Link from "next/link";

const Blog = ({ posts }) => {
	const contents = posts.map((content, index) => {
		return (
			<div key={index} className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
				<div className="inner-box">
					<div className="image-box">
						<figure className="image">
							<a>
								<Image
									width={370}
									height={200}
									src={content.headerPhoto}
									alt={content.description}
								/>
							</a>
						</figure>
					</div>
					<div className="lower-content">
						<ul className="post-info">
							<li>
								<span className="far fa-user"></span> {content.author}
							</li>
							<li>
								<span className="far fa-comments"></span> Comment 03
							</li>
						</ul>
						<h4>
							<Link legacyBehavior href={"/blog/" + content.url} style={{ textDecoration: "none" }}>
								{content.title}
							</Link>
						</h4>
						<div className="btn-box">
							<Link
								legacyBehavior
								href={"/blog/" + content.url}
								style={{ textDecoration: "none" }}
								className="read-more"
							>
								Read More
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			<section className="news-section">
				<div className="anim-icons">
					<span className="icon icon-circle-blue wow fadeIn"></span>
					<span className="icon twist-line-1 wow zoomIn"></span>
					<span className="icon twist-line-2 wow zoomIn"></span>
					<span className="icon twist-line-3 wow zoomIn"></span>
				</div>

				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="title">Blogs</span>
						<h2>Latest News</h2>
					</div>

					<div className="row">{contents}</div>

					<Link href={"/blog"} style={{ textDecoration: "none" }}>
						<button type="submit" className="theme-btn btn-style-four">
							<span style={{ cursor: "pointer" }} className="btn-title">
								See More
							</span>
						</button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Blog;
