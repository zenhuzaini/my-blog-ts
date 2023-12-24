import Link from "next/link";

export const Categories = ({ categories }) => {
	const categoryList = categories.map((category, index) => {
		const cat = category.category.charAt(0).toUpperCase() + category.category.slice(1);
		return (
			<li key={index}>
				<Link
					href={`/blog/filter/tag/${category.category.toLowerCase()}`}
					style={{ textDecoration: "none" }}
				>
					{cat} <span>{category.amount}</span>
				</Link>
			</li>
		);
	});
	return (
		<div className="sidebar-widget categories">
			<h4 className="sidebar-title">Categories</h4>
			<div className="widget-content">
				{/* <!-- Blog Category --> */}
				<ul className="blog-categories">{categoryList}</ul>
			</div>
		</div>
	);
};
