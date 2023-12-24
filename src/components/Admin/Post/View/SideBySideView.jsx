import { Box, Paper } from "@mui/material";
import { PostForm } from "../Post";
import MainContent from "../../../Blog/Single/MainContent";

export const SideBySideView = ({
	title,
	author,
	url,
	category,
	date,
	postContent,
	headerPhoto,
	komootId,
	description,
	setTitle,
	setAuthor,
	setUrl,
	setCategory,
	setDate,
	setPostContent,
	setHeaderPhoto,
	setKomootId,
	setDescription,
}) => {
	const postContentData = {
		title,
		author,
		url,
		category,
		date,
		content: postContent,
		headerPhoto,
		komootId,
		description,
	};
	return (
		<>
			<div className="row">
				<div className="map-column col-lg-6 col-md-12 col-sm-12">
					<Box sx={{ width: "100%" }}>
						<Paper variant="outlined" square sx={{ width: "100%", padding: 3 }}>
							<PostForm
								title={title}
								author={author}
								url={url}
								category={category}
								date={date}
								postContent={postContent}
								headerPhoto={headerPhoto}
								komootId={komootId}
								description={description}
								setTitle={setTitle}
								setAuthor={setAuthor}
								setUrl={setUrl}
								setCategory={setCategory}
								setDate={setDate}
								setPostContent={setPostContent}
								setHeaderPhoto={setHeaderPhoto}
								setKomootId={setKomootId}
								setDescription={setDescription}
							/>
						</Paper>
					</Box>
				</div>

				<div className="info-column col-lg-6 col-md-12 col-sm-12">
					<Box sx={{ width: "100%" }}>
						<Paper variant="outlined" square sx={{ width: "100%", padding: 3 }}>
							<MainContent content={postContentData} isWritingState={true} />
						</Paper>
					</Box>
				</div>
			</div>
		</>
	);
};
