import Image from "next/image";
import Link from "next/link";

const LatestPost = ({ latestPost }) => {
	const articles = latestPost.map((data, index) => {
		return (
			<article className="post" key={index}>
				<div className="post-inner">
					<figure className="post-thumb">
						<Image
							width={90}
							height={90}
							src={data.headerPhoto}
							alt=""
							style={{ objectFit: "cover", height: "90px" }} //need to override the height
						/>
					</figure>
					<div className="post-info">{data.date}</div>
					<div className="text">
						<Link key={index} href={`/blog/${data.url}`} style={{ textDecoration: "none" }}>
							<span hidden>{data.title}</span>
							{data.title.slice(0, 45)}...
						</Link>
					</div>
				</div>
			</article>
		);
	});
	return (
		<div className="sidebar-widget popular-posts">
			<h4 className="sidebar-title">Latest Posts</h4>
			<div className="widget-content">{articles}</div>
		</div>
	);
};

export default LatestPost;
