import Image from "next/image";
import React from "react";

const UserInfo = () => {
	return (
		<>
			<div className="speaker-info">
				<figure className="thumb">
					<Image width={100} height={100} src="/images/resource/thumb-1.jpg" alt="" />
				</figure>
				<h5 className="name">Ashli Scroggy</h5>
				<span className="designation">Founder &amp; CEO</span>
			</div>
			<ul className="upper-info">
				<li>
					<span className="icon far fa-clock"></span>9.00 AM - 10.00 PM
				</li>
				<li>
					<span className="icon fa fa-map-marker-alt"></span>Collins Street West Victoria 8007
					Canada
				</li>
			</ul>
		</>
	);
};

export default UserInfo;
