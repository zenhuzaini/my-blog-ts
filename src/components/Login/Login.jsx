import { useRef, useContext } from "react";
import { signIn } from "next-auth/react";
import SimpleBackdrop from "../MUI/Backdrop/Backdrop";
import { contextType } from "../../context/contextTypes";
import { OptionsContext } from "../../context/OptionsContextProvider";
import { useRouter } from "next/router";

const Login = () => {
	const { dispatch } = useContext(OptionsContext);
	const router = useRouter();

	const emailInput = useRef();
	const passwordInput = useRef();
	const nameInput = useRef();
	return (
		<div>
			<SimpleBackdrop />
			<section className="register-section">
				<div className="auto-container">
					<div className="form-box">
						<div className="box-inner">
							<h1>Login Now</h1>

							<div className="styled-form login-form">
								<form>
									<div className="form-group">
										<span className="adon-icon">
											<span className="fa fa-user"></span>
										</span>
										<input ref={nameInput} type="text" name="username" placeholder="Your Name *" />
									</div>
									<div className="form-group">
										<span className="adon-icon">
											<span className="fa fa-envelope"></span>
										</span>
										<input ref={emailInput} type="email" name="email" placeholder="Emai Address*" />
									</div>
									<div className="form-group">
										<span className="adon-icon">
											<span className="fa fa-unlock"></span>
										</span>
										<input
											ref={passwordInput}
											type="password"
											name="userpassword"
											placeholder="Enter Password"
										/>
									</div>
									<div className="clearfix">
										<div className="form-group pull-left">
											<button
												onClick={async (e) => {
													dispatch({ type: contextType.IS_LOADING, data: true });
													const result = await signIn("credentials", {
														redirect: false, //it will not let tor edirect when failing

														callbackUrl: "/admin",
														email: emailInput.current.value,
														password: passwordInput.current.value,
														username: nameInput.current.value,
													});

													if (result.error) {
														dispatch({ type: contextType.IS_NOT_AUTHENTICATED_USER, data: true });
														return;
													}

													dispatch({ type: contextType.IS_LOADING, data: false });
													router.push(result.url);
												}}
												type="button"
												className="theme-btn btn-style-two"
											>
												<span className="btn-title">Login Now</span>
											</button>
										</div>
										<div className="form-group social-icon-one pull-right">
											Or login with  
											<li>
												<a href="#" className="fab fa-facebook-f"></a>
											</li>
											<li>
												<a href="#" className="fab fa-twitter"></a>
											</li>
											<li>
												<a href="#" className="fab fa-google"></a>
											</li>
										</div>
									</div>

									<div className="clearfix">
										<div className="pull-left">
											<input readOnly type="checkbox" id="remember-me" />
											<label className="remember-me" htmlFor="remember-me">
												Remember Me
											</label>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;
