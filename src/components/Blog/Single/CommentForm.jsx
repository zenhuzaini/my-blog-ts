const CommentForm = () => {
	return (
		<div className="comment-form">
			<div className="group-title">
				<h3>Leave a comment</h3>
			</div>
			<form method="post" action="blog.html">
				<div className="row clearfix">
					<div className="col-lg-6 col-md-12 col-sm-12 form-group">
						<input type="text" name="username" placeholder="Name" required="" />
					</div>

					<div className="col-lg-6 col-md-12 col-sm-12 form-group">
						<input type="email" name="email" placeholder="Email" required="" />
					</div>

					<div className="col-lg-12 col-md-12 col-sm-12 form-group">
						<textarea name="message" placeholder="Your Comments"></textarea>
					</div>

					<div className="col-lg-12 col-md-12 col-sm-12 form-group">
						<button className="theme-btn btn-style-one" type="submit" name="submit-form">
							<span className="btn-title">Post Comment</span>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CommentForm;
