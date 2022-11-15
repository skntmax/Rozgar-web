import { display } from '@mui/system';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import moment from 'moment';
import React, { Component } from 'react'
import { NavItem } from 'react-bootstrap';
import ReactToPrint from 'react-to-print'
import pic01 from '../../../../src/assets/img/test-img/1.jpg'
import emailIcon from '../../../assets/img/test-img/email.png'
import mobileIcon from '../../../assets/img/test-img/mobile-black01.png'
import locationIcon from '../../../assets/img/test-img/location.png'
import linkedIcon from '../../../assets/img/test-img/linkedin.png'
import instagramIcon from '../../../assets/img/test-img/instagram.png'
import facebookIcon from '../../../assets/img/test-img/facebook.png'
import twitterIcon from '../../../assets/img/test-img/twitter.png'
import globeIcon from '../../../assets/img/test-img/globe.png'
import gitIcon from '../../../assets/img/test-img/git.png'

const ref = React.createRef();
export default class ResumeViewThree extends Component {

	constructor(props) {
		super(props)
		this.state = {

		}
	}

	printPDF2 = () => {

		window.html2canvas = html2canvas;
		var doc = new jsPDF({
			orientation: "p",
			unit: "px",
			format: "a4",
		});

		var content = document.getElementById("resume3");
		const width = doc.internal.pageSize.getWidth();
		doc.html(content, {
			x: 0,
			y: 10,
			width: width,
			autoPaging: 'text',
			windowWidth: 794,
			margin: [15, 0, 20, 0],
			html2canvas: { scale: 0.57 },
		})
			.then(() => {
				doc.save('Resume.pdf');
			});


	}

	componentDidMount() {

	}


	render() {
		const detail = this.props.candidateLists
		console.log(this.props.candidateLists, "details")

		return (

			<React.Fragment>

				<div class="main-wrapper03" style={{ paddingTop: "90px" }} >
					{/* <ReactToPrint
						trigger={() => {
							return <button style={{ display: "block", margin: "15px auto", padding: "12px", borderRadius: "5px", color: "#fff", backgroundColor: "red", fontSize: "14px", fontWeight: "500" }}>Download Resume</button>
						}}
						content={() => this.componentRef}

					/> */}
					<button style={{ display: "block", margin: "10px auto", padding: "12px", borderRadius: "5px", color: "#fff", backgroundColor: "red", fontSize: "14px", fontWeight: "500" }} onClick={() => { this.printPDF2() }}>Download Resume</button>
					<div class="container px-3 px-lg-5 shadow-lg">
						<article class="resume-wrapper mx-auto theme-bg-light px-5 pt-5 pb-0" ref={el => (this.componentRef = el)}
							id={'resume3'}
						>
							<div class="resume-header03">
								<div class="row align-items-center">
									<div class="resume-title col-12 col-md-6 col-lg-8 col-xl-9 col-sm-8 pdftemp3width75">
										<h2 class="resume-name mb-0 text-uppercase font-weight-600" >{detail.CANDIDATE_NAME}</h2>
										<div class="resume-tagline-title mb-3 mb-md-0" style={{ textTransform: "capitalize" }}>{detail.RESUME_HEADLINE}</div>
									</div>
									<div class="resume-contact col-12 col-md-6 col-lg-4 col-xl-3 col-sm-4 pdftemp3width25">
										<ul class="list-unstyled mb-0">
											<li class="mb-0">
												<img src={mobileIcon} alt="" style={{ width: "20px" }} />
												{/* <img
													width={20}
													height={40}
													className="mx-1"
													style={{ backgroundColor: "white", borderRadius: "2px", }}
													src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAnUlEQVRYhe2XSwqDQBAFCxfeSXMBc7CoOVfwIuPnGOqmh0AgEz8NIeEV9GJgXnfRqxkQn8mBOzABy8Yagcayp2l3DH6t2kNgtGaFnfvEwGB3Sp6bOE1sHrm+kQhAlci5CbjmsgONXZGABCQgAQlIQAIS+HmBDnh8U2DG6eGZIj7Lyx2Zi2UGD4GG4x+Tm4dAbhJxE1tqsOEuX7P/ZgUYulngFNB/ZAAAAABJRU5ErkJggg=="
												/> */}
												<a class="resume-link" href="tel:#">{detail.PHONENO}</a></li>
											<li class="mb-0">
												<img src={emailIcon} alt="" style={{ width: "16px" }} className="mr-1" />
												{/* <img
													width={20}
													height={30}
													style={{ backgroundColor: "white", borderRadius: "2px", padding: "0 1px 0 1px" }}
													className="mx-1"
													src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABYElEQVRIie3VPUtcQRTG8Z8riIEtRMWAEYksgmxhZWVSpUwRsQpW2/kV0tqIa2GRLr58Ansbv4QgIRAIgYAJpDCQIgS38FrMuXrZF3fZ7IYEfOAwcO65858zM2cOD/ofNIZdfEM2YPuKejDUhwBotrqgZlgd3Cbd6nmeWQmz4bwaAuh3jLOlgvMaB1geAGAJexgtOvN9hCmc4BhP+wA8wT5OMdM8fxEEI3gjpf0WEz0AytjCL+ngi5l0BOV6iR+4DPCjNjFj2MR3/MR6m5iuIKjgfXz/ghpKYbXwZRFT6TBHT6BqrLYhXZYM52FZ+BoRU+0XtCjV2Gepxp7hQyH+E15gBR/vgd0LquACR9JB5xrHdth4wV+O2AutW9gRNI8zbLRZXTetx78L3UBzOIyxXz3GO3d12AKaxGvpRv2pRqTymC6C8kf11QAAzVpz1y7+SpvYIVV3vZDZ0Brfg/5t3QCcNMMnr4bWpwAAAABJRU5ErkJggg=="
												/> */}
												<a class="resume-link" href="mailto:#">{detail.EMAIL_ID}</a></li>
											{/* <li class="mb-0"><i class="fa fa-globe fa-fw fa-lg me-2"></i><a class="resume-link" href="#">www.yourwebsite.com</a></li> */}
											<li class="mb-0" style={{ textTransform: "capitalize" }}>
												<img src={locationIcon} alt="" style={{ width: "20px" }} />
												{detail.PERMANENT_ADDRESS}</li>
										</ul>
									</div>
								</div>

							</div>
							<hr />
							<div class="resume-intro py-0">
								<div class="row align-items-center">
									<div class="col-12 col-md-3 col-xl-2 col-sm-4 pdftemp3width25" >
										{detail && detail.PROFILE_IMAGE == null ?
											<img class="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto" src={pic01} alt="image" /> :
											<img class="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto" src={`${process.env.REACT_APP_BASE_URL}/candidate/pic/${detail.CANDIDATE_ID}/${detail.PROFILE_IMAGE}`} alt="image" style={{ width: "100px" }} />
										}
									</div>
									<div class="col text-start col-sm-8 pdftemp3width75">
										<p class="mb-0" style={{ textTransform: "capitalize" }}>{detail.PROFILE_SUMMARY}</p>
									</div>
								</div>
							</div>
							<hr />
							<div class="resume-body">
								<div class="row">
									<div class="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5 col-sm-8 pdftemp3width75">
										<section class="work-section p-2">
											<h3 class="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
											{
												detail.Experience && detail.Experience.map((item) => {
													return (
														<>
															<div class="item mb-3">
																<div class="item-heading row align-items-center mb-2">
																	<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0" style={{ textTransform: "capitalize" }}>{item.CURRENT_DESIGNATION}</h4>
																	<div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end" style={{ textTransform: "capitalize" }}>{item.CURRENT_COMPANY} | {item.JOINING_DATE_YEAR} - {item.IS_THIS_YOUR_CURRENT_COMPANY == "N" ? item.WORKING_TILL_DATE_YEAR : 'Present'}</div>

																</div>
																<div class="item-content" style={{ textTransform: "capitalize" }}>
																	{item.JOB_PROFILE}
																	{/* <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
																	<ul class="resume-list">
																		<li>Lorem ipsum dolor sit amet, consectetuer.</li>
																		<li>Aenean commodo ligula eget dolor.</li>
																		<li>Etiam ultricies nisi vel augue.</li>
																	</ul> */}
																</div>
															</div>
														</>
													)
												})
											}

											{/* <div class="item mb-3">
												<div class="item-heading row align-items-center mb-2">
													<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Senior Software Engineer</h4>
													<div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Google | 2019 - Present</div>

												</div>
												<div class="item-content">
													<p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
													<ul class="resume-list">
														<li>Lorem ipsum dolor sit amet, consectetuer.</li>
														<li>Aenean commodo ligula eget dolor.</li>
														<li>Etiam ultricies nisi vel augue.</li>
													</ul>
												</div>
											</div>
											<div class="item mb-3">
												<div class="item-heading row align-items-center mb-2">
													<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Lead Software Developer</h4>
													<div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Apple | 2016 - 2019</div>

												</div>
												<div class="item-content">
													<p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
													<ul class="resume-list">
														<li>Lorem ipsum dolor sit amet, consectetuer.</li>
														<li>Aenean commodo ligula eget dolor.</li>
													</ul>
												</div>
											</div>
											<div class="item mb-3">
												<div class="item-heading row align-items-center mb-2">
													<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Senior Software Developer</h4>
													<div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Dropbox | 2014 - 2016</div>

												</div>
												<div class="item-content">
													<p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
												</div>
											</div> */}
											{/* <div class="item">
												<div class="item-heading row align-items-center mb-2">
													<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Senior Developer</h4>
													<div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Uber | 2013 - 2014</div>

												</div>
												<div class="item-content">
													<p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus. </p>
												</div>
											</div>
											<div class="item">
												<div class="item-heading row align-items-center mb-2">
													<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Backend Developer</h4>
													<div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Amazon | 2014 - 2016</div>

												</div>
												<div class="item-content">
													<p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
												</div>
											</div>
											<div class="item">
												<div class="item-heading row align-items-center mb-2">
													<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Frontend Developer</h4>
													<div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Startup | 2013 - 2014</div>

												</div>
												<div class="item-content">
													<p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus. </p>
												</div>
											</div> */}

										</section>


										<section class="project-section p-2">
											<h3 class="text-uppercase resume-section-heading mb-4">Projects</h3>
											{
												detail.Projects && detail.Projects.map((item) => {
													return (
														<>
															<div class="item mb-3">
																<div class="item-heading row align-items-center mb-2">
																	<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0" style={{ textTransform: "capitalize" }}>{item.PROJECT_TITLE}</h4>
																</div>
																<div class="item-content" style={{ textTransform: "capitalize" }}>
																	<p>{item.PROJECT_DETAILS}</p>
																</div>
															</div>
														</>
													)
												})
											}

											{/* <div class="item mb-3">
												<div class="item-heading row align-items-center mb-2">
													<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project Lorem Ipsum</h4>
													<div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Open Source</div>

												</div>
												<div class="item-content">
													<p>You can use this section for your side projects. You can <a href="#" class="theme-link">provide a project link here</a> as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>


												</div>
											</div>
											<div class="item">
												<div class="item-heading row align-items-center mb-2">
													<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project Sed Fringilla</h4>
													<div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Open Source</div>

												</div>
												<div class="item-content">
													<p>You can use this section for your side projects. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

												</div>
											</div>
											<div class="item">
												<div class="item-heading row align-items-center mb-2">
													<h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project Praesent </h4>
													<div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Open Source</div>

												</div>
												<div class="item-content">
													<p>You can use this section for your side projects. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

												</div>
											</div> */}
										</section>
									</div>
									<aside class="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4 col-sm-4 pdftemp3width25" style={{ borderLeft: "1px solid rgb(0 0 0 / 10%)" }}>

										<section class="skills-section py-3">
											<h3 class="text-uppercase resume-section-heading mb-4">Skills</h3>
											<div class="item">
												{/* <h4 class="item-title">Technical</h4> */}
												<ul class="list-unstyled resume-skills-list">
													{
														detail.Skills && detail.Skills.map((item) => {
															return (
																<>
																	<li class="mb-0" style={{ textTransform: "capitalize" }}>{item.SKILL}</li>
																</>
															)
														})
													}


													{/* <li class="mb-0">JavaScript/Angular/React/Vue</li>
													<li class="mb-0">Python/Ruby/PHP</li>
													<li class="mb-0">Node.js/ASP.NET</li>
													<li class="mb-0">PostgreSQL/MySQL</li>
													<li class="mb-0">Object-oriented design</li>
													<li class="mb-0">Design and implement database structures</li>
													<li>Lead and deliver complex software systems</li> */}
												</ul>
											</div>
											{/* <div class="item">
												<h4 class="item-title">Professional</h4>
												<ul class="list-unstyled resume-skills-list">
													<li class="mb-0">Effective communication</li>
													<li class="mb-0">Team player</li>
													<li class="mb-0">Strong problem solver</li>
													<li>Good time management</li>
												</ul>
											</div> */}
										</section>
										<section class="education-section py-3">
											<h3 class="text-uppercase resume-section-heading mb-4">Education</h3>
											<ul class="list-unstyled resume-education-list">
												{detail.Education && detail.Education.map((item) => {
													return (
														<>
															<li class="mb-1">
																<div class="resume-degree font-weight-bold">{item.COURSE_STREAM} in {item.SPECIALIZATION}</div>
																<div class="resume-degree-org text-muted">{item.UNIVERSITY_INSTITUTE}</div>
																<div class="resume-degree-time text-muted">{item.START_YEAR} - {item.PASSING_OUT_YEAR}</div>
															</li>
														</>
													)
												})
												}
												{/* <li class="mb-1">
													<div class="resume-degree font-weight-bold">MSc in Computer Science</div>
													<div class="resume-degree-org text-muted">University College London</div>
													<div class="resume-degree-time text-muted">2010 - 2011</div>
												</li>
												<li>
													<div class="resume-degree font-weight-bold">BSc Maths and Physics</div>
													<div class="resume-degree-org text-muted">Imperial College London</div>
													<div class="resume-degree-time text-muted">2007 - 2010</div>
												</li> */}
											</ul>
										</section>
										{/* <section class="education-section py-3">
											<h3 class="text-uppercase resume-section-heading mb-4">Awards</h3>
											<ul class="list-unstyled resume-awards-list">
												<li class="mb-1">
													<div class="font-weight-bold">Award Lorem Ipsum</div>
													<div class="text-muted">Microsoft lorem ipsum (2019)</div>
												</li>
												<li>
													<div class="font-weight-bold">Award Donec Sodales</div>
													<div class="text-muted">Oracle Aenean (2017)</div>
												</li>
											</ul>
										</section> */}

										<section class="skills-section py-3">
											<h3 class="text-uppercase resume-section-heading mb-4">Languages</h3>
											<ul class="list-unstyled resume-lang-list">
												{
													detail.Language && detail.Language.map((item) => {
														return (
															<>
																<li class="mb-0">{item.LANGUAGE} <span class="text-muted">({item.PROFICIENCY})</span></li>
															</>
														)
													})
												}

												{/* <li class="mb-0">English <span class="text-muted">(Native)</span></li>
												<li>Spanish <span class="text-muted">(Professional)</span></li> */}
											</ul>
										</section>


										<section class="skills-section py-3">
											<h3 class="text-uppercase resume-section-heading mb-4">Interests</h3>
											<ul class="list-unstyled resume-interests-list mb-0">
												{
													detail.Interest && detail.Interest.map((item) => {
														return (
															<>
																<li class="mb-0">{item.INTEREST}</li>
															</>
														)
													})
												}
												{/* <li class="mb-0">Climbing</li>
												<li class="mb-0">Snowboarding</li>
												<li class="mb-0">Photography</li>
												<li>Travelling</li> */}
											</ul>
										</section>

									</aside>
								</div>
							</div>
							<hr />
							<div class="resume-footer text-center">
								<ul class="resume-social-list list-inline mx-auto mb-0">
									{
										detail.OnlineProfile && detail.OnlineProfile.map((item) => {
											if (item.SOCIAL_PROFILE == "L") {
												return (
													<li class="list-inline-item mb-lg-0 me-3"><a class="resume-link" href={item.URL}>
														<img src={linkedIcon} alt="" style={{ width: "20px" }} />
														{/* <img
															width={20}
															height={40}
															style={{ backgroundColor: "white", borderRadius: "2px" }}
															className="mx-2"
															src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABz0lEQVRoge2avU7DMBRGTxFC0ImxLWLgGeiCxMjWbgwMMLIhtlIeoEgIiTeA12AsiBnYmBgYEEwwUX4XypAbUdImcZy4NshHurLkutffl+Q2TW/B4/Ho0gS6wAvQtxw90dLIamLPAfFx0VE10ZQ3fAAtoJr1KBigCuwQaOqjeGZOZXHLnC5t2gTauiqLe7K4YlKRJhUCbc8qi8Nr0VVG6puwIMQI3ohr2DCyABwC1wQ321fgDjgHDoBloFTERiaLfRN4I/2md1OEPlNG1oAviWOgDpSBKYKP1RWCM5W2v1Ujs8CT5N3Oub9VI1uS86yA/a0aOZGc65H5MrAP3DJcO7n1mTByLzkXIvNH/BbvvJF3yTkdmX+Q+SVgRjGXVSNxOXX28t+1dFG53ketDWO+KAFF5UkyFFfoj1n1jePSKg1E0mslYFXmL7Nu4lqNLMr4543UZbwqIpkLNZJU6GO/j+gaSSr0WH2TeZSmMFjcaQcm94OUazWijTfiGt6Ia3gjruGNuMa/NtKT0YWWW5Q5GYcaPaOMXMi4YUyOPqEmpeeVBj/N0DZQK0BA3l9RasAu8CnrldvUHeKfFWyHcns6pEHQPQ2bozZD+w8DHo8n4Bt69EZ7bl4vtAAAAABJRU5ErkJggg=="
														/> */}
														<span class="d-lg-inline-block text-muted"></span></a></li>
												)

											} else if (item.SOCIAL_PROFILE == "T") {
												return (
													<li class="list-inline-item mb-lg-0 me-3"><a class="resume-link" href={item.URL}>
														<img src={twitterIcon} alt="" style={{ width: "20px" }} />
														{/* <img
															width={20}
															height={40}
															style={{ backgroundColor: "white", borderRadius: "2px" }}
															className="mx-2"
															src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABz0lEQVRoge2avU7DMBRGTxFC0ImxLWLgGeiCxMjWbgwMMLIhtlIeoEgIiTeA12AsiBnYmBgYEEwwUX4XypAbUdImcZy4NshHurLkutffl+Q2TW/B4/Ho0gS6wAvQtxw90dLIamLPAfFx0VE10ZQ3fAAtoJr1KBigCuwQaOqjeGZOZXHLnC5t2gTauiqLe7K4YlKRJhUCbc8qi8Nr0VVG6puwIMQI3ohr2DCyABwC1wQ321fgDjgHDoBloFTERiaLfRN4I/2md1OEPlNG1oAviWOgDpSBKYKP1RWCM5W2v1Ujs8CT5N3Oub9VI1uS86yA/a0aOZGc65H5MrAP3DJcO7n1mTByLzkXIvNH/BbvvJF3yTkdmX+Q+SVgRjGXVSNxOXX28t+1dFG53ketDWO+KAFF5UkyFFfoj1n1jePSKg1E0mslYFXmL7Nu4lqNLMr4543UZbwqIpkLNZJU6GO/j+gaSSr0WH2TeZSmMFjcaQcm94OUazWijTfiGt6Ia3gjruGNuMa/NtKT0YWWW5Q5GYcaPaOMXMi4YUyOPqEmpeeVBj/N0DZQK0BA3l9RasAu8CnrldvUHeKfFWyHcns6pEHQPQ2bozZD+w8DHo8n4Bt69EZ7bl4vtAAAAABJRU5ErkJggg=="
														/> */}
														<span class="d-lg-inline-block text-muted"></span></a></li>
												)

											} else if (item.SOCIAL_PROFILE == "I") {
												return (
													<li class="list-inline-item mb-lg-0 me-3"><a class="resume-link" href={item.URL}>
														<img src={instagramIcon} alt="" style={{ width: "20px" }} />
														{/* <img
															width={20}
															height={20}
															style={{ backgroundColor: "white", borderRadius: "2px" }}
															className="mx-2"
															src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAIHElEQVR4nO2dWY9VRRCAvzGyyaABXF5EYYABArLLJoKigAGCISJofFCi6A8whuVB46MKARKNJj45BGQzviCMJEZliRFZQoKRRdl8AGWRZQARcq8PNQP3Vp++a/dZ5p4v6YTD3Kmq2zWnu091dR1ISUlJSUlJSUlxT11IegYATwHDgUbgUaAHUA90CMmGUrkJtAAXgJPAYeAA8D1wJEK7qmYosBz4E8i2k3YKWNb63RJBHTAT2EX0nee77QRmEN4oUzajgJ+JvqPCbj8BIx30nzM6AyuBW9iNvgx8AywCZiFzSnfiN3+A2NQdsXEWYvMW4Ar273cLWAF0isDePPoB+wg2MgNsBl4gBoY6oDMwF/nDyhD8nfcCfaMycDxwPsCoDLAOGBKVYSHwGLCBYKecA8aGbdA0ZGmojTmELG9rhSnIslj3QwswNSwjxhDsjCbkuaLW6AJ8jtkfV4EJvpX3wxymMsA7vhUngMWYc8tZoMGXws6YE3gGeMOXwgSyENMpv+BpUbMS87ZM7wyTRZj9tMy1klGYzxlrXStpRzRhPqeMcCW8DvMJ/BDQ1ZWCdkg9EojM7bOdroTPxLwFp7gS3o6ZjDmfTHchWAcK17kQWiNsJL/vtlcrcJgSmAEGVys0QfQCNiGxuMvA10iMq1SGYt4lVUUwlithm6sRljB6ERwautD6s1LZon7/w2qM0ptLc6sRljA2YY/ubihDznz1uycqNWiAEnSZ9hG1LZXL2B1yqQw5XTBDTf1sH76rgKCn1fUO4EYZhrRnsmV89jrmkte6Si3kEL1vXPUKIWF8V+Bn35Yp60d1bd2Tv7uAEL2a+LVMI3zQFXgSmISsVhqBB7kTZW4B/gKOAgeRjtiJRF7LZTHyLNFd/f954O0yZem+K2eldpvj5I97jZUIcUAd8kC1Drn9beO6rV0HvmyVUW5CQi9kAr/U2tYDD1fwHQYqm/6oQAbnlJCelQipkjnAfsp3gq3tA54P9RsI9ys7zlYi5IYS0tGVdSXQADTjzhG6bQX6hPZtZHWaq//fSoToLxEW85DhwdaZR4CPgZeQCGoPJFOkA3IXjwBeBj5B5hKbnIvAiyF9JwL0hy+gAt4P0JtF0jubqCx5YBywulVGkOz3qra6NBLnkFUBOrNIuMZFak1/zDBGW1vlQH4xEuWQoDujBXjVg64FyDI47DslMQ6ZF6DrNJIp74sRwJkAvT5jdYlwSAPmBH4aGV580x/TKRfxt/pKhEP00rYFv3eGZiTm8LXFk67YO2ROgA4fc0YxXg+wY7YHPbF3yF4lf6sHHaXyjbJlP+7PfcTaIdOV7JtEmDWOBPt0mtM0xzpi7ZD1SvYXjuVXwhrybXKddxZbh9RjRm1DT98PYAL5Nl0D7nEoP7YOeU7JjcvJ1jokLO5r2CqpPwvtGPpikrreFoENQWQxbZkcthFROETnJe2KwAYbeu879FNgUThE7zz+FoENNrQtUe2SBuJrDonDTqSNB8i3raKdPQuxndSj3IkshpOdPQuxndRTChCFQ66o624R2GDjXnWtbfVOFA45p64ficAGG9oWl3NISUThEP0gODACG2wMUtehP7RG4ZCD6npiBDbY0LbEIVvzNr5WWTrSe9Sh7Gqow8zWdFmNIbbL3q5I4C5X9jiH8ivlCfJtukqNBBdB8nRzZTc5ll8Ja8m3aY1j+bF2SNAGVRiJDTYGYm5QuS4eE2uHAOxR8ps96CgVnUC3jxrbwgXJQtc6FnjQU4yFAXbM8qAn9g4BSWzQE6mzEhQlMBpzgeHrpHEiHNIHSU7L1XOGcOaTRuS0Va7uf4DenvQlwiEgRwK0rjP4rfQ5GtMZWaQ+pC8S4xCQRGet7xqSxOaahZjDVBZ414OuXBLlELAfR2imwkOSioHInnmQjvQ4goWgOyWLPCOsQVJ1ylmO1iFP4Gux1xX2fWe0kUiHgBwJ0BN9bjsGfAq8gswzPZFdx46t/x7V+rPPMGNTegL3OWdoqu7PKLda+2A/7eSibcbfaioIJ1vDcUhGmI2ZlF1N24Ofh75iODkWfUwJibJwwDRkHghaHRVrV5H5J7TCxgHowgG/2z5YqLTGcfJPEzUSTdpnFlkdbUPC4RORjMLBrTY9hFla4wiyufQDkoh3LVyTDfQf83HbBws55DD5VWsGE30Bs2vccU6S0FX4Dts+WGgL94C6Dj3PtR2h6+Hrvi2JRvLHvStIdeuU8uiCeY7RWsCsGKeUoFoq8eeKskr8Fcs60bUFX6vcrppF99n6aoQNId+7GeRlJimlMQyzTGzV/bdTCSynImet8xX5feekTOIMzIettNR4cZ7F7DcnR+TqkFfD5Qo+TG2+TadUumHW6trhUsFIzPB1WgPezmry++oWHkqGrMC8BRe7VtIOWIrZTx/5UNQJM5cqA7zpQ1lCeQtzVbUbj1sXfTHD8hnkNT+1zlJMZ/xNCMU2Hyf4NaSbgPt8K48h3TDLcrSF/ceHZcRUgt9leAR4JiwjYsBUgiufXkGWvaEyFtn5CtoU2kiC3jleAcMwH/pyh6kxURnWgLynL8iwDLIvPh+JeCadLkit4K3YX068m3ALNAfSCXlPn60ubhYZ3pqBJcg++SCkAHKczqi30RGxbRCSEL4EeRtCUCXTtnYTWdrG6vsMx4x71ULbgQxhsWU6EkSLuqN8t+24rzrnlSHIC7BOEH3nuWongA/wWCXI9SkhG/2QVygNR7aGeyPjdD0xG3eB/5A57zxwElnK70cyWKzpOykpKSkpKSkpKXHmf0noxtlo9LfTAAAAAElFTkSuQmCC"
														/> */}
														<span class="d-lg-inline-block text-muted"></span></a></li>
												)

											} else if (item.SOCIAL_PROFILE == "G") {
												return (
													<li class="list-inline-item mb-lg-0 me-3"><a class="resume-link" href={item.URL}>
														<img src={gitIcon} alt="" style={{ width: "20px" }} />
														{/* <img
															width={20}
															height={40}
															style={{ backgroundColor: "white", borderRadius: "2px" }}
															className="mx-2"
															src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVklEQVR4Xn3PgQkAMQhDUXfqTu7kTtkpd5RA8AInfArtQ2iRXFWT2QedAfttj2FsPIOE1eCOlEuoWWjgzYaB/IkeGOrxXhqB+uA9Bfcm0lAZuh+YIeAD+cAqSz4kCMUAAAAASUVORK5CYII="
														/> */}
														<span class="d-lg-inline-block text-muted"></span></a></li>
												)

											}
											else if (item.SOCIAL_PROFILE == "F") {
												return (
													<li class="list-inline-item mb-lg-0 me-3"><a class="resume-link" href={item.URL}>
														<img src={facebookIcon} alt="" style={{ width: "20px" }} />
														{/* <img
															width={20}
															height={40}
															style={{ backgroundColor: "white", borderRadius: "2px" }}
															className="mx-2"
															src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABz0lEQVRoge2avU7DMBRGTxFC0ImxLWLgGeiCxMjWbgwMMLIhtlIeoEgIiTeA12AsiBnYmBgYEEwwUX4XypAbUdImcZy4NshHurLkutffl+Q2TW/B4/Ho0gS6wAvQtxw90dLIamLPAfFx0VE10ZQ3fAAtoJr1KBigCuwQaOqjeGZOZXHLnC5t2gTauiqLe7K4YlKRJhUCbc8qi8Nr0VVG6puwIMQI3ohr2DCyABwC1wQ321fgDjgHDoBloFTERiaLfRN4I/2md1OEPlNG1oAviWOgDpSBKYKP1RWCM5W2v1Ujs8CT5N3Oub9VI1uS86yA/a0aOZGc65H5MrAP3DJcO7n1mTByLzkXIvNH/BbvvJF3yTkdmX+Q+SVgRjGXVSNxOXX28t+1dFG53ketDWO+KAFF5UkyFFfoj1n1jePSKg1E0mslYFXmL7Nu4lqNLMr4543UZbwqIpkLNZJU6GO/j+gaSSr0WH2TeZSmMFjcaQcm94OUazWijTfiGt6Ia3gjruGNuMa/NtKT0YWWW5Q5GYcaPaOMXMi4YUyOPqEmpeeVBj/N0DZQK0BA3l9RasAu8CnrldvUHeKfFWyHcns6pEHQPQ2bozZD+w8DHo8n4Bt69EZ7bl4vtAAAAABJRU5ErkJggg=="
														/> */}
														<span class="d-lg-inline-block text-muted"></span></a></li>
												)

											}
											else {
												return (
													<li class="list-inline-item mb-lg-0 me-3"><a class="resume-link" href={item.URL}>
														<img src={globeIcon} alt="" style={{ width: "20px" }} />
														{/* <img
															width={20}
															height={40}
															style={{ backgroundColor: "white", borderRadius: "2px" }}
															className="mx-2"
															src="data:image/png;base64,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"
														/> */}
														<span class="d-lg-inline-block text-muted"></span></a></li>
												)

											}
										}
										)
									}
									{/* <li class="list-inline-item mb-lg-0 me-3"><a class="resume-link" href="#"><i class="fab fa-github-square fa-2x me-2" data-fa-transform="down-4"></i><span class="d-none d-lg-inline-block text-muted">github.com/username</span></a></li>
									<li class="list-inline-item mb-lg-0 me-3"><a class="resume-link" href="#"><i class="fab fa-linkedin fa-2x me-2" data-fa-transform="down-4"></i><span class="d-none d-lg-inline-block text-muted">linkedin.com/in/username</span></a></li>
									<li class="list-inline-item mb-lg-0 me-lg-3"><a class="resume-link" href="#"><i class="fab fa-twitter-square fa-2x me-2" data-fa-transform="down-4"></i><span class="d-none d-lg-inline-block text-muted">@twittername</span></a></li> */}
								</ul>
							</div>
						</article>

					</div>

				</div >
			</React.Fragment >
		)
	}
}
