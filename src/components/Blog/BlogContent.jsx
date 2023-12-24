import CommentForm from "./Single/CommentForm";
import Comments from "./Single/Comments";
import MainContent from "./Single/MainContent";
import ShareOption from "./Single/ShareOption";

const BlogContent = ({ content }) => {
	return (
		<div className="content-side col-lg-8 col-md-12 col-sm-12">
			<div className="blog-single">
				{/* <!-- News Block Three --> */}
				<MainContent content={content} />

				{/* <!-- Other Options --> */}
				<ShareOption content={content} />

				{/* <!-- Comments Area --> */}
				<Comments />

				{/* <!--Comment Form--> */}
				<CommentForm />
			</div>
		</div>
	);
};

export default BlogContent;
