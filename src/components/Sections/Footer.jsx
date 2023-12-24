import Favorite from "@mui/icons-material/Favorite";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SocialMediaIcons from "../About/SocialMediaIcons";

const Footer = () => {
	const [isEmailVisible, setIsEmailVisible] = useState(false);
	const instagramPhoto = [
		"/images/ig/1.jpg",
		"/images/ig/2.jpg",
		"/images/ig/3.jpg",
		"/images/ig/4.jpg",
		"/images/ig/5.jpg",
		"/images/ig/6.jpg",
	];

	const photos = instagramPhoto.map((data, index) => {
		return (
			<figure key={index} className="image">
				<a src={data} className="lightbox-image" title="Image Title Here">
					<Image
						width={80}
						height={80}
						style={{ objectFit: "cover", width: "80px", height: "80px" }}
						src={data}
						alt=""
					/>
				</a>
			</figure>
		);
	});

	return (
		<div>
			<footer className="main-footer">
				{/* <!--Widgets Section--> */}
				<div className="widgets-section">
					<div className="auto-container">
						<div className="row">
							{/* <!--Big Column--> */}
							<div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
								<div className="row">
									{/* <!--Footer Column--> */}
									<div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
										<div className="footer-widget about-widget">
											<div className="logo">
												<Link legacyBehavior href={"/"} style={{ textDecoration: "none" }}>
													<Image
														src="/images/zen-logo.png"
														height={50}
														width={50}
														alt=""
														title="Zen"
													/>
												</Link>
											</div>
											<div className="text">
												<p>
													I love to explore the nature. I will write all of my experience and
													adventure here :). <br />I am also available to these social media. Feel
													free to follow me, become friends and go on adventure together :D
												</p>
											</div>
											<SocialMediaIcons clsname={"social-icon-one social-icon-colored"} />
										</div>
									</div>

									{/* <!--Footer Column--> */}
									<div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
										<div className="footer-widget useful-links">
											<h2 className="widget-title">Useful Links</h2>
											<ul className="user-links">
												<li>
													<Link href={"/"} style={{ textDecoration: "none" }}>
														Home
													</Link>
												</li>
												<li>
													<Link href={"/about/zen-huzaini"} style={{ textDecoration: "none" }}>
														About Me
													</Link>
												</li>
												<li>
													<Link href={"/blog"} style={{ textDecoration: "none" }}>
														Blog
													</Link>
												</li>
												<li>
													<Link
														target={"_blank"}
														href={"/sitemap.xml"}
														style={{ textDecoration: "none" }}
													>
														Sitemap
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							{/* <!--Big Column--> */}
							<div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
								<div className="row">
									{/* <!--Footer Column--> */}
									<div className="footer-column col-lg-6 col-md-6 col-sm-12">
										{/* <!--Footer Column--> */}
										<div className="footer-widget contact-widget">
											<h2 className="widget-title">Contact Me</h2>
											{/* <!--Footer Column--> */}
											<div className="widget-content">
												<ul className="contact-list">
													<li>
														<span className="icon flaticon-clock"></span>
														<div className="text">Sat - Sun: 09:00 - 18:00</div>
													</li>

													{/* <li>
														<span className="icon flaticon-phone"></span>
														<div className="text">
															<a href="tel:+1-345-5678-77">+1-345-5678-77</a>
														</div>
													</li> */}

													<li>
														<span className="icon flaticon-paper-plane"></span>
														<div className="text">
															{isEmailVisible ? (
																<a href="mailto:zenhuzaini96@gmail.com">zenhuzaini96@gmail.com</a>
															) : (
																<div
																	onClick={() => {
																		setIsEmailVisible(!isEmailVisible);
																	}}
																	style={{ cursor: "pointer" }}
																>
																	Show Email
																</div>
															)}
														</div>
													</li>

													<li>
														<span className="icon flaticon-worldwide"></span>
														<div className="text">Wroclaw, Poland</div>
													</li>
												</ul>
											</div>
										</div>
									</div>

									{/* <!--Footer Column--> */}
									<div className="footer-column col-lg-6 col-md-6 col-sm-12">
										{/* <!--Footer Column--> */}
										<div className="footer-widget instagram-widget">
											<h2 className="widget-title">Instagram Gallery</h2>
											<div className="widget-content">
												<div className="outer clearfix">{photos}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--Footer Bottom--> */}
				<div className="footer-bottom">
					<div className="auto-container">
						<div className="inner-container clearfix">
							<div className="copyright-text">
								<p>
									© Copyright 2022 All Rights Reserved by
									<Link href={"/about/zen-huzaini"} style={{ textDecoration: "none" }}>
										{" "}
										Zen Huzaini
									</Link>
								</p>
								<p>
									Crafted with <Favorite style={{ fontSize: 11 }} color="blue" /> using React +
									Next.JS.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
