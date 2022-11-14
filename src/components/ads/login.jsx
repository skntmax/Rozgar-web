import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ModalWindow from '../common/ModalWindow'
import Otp from '../OTP/Otp'
import constant from '../../constant'
import { getStorage, onChange } from '../../utils'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import LoadingOverlay from 'react-loading-overlay';
import { SpinnerCircular } from 'spinners-react'
import { reSendOTP } from '../../action/ads'
import Swal from 'sweetalert2'
export default class signin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: { name: 'email', value: '', error: '', isRequired: true },
			password: { name: 'password', value: '', error: '', isRequired: true },
			passwordShow: false,
			showModal: false,
			mobile:''

		}
	}


	onShowModal = () => {
		this.setState({ showModal: true })
	}


	onhideModal = () => {
		this.setState({ showModal: false })
	}

	togglePasswordVisiblity = (e) => {
		this.setState({ passwordShow: !this.state.passwordShow })
	}

	onChange = (e) => {
		const { name, value } = this.state;
		onChange(this, name, value)
	}
	reSendOTP = () => {
        reSendOTP({ mobile: '+' + this.state.mobile.value }).then((res) => {
            if (res.type === "success") {
                Swal.fire({
                    icon: "success",
                    text: "OTP SENT SUCCESSFULLY",
                    timer: 1500,
                    showCancelButton: false,
                    showConfirmButton: false,
                });
            } else {
                this.setState({ resendOtpMessage: res.error });
            }
        });
    };
	render() {
		const { showModal, email, password } = this.state
		return (
			<React.Fragment>

				{this.props.showLoader &&
					<div style={{
						position: "fixed",
						zIndex: "999",
						left: "0",
						top: " 0",
						width: " 100%",
						height: " 100%",
						overflow: "auto",
						backgroundColor: "rgb(0, 0, 0)",
						padding: "210px",
					}}>
						<LoadingOverlay

							active={true}
							spinner={<SpinnerCircular color={'rgba(0,0,0,0.44)'} secondaryColor={'rgb(230,46,45)'} />}
						>
						</LoadingOverlay></div>}
				<main id="rg-main" class="rg-main rg-haslayout ptb-0">
					<section class="fxt-template-animation fxt-template-layout4">
						<div class="container-fluid">

							<div class="row">
								<div class="col-md-6 col-12 fxt-bg-wrap">
									<div class="fxt-bg-img" data-bg-image={'./assets/images/bg4-r.jpg'} style={{
										background: "#ffffff url(" + "./assets/images/bg4-r.jpg" + ")",
										backgroundPosition: 'bottom -80px center',
										backgroundSize: '40%',
										backgroundRepeat: 'no-repeat'
									}}>
										<div class="fxt-header">
											<div class="fxt-transformY-50 fxt-transition-delay-1">
												<a href="/" class="fxt-logo"><img src={'./assets/images/logo.png'} alt="Logo" /></a>
											</div>
											<div class="fxt-transformY-50 fxt-transition-delay-2">
												<h1>Are you a new user?</h1>
											</div>
											<div class="fxt-transformY-50 fxt-transition-delay-3">
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

								<div class="col-md-6 col-12 fxt-bg-color">
									<div class="fxt-content pt-5 pb-5">
										<h4>Login</h4>
										<div class="fxt-form">
											<form onSubmit={(e) => { this.onSubmit(e) }}>
												<div class="form-group">
													<label for="email" class="input-label">Email ID / Username</label>
													<input type="email" id="email" class="form-control" onChange={this.onChange} name={email.name}
													value={email.value}
													placeholder="demo@gmail.com" />

												</div>
												<div class="form-group" id='eyepassicon'>
													<label for="password" class="input-label" >Password</label>
													<input id="password" type={(this.state.passwordShow) ? "text" : "password"}
													name={password.name}
													value={password.value}
													className="form-control" onChange={this.onChange} placeholder="********" />
													<i className={(this.state.passwordShow) ? "fa fa-fw fa-eye toggle-password field-icon" : "fa fa-fw fa-eye-slash toggle-password field-icon"} onClick={(e) => this.togglePasswordVisiblity(e)}></i>
													<span style={{ display: 'block', height: '0' }}>

													</span>
												</div>

												<div class="form-group">
													<div class="fxt-checkbox-area">
														<div class="checkbox">
															{/* <input id="checkbox1" type="checkbox" name="remember" onChange={this.onChange} />
															<label for="checkbox1">Keep me logged in</label> */}
														</div>
														<Link to={constant.component.forgotPassword.url} class="switcher-text">Forgot Password</Link>
													</div>
												</div>
												<div class="form-group">
													<button type="submit" class="fxt-btn-fill">Log in</button>
												</div>
											</form>
											<div class="fxt-style-line">
												<div class="fxt-transformY-50 fxt-transition-delay-5">
													<h3>Or Login With</h3>
												</div>
											</div>
										</div>
										<div class="fxt-footer">
											<p>Don't have an account?<a href="javascript:void(0)" onClick={() => this.props.showRegister()} class="switcher-text2 inline-text">Register</a></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>

				{showModal && <ModalWindow
					title="OTP"
					className='toppoup'
					headerClassName='opthead'
					backdrop="static"
					toggleModal={this.onhideModal}>
					<Otp
						hideSkip={true}
						reSendOTP={this.reSendOTP}
						onCancel={this.onhideModal}
					/>
				</ModalWindow>}

			</React.Fragment>
		)

	}
}
