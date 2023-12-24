import { Categories } from "../SideComponents/Categories";
import LatestPost from "../SideComponents/LatestPost";
import Search from "../SideComponents/Search";
import Tag from "../SideComponents/Tag";

const Sidebar = ({ categories, latestPost, tags }) => {
	return (
		<div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
			<aside className="sidebar padding-left">
				{/* <!-- Search --> */}
				<Search />

				{/* <!-- Category Widget --> */}
				<Categories categories={categories} />

				{/* <!-- Post Widget --> */}
				<LatestPost latestPost={latestPost} />

				{/* <!-- Tags Widget --> */}
				<Tag tags={tags} />
			</aside>
		</div>
	);
};

export default Sidebar;
