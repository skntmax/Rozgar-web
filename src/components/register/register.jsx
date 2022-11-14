import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'
import ReCAPTCHA from "react-google-recaptcha";
import swal from 'sweetalert';
import ModalWindow from '../common/ModalWindow'
import Otp from '../OTP/Otp'
// import GoogleLogin from 'react-google-login';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import LoadingOverlay from 'react-loading-overlay';
import { SpinnerCircular } from 'spinners-react';
import NumberFormat from 'react-number-format';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { withRouter } from 'react-router-dom';

class register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			captcha: false,
			password: '',
			work_status: '',
			resume: null,
			checkTermsAndCondition: false,
			error: {},
			passwordShow: false,
			showModal: this.props.showModal,
			mob_otp: '',
			isMobValid: false,
			isSpaceNotAllow: false,
			loginData: localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null,

		}
	}

	recaptchaHandler = (value) => {
		if (value) {
			this.setState({
				captcha: true
			})
		}
	}

	verifyOTP = (otp) => {
		this.setState({
			mob_otp: otp
		})
		this.props.phoneVerification(otp)
	}

	onChange = (e) => {
		let value = e.target.value
		this.setState({
			[e.target.name]: value.trim()
		})
	}

	uploadResume = (e) => {
		let files = e.target.files
		if (files && files.length) {
			if (files[0].size <= 5000000 && (files[0].type == "application/pdf" || files[0].type == "application/msword" || files[0].type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
				this.setState({
					resume: files[0]
				})
			}
			else {
				this.setState({
					resume: null
				})
				swal({
					icon: "error",
					text: "File size must be less than 5 MB. File Type must be PDF, DOC, DOCX.",
					timer: 2000,
					showCancelButton: false,
					showConfirmButton: false,
				});
			}

		}
	}

	validateForm = () => {
		let data = this.state
		let error = {}
		let isValid = true
		if (!data['firstName']) {
			error.firstName = "Please enter first name"
			isValid = false
		}

		if (!data['secondName']) {
			error.secondName = "Please enter last name"
			isValid = false
		}

		if (!data['email']) {
			error.email = "Please enter email"
			isValid = false
		}

		if (data['email']) {
			let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			if (re.test(data['email'])) { } else {
				error.email = "Please enter valid email"
				isValid = false
			}
		}

		if (!data['phone']) {
			error.phone = "Please enter mobile number"
			isValid = false
		}
		if (data["phone"] !== "") {
			const regexExp = /^[6789][0-9]{9}/
			if (regexExp.test(data.phone)) { } else {
				error["phone"] = "Please enter valid Mobile Number";
				isValid = false;
			}
		}

		// if (data["phone"] !== "") {
		// 	const regexExp = /^[6789][0-9]{9}/
		// 	if (regexExp.test(data.phone)) { } else {
		// 		error["phone"] = "Please enter valid Mobile Number";
		// 		isValid = false;
		// 	}
		// }

		// if (!data['work_status']) {
		// 	error.work_status = "Please select work status"
		// 	isValid = false
		// }
		// if (!data['resume']) {
		// 	error.resume = "Please upload resume"
		// 	isValid = false
		// }
		if (!data['password']) {
			error.password = "Please enter password"
			isValid = false
		}
		if (data['password']) {
			let regexp = /(?!\s)/;
			if (regexp.test(data['password'])) { } else {
				error.password = "Spaces are not allowed"
				isValid = false
			}
		}
		if (data['email'] && data['phone'] && data['password']) {
			if (!data['captcha']) {
				isValid = false
				swal({
					// title: "Are you sure?",
					text: "Please select ReCaptcha",
					icon: "error",
					dangerMode: true,
				});
			}

			if (!data['checkTermsAndCondition']) {
				error.checkTermsAndCondition = "Please select Terms And Conditions"
				swal({
					// title: "Are you sure?",
					text: "Please select Terms And Condition",
					icon: "error",
					dangerMode: true,
				});
				isValid = false
			}
		}

		this.setState({
			error: error
		})

		return isValid
	}

	onSubmit = (e) => {
		e.preventDefault()
		const { firstName, secondName, email, phone, captcha, checkTermsAndCondition, resume, work_status, password, showModal } = this.state
		let status = this.validateForm()
		let PassCode = this.props.location.search ? this.props.location.search.split('=')[1] : null
		console.log(this.props,"PassCode");
		// { console.log(!password, "password") }
		if (status) {

			const formData = new FormData();
            formData.append('PassCode',PassCode);
			formData.append('firstName', firstName);
			formData.append('secondName', secondName);
			formData.append('EmailId', email);
			formData.append('MobileNo', phone);
			formData.append('Password', password);
			formData.append('WorkStatus', work_status || 'F');
			formData.append('AcceptTnC', checkTermsAndCondition ? 'Y' : '');
			formData.append('ResumeFileName', resume || null);
			this.props.onSubmit(formData)

		}
	}

	togglePasswordVisiblity = (e) => {
		this.setState({ passwordShow: !this.state.passwordShow })
	}

	onShowModal = () => {
		this.props.setShowModel(true)
	}


	onhideModal = () => {
		this.props.setShowModel(false)
	}

	handleFailure = (result) => {
		console.log(result);
		// swal({
		// 	// title: "Are you sure?",
		// 	text: result ? result :"Something went wrong.",
		// 	icon: "error",
		// 	dangerMode: true,
		//   });
	}

	handleLogin = (googleData) => {
		this.props.googleLoginHandler(googleData)
	}

	handleLogout = () => {
		localStorage.removeItem('loginData')
		this.setState({
			loginData: null
		})
	}
	render() {
		let { firstName, secondName, email, phone, checkTermsAndCondition, password, work_status, resume, error, isMobValid, isSpaceNotAllow } = this.state
		let toggle = error.password && !password.length > 0 ? "20px" : "0px"
		console.log(password, "password")

		return (
			<React.Fragment>
				<main id="rg-main" className="rg-main rg-haslayout ptb-0">
					<section className="fxt-template-animation fxt-template-layout4">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-5 col-12 fxt-bg-wrap-reg">
									<div className="fxt-bg-img" data-bg-image={'./assets/images/bg4-l.jpg'}
										style={{
											background: "#ffffff url(" + "./assets/images/bg4-l.jpg" + ")",
											backgroundPosition: 'bottom -80px center',
											backgroundSize: '55%',
											backgroundRepeat: 'no-repeat'
										}}>
										<div className="fxt-header">
											<div className="fxt-transformY-50 fxt-transition-delay-1">
												<a href="/" className="fxt-logo"><img src={'./assets/images/logo.png'} alt="Logo" /></a>
											</div>
											<div className="fxt-transformY-50 fxt-transition-delay-2">
												<h1>Sign up and get access to:</h1>
											</div>
											<div className="fxt-transformY-50 fxt-transition-delay-3">
												<ul className='registerList'>
													<li class="rlist">India's Leading Portal for Emerging Careers</li>
													<li class="rlist">5,00,000+ Jobs & Career Opportunities</li>
													<li class="rlist">500+ Career Counselors</li>
													<li class="rlist">100+ Linked International University/Colleges for Study Abroad</li>
													<li class="rlist">Astrology Services for Better Career Plan</li>
													<li class="rlist">Resume Builders & Students Benefits</li>
													<li class="rlist">Explore your City for Better Job Opportunities Near your Home Area</li>
													<li class="rlist">10,000+ Interview Questions</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-7 col-12 fxt-bg-color">
									<div className="fxt-content-reg">
										<h4>Register</h4>
										<div className="fxt-form">
											<form onSubmit={(e) => { this.onSubmit(e) }} method="POST">
											<div className='row'>
												<div className="form-group col-md-6 p-0 mb-12">
													<label for="firstName" className="input-label">First Name</label>
													<input type="text" id="firstName" className="form-control" name="firstName" onChange={this.onChange} placeholder="First Name" />
													{error && !firstName &&
														(
															<span className="text-danger ml-1">
																{error.firstName}
															</span>
														)
													}
												</div>
												<div className="form-group col-md-6 pr-1 pl-2 mb-12">
													<label for="secondName" className="input-label">Last Name</label>
													<input type="text" id="secondName" className="form-control" name="secondName" onChange={this.onChange} placeholder="Last Name" />
													{error && !secondName &&
														(
															<span className="text-danger ml-1">
																{error.secondName}
															</span>
														)
													}
												</div>
												<div className="form-group col-md-6 p-0 mb-12">
													<label for="email" className="input-label">Email ID</label>
													<input type="email" id="email" className="form-control" name="email" onChange={this.onChange} placeholder="demo@gmail.com" />
													{error && !email &&
														(
															<span className="text-danger ml-1">
																{error.email}
															</span>
														)
													}
												</div>

												<div className="form-group col-md-6 pr-1 pl-2 mb-12" id="react-tel-input" >
													<label for="phone" className="input-label">Your Mobile No.</label>
													<PhoneInput
														country={'in'}
														value={this.state.phone}
														onChange={phone => this.setState({ phone })}
														placeholder='Mobile Number'
													/>
													{/* <NumberFormat type="text" id="phone" className="form-control" name="phone" maxLength={10} minLength={10} onChange={this.onChange} placeholder="Mobile Number" /> */}

													{error && !phone &&
														(
															<span className="text-danger ml-1">
																{error.phone}
															</span>
														)
													}

												</div>

												<div className="form-group mb-12" id='eyepassicon' style={{ marginBottom: toggle }}>
													<label for="password" className="input-label">Password</label>
													<input id="password" minLength={4} type={(this.state.passwordShow) ? "text" : "password"} className="form-control" name="password" value={password.trim()} onChange={this.onChange} placeholder="********" minlength="4" />
													<i className={(this.state.passwordShow) ? "fa fa-fw fa-eye toggle-password field-icon" : "fa fa-fw fa-eye-slash toggle-password field-icon"} onClick={(e) => this.togglePasswordVisiblity(e)}></i>
													<span style={{ display: 'block', height: '0' }}>

														{error && !password &&
															(
																<span className="text-danger errotextspace ml-1">
																	{error.password}
																</span>
															)
														}

													</span>
												</div>

												<div className='form-group mb-12'>
													<label for="password" className="input-label mt-2">Work Status</label>
													<select className='form-control'
														name='work_status'
														onChange={this.onChange}>
														<option selected>--Select Work Status--</option>
														<option value="E">I'm Experienced</option>
														<option value="F">I'm a Fresher</option>
													</select>
													{error && !work_status &&
														(
															<span className="text-danger ml-1">
																{error.work_status}
															</span>
														)
													}
												</div>
												<div className='form-group mb-12'>
													<label for="password" className="input-label">Resume</label>
													<input id="file" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="form-control" name="resume" onChange={this.uploadResume} style={{lineHeight:'25px'}} />
													{error && !resume &&
														(
															<span className="text-danger ml-1">
																{error.resume}
															</span>
														)
													}
												</div>
												<div className="form-group mb-12">
													<div className="fxt-checkbox-area">
														<div className="checkbox">
															<input id="checkbox1" type="checkbox" name="checkTermsAndCondition" onChange={(e) => { this.setState({ checkTermsAndCondition: e.target.checked }) }} />
															<label for="checkbox1" style={{ fontSize: '11px' }}>By clicking Register, you agree to the <a href="/terms-conditions" target="_blank">Terms and Conditions</a> & <a href="/privacy-policy" target="_blank">Privacy Policy</a> of Rozgar.com</label>
														</div>
													</div>
												</div>
												<div className="form-group mb-12">
													<div className="fxt-checkbox-area">
														<ReCAPTCHA
															sitekey={`6LduKmsgAAAAAGNLTjeYypXIHBOnN-P0U3ETBklE`}
															onChange={this.recaptchaHandler}
															theme='light'
														/>
													</div>
												</div>
												<div className="form-group mb-0">
													<button type="submit" className="fxt-btn-fill" >Register Now</button>
												</div>
												</div>
											</form>
											<div className='row'>
												<div className='col-md-12'>
													<div className="fxt-style-line">
														<div className="fxt-transformY-50 fxt-transition-delay-5">
															<h4>Or Login With</h4>
														</div>
													</div>
												</div>
											</div>
											
											<div className='row'>
												<div className='col-md-12'>
													<ul className="fxt-socials mb-0">
														<li className="fxt-google pl-5">
															{/* <GoogleLogin
													clientId="985996320461-uglbmf9qusfsu5semmaf61eu79iqd899.apps.googleusercontent.com"
													
													buttonText="Sign in with Google"
													onSuccess={this.handleLogin}
													onFailure={this.handleFailure}
													cookiePolicy={'single_host_origin'}
													></GoogleLogin> */}
															<GoogleOAuthProvider clientId="127069964067-ecs561pfupvs2entdh3dj66uj4nvae44.apps.googleusercontent.com" style={{ width: '200px' }}>
																<GoogleLogin
																	onSuccess={this.handleLogin}
																	onError={this.handleFailure}
																/>
															</GoogleOAuthProvider>
															{/* <div className="fxt-transformY-50 fxt-transition-delay-6">
														<Link to='' title="Google">
															<img src={'./assets/images/g-icons.png'}/>
															<span>Sign in with Google</span>
														</Link>
													</div> */}
														</li>
														{/* <li class="fxt-facebook">
															<div class="fxt-transformY-50 fxt-transition-delay-5">
																<Link to='' title="Facebook" className='regfacebook'>
																	<img src={'./assets/images/f-icon.png'} width="30px"/>
																	<span>Sign in with Facebook</span>
																</Link>
															</div>
														</li> */}
													</ul>
												</div>
											</div>
										</div>
										<div className="fxt-footer">
											{/* <p><Link onClick={this.onShowModal} class="switcher-text2 inline-text">OTP</Link></p> */}
											<p>Have an account?<Link to={constant.component.signin.url} className="switcher-text2 inline-text">Login</Link></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{this.props.showModal && <ModalWindow
						title="OTP"
						className='toppoup btn-close'
						headerClassName='opthead'
						backdrop="static"
						toggleModal={this.onhideModal}>
						<Otp
							reSendOTP={this.props.reSendOTP}
							verifyOTP={this.verifyOTP}
							onCancel={this.onhideModal}
							history={this.props.history}
						/>
					</ModalWindow>}

					{
						this.props.showLoader &&
						<div style={{
							position: "fixed",
							zIndex: "999",
							left: "0",
							top: " 0",
							width: " 100%",
							height: " 100%",
							overflow: "auto",
							padding: "210px",
							backgroundColor: "rgba(0, 0, 0, 0.4)"
						}}>
							<LoadingOverlay
								active={true}
								spinner={<SpinnerCircular color={'rgba(230,46,45,0.6)'} />}
							>
							</LoadingOverlay>
						</div>
					}
				</main >
			</React.Fragment >
		)
	}
}

export default withRouter(register)