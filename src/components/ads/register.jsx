import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import PhoneInput from 'react-phone-input-2';
import { SpinnerCircular } from 'spinners-react';
import Swal from 'sweetalert2';
import { adsuserregistrationstep1, adsuserregistrationstep2, reSendOTP } from '../../action/ads';
import { onChange, validateForm } from '../../utils';
import ModalWindow from '../common/ModalWindow';
import Otp from '../OTP/Otp';
export default class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordShow: false,
            firstName: { name: 'firstName', value: '', error: '', isRequired: true },
            lastName: { name: 'lastName', value: '', error: '', isRequired: true },
            mobile: { name: 'mobile', value: '', error: '', isRequired: true },
            // companyName: { name: 'companyName', value: '', error: '', isRequired: true },
            // siteLink: { name: 'siteLink', value: '', error: '', isRequired: true },
            Password: { name: 'Password', value: '', error: '', isRequired: true },
            email: { name: 'email', value: '', error: '', isRequired: true },
            checkTermsAndCondition: false,
            showModal: false,
            showLoader: false


        }
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (validateForm(this) && this.state.checkTermsAndCondition) {
            const { passwordShow, firstName, mobile, lastName,
                Password, email } = this.state
            const model = {
                FIRST_NAME: firstName.value,
                LAST_NAME: lastName.value,
                MOBILE: '+' + mobile.value,
                PASSWORD: Password.value,
                EMAIL: email.value
            }
            this.setState({ showLoader: true })
            adsuserregistrationstep1(model).then(res => {
                this.setState({ showLoader: false })
                if (res.status) {
                    this.setState({ showModal: true })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        text: res.error,
                        timer: 1500,
                        showCancelButton: false,
                        showConfirmButton: false
                    })
                }
            })
        }
    }
    onChange = (e) => {
        const { name, value } = e.target;
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
    verifyOTP=()=>{
        const { passwordShow, firstName, mobile, lastName,
            Password, email } = this.state
        const model = {
            FIRST_NAME: firstName.value,
            LAST_NAME: lastName.value,
            MOBILE: '+' + mobile.value,
            PASSWORD: Password.value,
            EMAIL: email.value
        }
        this.setState({ showLoader: true })
        adsuserregistrationstep2(model).then(res => {
            this.setState({ showLoader: false })
            if (res.status) {
                this.setState({ showModal: true })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    text: res.error,
                    timer: 1500,
                    showCancelButton: false,
                    showConfirmButton: false
                })
            }
        })
    }
    render() {
        const { passwordShow, firstName, mobile, lastName, Password, email } = this.state
        let toggle = Password.error.length > 0 ? "20px" : "0px"
        return (
            < React.Fragment>
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
                                            <form onSubmit={(e) => { this.onSubmit(e) }}>
                                                <div className='row'>
                                                    <div className="form-group col-md-6 p-0 mb-12">
                                                        <label for="firstName" className="input-label">First Name</label>
                                                        <input type="text" id="firstName" className="form-control" name={firstName.name} value={firstName.value} onChange={this.onChange} placeholder="First Name" />
                                                        {firstName.error.length > 0 &&
                                                            (
                                                                <span className="text-danger ml-1">
                                                                    {firstName.error}
                                                                </span>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 pr-1 pl-2 mb-12">
                                                        <label for="secondName" className="input-label">Last Name</label>
                                                        <input type="text" id="lastName" className="form-control" name={lastName.name} value={lastName.value} onChange={this.onChange} placeholder="First Name" />
                                                        {lastName.error.length > 0 &&
                                                            (
                                                                <span className="text-danger ml-1">
                                                                    {lastName.error}
                                                                </span>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 p-0 mb-12">
                                                        <label for="email" className="input-label">Email ID</label>
                                                        <input type="email" id="email" className="form-control" name={email.name} value={email.value} onChange={this.onChange} placeholder="demo@gmail.com" />
                                                        {email.error.length > 0 &&
                                                            (
                                                                <span className="text-danger ml-1">
                                                                    {email.error}
                                                                </span>
                                                            )
                                                        }
                                                    </div>

                                                    <div className="form-group col-md-6 pr-1 pl-2 mb-12" id="react-tel-input" >
                                                        <label for="phone" className="input-label">Your Mobile No.</label>
                                                        <PhoneInput
                                                            country={'in'}
                                                            value={mobile.value}
                                                            name={mobile.name}
                                                            onChange={phone => onChange(this, mobile.name, phone)}
                                                            placeholder='Mobile Number'
                                                        />

                                                        {mobile.error.length > 0 &&
                                                            (
                                                                <span className="text-danger ml-1">
                                                                    {mobile.error}
                                                                </span>
                                                            )
                                                        }

                                                    </div>

                                                    <div className="form-group mb-12" id='eyepassicon' style={{ marginBottom: toggle }}>
                                                        <label for="password" className="input-label">Password</label>
                                                        <input id="password" minLength={4} type={(passwordShow) ? "text" : "password"} className="form-control" name={Password.name} value={Password.value} onChange={this.onChange} placeholder="********" />
                                                        <i className={(this.state.passwordShow) ? "fa fa-fw fa-eye toggle-password field-icon" : "fa fa-fw fa-eye-slash toggle-password field-icon"} onClick={() => this.setState({ passwordShow: !passwordShow })}></i>
                                                        <span style={{ display: 'block', height: '0' }}>
                                                        </span>
                                                    </div>



                                                    <div className="form-group mb-12">
                                                        <div className="fxt-checkbox-area">
                                                            <div className="checkbox">
                                                                <input id="checkbox1" type="checkbox" name="checkTermsAndCondition" onChange={(e) => { this.setState({ checkTermsAndCondition: e.target.checked }) }} />
                                                                <label for="checkbox1" style={{ fontSize: '11px' }}>By clicking Register, you agree to the <a href="/terms-conditions" target="_blank">Terms and Conditions</a> & <a href="/privacy-policy" target="_blank">Privacy Policy</a> of Rozgar.com</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-0">
                                                        <button type="submit" className="fxt-btn-fill" >Register Now</button>
                                                    </div>
                                                </div>
                                            </form>


                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <ul className="fxt-socials mb-0">
                                                        <li className="fxt-google pl-5">


                                                            \
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fxt-footer">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {this.state.showModal && <ModalWindow
                        title="OTP"
                        className='toppoup btn-close'
                        headerClassName='opthead'
                        backdrop="static"
                        toggleModal={this.onhideModal}>
                        <Otp
                            reSendOTP={this.reSendOTP}
                            // hideSkip={true}
                            verifyOTP={this.verifyOTP}
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
                            backgroundColor: "rgb(0, 0, 0)",
                            padding: "210px",
                        }}>
                            <LoadingOverlay
                                active={true}
                                spinner={<SpinnerCircular color={'rgba(230,46,45,0.6)'} />}
                            >
                            </LoadingOverlay>
                        </div>
                    }
                </main >
            </React.Fragment>
        )
    }
}
