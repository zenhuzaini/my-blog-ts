import { useContext, useEffect, useRef, useState } from "react";
import SimpleBackdrop from "../MUI/Backdrop/Backdrop";
import { OptionsContext } from "../../context/OptionsContextProvider";
import { contextType } from "../../context/contextTypes";

async function createUser(email, password) {
	const response = await fetch("/api/auth/register", {
		method: "POST",
		body: JSON.stringify({ email, password }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error(data.message || "Something went wrong");
	}

	const data = await response.json();
	return data;
}

const Register = () => {
	const { dispatch } = useContext(OptionsContext);

	const emailInput = useRef();
	const passwordInput = useRef();

	async function submitHandler(e) {
		dispatch({ type: contextType.IS_LOADING, data: true });
		e.preventDefault();

		const enteredEmail = emailInput.current.value;
		const enteredPassword = passwordInput.current.value;

		createUser(enteredEmail, enteredPassword).then((data) => {
			// there must be some logic if the registarti is successful or not
			dispatch({ type: contextType.IS_REGISTRATION_SUCCESSFUL, data: true });
		});
	}

	return (
		<div>
			<SimpleBackdrop />
			<section className="contact-page-section">
				<div className="auto-container">
					<div className="row clearfix">
						<div className="form-column col-lg-12 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="contact-form">
									<div className="sec-title">
										<h2>Sign up</h2>
									</div>
									<form
										onSubmit={submitHandler}
										id="contact-form"
										// novalidate="novalidate"
									>
										<div className="row clearfix">
											<div className="col-lg-6 col-md-6 col-sm-12 form-group">
												<input type="text" name="firstName" placeholder="Name" required="" />
											</div>

											<div className="col-lg-6 col-md-6 col-sm-12 form-group">
												<input type="text" name="lastName" placeholder="Phone" required="" />
											</div>

											<div className="col-lg-6 col-md-6 col-sm-12 form-group">
												<input
													ref={emailInput}
													type="email"
													name="email"
													placeholder="Email"
													required=""
												/>
											</div>

											<div className="col-lg-6 col-md-6 col-sm-12 form-group">
												<input
													ref={passwordInput}
													type="text"
													placeholder="password"
													name="password"
													required=""
													className="valid"
												/>
											</div>

											<div className="col-lg-12 col-md-12 col-sm-12 form-group">
												<button
													className="theme-btn btn-style-one"
													type="submit"
													name="submit-form"
												>
													<span className="btn-title">Submit Now</span>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Register;
