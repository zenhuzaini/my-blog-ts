import { useContext } from "react";
import { contextType } from "../../../context/contextTypes";
import { OptionsContext } from "../../../context/OptionsContextProvider";
import Link from "next/link";
import { tags } from "../../../utils/postData";

const SearchPopup = () => {
	const { dispatch, isSearchPopupVisible } = useContext(OptionsContext);
	const tagList = tags.map((tag, index) => {
		return (
			<li key={index}>
				<Link
					href={`/blog/filter/tag/${tag}`}
					style={{ textDecoration: "none" }}
					onClick={() => {
						dispatch({ type: contextType.SHOW_POP_UP_SEARCH, data: !isSearchPopupVisible });
					}}
				>
					{tag}
				</Link>
			</li>
		);
	});

	return (
		<div
			id="search-popup"
			className={isSearchPopupVisible ? "search-popup popup-visible" : "search-popup"}
		>
			<div
				className="close-search theme-btn"
				onClick={() => {
					dispatch({ type: contextType.SHOW_POP_UP_SEARCH, data: !isSearchPopupVisible });
				}}
			>
				<span className="fas fa-window-close"></span>
			</div>
			<div className="popup-inner">
				<div className="overlay-layer"></div>
				<div className="search-form">
					<form method="post" action="index.html">
						<div className="form-group">
							<fieldset>
								<input
									readOnly
									type="search"
									className="form-control"
									name="search-input"
									value=""
									placeholder="Search Here"
									required
								/>
								<input type="submit" value="Search Now!" className="theme-btn" />
							</fieldset>
						</div>
					</form>

					<br />
					<h3>Recent Search Keywords</h3>
					<ul className="recent-searches">{tagList}</ul>
				</div>
			</div>
		</div>
	);
};

export default SearchPopup;
