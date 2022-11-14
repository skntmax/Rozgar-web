import moment from 'moment';
import React, { Component } from 'react'
import ReactToPrint from 'react-to-print';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const ref = React.createRef();
export default class ResumeViewOne extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    printPDF = () => {

        const domElement = document.getElementById("resume1");
        console.log(domElement);
        html2canvas(domElement
            // 	{
            //   onclone: document => {
            // 	document.getElementById("print").style.visibility = "hidden";
            //   }
            // }
        ).then(canvas => {
            var pageData = canvas.toDataURL('image/png');
            /*
      Here are the numbers (paper width and height) that I found to work. 
      It still creates a little overlap part between the pages, but good enough for me.
      if you can find an official number from jsPDF, use them.
      */
            var contentWidth = canvas.width;
            var contentHeight = canvas.height;
            var pageHeight = contentWidth / 592.28 * 841.89;
            var leftHeight = contentHeight;
            var position = 0;
            var imgWidth = 595.28;
            var imgHeight = 582.28 / contentWidth * contentHeight;
            var pageData = canvas.toDataURL('image/jpeg', 1.0);
            var pdf = new jsPDF('', 'pt', 'a4');
            if (leftHeight < pageHeight) {
                pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
            } else {
                while (leftHeight > 0) {
                    pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                    leftHeight -= pageHeight;
                    position -= 841.89;
                    //Avoid adding blank pages
                    if (leftHeight > 0) {
                        pdf.addPage();
                    }
                }
            }
            pdf.save('download.pdf');
        })
    };

    render() {
        const { details } = this.props
        return (
            <React.Fragment>
                <article className="resume-wrapper text-center position-relative" style={{ paddingTop: "90px" }}>
                    {/* <ReactToPrint
						trigger={() => {
							return <button style={{ display: "block", margin: "10px auto", padding: "12px", borderRadius: "5px", color: "#fff", backgroundColor: "red", fontSize: "14px", fontWeight: "500" }}>Download Resume</button>
						}}
						content={() => this.componentRef}

					/> */}
                    <button style={{ display: "block", margin: "10px auto", padding: "12px", borderRadius: "5px", color: "#fff", backgroundColor: "red", fontSize: "14px", fontWeight: "500" }} onClick={() => { this.printPDF() }}>Download Resume</button>
                    <div>
                        <div className="resume-wrapper-inner mx-auto text-start bg-white"
                            // ref={el => (this.componentRef = el)}
                            id={'resume1'}
                        >
                            <div className="resume-header pt-md-0" >
                                <div class="row">
                                    {
                                        <div class="col-block resume-picture-holder">
                                            {/* <img class="picture" src={details.PROFILE_PICTURE} alt="" /> */}
                                        </div>
                                    }
                                    <div class="col">
                                        <div className="row p-4" style={{ justifyContent: "space-around" }}>
                                            <div class="primary-info col-auto">
                                                <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">{details.FIRST_NAME} {details.LAST_NAME}</h1>
                                                <div class="title mb-2" style={{ textTransform: "capitalize" }}>{details.JOB_TITLE}</div>
                                                <ul class="list-unstyled">
                                                    <li class="mb-0"><a class="text-link" href="#"><i class="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>{details.EMAIL}</a></li>
                                                    <li><a class="text-link" href="#"><i class="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>{details.PHONE}</a></li>
                                                </ul>
                                            </div>
                                            <div class="secondary-info col-auto mt-2 pr-4">
                                                <ul class="resume-social list-unstyled">
                                                    {
                                                        details.SOCIAL[0].SOCIAL_LINK && details.SOCIAL.map((item) => {
                                                            if (item.SOCIAL_LINK.includes('linkedin')) {
                                                                return (
                                                                    <li class="mb-2">
                                                                        <a class="text-link" href="#">
                                                                            <span class="fa-container text-center me-2">
                                                                                <i class="fab fa-linkedin-in fa-fw"></i>
                                                                            </span>
                                                                            {item.SOCIAL_LINK}</a>
                                                                    </li>
                                                                )

                                                            } else if (item.SOCIAL_LINK.includes('twitter')) {
                                                                return (
                                                                    <li class="mb-2">
                                                                        <a class="text-link" href="#">
                                                                            <span class="fa-container text-center me-2">
                                                                                <i class="fab fa-twitter  fa-fw"></i>
                                                                            </span>
                                                                            {item.SOCIAL_LINK}</a>
                                                                    </li>
                                                                )

                                                            } else if (item.SOCIAL_LINK.includes('instagram')) {
                                                                return (
                                                                    <li class="mb-2">
                                                                        <a class="text-link" href="#">
                                                                            <span class="fa-container text-center me-2">
                                                                                <i class="fab fa-instagram fa-fw"></i>
                                                                            </span>
                                                                            {item.SOCIAL_LINK}</a>
                                                                    </li>
                                                                )

                                                            } else if (item.SOCIAL_LINK.includes('git')) {
                                                                return (
                                                                    <li class="mb-2">
                                                                        <a class="text-link" href="#">
                                                                            <span class="fa-container text-center me-2">
                                                                                <i class="fab fa-github-alt fa-fw"></i>
                                                                            </span>
                                                                            {item.SOCIAL_LINK}</a>
                                                                    </li>
                                                                )

                                                            }
                                                            else if (item.SOCIAL_LINK.includes('facebook')) {
                                                                return (
                                                                    <li class="mb-2">
                                                                        <a class="text-link" href="#">
                                                                            <span class="fa-container text-center me-2">
                                                                                <i class="fa fa-facebook fa-fw"></i>
                                                                            </span>
                                                                            {item.SOCIAL_LINK}</a>
                                                                    </li>
                                                                )

                                                            }
                                                            else {
                                                                return (
                                                                    <li class="mb-2">
                                                                        <a class="text-link" href="#">
                                                                            <span class="fa-container text-center me-2">
                                                                                <i class="fas fa-globe fa-fw"></i>
                                                                            </span>
                                                                            {item.SOCIAL_LINK}</a>
                                                                    </li>
                                                                )

                                                            }
                                                        }
                                                            // return (
                                                            // 	<>
                                                            // 		<li class="mb-2">
                                                            // 			<a class="text-link" href="#">
                                                            // 				<span class="fa-container text-center me-2">
                                                            // 					<i class="fab fa-linkedin-in fa-fw"></i>
                                                            // 				</span>
                                                            // 				{item.SOCIAL_LINK}</a>
                                                            // 		</li>
                                                            // 	</>
                                                            // )
                                                        )
                                                    }
                                                    {/* <li class="mb-2"><a class="text-link" href="#"><span class="fa-container text-center me-2"><i class="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/stevedoe</a></li>
												<li class="mb-2"><a class="text-link" href="#"><span class="fa-container text-center me-2"><i class="fab fa-github-alt fa-fw"></i></span>github.com/username</a></li>
												<li class="mb-2"><a class="text-link" href="#"><span class="fa-container text-center me-2"><i class="fab fa-codepen fa-fw"></i></span>codepen.io/username/</a></li>
												<li><a class="text-link" href="#"><span class="fa-container text-center me-2"><i class="fas fa-globe"></i></span>yourwebsite.com</a></li> */}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="resume-body p-5">
                                <section className="resume-section summary-section pb-3">
                                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
                                    <div className="resume-section-content">
                                        <p className="mb-0" style={{ textTransform: "capitalize" }}>{details.BIO}</p>
                                    </div>
                                </section>
                                <div className="row">
                                    <div className="col-lg-9 col-sm-9 pdfwidth70" >
                                        {details.EXPERIENCE[0].EXPERIENCE_TITLE && <section className="resume-section experience-section mb-5">
                                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                                            <div className="resume-section-content">
                                                <div className="resume-timeline position-relative">
                                                    {
                                                        details.EXPERIENCE.map((item) => {
                                                            return (
                                                                <>
                                                                    <article className="resume-timeline-item position-relative pb-5">

                                                                        <div className="resume-timeline-item-header mb-2">
                                                                            <div className="d-flex flex-column flex-md-row">
                                                                                <h3 className="resume-position-title font-weight-bold mb-1" style={{ textTransform: "capitalize" }}>{item.EXPERIENCE_TITLE}</h3>
                                                                                <div className="resume-company-name ms-auto" style={{ textTransform: "capitalize" }}>{item.EXPERIENCE_COMPANY}</div>
                                                                            </div>
                                                                            <div className="resume-position-time">{moment(item.EXPERIENCE_FROM_YEAR).format('MMM YYYY')} - {item.IS_CURRENT_COMPANY == 'Y' ? 'Present' : moment(item.EXPERIENCE_TO_YEAR).format('MMM YYYY')}</div>
                                                                        </div>
                                                                        <div className="resume-timeline-item-desc">
                                                                            <p style={{ textTransform: "capitalize" }}>{item.EXPERIENCE_DESCRIPTION}</p>
                                                                        </div>

                                                                    </article>
                                                                </>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </section>}

                                        {details.PROJECT[0].PROJECT_NAME && <section className="resume-section experience-section mb-5">
                                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Project</h2>
                                            <div className="resume-section-content">
                                                <div className="resume-timeline position-relative">
                                                    {
                                                        details.PROJECT.map((item) => {
                                                            return (
                                                                <>
                                                                    <article className="resume-timeline-item position-relative pb-5">

                                                                        <div className="resume-timeline-item-header mb-2">
                                                                            <div className="d-flex flex-column flex-md-row">
                                                                                <h3 className="resume-position-title font-weight-bold mb-1" style={{ textTransform: "capitalize" }}>{item.PROJECT_NAME}</h3>

                                                                            </div>

                                                                            <div className="resume-timeline-item-desc">
                                                                                <p style={{ textTransform: "capitalize" }}>{item.PROJECT_DESCRIPTION}</p>
                                                                            </div>
                                                                        </div>

                                                                    </article>
                                                                </>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </section>}

                                    </div>
                                    <div className="col-lg-3 col-sm-3 pdfwidth30">
                                        {details.SKILL[0].SKILL_NAME && <section className="resume-section skills-section mb-5">
                                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                                            <div className="resume-section-content">
                                                <div className="resume-skill-item">
                                                    {/* <h4 className="resume-skills-cat font-weight-bold">Frontend</h4> */}
                                                    <ul className="list-unstyled mb-4">
                                                        {
                                                            details.SKILL.map((item) => {
                                                                if (item.SKILL_LEVEL == "Beginner") {
                                                                    return (
                                                                        <li className="mb-2">
                                                                            <div className="resume-skill-name" style={{ textTransform: "capitalize" }}>{item.SKILL_NAME}</div>
                                                                            <div className="progresss resume-progress">
                                                                                <div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '35%' }}></div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                }
                                                                else if (item.SKILL_LEVEL == "Intermidiate") {
                                                                    return (
                                                                        <li className="mb-2">
                                                                            <div className="resume-skill-name" style={{ textTransform: "capitalize" }}>{item.SKILL_NAME}</div>
                                                                            <div className="progresss resume-progress">
                                                                                <div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '75%' }}></div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                }
                                                                else if (item.SKILL_LEVEL == "Proficient") {
                                                                    return (
                                                                        <li className="mb-2">
                                                                            <div className="resume-skill-name" style={{ textTransform: "capitalize" }}>{item.SKILL_NAME}</div>
                                                                            <div className="progresss resume-progress">
                                                                                <div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '98%' }}></div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                }
                                                                // return (
                                                                // 	<>
                                                                // 		<li className="mb-2">
                                                                // 			<div className="resume-skill-name" style={{ textTransform: "capitalize" }}>{item.SKILL_NAME}</div>
                                                                // 			<div className="progresss resume-progress">
                                                                // 				<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '98%' }}></div>
                                                                // 			</div>
                                                                // 		</li>
                                                                // 	</>
                                                                // )
                                                            })
                                                        }
                                                        {/* <li className="mb-2">
														<div className="resume-skill-name">Angular</div>
														<div className="progresss resume-progress">
															<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '98%' }}></div>
														</div>
													</li>
													<li className="mb-2">
														<div className="resume-skill-name">React</div>
														<div className="progresss resume-progress">
															<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '96%' }}></div>
														</div>
													</li>
													<li className="mb-2">
														<div className="resume-skill-name">JavaScript</div>
														<div className="progresss resume-progress">
															<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '90%' }}></div>
														</div>
													</li>

													<li className="mb-2">
														<div className="resume-skill-name">Node.js</div>
														<div className="progresss resume-progress">
															<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '98%' }}></div>
														</div>
													</li>
													<li className="mb-2">
														<div className="resume-skill-name">HTML/CSS/SASS/LESS</div>
														<div className="progresss resume-progress">
															<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '85%' }}></div>
														</div>
													</li> */}
                                                    </ul>
                                                </div>

                                                {/* <div className="resume-skill-item">
												<h4 className="resume-skills-cat font-weight-bold">Backend</h4>
												<ul className="list-unstyled">
													<li className="mb-2">
														<div className="resume-skill-name">Python/Django</div>
														<div className="progresss resume-progress">
															<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '90%' }}></div>
														</div>
													</li>
													<li className="mb-2">
														<div className="resume-skill-name">Ruby/Rails</div>
														<div className="progresss resume-progress">
															<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '80%' }}></div>
														</div>
													</li>
													<li className="mb-2">
														<div className="resume-skill-name">PHP</div>
														<div className="progresss resume-progress">
															<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '98%' }}></div>
														</div>
													</li>
													<li className="mb-2">
														<div className="resume-skill-name">WordPress/Shopify</div>
														<div className="progresss resume-progress">
															<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '98%' }}></div>
														</div>
													</li>
												</ul>
											</div> */}

                                                {/* <div className="resume-skill-item">
												<h4 className="resume-skills-cat font-weight-bold">Others</h4>
												<ul className="list-inline">
													<li className="list-inline-item"><span className="badge badge-light">DevOps</span></li>
													<li className="list-inline-item"><span className="badge badge-light">Code Review</span></li>
													<li className="list-inline-item"><span className="badge badge-light">Git</span></li>
													<li className="list-inline-item"><span className="badge badge-light">Unit Testing</span></li>
													<li className="list-inline-item"><span className="badge badge-light">Wireframing</span></li>
													<li className="list-inline-item"><span className="badge badge-light">Sketch</span></li>
													<li className="list-inline-item"><span className="badge badge-light">Balsamiq</span></li>
													<li className="list-inline-item"><span className="badge badge-light">WordPress</span></li>
													<li className="list-inline-item"><span className="badge badge-light">Shopify</span></li>
												</ul>
											</div> */}
                                            </div>
                                        </section>}
                                        {details.EDUCATION[0].DEGREE && details.EDUCATION[0].FIELD_OF_STUDY && details.EDUCATION[0].SCHOOL && <section className="resume-section education-section pb-4">
                                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                                            <div className="resume-section-content">
                                                <ul className="list-unstyled">
                                                    {
                                                        details.EDUCATION.map((item) => {
                                                            return (
                                                                <>
                                                                    <li className="mb-2">
                                                                        <div className="resume-degree font-weight-bold" style={{ textTransform: "capitalize" }}>{item.DEGREE} in {item.FIELD_OF_STUDY}</div>
                                                                        <div className="resume-degree-org" style={{ textTransform: "capitalize" }}>{item.SCHOOL}</div>
                                                                        <div className="resume-degree-time">{moment(item.EDUCATION_FROM_YEAR).format("MMM YYYY")} - {moment(item.EDUCATION_TO_YEAR).format('MMM YYYY')}</div>
                                                                    </li>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    {/* <li className="mb-2">
													<div className="resume-degree font-weight-bold">MSc in Computer Science</div>
													<div className="resume-degree-org">University College London</div>
													<div className="resume-degree-time">2010 - 2011</div>
												</li>
												<li>
													<div className="resume-degree font-weight-bold">BSc Maths and Physics</div>
													<div className="resume-degree-org">Imperial College London</div>
													<div className="resume-degree-time">2007 - 2010</div>
												</li> */}
                                                </ul>
                                            </div>
                                        </section>}
                                        {details.LANGUAGE[0].LANGUAGE_NAME && details.LANGUAGE[0].LANGUAGE_LEVEL && <section className="resume-section language-section pb-4">
                                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                                            <div className="resume-section-content">
                                                <ul className="list-unstyled resume-lang-list">
                                                    {
                                                        details.LANGUAGE.map((item) => {
                                                            return (
                                                                <>
                                                                    <li className="mb-2"><span className="resume-lang-name font-weight-bold" style={{ textTransform: "capitalize" }}>{item.LANGUAGE_NAME}</span> <small className="text-muted font-weight-normal" >({item.LANGUAGE_LEVEL})</small></li>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    {/* <li className="mb-2"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Native)</small></li>
												<li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">French</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
												<li><span className="resume-lang-name font-weight-bold">Spanish</span> <small className="text-muted font-weight-normal">(Professional)</small></li> */}
                                                </ul>
                                            </div>
                                        </section>}
                                        {details.INTRESTS[0].INTRESTS_NAME && <section className="resume-section interests-section mb-5">
                                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                                            <div className="resume-section-content">
                                                <ul className="list-unstyled">
                                                    {
                                                        details.INTRESTS.map((item) => {
                                                            return (
                                                                <>
                                                                    <li className="mb-1" style={{ textTransform: "capitalize" }}>{item.INTRESTS_NAME}</li>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    {/* <li className="mb-1">Climbing</li>
												<li className="mb-1">Snowboarding</li>
												<li className="mb-1">Cooking</li> */}
                                                </ul>
                                            </div>
                                        </section>}

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </article>
            </React.Fragment >
        )
    }
}
