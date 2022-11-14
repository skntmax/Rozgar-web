import React, { Component } from 'react'
import { InternationalEnquiryForm } from '../../action/jobsByActions';
import constant from '../../constant'
import { onChange } from '../../utils';
import swal from 'sweetalert';
import ReCAPTCHA from 'react-google-recaptcha';
export default class InternationalWorkVisas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            captcha: false,
            firstName: { name: 'firstName', value: '', error: '', isRequired: true },
            lastName: { name: 'lastName', value: '', error: '', isRequired: true },
            email: { name: 'email', value: '', error: '', isRequired: true },
            mobile: { name: 'mobile', value: '', error: '', isRequired: true },
            comment: { name: 'comment', value: '', error: '', isRequired: true },
            prefferedStudyDestination: { name: 'prefferedStudyDestination', value: '', error: '', isRequired: true },

        }


        this.handleChange = this.handleChange.bind(this)

        this.handleSubmit = this.onSubmit.bind(this)

    }

    handleChange(e) {
        let name = e.target.name
        let value = e.target.value
        onChange(this, name, value)
    }

    recaptchaHandler = (value) => {

        if (value) {
            this.setState({
                captcha: true
            })
        } else {
            this.setState({
                captcha: false
            })
        }
    }


    validateEnquiryForm = () => {

        let data = this.state
        let error = {}
        let isValid = true

        if (!data['firstName'].value) {
            let firstName = data['firstName']
            firstName.error = "Please Enter FirstName"
            isValid = false
            this.setState({
                firstName: firstName
            })
        }

        if (!data['lastName'].value) {
            let lastName = data['lastName']
            lastName.error = "Please Enter LastName"
            isValid = false
            this.setState({
                lastName: lastName
            })
        }

        if (!data['email'].value) {
            let email = data['email']
            email.error = "Please Enter Email"
            isValid = false
            this.setState({
                email: email
            })
        }

        if (data['email'].value) {
            let re = /\S+@\S+\.\S+/
            if (re.test(data['email'].value)) { } else {
                let email = data['email']
                email.error = "Please Enter Valid Email"
                isValid = false
                this.setState({
                    email: email
                })
            }
        }
        if (!data['mobile'].value) {
            let mobile = data['mobile']
            mobile.error = "Please Enter Mobile"
            isValid = false
            this.setState({
                mobile: mobile
            })
        }

        if (data["mobile"] != "") {
            const regexExp = /^[6789][0-9]{9}/
            if (regexExp.test(data.mobile.value)) { } else {
                let mobile = data['mobile']
                mobile.error = "Please Enter Valid Mobile Number";
                isValid = false;
            }
        }

        if (!data['comment'].value) {
            let comment = data['comment']
            comment.error = "Please Enter Comment"
            isValid = false
            this.setState({
                comment: comment
            })
        }
        if (!data['prefferedStudyDestination'].value) {
            let prefferedStudyDestination = data['prefferedStudyDestination']
            prefferedStudyDestination.error = "Please Enter Work Destination"
            isValid = false
            this.setState({
                prefferedStudyDestination: prefferedStudyDestination
            })
        }

        this.setState({
            error: error
        })

        return isValid
    }

    onSubmit(e) {
        e.preventDefault();

        const { firstName, lastName, email, mobile, comment, prefferedStudyDestination } = this.state


        const model = {
            NAME: firstName.value,
            LASTNAME: lastName.value,
            EMAIL: email.value,
            CONTACT_NUMBER: mobile.value,
            DESCRIPTION: comment.value,
            PREFFERED_STUDY_DESTINATION: prefferedStudyDestination.value,
            TYPES: "International Work visa"
        }

        if (this.validateEnquiryForm() && this.state.captcha) {
            InternationalEnquiryForm(model).then((res) => {
                if (res.status) {
                    swal({
                        icon: "success",
                        text: "Enquiry Submitted successfully ",
                        timer: 2000,
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
                    window.location.reload()

                }
                else {
                    alert(res.error)
                }

            }).catch(err => {
                alert(err)
            })
        }
    }


    render() {
        const { firstName, lastName, email, mobile, comment, prefferedStudyDestination } = this.state

        return (
            <React.Fragment>
                <main id="rg-main" className="rg-haslayout pt-0">

                    <section className='static-hero-s3'>
                        <div className='hero-container'>
                            <div className='hero-inner'>
                                <div className='container'>
                                    <div className='hero-content'>
                                        <div className='slide-title-sub'>
                                            <h5>An Effortless Immigration Process</h5>
                                        </div>
                                        <div className='slide-title'>
                                            <h2>Our best experts in <br /> <b><span>your Service.</span></b></h2>
                                        </div>
                                        <div className='slide-text'>
                                            <p>Study, Job, Immigration & Visa</p>
                                        </div>
                                        <div className='clearfix'></div>
                                        <div className='btns'>
                                            <a href='#' className='theme-btn' onClick={e => this.onSubmit(e)}>Book a consultation!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='consult-pic'>
                            <div className='enroll-wrap'>

                                <h3>Get in touch</h3>

                                <form className='courses-form'>

                                    <div className='form-group col-md-6'>
                                        <input type='text'
                                            className={firstName.error.length > 0 ? "form-control is-invalid" : 'form-control'}
                                            name={firstName.name}
                                            value={firstName.value}
                                            onChange={this.handleChange}
                                            id='Name'
                                            placeholder='Enter Your First Name' />
                                        {firstName.error.length > 0 && !firstName.value && <span className='text-danger ml-1'>{firstName.error}</span>}

                                    </div>
                                    <div className='form-group col-md-6'>
                                        <input type='text'
                                            className={lastName.error.length > 0 ? "form-control is-invalid" : 'form-control'}
                                            name={lastName.name}
                                            value={lastName.value}
                                            onChange={this.handleChange}
                                            id='Name'
                                            placeholder='Enter Your Last Name' />
                                        {lastName.error.length > 0 && !lastName.value && <span className='text-danger ml-1'>{lastName.error}</span>}

                                    </div>

                                    <div className='form-group col-md-6'>
                                        <input type='text'
                                            className={mobile.error.length > 0 ? "form-control is-invalid" : 'form-control'}
                                            name={mobile.name}
                                            onChange={(e) => {
                                                if (e.target.value !== "") {
                                                    const regexExp = /^[6789][0-9]{9}/
                                                    if (regexExp.test(e.target.value)) {
                                                        let mobile = this.state.mobile
                                                        mobile.value = e.target.value
                                                        this.setState({ mobile: mobile });
                                                    } else {
                                                        let mobile = this.state.mobile
                                                        mobile.value = ''
                                                        this.setState({ mobile: mobile });
                                                    }
                                                }
                                            }
                                            }
                                            id='Number'
                                            placeholder='Enter Your Contact Number' />
                                        {mobile.error.length > 0 && !mobile.value && <span className='text-danger ml-1'>{mobile.error}</span>}

                                    </div>
                                    <div className='form-group col-md-6'>
                                        <input type='email'
                                            className={email.error.length > 0 ? "form-control is-invalid" : 'form-control'}
                                            name={email.name}
                                            value={email.value}
                                            onChange={this.handleChange}
                                            id='Number'
                                            placeholder='Enter Your Email' />
                                        {email.error.length > 0 && !email.value && <span className='text-danger ml-1'>{email.error}</span>}

                                    </div>
                                    <div className='form-group col-md-6'>

                                        <input type='text'
                                            className={comment.error.length > 0 ? "form-control is-invalid" : 'form-control'}
                                            name={comment.name}
                                            value={comment.value}
                                            onChange={this.handleChange}
                                            id='Name'
                                            placeholder='Subject' />
                                        {comment.error.length > 0 && !comment.value && <span className='text-danger ml-1'>{comment.error}</span>}

                                    </div>
                                    <div className='form-group col-md-6'>
                                        <select
                                            name={prefferedStudyDestination.name}
                                            value={prefferedStudyDestination.value}
                                            onChange={this.handleChange}

                                        >
                                            <option selected>Preferred Work Destination</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="The USA">The USA</option>
                                            <option value="The UK">The UK</option>
                                            <option value="Canada" >Canada</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="UAE">UAE</option>
                                            <option value="JAPAN">JAPAN</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Finland">Finland</option>
                                            <option value="Germany">Germany</option>
                                            <option value="New Zealand">New Zealand</option>

                                        </select>
                                        {prefferedStudyDestination.error.length > 0 && !prefferedStudyDestination.value && <span className='text-danger ml-1'>{prefferedStudyDestination.error}</span>}

                                    </div>

                                    {/* <div className='form-group'>
                        <div className='fxt-checkbox-area'>
                            
                            <div className='checkbox'><input id='checkbox1' type='checkbox' name='' />
                            <label for='checkbox1'>I accept the  <a href={constant.component.termsConditions.url} target='_blank'>Terms & Conditions</a></label></div>
                            </div>
                        </div>
                     */}

                                    <ReCAPTCHA
                                        sitekey={`6LduKmsgAAAAAGNLTjeYypXIHBOnN-P0U3ETBklE`}
                                        onChange={this.recaptchaHandler}
                                        theme='light'
                                    />

                                    <button type="submit" className='default-btn' style={{marginTop:"7px"}} onClick={e => this.onSubmit(e)}>Get Started</button>


                                </form>
                            </div>
                        </div>
                    </section>
                    <section className='layout-pt-lg layout-pb-lg'>
                        <div className='container'>
                            <div data-anim-wrap='' className='row y-gap-30 justify-between items-center animated'>
                                <div className='col-xl-7 col-lg-7 order-2 order-lg-1 about-abroad-section'>
                                    <h2 data-anim-child='slide-up delay-1' className='text-dark-1'>Work & Settle Abroad With Your Family </h2>

                                    <p className='mt-5 text-dark-1 mt-20 is-in-view'>Do you want to build a career and life abroad? As one of the world’s leading overseas career specialists and a leading work visa agent, Rozgar has helped thousands of individuals and families settle in the world’s most liveable countries. We’ve seen firsthand how moving abroad can dramatically improve not just the migrant’s life but that of their family and parents. With our comprehensive overseas career solutions, we are the #1 choice for professionals seeking to work abroad.</p>

                                    <h4>End To End Job Search Services</h4>
                                    <p>Rozgar has streamlined the steps involved in working abroad to make your journey smoother. Our process is aimed at making your profile more accessible, attractive and engaging. Our services begin with helping you create a resume that meets international standards and help you craft an engaging LinkedIn profile. We then market your profile in the countries of your choice and work to get you interview calls. A dedicated Job Search consultant will work with you on your international career, guiding you through the process.</p>
                                    <h4>Our job search services* include the following:</h4>
                                    <ul className='international-list-bx'>
                                        <li><span>Job Search Strategy Report:</span> With the help of experts, we create a comprehensive report based on your profile and decide on positioning it in your target country</li>
                                        <li><span>Opportunity Research:</span> We identify industry trends and job sources to get you more job offers. We help you modify your profile to present it on different platforms</li>
                                        <li><span>Job Applications:</span> We register your profile on various portals and job sites and even apply to relevant job postings on your behalf</li>
                                    </ul>
                                </div>

                                <div className='col-lg-5 order-1 education-area-two '>
                                    <div className='education-img-wrap'>
                                        <div className='education-img-2'>
                                            <img src={'./assets/images/international1.png'} alt='Image' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='serivce-section international-serivce-section bg-silver-light pdt-105 pdb-80'>
                        <div className='section-title'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='section-title-left-part mrb-sm-30'>
                                            <div className='section-left-sub-title'>
                                                <h5 className='sub-title text-primary-color'>what we do</h5>
                                            </div>
                                            <h2 className='title'>We Provide Experts Create Great <span> Visa Categories</span></h2>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-6 col-xl-4'>
                                        <div className='service-box'>
                                            <div className='service-icon'>
                                                <img className='icon-black-img' src={'./assets/images/skilled-visa.png'} alt='Image' />
                                                <img className='icon-white-hov' src={'./assets/images/skilled-visa2.png'} alt='Image' />
                                            </div>
                                            <div className='service-content'>
                                                <div className='title'>
                                                    <h3>Skilled Worker Visa</h3>
                                                </div>
                                                <div className='para'>
                                                    <p>For the persons whose jobs require a minimum work experience that are not temporary or seasonal.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-xl-4'>
                                        <div className='service-box'>
                                            <div className='service-icon'>
                                                <img className='icon-black-img' src={'./assets/images/immigration-visa.png'} alt='Image' />
                                                <img className='icon-white-hov' src={'./assets/images/immigration-visa-w.png'} alt='Image' />
                                            </div>
                                            <div className='service-content'>
                                                <div className='title'>
                                                    <h3>Business Immigration Visa</h3>
                                                </div>
                                                <div className='para'>
                                                    <p>People who want to invest in, or start businesses abroad. Expected to support the development.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-xl-4'>
                                        <div className='service-box'>
                                            <div className='service-icon' style={{ marginBottom: "10px" }} >
                                                <img className='icon-black-img' src={'./assets/images/green-card.png'} alt='Image' style={{ width: "70px" }} />
                                                <img className='icon-white-hov' src={'./assets/images/green-card-w.png'} alt='Image' style={{ width: "70px" }} />
                                            </div>
                                            <div className='service-content'>
                                                <div className='title'>
                                                    <h3>Green card</h3>
                                                </div>
                                                <div className='para'>
                                                    <p>We consult for the permanent residents visa documents issued to immigrants under the Immigration.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-xl-4'>
                                        <div className='service-box'>
                                            <div className='service-icon' style={{ marginBottom: "10px" }}>
                                                <img className='icon-black-img' src={'./assets/images/student-visa.png'} alt='Image' style={{ width: "70px" }} />
                                                <img className='icon-white-hov' src={'./assets/images/student-visa-w.png'} alt='Image' style={{ width: "70px" }} />
                                            </div>
                                            <div className='service-content'>
                                                <div className='title'>
                                                    <h3>Student Visa</h3>
                                                </div>
                                                <div className='para'>
                                                    <p>We guide our clients for the perception & better career opportunities for the students, Overseas services</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-xl-4'>
                                        <div className='service-box'>
                                            <div className='service-icon' style={{ marginBottom: "10px" }}>
                                                <img className='icon-black-img' src={'./assets/images/work-permit.png'} alt='Image' style={{ width: "70px" }} />
                                                <img className='icon-white-hov' src={'./assets/images/work-permit-w.png'} alt='Image' style={{ width: "70px" }} />
                                            </div>
                                            <div className='service-content'>
                                                <div className='title'>
                                                    <h3>Work Permit</h3>
                                                </div>
                                                <div className='para'>
                                                    <p>Permit To Work refers to management systems used to ensure that work is done safely and efficiently.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-6 col-xl-4'>
                                        <div className='service-box'>
                                            <div className='service-icon' style={{ marginBottom: "20px" }}>
                                                <img className='icon-black-img' src={'./assets/images/visitor-visa.png'} alt='Image' style={{ width: "60px" }} />
                                                <img className='icon-white-hov' src={'./assets/images/visitor-visa-w.png'} alt='Image' style={{ width: "60px" }} />
                                            </div>
                                            <div className='service-content'>
                                                <div className='title'>
                                                    <h3>Visitor Visa</h3>
                                                </div>
                                                <div className='para'>
                                                    <p>Visas for the people who want to travel to and enter as a visitor for up to 6 months. We help with visitor visa.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='education-area education-area-why-us why-work-abroad-section ebeef5-bg-color' id='EXE_MAIN'>
                        <div className='container p-0'>
                            <div className='row'>

                                <div className='col-lg-6'>
                                    <div className='education-content why-work-abroad-box'>
                                        <h2>Why Work Abroad?</h2>
                                        <p>Working abroad can dramatically transform your life and career. Working in a foreign country would surely require you to acquire new abilities. You will learn new soft skills, such as communication and networking, as well as new technical skills at your new career abroad. After all, navigating a new location without knowing the language requires resourcefulness, and working in an international team will improve your communication skills.</p>
                                        <p>Working overseas also gives you the opportunity to learn a foreign language. This will not only help you in your work but also make living abroad easier for you. Besides this, your new language skills will have a positive impact on your career.</p>
                                        <p>Working in a foreign country is a fantastic way to broaden your personal and professional network. Working in another country exposes you to fresh opportunities because you will be collaborating with locals and expats from other countries. You will also develop friendships with people from various walks of life, some of which will last a lifetime.</p>
                                        <p>Having an international assignment on your resume may help you find work in the future. In recruiting, talent mobility is a hot topic, and an increasing proportion of future professions will necessitate foreign travel. Working overseas will demonstrate your flexibility and independence, as well as make your resume stand out from the crowd. Additionally, any other talents you acquire while abroad, such as language skills, will enhance your resumé.</p>


                                    </div>
                                </div>
                                <div className='col-lg-6 '>
                                    <div className='education-content why-work-abroad-box'>
                                        <h2>Working abroad is the perfect option for you if you plan to:</h2>

                                        <ul>
                                            <li>

                                                Grow your career and have international mobility
                                            </li>
                                            <li>

                                                Earn dollar salaries leading to higher saving
                                            </li>
                                            <li>

                                                Live in well-developed countries
                                            </li>
                                            <li>

                                                Have access to world-class education & healthcare
                                            </li>
                                            <li>

                                                Gain access to citizen benefits
                                            </li>
                                            <li>

                                                Get a powerful passport that facilitates international travel
                                            </li>
                                            <li>

                                                Transform your family’s life
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='call-section-bx'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='call-confirm-bx'>
                                        <h4>Are You Looking For Visa Applications Just Call Us!</h4>
                                        <p>Need a consultation? Call us today +91-9311744658 or Email us: contact@rozgar.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className='categories-area destination-top-categories'>
                        <div className='container'>

                            <div className='section-title'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='section-title-left-part mrb-sm-30'>
                                                <div className='section-left-sub-title'>
                                                    <h5 className='sub-title text-primary-color'>Top Work Favourite  Destination</h5>
                                                </div>
                                                <h2 className='title'>For The Immigration, Choose<span> Country!</span></h2>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-3 col-sm-6'>
                                    <a href={constant.component.workinAustralia.url}><div className='single-categories'>
                                        <img src={'./assets/images/australia.jpg'} alt='Image' />
                                        <div className='categories-content-wrap'>
                                            <div className='categories-content'>

                                                <h3>Work in Australia</h3>


                                            </div>
                                        </div>
                                    </div></a>
                                </div>
                                <div className='col-lg-3 col-sm-6'>
                                    <a href={constant.component.workinCanada.url}><div className='single-categories'>
                                        <img src={'./assets/images/canada.jpg'} alt='Image' />
                                        <div className='categories-content-wrap'>
                                            <div className='categories-content'>

                                                <h3>Work in Canada</h3>


                                            </div>
                                        </div>
                                    </div></a>
                                </div>
                                <div className='col-lg-3 col-sm-6'>
                                    <a href={constant.component.workinUK.url}><div className='single-categories'>
                                        <img src={'./assets/images/uk.jpg'} alt='Image' />
                                        <div className='categories-content-wrap'>
                                            <div className='categories-content'>

                                                <h3>Work in UK</h3>


                                            </div>
                                        </div>
                                    </div></a>
                                </div>
                                <div className='col-lg-3 col-sm-6'>
                                   <a href={constant.component.workinUSA.url}> <div className='single-categories'>
                                        <img src={'./assets/images/usa.jpg'} alt='Image' />
                                        <div className='categories-content-wrap'>
                                            <div className='categories-content'>

                                                <h3>Work in USA</h3>


                                            </div>
                                        </div>
                                    </div></a>
                                </div>
                                <div className='col-lg-3 col-sm-6'>
                                    <a href={constant.component.workinMalaysia.url}><div className='single-categories'>
                                        <img src={'./assets/images/italy.jpg'} alt='Image' />
                                        <div className='categories-content-wrap'>
                                            <div className='categories-content'>

                                                <h3>Work in Malaysia</h3>


                                            </div>
                                        </div>
                                    </div></a>
                                </div>
                                <div className='col-lg-3 col-sm-6'>
                                    <a href={constant.component.workinIreland.url}><div className='single-categories'>
                                        <img src={'./assets/images/ireland.jpg'} alt='Image' />
                                        <div className='categories-content-wrap'>
                                            <div className='categories-content'>

                                                <h3>Work in Ireland</h3>


                                            </div>
                                        </div>
                                    </div></a>
                                </div>
                                <div className='col-lg-3 col-sm-6'>
                                    <a href={constant.component.workinNewZealand.url}><div className='single-categories'>
                                        <img src={'./assets/images/new-zealand.jpg'} alt='Image' />
                                        <div className='categories-content-wrap'>
                                            <div className='categories-content'>

                                                <h3>Work in New Zealand</h3>


                                            </div>
                                        </div>
                                    </div></a>
                                </div>
                                <div className='col-lg-3 col-sm-6'>
                                    <a href={constant.component.workinSingapore.url}><div className='single-categories'>
                                        <img src={'./assets/images/singapore.jpg'} alt='Image' />
                                        <div className='categories-content-wrap'>
                                            <div className='categories-content'>

                                                <h3>Work in Singapore</h3>


                                            </div>
                                        </div>
                                    </div></a>
                                </div>

                            </div>
                        </div>
                    </section>

                </main>
            </React.Fragment>
        )
    }
}
