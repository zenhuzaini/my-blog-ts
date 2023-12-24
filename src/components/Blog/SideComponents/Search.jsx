import React from 'react'

const Search = () => {
  return (
    <div className="sidebar-widget search-box">
					<form method="post" action="contact.html">
						<div className="form-group">
							<input type="search" name="search-field" readOnly value="" placeholder="Search..." required />
							<button type="submit">
								<span className="icon fa fa-search"></span>
							</button>
						</div>
					</form>
				</div>
  )
}

export default Search