const KomootMap = ({ komootId }) => {
	return (
		<>
			<p>Here you can see the route I had :)</p>
			<section className="map-section-blog-page">
				<div className="auto-container">
					<div className="map-outer">
						<iframe src={`https://www.komoot.com/tour/${komootId}/embed?profile=1`}></iframe>
					</div>
				</div>
			</section>
		</>
	);
};

export default KomootMap;
