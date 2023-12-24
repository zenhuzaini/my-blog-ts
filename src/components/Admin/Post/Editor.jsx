import { useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ postContent, setPostContent }) => {
	const [value, setValue] = useState("");
	const quillRef = useRef();

	const imageHandler = (e) => {
		// https://stackoverflow.com/questions/59602182/quill-add-image-url-instead-of-uploading-it
		//https://github.com/zenoamaro/react-quill/issues/686
		const selection = quillRef.current.getEditor();
		const unprivilegedEditor = quillRef.current.makeUnprivilegedEditor(selection);
		// You may now use the unprivilegedEditor proxy methods
		const range = unprivilegedEditor.getSelection();
		const value = prompt("please copy paste the image url here.");

		if (value) {
			selection.insertEmbed(range.index, "image", value, Quill.sources.user);
		}
	};

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: [1, 2, 3, 4, 5, 6, false] }],
					["bold", "italic", "underline", "strike"],
					[{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
					["image", "link"],
					[
						{
							color: [
								"#000000",
								"#e60000",
								"#ff9900",
								"#ffff00",
								"#008a00",
								"#0066cc",
								"#9933ff",
								"#ffffff",
								"#facccc",
								"#ffebcc",
								"#ffffcc",
								"#cce8cc",
								"#cce0f5",
								"#ebd6ff",
								"#bbbbbb",
								"#f06666",
								"#ffc266",
								"#ffff66",
								"#66b966",
								"#66a3e0",
								"#c285ff",
								"#888888",
								"#a10000",
								"#b26b00",
								"#b2b200",
								"#006100",
								"#0047b2",
								"#6b24b2",
								"#444444",
								"#5c0000",
								"#663d00",
								"#666600",
								"#003700",
								"#002966",
								"#3d1466",
							],
						},
					],
				],
				handlers: {
					image: imageHandler,
				},
			},
		}),
		[]
	);

	return (
		<div>
			<ReactQuill
				ref={quillRef}
				modules={modules}
				theme="snow"
				value={postContent}
				onChange={setPostContent}
			/>
		</div>
	);
};

export default Editor;
