import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import resume01 from '../../assets/img/demos/demo-1.png';
import resume02 from '../../assets/img/demos/demo-2.png';
import resume03 from '../../assets/img/demos/demo-3.png';

import servicepic01 from '../../assets/img/icons/f1.png';
import servicepic02 from '../../assets/img/icons/f2.png';
import servicepic03 from '../../assets/img/icons/f3.png';
import servicepic04 from '../../assets/img/icons/f4.png';
import servicepic05 from '../../assets/img/icons/f5.png';
import servicepic06 from '../../assets/img/icons/f6.png';

import dollarsys from '../../assets/img/svg/img-dollar.svg';
import bannerrm from '../../assets/img/core-img/banner2.png';

import easyonline from '../../assets/img/icons/easyonline.png';
import stepbystep from '../../assets/img/icons/stepbystep.png';
import recruitera from '../../assets/img/icons/recruitera.png';

import checkright from '../../assets/img/icons/check.png';
import resumecv from '../../assets/img/core-img/cv.png';
import custmoricon from '../../assets/img/core-img/custom.png';

import testimonal01 from '../../assets/img/test-img/1.jpg';
import testimonal02 from '../../assets/img/test-img/2.jpg';
import testimonal03 from '../../assets/img/test-img/3.jpg';
import constant from '../../constant';
import { getStorage } from '../../utils';


export default class ResumeMaking extends Component {

    constructor(props) {
        super(props)
        this.state = {
            candidateID: getStorage(constant.keys.cd) ? getStorage(constant.keys.cd) : '',
        }
    }


    render() {
        const { candidateID } = this.state
        return (
            <React.Fragment>
                <section className="welcome_area demo2 flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6 col-md-12">
                                <div className="welcome-content v2">
                                    <div className="promo-section">
                                        <div className="integration-link light">
                                            <span className="integration-icon">
                                                <img src={dollarsys} width="24" height="24" alt="" />
                                            </span>
                                            <span className="integration-text">Discover The Easiest ways to Build Your CV!</span>
                                        </div>
                                    </div>
                                    <h1 className="wow fadeInUp" data-wow-delay="0.2s">Online <span style={{ color: '#e81c28' }}>Resume Maker</span> With Creative Templates.</h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.3s">Our Perfect resume maker takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.</p>
                                    <div className="dream-btn-group wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="#createtemplate" className="dream-btn green-btn mr-3">Choose Template</a>
                                        {/* <Link to={constant.component.register.url}>Sign Up</Link> */}
                                        <a href={constant.component.register.url} className="dream-btn green-btn"> Sign up</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-md-12">
                                <div className="banner-box">
                                    <img src={bannerrm} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="clearfix"></div>

                <section className="demo-video feat section-padding-50 bub-left">
                    <div className="container">

                        <div className="row align-items-center">

                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <img src={easyonline} alt="" />
                                        </div>
                                        <h3><a href="javascript:vioid();">Easy Online Resume Builder</a></h3>
                                        <div className="text">Create a professional resume with the Rozgar resume builder online in 3 steps. Browse our templates, then easily build and share your resume.</div>
                                    </div>
                                </div>
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <img src={stepbystep} alt="" />
                                        </div>
                                        <h3><a href="javascript:vioid();">Step By Step Expert Tips</a></h3>
                                        <div className="text">Our Expert tips on tailoring your resume for your specific industry. Get recognized by premium employers.</div>
                                    </div>
                                </div>
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <img src={recruitera} alt="" />
                                        </div>
                                        <h3><a href="javascript:vioid();">Free Download from Dashboard</a></h3>
                                        <div className="text">That's right: Free. No catch, No paywall when its time to download your resume. It will be available in your Rozgar account.</div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="who-we-contant mt-s">
                                    <div className="dream-dots">
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                    </div>
                                    <h4>Why Choose Our Platform?</h4>
                                    <p>The Rozgar.com resume builder stands out from the rest, but not only because we’re the only truly free resume builder out there. We also offer:</p>
                                    <div className="col-md-12">
                                        <div className="side-feature-list-item">
                                            <img src={checkright} className="check-mark-icon" alt="" />
                                            <div className="foot-c-info">Access to dozens of professional and creative resume templates.</div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="side-feature-list-item">
                                            <img src={checkright} className="check-mark-icon" alt="" />
                                            <div className="foot-c-info">Editing tools you can use directly on our platform.</div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="side-feature-list-item">
                                            <img src={checkright} className="check-mark-icon" alt="" />
                                            <div className="foot-c-info">Ability to download and print resumes instantly.</div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="side-feature-list-item">
                                            <img src={checkright} className="check-mark-icon" alt="" />
                                            <div className="foot-c-info">Downloads available in PDF, Word, RTF, and plain text formatting.</div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="side-feature-list-item">
                                            <img src={checkright} className="check-mark-icon" alt="" />
                                            <div className="foot-c-info">Unlimited sharing over email and social media.</div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="side-feature-list-item">
                                            <img src={checkright} className="check-mark-icon" alt="" />
                                            <div className="foot-c-info">24/7/365 access to your resume through your resume.com account.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="about-us-area section-padding-50 clearfix">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-12 col-lg-6">
                                <div className="who-we-contant">
                                    <div className="dream-dots">
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                    </div>
                                    <h4 className="bold">We Deliver The Best</h4>
                                    <div className="list-wrap align-items-center">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="side-feature-list-item">
                                                    <img src={checkright} className="check-mark-icon" alt="" />
                                                    <div className="foot-c-info">Proven CV Templates to increase Hiring Chance</div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="side-feature-list-item">
                                                    <img src={checkright} className="check-mark-icon" alt="" />
                                                    <div className="foot-c-info">Creative and Clean Templates Design</div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="side-feature-list-item">
                                                    <img src={checkright} className="check-mark-icon" alt="" />
                                                    <div className="foot-c-info">Easy and Intuitive Online CV Builder</div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="side-feature-list-item">
                                                    <img src={checkright} className="check-mark-icon" alt="" />
                                                    <div className="foot-c-info">Free to use. Developed by hiring professionals.</div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="side-feature-list-item">
                                                    <img src={checkright} className="check-mark-icon" alt="" />
                                                    <div className="foot-c-info">Fast Easy CV and Resume Formatting</div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="side-feature-list-item">
                                                    <img src={checkright} className="check-mark-icon" alt="" />
                                                    <div className="foot-c-info">Recruiter Approved Phrases.</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="welcome-meter wow fadeInUp mt-s" data-wow-delay="0.3s">
                                    <img src={resumecv} class="center-block" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="clearfix"></div>

                <section className="container section-padding-0-100">
                    <div className="subscribe">
                        <div className="row align-items-center relative">
                            <div className="col-lg-4 col-lg-offset-3 col-md-9 col-xs-12">
                                <img src={custmoricon} alt="" className="custom" />
                            </div>
                            <div className="col-lg-5 col-lg-offset-3 col-md-9 col-xs-12">
                                <h2 className="bold mb-0">Do you Need a Complete Custom CV Template?</h2>
                            </div>
                            <div className="col-lg-3 col-lg-offset-1 col-md-3 col-sm-12 text-center">
                                <a href="javascript:vioid();" className="button mt-s">Send a Request</a>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="demo section-padding-50 pb-10 ring-bg" id='createtemplate'>
                    <div className="container">
                        <div className="section-heading text-center">
                            <div className="dream-dots justify-content-center">
                                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                            </div>
                            <h2 className="bold">Our Creative Templates</h2>
                            <p>Pick a resume template, fill it out, and format. Create a professional resume in a few clicks. Just choose one of 18+ resume templates below, add ready-made content, download, and get the job.</p>
                        </div>

                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner pb-30">
                                <div class="carousel-item active">

                                    <div className="col">
                                        <div className="demo-item">
                                            <Link href=""><img src={resume01} alt="demo" className="img-responsive" /></Link>
                                            <div className="preview-btn-wrapper text-center">
                                                <a href={constant.component.TemplatePreview.url} className="preview-demo">See template <i className="fa fa-long-arrow-right"></i></a>
                                                <a href={candidateID ? constant.component.updateTemplate01.url : constant.component.TemplateEdit.url} className="preview-demo v2" style={{ padding: "15px 10px" }}>Use template <i className="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="demo-item">
                                            <a href=""><img src={resume02} alt="demo" className="img-responsive" /></a>
                                            <div className="preview-btn-wrapper text-center">
                                                <a href={constant.component.TemplatePreview01.url} className="preview-demo">See template <i className="fa fa-long-arrow-right"></i></a>
                                                <a href={candidateID ? constant.component.updateTemplate02.url : constant.component.TemplateEdit01.url} className="preview-demo v2" style={{ padding: "15px 10px" }}>Use template <i className="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="demo-item">
                                            <a href=""><img src={resume03} alt="demo" className="img-responsive" /></a>
                                            <div className="preview-btn-wrapper text-center">
                                                <a href={constant.component.TemplatePreview02.url} className="preview-demo">See template <i className="fa fa-long-arrow-right"></i></a>
                                                <a href={candidateID ? constant.component.updateTemplate03.url : constant.component.TemplateEdit02.url} className="preview-demo v2" style={{ padding: "15px 10px" }}>Use template <i className="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="carousel-item">
                                    <div className="row">
                                        <div className="col">
                                            <div className="demo-item">
                                                <Link href=""><img src={resume01} alt="demo" className="img-responsive" /></Link>
                                                <div className="preview-btn-wrapper text-center">
                                                    <a href={constant.component.TemplatePreview.url} className="preview-demo">See template <i className="fa fa-long-arrow-right"></i></a>
                                                    <a href={candidateID ? constant.component.updateTemplate01.url : constant.component.TemplateEdit.url} className="preview-demo v2" style={{ padding: "15px 10px" }}>Use template <i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="demo-item">
                                                <a href=""><img src={resume02} alt="demo" className="img-responsive" /></a>
                                                <div className="preview-btn-wrapper text-center">
                                                    <a href={constant.component.TemplatePreview01.url} className="preview-demo">See template <i className="fa fa-long-arrow-right"></i></a>
                                                    <a href={candidateID ? constant.component.updateTemplate02.url : constant.component.TemplateEdit01.url} className="preview-demo v2" style={{ padding: "15px 10px" }}>Use template <i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="demo-item">
                                                <a href=""><img src={resume03} alt="demo" className="img-responsive" /></a>
                                                <div className="preview-btn-wrapper text-center">
                                                    <a href={constant.component.TemplatePreview02.url} className="preview-demo">See template <i className="fa fa-long-arrow-right"></i></a>
                                                    <a href={candidateID ? constant.component.updateTemplate03.url : constant.component.TemplateEdit02.url} className="preview-demo v2" style={{ padding: "15px 10px" }}>Use template <i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="our_services_area section-padding-100-70" id="services">
                    <div className="container">

                        <div className="section-heading text-center">
                            <div className="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                            </div>
                            <h2 className="wow fadeInUp" data-wow-delay="0.3s">Our Main Features</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.4s">Start building your resume today, land your dream job tomorrow</p>
                        </div>


                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.2s">

                                    <div className="service_icon">
                                        <img src={servicepic01} alt="" />
                                    </div>
                                    <h6>Proven CV Templates to increase<br />Hiring Chance</h6>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">

                                <div className="service_single_content text-center mb-100 wow wow fadeInUp" data-wow-delay="0.3s">

                                    <div className="service_icon">
                                        <img src={servicepic02} alt="" />
                                    </div>
                                    <h6>Creative, Modern and Clean<br />Templates Design</h6>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">

                                <div className="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.4s">

                                    <div className="service_icon">
                                        <img src={servicepic03} alt="" />
                                    </div>
                                    <h6>Easy and Intuitive Online CV<br />and Resume Builder </h6>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">

                                <div className="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.5s">

                                    <div className="service_icon">
                                        <img src={servicepic04} alt="" />
                                    </div>
                                    <h6>It's Fast and Easy to Use. Download<br />with a single click. Land that dream job.</h6>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">

                                <div className="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.6s">

                                    <div className="service_icon">
                                        <img src={servicepic05} alt="" />
                                    </div>
                                    <h6>Recruiter Approved Phrases with<br />Module Notification</h6>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">

                                <div className="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.7s">

                                    <div className="service_icon">
                                        <img src={servicepic06} alt="" />
                                    </div>
                                    <h6>Fast Easy CV and Resume<br />Formatting</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="clients_testimonials_area section-padding-0-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading text-center">
                                    <div className="dream-dots justify-content-center">
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                    </div>
                                    <h2>Your Success, Our Inspiration</h2>
                                    <p>Don't just take it from us, let our users do the talking!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">

                                <div className="single-testimonial text-center">
                                    <div className="icon_wrapper">
                                        <i className="fa fa-quote-right"></i>
                                    </div>

                                    <div className="testimonial_image">
                                        <img src={testimonal01} alt="" />
                                    </div>

                                    <div className="testimonial-description">
                                        <div className="testimonial_text">
                                            <p>Excellent service and many templates are available at Rozgar Create CV. very user <br />friendly to write and edit resumes. great experience. I liked it. Highly recommended to every professional.
                                                <br /><br /></p>
                                        </div>


                                        <div className="admin_text">
                                            <h5>Ajay Mehra</h5>
                                            <p>Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">

                                <div className="single-testimonial text-center">
                                    <div className="icon_wrapper">
                                        <i className="fa fa-quote-right"></i>
                                    </div>

                                    <div className="testimonial_image">
                                        <img src={testimonal01} alt="" />
                                    </div>

                                    <div className="testimonial-description">
                                        <div className="testimonial_text">
                                            <p>It was a great, interactive and easy to use tool. Helped me a lot with my CV to easily create and download. Also i became a member on rozgar.com which is amazing and getting lots of jobs to apply.... great integrated online portal with all at one place.</p>
                                        </div>

                                        <div className="admin_text">
                                            <h5>Suchi Gupta</h5>
                                            <p>HR Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="single-testimonial text-center">
                                    <div className="icon_wrapper">
                                        <i className="fa fa-quote-right"></i>
                                    </div>

                                    <div className="testimonial_image">
                                        <img src={testimonal01} alt="" />
                                    </div>
                                    <div className="testimonial-description">
                                        <div className="testimonial_text">
                                            <p>There are extremely helpful articles and extremely naive sites also for resume and Curriculum Vitae building,<br /> but Rozgar was the MOON shining among the STARS so I chose it. Thank you for helping me out.</p>
                                        </div>
                                        <div className="admin_text">
                                            <h5>Puneet Srivastava</h5>
                                            <p>Sales Manager</p>
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
