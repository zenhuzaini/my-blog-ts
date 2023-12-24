/* eslint-disable jsx-a11y/anchor-is-valid */
const Pagination = () => {
	return (
		<ul className="styled-pagination">
			<li>
				<a>1</a>
			</li>
			<li>
				<a className="active">2</a>
			</li>
			<li>
				<a>3</a>
			</li>
			<li>
				<a>
					<span className="icon fa fa-angle-right"></span>
				</a>
			</li>
		</ul>
	);
};

export default Pagination;
