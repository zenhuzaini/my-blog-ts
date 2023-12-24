import Image from "next/image";
import React from "react";

const TwoColumn = () => {
	return (
		<div className="row two-column">
			<div className="column col-lg-6 col-md-12">
				<figure className="image">
					<Image width={100} height={50} src="/images/resource/post-img.jpg" alt="" />
				</figure>
			</div>
			<div className="column col-lg-6 col-md-12">
				<h4>Evolution of user Interface</h4>
				<ul className="list-style-two">
					<li>Multiple Announcements during the event.</li>
					<li>Logo &amp; company details on the WordCamp Kolkata.</li>
					<li>Dedicated blog post thanking each of our Gold.</li>
					<li>Acknowledgment and thanks in opening and closing.</li>
				</ul>
			</div>
		</div>
	);
};

export default TwoColumn;
