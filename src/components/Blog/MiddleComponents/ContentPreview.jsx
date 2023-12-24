import Image from "next/image";
import Link from "next/link";

const ContentPreview = ({ posts }) => {
	const contentsPreview = posts.map((post, index) => {
		return (
			<div key={index} className="news-block wow fadeInRight">
				<div className="inner-box">
					<div className="image-box">
						<figure className="image">
							<a>
								<Image width={770} height={450} src={post.headerPhoto} alt="" />
							</a>
						</figure>
					</div>
					<div className="lower-content">
						<ul className="post-info">
							<li>
								<span className="far fa-user"></span> {post.author}
							</li>
							<li>
								<span className="far fa-calendar"></span> {post.date}
							</li>
							<li>
								<span className="far fa-comments"></span> Comment 03
							</li>
						</ul>
						<h4>
							<Link legacyBehavior href={`/blog/${post.url}`} style={{ textDecoration: "none" }}>
								<a>{post.title}</a>
							</Link>
						</h4>
						<div className="text">{post.description}</div>
						<Link legacyBehavior href={`/blog/${post.url}`} style={{ textDecoration: "none" }}>
							<div className="btn-box">
								<a className="read-more">Read More</a>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	});

	return <>{contentsPreview}</>;
};

export default ContentPreview;
