import Image from "next/image";
import SocialMediaIcons from "../SocialMediaIcons";

const AboutMe = () => {
	return (
		<div>
			<section className="speaker-detail">
				<div className="auto-container">
					<div className="row">
						<div className="image-column col-lg-4 col-md-12 col-sm-12">
							<div className="image-box">
								<figure className="image">
									<Image height={270} width={300} src="/images/me/me.jpg" alt="Zen Huzaini" />
								</figure>
								<SocialMediaIcons clsname={"social-icon-two social-icon-colored text-center"} />
							</div>
						</div>

						<div className="info-column col-lg-8 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="text-box" style={{ textAlign: "justify" }}>
									<h3>Zen Huzaini</h3>
									<p>Hi What&rsquo;s up?</p>

									<p>
										My name is Zen. Since a little kid I&rsquo;ve been loving to watch the morning and the
										afternoon sky for hours in a vast open field next to my grandmother&rsquo;s house &ndash;
										wondering if I could find some interesting shapes of clouds. Of course I love to watch the
										night sky too, it is my favorite! Especially if I could find a shooting star.
									</p>

									<p>
										I love to walk in the mountain, cycling in the quite and peaceful road surrounded by
										forest or to a hill where I can see all the beauty of god&rsquo;s creation from the top,
										and being lost in nowhere where I can feel the real of adventure &ndash; and finally feel
										that I am one with the nature. So probably I was born to be a traveler or something
										&hellip; I mean, living a live away from the city and start to live in a forest like
										Tarzan will be the best ideal way of life for me ? &ndash; oh, I don&rsquo;t know, I guess
										it is kinda hard nowadays, eh ?
									</p>

									<p>
										<em>
											<strong>Who am I Really ?</strong>
										</em>
									</p>

									<p>
										People say I am a nice person, having a nice and bright smile, and apologize a lot &ndash;
										even I will apologize for breathing!. I come from a beautiful country full of fantastic
										and excotic island filled with amazing &ndash; yet sometimes dangerous creature, nice
										people and mesmerizing nature, Indonesia. Recently, I&rsquo;ve been trapped happily here
										in Poland. Don&rsquo;t ask why I stay here. Fate brings me here. Got a scholarship for my
										master, fell in love with the country, and found a real love who loves me for I am &ndash;
										for the first time 😊.
									</p>

									<p>
										In the morning I work as a Software Engineer &ndash; both in Backend and Frontend. Guess
										you know, I made this web also 😋&nbsp;.. In my spare time I usually go somewhere cycling
										&ndash; yeah, cycling far away from the city where I live and feel the breezing wind blows
										my face and hear the sound of little birds singing along the foresty road. &nbsp;The story
										changes when the winter hits &ndash; I&rsquo;d be just stay at home, watching Netflix,
										taking care of this blog and youtube channel and playing moba games.
									</p>

									<p>
										I had some blogs in the past, but those all are gone already &ndash; argh, I should have
										just continued in one of those.. It must be famous by now lol. The purpose of this blog is
										actually &ndash; to share my experience of being <em>here and there</em>, and probably a
										little of a chit chat of mine of undergoing this sometimes miserable life. I mean, this is
										supposed to be just a small reminder, diary or a well-written history for me. But you
										know, this experience can probably be helpful for someone out there. I don&rsquo;t expect
										people to read &ndash; yeah nowadays people love watching Youtube &ndash; I guess :p
										&ndash; you can also subscribe my youtube channel :D
									</p>

									<p>So it is all about me, I cannot wait to share you the story of me life&nbsp;😁.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutMe;
