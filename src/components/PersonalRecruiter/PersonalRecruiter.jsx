import React, { Component } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import NumberFormat from 'react-number-format';
import swal from 'sweetalert';
import { PersonalRecruiterEnquiry } from '../../action/jobsByActions';
import constant from '../../constant';
import { validateForm, onChange } from '../../utils';
import ModalWindow from '../common/ModalWindow';
import { getGlobalSetting } from "../../action/dashboard";

export default class PersonalRecruiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captcha: false,
      MasterData: undefined,
      showEnquiryModel: false,
      isError: false,
      name: { name: 'name', value: '', error: '', isRequired: true },
      email: { name: 'email', value: '', error: '', isRequired: true },
      mobile: { name: 'mobile', value: '', error: '', isRequired: true },
      message: { name: 'message', value: 'Get your own Personal Recruiter - Quick Contact', error: '', isRequired: true },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.onSubmit.bind(this)
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


  handleChange(e) {
    let name = e.target.name
    let value = e.target.value
    onChange(this, name, value)
  }

  validateEnquiryForm = () => {
    let data = this.state
    let error = {}
    let isValid = true

    if (!data['name'].value) {
      let name = data['name']
      name.error = "Please Enter Name"
      isValid = false
      this.setState({
        name: name
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

    if (!data['message'].value) {
      let message = data['message']
      message.error = "Please Enter Your Message"
      isValid = false
    }

    this.setState({
      error: error
    })

    return isValid
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, email, mobile, message } = this.state

    const model = {
      NAME: name.value,
      EMAIL: email.value,
      CONTACT_NUMBER: mobile.value,
      DESCRIPTION: message.value
    }
    if (this.validateEnquiryForm() && this.state.captcha) {
      PersonalRecruiterEnquiry(model).then((res) => {
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

  onShowEnquiryModel = () => {
    this.setState({ showEnquiryModel: !this.state.showEnquiryModel })
  }
  componentDidMount() {

    getGlobalSetting().then(res => {
      if (res.status) {
        this.setState({ MasterData: res.result })
      }
      else {
        console.log(res.error)
      }
    })
  }
  render() {
    const { MasterData } = this.state
    const { name, email, mobile, message } = this.state
    const resumewritebg = {
      backgroundImage: 'url(assets/images/white-left-divider.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left bottom',
    };
    const jobsearchebg = {
      backgroundImage: 'url(assets/images/blue-divider.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
    };
    const astrologyline = {
      backgroundImage: 'url(assets/images/white-divider.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
    };
    const { showEnquiryModel } = this.state;
    return (

      <React.Fragment>
        {showEnquiryModel && <ModalWindow title="Get your own Personal Recruiter - Quick Contact">

          <form>
            <div className='row'>
              <div class="col-md-12">
                <div className='form-group'>
                  <input tepe="text"
                    name={name.name}
                    value={name.value}
                    className={name.error.length > 0 ? "form-control is-invalid" : 'form-control'}
                    onChange={this.handleChange}
                    placeholder='Enter your name'
                  />
                  {name.error.length > 0 && !name.value && <span className='text-danger'>{name.error}</span>}

                </div>
              </div>
              <div class="col-md-12">
                <div className='form-group'>
                  <NumberFormat
                    type="phone"
                    name={mobile.name}
                    className={mobile.error.length > 0 ? "form-control is-invalid" : 'form-control'}
                    placeholder='Enter mobile no'
                    maxLength={10}
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
                  />
                  {mobile.error.length > 0 && !mobile.value && <span className='text-danger'>{mobile.error}</span>}

                  {/* <NumberFormat type="phone"
                    error={this.state.isError}
                    name={mobile.name}
                    // value={mobile.value}
                    onChange={(e) => {
                      this.setState({ mobile: e.target.value });
                      if (e.target.value.length > 10) {
                        this.setState({ isError: true });
                      }
                    }}
                    // className={mobile.error.length > 0 ? "form-control is-invalid" : 'form-control'}
                    placeholder='Enter mobile no.' /> */}
                </div>
              </div>
              <div class="col-md-12">
                <div className='form-group'>
                  <input tepe="text"
                    name={email.name}
                    value={email.value}
                    onChange={this.handleChange}
                    className={email.error.length > 0 ? "form-control is-invalid" : 'form-control'}
                    placeholder='Enter email id' />
                  {email.error.length > 0 && !email.value && <span className='text-danger'>{email.error}</span>}

                </div>
              </div>
              <div class="col-md-12">
                <div className='form-group'>
                  <textarea className={message.error.length > 0 ? "form-control is-invalid" : 'form-control'}
                    name={message.name}
                    value={message.value}
                    onChange={this.handleChange}
                    placeholder='Your Message'>

                  </textarea>
                  {message.error.length > 0 && !message.value && <span className='text-danger'>{message.error}</span>}

                </div>
              </div>
              <div className='ml-3'>
                <ReCAPTCHA
                  sitekey={`6LduKmsgAAAAAGNLTjeYypXIHBOnN-P0U3ETBklE`}
                  onChange={this.recaptchaHandler}
                  theme='light'
                />
              </div>
              <div class="col-12 text-right pb-3 pt-3">
                <button type='button' onClick={(e) => { this.onSubmit(e) }} className='rg-btn rg-active btn-primary mr-2'>SUBMIT</button>
              </div>
            </div>
          </form>

        </ModalWindow>}

        <section class="create-your-job-section" id="rozgar-recruiter-aboutus">
          <div className="container">

            <div className='row'>
              <div className="col-md-12 col-sm-12">
                <div className='own-personal-recruiter'>
                  <h4>Get your own Personal Recruiter</h4>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className="col-md-7 col-sm-7">
                <div className='own-personal-recruiter'>
                  <p>Your Rozgar Personal Recruiter offers premium services to create a professional presence on the web. You can access your profile, edit it, or build and maintain your own network of professional contacts. In the package you will get Resume Writing, Personal Job Search, Linked-In Profile Creation & One to One Astrology driven guidance and support throughout your career journey.</p>
                  <p>Rozgar Personal Recruiter is a premium service for professionals that helps enterprise recruiters find and engage candidates for your sourcing needs.</p>
                  <p className='packageoff'>Early Bird Discount on Personal Recruiter Package <span>64% OFF</span></p>
                </div>
              </div>
              <div className="col-md-5 col-sm-5">
                <ul className='own-personal-recruiter-price'>
                  <li><span><del><i class="fa fa-rupee"></i>{MasterData?.ACTUAL_PRICE}</del> <i class="fa fa-rupee"></i>{MasterData?.DISCOUNT_PRICE}</span></li>
                  <li><a href="javascript:void(0)" onClick={() => { this.onShowEnquiryModel() }} className='rg-ruit-btn rg-active'>Enquiry Now</a></li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 col-sm-3">
                <div className='resume-writing-box'>
                  <div className='resume-img-box'>
                    <img src={'assets/images/resume-writing-pc.png'} alt="" />
                  </div>
                  <div className='resume-text-box'>
                    <h5>Resume Writing </h5>
                    {/* <a href={constant.component.signin.url} className="btn-booknow">Create Resume</a> */}
                  </div>

                </div>

              </div>
              <div className="col-md-3 col-sm-3">
                <div className='resume-writing-box personal-job-search-bx'>
                  <div className='resume-img-box'>
                    <img src={'assets/images/related-2.png'} alt="" />
                  </div>
                  <div className='resume-text-box'>
                    <h5>Personal Job Search </h5>
                    {/* <a href={constant.component.signin.url} className="btn-booknowred">Create your job</a> */}
                  </div>

                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className='resume-writing-box linkdin-profile'>
                  <div className='resume-img-box'>
                    <img src={'assets/images/inkdinpro2.png'} alt="" />
                  </div>
                  <div className='resume-text-box'>
                    <h5>Linked-In Profile </h5>
                    {/* <a href={constant.component.signin.url} className="btn-booknowblack">Create Linkdin Profile</a> */}
                  </div>

                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className='resume-writing-box about-astrology-box'>
                  <div className='resume-img-box'>
                    <img src={'assets/images/astrogoly.png'} alt="" />
                  </div>
                  <div className='resume-text-box'>
                    <h5>Astrology driven guidance</h5>
                    {/* <a href={constant.component.signin.url} className="btn-astrology">Explore Astrology</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className='rozgar-recruiter-faq-section rozgar-quciksolution'>
          <div className='container'>

            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <div className='rozgar-quciksolutionbox'>
                  <h2 className='headline'>Quick Solution</h2>
                  <ul className='autoheight' id='style-4'>
                    <li><span>Q.</span><a href='/faq/do-i-need-a-valid-email-id-for-registration-'>Do I need a valid email id for registration?</a></li>
                    <li><span>Q.</span><a href='/faq/i-am-being-asked-some-more-questions-before-i-can-complete-my-application-to-a-job-match-why-is-so-'>I am being asked some more questions before I can complete my application to a job match. Why is so?</a></li>
                    <li><span>Q.</span><a href='/faq/can-i-apply-again-for-the-same-job-posting-'>Can I apply again for the same job posting?</a></li>
                    <li><span>Q.</span><a href='/faq/i-need-help-completing-my-rozgar-profile'>I need help completing my Rozgar profile</a></li>
                    <li><span>Q.</span><a href='/faq/how-can-i-control-who-views-my-profile-on-rozgar-'>How can I control who views my profile on Rozgar?</a></li>
                    <li><span>Q.</span><a href='/faq/why-should-i-create-a-profile-on-rozgar-if-i-already-have-a-resume-'>Why should I create a profile on Rozgar if I already have a resume?</a></li>
                    <li><span>Q.</span><a href='/faq/i-searched-for-jobs-on-rozgar-but-i-could-not-find-one-matching-my-profile-what-should-i-do-'>I searched for jobs on Rozgar but I could not find one matching my profile. What should I do?</a></li>
                    <li><span>Q.</span><a href='/faq/can-i-contact-the-employer-regarding-my-application-'>Can I contact the employer regarding my application?</a></li>
                    <li><span>Q.</span><a href='/faq/how-many-jobs-can-i-apply-to-in-a-day-month-'>How many jobs can I apply to in a day / month?</a></li>
                    <li><span>Q.</span><a href='/faq/what-are-job-preferences-'>What are Job Preferences?</a></li>
                    <li><span>Q.</span><a href='/faq/why-are-there-no-views-for-my-profile-or-why-have-employers-not-viewed-my-cv-'>Why are there no views for my Profile? or Why have employers not viewed my CV?</a></li>
                    <li><span>Q.</span><a href='/faq/how-can-i-delete-my-rozgar-account-'>How can I delete my Rozgar account?</a></li>
                    <li><span>Q.</span><a href='/faq/how-can-i-deactivate-my-rozgar-account-'>How can I deactivate my Rozgar account?</a></li>
                    <li><span>Q.</span><a href='/faq/how-to-change-email-and-mobile-notification-settings-on-naukri-'>How to change email and mobile notification settings on Naukri?</a></li>
                    <li><span>Q.</span><a href='/faq/how-can-i-protect-myself-from-job-scams-'>How can I protect myself from job scams?</a></li>
                    <li><span>Q.</span><a href='/faq/what-are-job-scams-how-to-identify-job-scam-'>What are job scams? How to identify  job scam?</a></li>
                    <li><span>Q.</span><a href='/faq/i-am-having-trouble-uploading-my-cv-how-do-i-upload-'>I am having trouble uploading my CV. How do I upload ?</a></li>
                    <li><span>Q.</span><a href='/faq/when-i-try-to-apply-to-certain-jobs-i-am-re-directed-to-another-site-in-some-cases-why-'>When I try to apply to certain jobs, I am re-directed to another site in some cases. Why?</a></li>
                    <li><span>Q.</span><a href='/faq/i-got-a-call-email-from-recruiter-asking-for-money-what-should-i-do-'>I got a call/email from recruiter asking for money. What should I do?</a></li>
                    <li><span>Q.</span><a href='/faq/i-searched-for-jobs-rozgar-but-i-could-not-find-one-matching-my-profile-what-should-i-do-'>I searched for jobs  Rozgar but I could not find one matching my profile. What should I do?</a></li>
                    <li><span>Q.</span><a href='/faq/what-is-rozgar-database-or-rozgar-cv-database-'>What is Rozgar database or Rozgar CV database?</a></li>
                    <li><span>Q.</span><a href='/faq/what-is-rozgar-premium-'>What is Rozgar Premium?</a></li>
                    <li><span>Q.</span><a href='/faq/i-do-not-want-my-current-employer-to-have-access-to-my-profile-how-can-i-block-a-recruiter-'>I do not want my current employer to have access to my profile. How can I block a recruiter?</a></li>
                    <li><span>Q.</span><a href='/faq/how-can-i-update-the-email-id-and-phone-number-on-my-rozgar-account-'>How can I update the email id and phone number on my Rozgar account?</a></li>
                    <li><span>Q.</span><a href='/faq/how-can-i-change-the-password-to-my-account-'>How can I change the password to my account?</a></li>
                    <li><span>Q.</span><a href='/faq/i-deleted-my-rozgar-account-can-i-get-it-back-'>I deleted my Rozgar account. Can I get it back?</a></li>
                    <li><span>Q.</span><a href='/faq/how-can-i-make-my-profile-invisible-to-recruiters-on-rozgar-'>How can I make my profile invisible to recruiters on Rozgar?</a></li>
                    <li><span>Q.</span><a href='/faq/how-can-i-stop-getting-emails-from-rozgar-com-'>How can I stop getting emails from Rozgar.com?</a></li>
                    <li><span>Q.</span><a href='/faq/how-to-change-email-and-mobile-notification-settings-on-rozgar-com-'>How to change email and mobile notification settings on Rozgar.com?</a></li>
                    <li><span>Q.</span><a href='/faq/what-is-profile-performance-on-rozgar-com-'>What is Profile Performance on Rozgar.com?</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <div className='rozgar-browsebytopic'>
                  <h2 className='headline'>Browse by topic</h2>
                  <ul className='autoheight' id='style-4'>
                    <a href='/faq-category/create-rozgar-profile'>
                      <li><i className='lnr lnr-users' ></i>
                        <a style={{ color: "#000000" }}> Create Rozgar Profile</a></li></a>
                    <a href='/faq-category/search'>
                      <li><i className='lnr lnr-magnifier'></i>
                        <a style={{ color: "#000000" }}> Search</a></li></a>
                    <a href='/faq-category/apply'>
                      <li><i className='lnr lnr-hand' ></i>
                        <a style={{ color: "#000000" }}> Apply</a></li></a>
                    <a href='/faq-category/getting-around-rozgar'>
                      <li><i className='fa fa-refresh' ></i>
                        <a style={{ color: "#000000" }}> Getting around Rozgar</a></li></a>
                    <a href='/faq-category/setting'>
                      <li><i className='lnr lnr-cog'></i>
                        <a style={{ color: "#000000" }}> Setting</a></li></a>
                    <a href='/faq-category/security-advice'>
                      <li><i className='fa fa-shield' ></i>
                        <a style={{ color: "#000000" }}> Security-advice</a></li></a>
                  </ul>
                </div>
              </div>
            </div>


          </div>

        </section>
        <section class="rozgar-recruiter-blog-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="rozgar-section-blog-title">
                  <h4>Latest Blogs</h4>
                </div>

              </div>

            </div>
            <div className="row">
              <div className="post card-container col-lg-4 col-md-6 col-sm-6">
                <div className='blog-post blog-grid blog-style-recuiter'>
                  <div className='dez-post-media dez-img-effect radius-sm'> <a href='https://rozgar.com/blog-detail/writing-a-resignation-letter-format-and-10-samples'><img src={'assets/images/blog1.jpg'} alt="" />
                  </a> </div>
                  <div className='dez-info'>
                    <div class="dez-post-meta">
                      <ul class="d-flex align-items-center">
                        <li class="post-date"><img src={'assets/images/user-img.jpg'} alt="" /> Rosy</li>

                      </ul>
                    </div>

                    <div className='dez-post-title'>
                      <h5 className='post-title font-20'><a href='https://rozgar.com/blog-detail/writing-a-resignation-letter-format-and-10-samples'>Writing a Resignation Letter: Format and 10+ Samples</a></h5>
                    </div>
                    <div className='dez-post-text'>
                      <p>In this blog we will cover: Tips for Writing a Resignation Letter What to Include in Your Resignation Letter What Not to Include in Your Resignation Letter Resignation letter with sample FAQs Are you sure that you want to quit your...</p>
                    </div>
                    <div className='dez-post-readmore blog-share'>
                      <a href='https://rozgar.com/blog-detail/writing-a-resignation-letter-format-and-10-samples' title='READ MORE' rel='bookmark' className='site-button-link'><span className='fw6'>READ MORE</span></a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="post card-container col-lg-4 col-md-6 col-sm-6">
                <div className='blog-post blog-grid blog-style-recuiter'>
                  <div className='dez-post-media dez-img-effect radius-sm'> <a href='https://rozgar.com/blog-detail/top-hiring-trends-for-2022'><img src={'assets/images/blog2.jpg'} alt="" />
                  </a> </div>
                  <div className='dez-info'>
                    <div class="dez-post-meta">
                      <ul class="d-flex align-items-center">
                        <li class="post-date"><img src={'assets/images/user-img.jpg'} alt="" /> Rosy</li>

                      </ul>
                    </div>

                    <div className='dez-post-title'>
                      <h5 className='post-title font-20'><a href='https://rozgar.com/blog-detail/top-hiring-trends-for-2022'>Top Hiring Trends for 2022</a></h5>
                    </div>
                    <div className='dez-post-text'>
                      <p>In this blog we will cover: Emerging hiring trends Conclusion FAQs Without doubt the past two years were quite tough for the recruitment industry. The industry had to face a lot of challenges.In order to tackle these challenges brought on by t...</p>
                    </div>
                    <div className='dez-post-readmore blog-share'>
                      <a href='https://rozgar.com/blog-detail/top-hiring-trends-for-2022' title='READ MORE' rel='bookmark' className='site-button-link'><span className='fw6'>READ MORE</span></a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="post card-container col-lg-4 col-md-6 col-sm-6">
                <div className='blog-post blog-grid blog-style-recuiter'>
                  <div className='dez-post-media dez-img-effect radius-sm'> <a href='https://rozgar.com/blog-detail/why-finding-passion-in-career-is-important-'><img src={'assets/images/blog3.jpg'} alt="" />
                  </a> </div>
                  <div className='dez-info'>
                    <div class="dez-post-meta">
                      <ul class="d-flex align-items-center">
                        <li class="post-date"><img src={'assets/images/user-img.jpg'} alt="" /> Rosy</li>

                      </ul>
                    </div>

                    <div className='dez-post-title'>
                      <h5 className='post-title font-20'><a href='https://rozgar.com/blog-detail/why-finding-passion-in-career-is-important-'>Why Finding Passion in Career is Important?</a></h5>
                    </div>
                    <div className='dez-post-text'>
                      <p>In this blog we will cover: How to define “passion”? How to find passion in your career? Tips for Turning Your Passion Into a Job Conclusion FAQs How to find passion in your career? According to a recent report, about...</p>
                    </div>
                    <div className='dez-post-readmore blog-share'>
                      <a href='https://rozgar.com/blog-detail/why-finding-passion-in-career-is-important-' title='READ MORE' rel='bookmark' className='site-button-link'><span className='fw6'>READ MORE</span></a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


      </React.Fragment>
    )
  }
}
