import TextField from "@mui/material/TextField";
import ChipsArray from "../../MUI/Chip/Chips";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Cancel from "@mui/icons-material/Cancel";
import Send from "@mui/icons-material/Send";
import Drafts from "@mui/icons-material/Drafts";
import { useState } from "react";
import MainContent from "../../Blog/Single/MainContent";
import Link from "next/link";
import { content } from "../../../constants/postData";
import dynamic from "next/dynamic";
const DynamicEditor = dynamic(() => import("./Editor"), {
	ssr: false,
});

export const PostForm = ({
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
	return (
		<>
			<h4>
				<span className="icon far fa-calendar"></span> January 20, 2020
			</h4>
			<div className="text">9.00 AM - 04.00 PM</div>
			<hr />
			<TextField
				key={"title"}
				fullWidth
				id="standard-basic"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
				label="Title"
				variant="standard"
			/>
			<hr />
			<TextField
				value={description}
				fullWidth
				multiline
				rows={4}
				id="description"
				label="Description"
				variant="standard"
				onChange={(event) => setDescription(event.target.value)}
			/>

			<hr />
			<TextField fullWidth id="standard-basic" label="Komoot ID" variant="standard" />
			<hr />
			<TextField
				fullWidth
				value={headerPhoto}
				onChange={(event) => setHeaderPhoto(event.target.value)}
				id="standard-basic"
				label="Header Image"
				variant="standard"
			/>
			<hr />
			<TextField fullWidth id="standard-basic" label="URL" variant="standard" />
			<hr />

			<DynamicEditor postContent={postContent} setPostContent={setPostContent} />
			<hr />

			<ChipsArray />
			<hr />
			<Stack direction="row" spacing={2}>
				<Link href={"/admin/post"} style={{ textDecoration: "none" }}>
					<Button color="error" variant="outlined" startIcon={<Cancel />}>
						Cancel
					</Button>
				</Link>
				<Button variant="outlined" startIcon={<Drafts />}>
					Save As Draft
				</Button>
				<Button variant="contained" color="success" endIcon={<Send />}>
					Save
				</Button>
			</Stack>
		</>
	);
};

const AdminPostDetailView = () => {
	const [isEditorTab, setIsEditorTab] = useState(true);
	const [isPreviewTab, setIsPreviewTab] = useState(false);

	const [previewContent, setPreviewContent] = useState(content);

	return (
		<div className="auto-container">
			<div className="content-box">
				{/* <h2>Create your Story!</h2> */}

				<div className="event-info-tabs tabs-box">
					<ul className="tab-buttons clearfix">
						<li
							className={isEditorTab ? "tab-btn active-btn" : "tab-btn"}
							onClick={() => {
								setIsPreviewTab(!isPreviewTab);
								setIsEditorTab(!isEditorTab);
							}}
							data-tab="#tab1"
						>
							Editor
						</li>
						<li
							className={isPreviewTab ? "tab-btn active-btn" : "tab-btn"}
							onClick={() => {
								setIsPreviewTab(!isPreviewTab);
								setIsEditorTab(!isEditorTab);
							}}
							data-tab="#tab2"
						>
							Preview
						</li>
					</ul>
					<div className="tabs-content">
						<div className={isEditorTab ? "tab active-tab" : "tab"} id="tab1">
							<PostForm />
						</div>

						<div className={isPreviewTab ? "tab active-tab" : "tab"} id="tab2">
							<MainContent content={previewContent} />
						</div>
					</div>
				</div>
				<br />
			</div>
		</div>
		// </section>
	);
};

export default AdminPostDetailView;
