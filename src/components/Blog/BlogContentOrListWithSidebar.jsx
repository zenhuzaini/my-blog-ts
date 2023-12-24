import { pageType } from "../../constants/constants";
import BlogContent from "./BlogContent";
import ContentPreview from "./MiddleComponents/ContentPreview";
import Pagination from "./MiddleComponents/Pagination";
import Sidebar from "./Sidebar/Sidebar";
import ErrorPage from "../Sections/ErrorPage";

const BlogContentOrListWithSidebar = ({ content, contentType, categories, latestPost, tags }) => {
	let blogContentSide;
	switch (contentType) {
		case pageType.BLOG_LIST_SEDEBAR:
			const postContents = content.length ? (
				<>
					<ContentPreview posts={content} />
					<Pagination />
				</>
			) : (
				<ErrorPage errorType={"404ContentNotAvailable"} />
			);

			blogContentSide = (
				<div className="content-side col-lg-8 col-md-12 col-sm-12">
					<div className="blog-sidebar">{postContents}</div>
				</div>
			);

			break;

		case pageType.BLOG_CONTENT:
			blogContentSide = <BlogContent content={content} />;
			break;

		default:
			break;
	}

	return (
		<div className="sidebar-page-container">
			<div className="auto-container">
				<div className="row clearfix">
					{/* <!--Content Side / Blog Sidebar--> */}
					{blogContentSide}

					{/* <!--Sidebar Side--> */}
					<Sidebar categories={categories} latestPost={latestPost} tags={tags} />
				</div>
			</div>
		</div>
	);
};

export default BlogContentOrListWithSidebar;
