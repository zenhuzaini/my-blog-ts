import Image from "next/image";
import KomootMap from "../Komoot/KomootMap";

const MainContent = ({ content, isWritingState }) => {
	return (
		<div className="news-block">
			<div className="inner-box">
				<div className="image-box">
					<figure className="image">
						<Image width={770} height={472} src={content.headerPhoto} alt="" />
					</figure>
				</div>
				<div className="lower-content">
					<ul className="post-info">
						<li>
							<span className="far fa-user"></span> {content.author}
						</li>
						<li>
							<span className="far fa-calendar"></span> {content.date}
						</li>
						<li>
							<span className="far fa-comments"></span> Comment 03
						</li>
					</ul>
					<h2>{content.title}</h2>
					<div dangerouslySetInnerHTML={{ __html: content.content }} />

					{isWritingState ? "" : content.komootId ? <KomootMap komootId={content.komootId} /> : ""}
				</div>
			</div>
		</div>
	);
};

export default MainContent;
