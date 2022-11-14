import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { Component } from 'react'
import ReactToPrint from 'react-to-print';
import userImage from '../../../assets/img/test-img/1.jpg'
import emailIcon from '../../../assets/img/test-img/email-white.png'
import mobileIcon from '../../../assets/img/test-img/mobile-white01.png'
import locationIcon from '../../../assets/img/test-img/location-white.png'
import linkedIcon from '../../../assets/img/test-img/linkedin-white.png'
import instagramIcon from '../../../assets/img/test-img/instagram-white.png'
import facebookIcon from '../../../assets/img/test-img/facebook-white.png'
import twitterIcon from '../../../assets/img/test-img/twitter-white.png'
import globeIcon from '../../../assets/img/test-img/globe-white.png'
import gitIcon from '../../../assets/img/test-img/git-white.png'

export default class ResumeViewOne extends Component {

	printPDF2 = () => {

		window.html2canvas = html2canvas;
		var doc = new jsPDF({
			orientation: "p",
			unit: "px",
			format: "a4",
		});

		var content = document.getElementById("resume1");
		const width = doc.internal.pageSize.getWidth();
		console.log(width, "wodth")
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

	// printPDF = () => {

	// 	const domElement = document.getElementById("resume1");
	// 	console.log(domElement);
	// 	html2canvas(domElement
	// 		// 	{
	// 		//   onclone: document => {
	// 		// 	document.getElementById("print").style.visibility = "hidden";
	// 		//   }
	// 		// }
	// 	).then(canvas => {
	// 		var pageData = canvas.toDataURL('image/png');
	// 		/*
	//   Here are the numbers (paper width and height) that I found to work. 
	//   It still creates a little overlap part between the pages, but good enough for me.
	//   if you can find an official number from jsPDF, use them.
	//   */
	// 		var contentWidth = canvas.width;
	// 		var contentHeight = canvas.height;
	// 		var pageHeight = contentWidth / 592.28 * 841.89;
	// 		var leftHeight = contentHeight;
	// 		var position = 0;
	// 		var imgWidth = 595.28;
	// 		var imgHeight = 582.28 / contentWidth * contentHeight;
	// 		var pageData = canvas.toDataURL('image/jpeg', 1.0);
	// 		var pdf = new jsPDF('', 'pt', 'a4');
	// 		if (leftHeight < pageHeight) {
	// 			pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
	// 		} else {
	// 			while (leftHeight > 0) {
	// 				pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
	// 				leftHeight -= pageHeight;
	// 				position -= 841.89;
	// 				//Avoid adding blank pages
	// 				if (leftHeight > 0) {
	// 					pdf.addPage();
	// 				}
	// 			}
	// 		}
	// 		pdf.save('download.pdf');
	// 	})
	// };

	render() {
		console.log(this.props.candidateLists, "candidateList")
		const detail = this.props.candidateLists
		return (
			<React.Fragment>
				<article className="resume-wrapper text-center position-relative" style={{ paddingTop: "90px" }}>
					{/* <ReactToPrint

						trigger={() => {
							return <button style={{ display: "block", margin: "10px auto", padding: "12px", borderRadius: "5px", color: "#fff", backgroundColor: "red", fontSize: "14px", fontWeight: "500" }}>Download Resume</button>
						}}
						content={() => this.componentRef}
					/> */}

					<button style={{ display: "block", margin: "10px auto", padding: "12px", borderRadius: "5px", color: "#fff", backgroundColor: "red", fontSize: "14px", fontWeight: "500" }} onClick={() => { this.printPDF2() }}>Download Resume</button>

					<div>
						<div className="resume-wrapper-inner mx-auto text-start bg-white"
							ref={el => (this.componentRef = el)}
							id={'resume1'}
						>

							<div className="resume-header pt-md-0">
								<div class="row media575">
									{
										<div class="col-lg-2 col-md-3 col-sm-2 p-0 mediaWidth25">
											{detail && detail.PROFILE_IMAGE == null ?
												<img class="picture" src={userImage} alt="" /> :
												<img class="picture" src={`${process.env.REACT_APP_BASE_URL}/candidate/pic/${detail.CANDIDATE_ID}/${detail.PROFILE_IMAGE}`} alt="" />
											}
										</div>
									}


									<div class="col-lg-10 col-md-9 col-sm-10 px-3 mediaWidth75">
										<div className="row py-2 px-3">
											<div class="primary-info col-md-9 col-sm-10 mediaContent90">
												<h1 class="name mt-0 mb-1 text-white text-uppercase" style={{ fontSize: "30px", fontWeight: '600' }}>{detail.CANDIDATE_NAME}</h1>
												<div class="title mb-2" style={{ textTransform: "capitalize", fontSize: '20px' }}>{detail.RESUME_HEADLINE}</div>
												<ul class="list-unstyled">
													<li class="mb-0">
														<a className="text-link" href="#">
															<img src={emailIcon} alt="" style={{ width: '20px' }} className="mr-1" />
															{/* <img
																width={20}
																height={30}
																style={{ backgroundColor: "white", borderRadius: "2px", padding: "0 1px 0 1px" }}
																className="mx-1"
																src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABYElEQVRIie3VPUtcQRTG8Z8riIEtRMWAEYksgmxhZWVSpUwRsQpW2/kV0tqIa2GRLr58Ansbv4QgIRAIgYAJpDCQIgS38FrMuXrZF3fZ7IYEfOAwcO65858zM2cOD/ofNIZdfEM2YPuKejDUhwBotrqgZlgd3Cbd6nmeWQmz4bwaAuh3jLOlgvMaB1geAGAJexgtOvN9hCmc4BhP+wA8wT5OMdM8fxEEI3gjpf0WEz0AytjCL+ngi5l0BOV6iR+4DPCjNjFj2MR3/MR6m5iuIKjgfXz/ghpKYbXwZRFT6TBHT6BqrLYhXZYM52FZ+BoRU+0XtCjV2Gepxp7hQyH+E15gBR/vgd0LquACR9JB5xrHdth4wV+O2AutW9gRNI8zbLRZXTetx78L3UBzOIyxXz3GO3d12AKaxGvpRv2pRqTymC6C8kf11QAAzVpz1y7+SpvYIVV3vZDZ0Brfg/5t3QCcNMMnr4bWpwAAAABJRU5ErkJggg=="
															/> */}
															{detail.EMAIL_ID}</a></li>

													<li><a class="text-link" href="#">
														<img src={mobileIcon} alt="" style={{ width: '20px' }} className="mr-1" />
														{/* <img
															width={20}
															height={40}
															className="mx-1"
															style={{ backgroundColor: "white", borderRadius: "2px", }}
															src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAnUlEQVRYhe2XSwqDQBAFCxfeSXMBc7CoOVfwIuPnGOqmh0AgEz8NIeEV9GJgXnfRqxkQn8mBOzABy8Yagcayp2l3DH6t2kNgtGaFnfvEwGB3Sp6bOE1sHrm+kQhAlci5CbjmsgONXZGABCQgAQlIQAIS+HmBDnh8U2DG6eGZIj7Lyx2Zi2UGD4GG4x+Tm4dAbhJxE1tqsOEuX7P/ZgUYulngFNB/ZAAAAABJRU5ErkJggg=="
														/> */}
														{detail.PHONENO} </a> </li>
												</ul>
											</div>
											<div class="secondary-info col-md-3 col-sm-2 mt-2 pr-4 p-0 mediaContent10" style={{ textAlign: 'end' }}>
												<ul class="resume-social list-unstyled">
													{
														detail.OnlineProfile && detail.OnlineProfile.map((item) => {
															if (item.SOCIAL_PROFILE == "L") {
																return (
																	<li class="mb-2">
																		<a class="text-link" href={item.URL}>
																			<img src={linkedIcon} alt="" style={{ width: "20px" }} />
																			{/* <img
																				width={20}
																				height={40}
																				style={{ backgroundColor: "white", borderRadius: "2px" }}
																				className="mx-2"
																				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABz0lEQVRoge2avU7DMBRGTxFC0ImxLWLgGeiCxMjWbgwMMLIhtlIeoEgIiTeA12AsiBnYmBgYEEwwUX4XypAbUdImcZy4NshHurLkutffl+Q2TW/B4/Ho0gS6wAvQtxw90dLIamLPAfFx0VE10ZQ3fAAtoJr1KBigCuwQaOqjeGZOZXHLnC5t2gTauiqLe7K4YlKRJhUCbc8qi8Nr0VVG6puwIMQI3ohr2DCyABwC1wQ321fgDjgHDoBloFTERiaLfRN4I/2md1OEPlNG1oAviWOgDpSBKYKP1RWCM5W2v1Ujs8CT5N3Oub9VI1uS86yA/a0aOZGc65H5MrAP3DJcO7n1mTByLzkXIvNH/BbvvJF3yTkdmX+Q+SVgRjGXVSNxOXX28t+1dFG53ketDWO+KAFF5UkyFFfoj1n1jePSKg1E0mslYFXmL7Nu4lqNLMr4543UZbwqIpkLNZJU6GO/j+gaSSr0WH2TeZSmMFjcaQcm94OUazWijTfiGt6Ia3gjruGNuMa/NtKT0YWWW5Q5GYcaPaOMXMi4YUyOPqEmpeeVBj/N0DZQK0BA3l9RasAu8CnrldvUHeKfFWyHcns6pEHQPQ2bozZD+w8DHo8n4Bt69EZ7bl4vtAAAAABJRU5ErkJggg=="
																			/> */}
																			{/* {item.URL} */}
																		</a>
																	</li>
																)

															} else if (item.SOCIAL_PROFILE == "T") {
																return (
																	<li class="mb-2">
																		<a class="text-link" href={item.URL}>
																			<img src={twitterIcon} alt="" style={{ width: "20px" }} />
																			{/* <img
																				width={20}
																				height={40}
																				style={{ backgroundColor: "white", borderRadius: "2px" }}
																				className="mx-2"
																				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABz0lEQVRoge2avU7DMBRGTxFC0ImxLWLgGeiCxMjWbgwMMLIhtlIeoEgIiTeA12AsiBnYmBgYEEwwUX4XypAbUdImcZy4NshHurLkutffl+Q2TW/B4/Ho0gS6wAvQtxw90dLIamLPAfFx0VE10ZQ3fAAtoJr1KBigCuwQaOqjeGZOZXHLnC5t2gTauiqLe7K4YlKRJhUCbc8qi8Nr0VVG6puwIMQI3ohr2DCyABwC1wQ321fgDjgHDoBloFTERiaLfRN4I/2md1OEPlNG1oAviWOgDpSBKYKP1RWCM5W2v1Ujs8CT5N3Oub9VI1uS86yA/a0aOZGc65H5MrAP3DJcO7n1mTByLzkXIvNH/BbvvJF3yTkdmX+Q+SVgRjGXVSNxOXX28t+1dFG53ketDWO+KAFF5UkyFFfoj1n1jePSKg1E0mslYFXmL7Nu4lqNLMr4543UZbwqIpkLNZJU6GO/j+gaSSr0WH2TeZSmMFjcaQcm94OUazWijTfiGt6Ia3gjruGNuMa/NtKT0YWWW5Q5GYcaPaOMXMi4YUyOPqEmpeeVBj/N0DZQK0BA3l9RasAu8CnrldvUHeKfFWyHcns6pEHQPQ2bozZD+w8DHo8n4Bt69EZ7bl4vtAAAAABJRU5ErkJggg=="
																			/> */}
																			{/* {item.URL} */}
																		</a>
																	</li>
																)

															} else if (item.SOCIAL_PROFILE == "I") {
																return (
																	<li class="mb-2">
																		<a class="text-link" href={item.URL}>
																			<img src={instagramIcon} alt="" style={{ width: "20px" }} />
																			{/* <img
																				width={20}
																				height={20}
																				style={{ backgroundColor: "white", borderRadius: "2px" }}
																				className="mx-2"
																				src="data:image/png;base64,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"
																			/> */}

																			{/* {item.URL} */}
																		</a>
																	</li>
																)

															} else if (item.SOCIAL_PROFILE == "G") {
																return (
																	<li class="mb-2">
																		<a class="text-link" href={item.URL}>
																			<img src={gitIcon} alt="" style={{ width: "20px" }} />
																			{/* <img
																				width={20}
																				height={40}
																				style={{ backgroundColor: "white", borderRadius: "2px" }}
																				className="mx-2"
																				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVklEQVR4Xn3PgQkAMQhDUXfqTu7kTtkpd5RA8AInfArtQ2iRXFWT2QedAfttj2FsPIOE1eCOlEuoWWjgzYaB/IkeGOrxXhqB+uA9Bfcm0lAZuh+YIeAD+cAqSz4kCMUAAAAASUVORK5CYII="
																			/> */}
																			{/* {item.URL} */}
																		</a>
																	</li>
																)

															}
															else if (item.SOCIAL_PROFILE == "F") {
																return (
																	<li class="mb-2">
																		<a class="text-link" href={item.URL}>
																			<img src={facebookIcon} alt="" style={{ width: "20px" }} />
																			{/* <img
																				width={20}
																				height={40}
																				style={{ backgroundColor: "white", borderRadius: "2px" }}
																				className="mx-2"
																				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABz0lEQVRoge2avU7DMBRGTxFC0ImxLWLgGeiCxMjWbgwMMLIhtlIeoEgIiTeA12AsiBnYmBgYEEwwUX4XypAbUdImcZy4NshHurLkutffl+Q2TW/B4/Ho0gS6wAvQtxw90dLIamLPAfFx0VE10ZQ3fAAtoJr1KBigCuwQaOqjeGZOZXHLnC5t2gTauiqLe7K4YlKRJhUCbc8qi8Nr0VVG6puwIMQI3ohr2DCyABwC1wQ321fgDjgHDoBloFTERiaLfRN4I/2md1OEPlNG1oAviWOgDpSBKYKP1RWCM5W2v1Ujs8CT5N3Oub9VI1uS86yA/a0aOZGc65H5MrAP3DJcO7n1mTByLzkXIvNH/BbvvJF3yTkdmX+Q+SVgRjGXVSNxOXX28t+1dFG53ketDWO+KAFF5UkyFFfoj1n1jePSKg1E0mslYFXmL7Nu4lqNLMr4543UZbwqIpkLNZJU6GO/j+gaSSr0WH2TeZSmMFjcaQcm94OUazWijTfiGt6Ia3gjruGNuMa/NtKT0YWWW5Q5GYcaPaOMXMi4YUyOPqEmpeeVBj/N0DZQK0BA3l9RasAu8CnrldvUHeKfFWyHcns6pEHQPQ2bozZD+w8DHo8n4Bt69EZ7bl4vtAAAAABJRU5ErkJggg=="
																			/> */}
																			{/* {item.URL} */}
																		</a>
																	</li>
																)

															}
															else {
																return (
																	<li class="mb-2">
																		<a class="text-link" href={item.URL}>
																			<img src={globeIcon} alt="" style={{ width: "20px" }} />
																			{/* <img
																				width={20}
																				height={40}
																				style={{ backgroundColor: "white", borderRadius: "2px" }}
																				className="mx-2"
																				src="data:image/png;base64,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"
																			/> */}
																			{/* {item.URL} */}
																		</a>
																	</li>
																)

															}
														}
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


							<div className="resume-body px-5 pt-4">
								<section className="resume-section summary-section pb-3">
									<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
									<div className="resume-section-content">
										<p className="mb-0" style={{ textTransform: "capitalize" }}>
											{detail.PROFILE_SUMMARY}
										</p>
									</div>
								</section>
								<div className="row">
									<div className="col-lg-9 col-sm-9 pdfwidth70" >
										<section className="resume-section experience-section mb-5">
											<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
											<div className="resume-section-content">
												<div className="resume-timeline position-relative">
													{
														detail.Experience && detail.Experience.map((item) => {
															return (
																<>
																	<article className="resume-timeline-item position-relative pb-2">

																		<div className="resume-timeline-item-header mb-2">
																			<div className="d-flex flex-column flex-md-row">
																				<h3 className="resume-position-title font-weight-bold mb-1" style={{ textTransform: "capitalize" }}>{item.CURRENT_DESIGNATION}</h3>
																				<div className="resume-company-name ms-auto" style={{ textTransform: "capitalize" }}>{item.CURRENT_COMPANY}</div>
																			</div>
																			<div className="resume-position-time">{item.JOINING_DATE_YEAR} - {item.IS_THIS_YOUR_CURRENT_COMPANY == "N" ? item.WORKING_TILL_DATE_YEAR : 'Present'}</div>
																		</div>
																		<div className="resume-timeline-item-desc">
																			<p style={{ textTransform: "capitalize" }}>{item.JOB_PROFILE}</p>
																		</div>

																	</article>
																</>
															)
														})
													}
													{/* <article className="resume-timeline-item position-relative pb-5">

														<div className="resume-timeline-item-header mb-2">
															<div className="d-flex flex-column flex-md-row">
																<h3 className="resume-position-title font-weight-bold mb-1" style={{ textTransform: "capitalize" }}>Full stack developer</h3>
																<div className="resume-company-name ms-auto" style={{ textTransform: "capitalize" }}>google</div>
															</div>
															<div className="resume-position-time">2020 - 2022</div>
														</div>
														<div className="resume-timeline-item-desc">
															<p style={{ textTransform: "capitalize" }}>Lorem Ipsum is simply dummy
																text of the printing and typesetting industry.
																Lorem Ipsum has been the industry's standard dummy
																text ever since the 1500s, when an unknown printer
																took a galley of type and scrambled it to make a
																type specimen book. It has survived not only five centuries,
																but also the leap into electronic typesetting, remaining essentially unchanged.

															</p>
														</div>

													</article>
													<article className="resume-timeline-item position-relative pb-5">

														<div className="resume-timeline-item-header mb-2">
															<div className="d-flex flex-column flex-md-row">
																<h3 className="resume-position-title font-weight-bold mb-1" style={{ textTransform: "capitalize" }}>Full stack developer</h3>
																<div className="resume-company-name ms-auto" style={{ textTransform: "capitalize" }}>google</div>
															</div>
															<div className="resume-position-time">2020 - 2022</div>
														</div>
														<div className="resume-timeline-item-desc">
															<p style={{ textTransform: "capitalize" }}>Lorem Ipsum is simply dummy
																text of the printing and typesetting industry.
																Lorem Ipsum has been the industry's standard dummy
																text ever since the 1500s, when an unknown printer
																took a galley of type and scrambled it to make a
																type specimen book. It has survived not only five centuries,
																but also the leap into electronic typesetting, remaining essentially unchanged.

															</p>
														</div>

													</article>
													<article className="resume-timeline-item position-relative pb-5">

														<div className="resume-timeline-item-header mb-2">
															<div className="d-flex flex-column flex-md-row">
																<h3 className="resume-position-title font-weight-bold mb-1" style={{ textTransform: "capitalize" }}>Full stack developer</h3>
																<div className="resume-company-name ms-auto" style={{ textTransform: "capitalize" }}>google</div>
															</div>
															<div className="resume-position-time">2020 - 2022</div>
														</div>
														<div className="resume-timeline-item-desc">
															<p style={{ textTransform: "capitalize" }}>Lorem Ipsum is simply dummy
																text of the printing and typesetting industry.
																Lorem Ipsum has been the industry's standard dummy
																text ever since the 1500s, when an unknown printer
																took a galley of type and scrambled it to make a
																type specimen book. It has survived not only five centuries,
																but also the leap into electronic typesetting, remaining essentially unchanged.

															</p>
														</div>

													</article>
													<article className="resume-timeline-item position-relative pb-5">

														<div className="resume-timeline-item-header mb-2">
															<div className="d-flex flex-column flex-md-row">
																<h3 className="resume-position-title font-weight-bold mb-1" style={{ textTransform: "capitalize" }}>Full stack developer</h3>
																<div className="resume-company-name ms-auto" style={{ textTransform: "capitalize" }}>google</div>
															</div>
															<div className="resume-position-time">2020 - 2022</div>
														</div>
														<div className="resume-timeline-item-desc">
															<p style={{ textTransform: "capitalize" }}>Lorem Ipsum is simply dummy
																text of the printing and typesetting industry.
																Lorem Ipsum has been the industry's standard dummy
																text ever since the 1500s, when an unknown printer
																took a galley of type and scrambled it to make a
																type specimen book. It has survived not only five centuries,
																but also the leap into electronic typesetting, remaining essentially unchanged.

															</p>
														</div>

													</article> */}


												</div>
											</div>
										</section>

										<section className="resume-section experience-section mb-5 mt-4">
											<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Project</h2>
											<div className="resume-section-content">
												<div className="resume-timeline position-relative">
													{
														detail.Projects && detail.Projects.map((item) => {
															return (
																<>
																	<article className="resume-timeline-item position-relative pb-2">

																		<div className="resume-timeline-item-header mb-2">
																			<div className="d-flex flex-column flex-md-row">
																				<h3 className="resume-position-title font-weight-bold mb-1" style={{ textTransform: "capitalize" }}>{item.PROJECT_TITLE}</h3>
																				{/* <div className="resume-company-name ms-auto" style={{ textTransform: "capitalize" }}>{item.CURRENT_COMPANY}</div> */}
																			</div>
																			{/* <div className="resume-position-time">{item.JOINING_DATE_YEAR} - {item.IS_THIS_YOUR_CURRENT_COMPANY == "N" ? item.WORKING_TILL_DATE_YEAR : 'Present'}</div> */}
																		</div>
																		<div className="resume-timeline-item-desc">
																			<p style={{ textTransform: "capitalize" }}>{item.PROJECT_DETAILS}</p>
																		</div>

																	</article>
																</>
															)
														})
													}

												</div>
											</div>
										</section>


									</div>
									<div className="col-lg-3 col-sm-3 pdfwidth30">
										<section className="resume-section skills-section mb-5">
											<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
											<div className="resume-section-content">
												<div className="resume-skill-item">
													{/* <h4 className="resume-skills-cat font-weight-bold">Frontend</h4> */}
													<ul className="list-unstyled mb-4">
														{
															detail.Skills && detail.Skills.map((item) => {
																if (item.SKILL_PROFICIENT == 'Beginner') {
																	return (
																		<li className="mb-2">
																			<div className="resume-skill-name" style={{ textTransform: "capitalize" }}>{item.SKILL}</div>
																			<div className="progresss resume-progress">
																				<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '35%' }}></div>
																			</div>
																		</li>
																	)
																}
																else if (item.SKILL_PROFICIENT == 'Intermidiate') {
																	return (
																		<li className="mb-2">
																			<div className="resume-skill-name" style={{ textTransform: "capitalize" }}>{item.SKILL}</div>
																			<div className="progresss resume-progress">
																				<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '75%' }}></div>
																			</div>
																		</li>
																	)
																}
																else if (item.SKILL_PROFICIENT == 'Proficient') {
																	return (
																		<li className="mb-2">
																			<div className="resume-skill-name" style={{ textTransform: "capitalize" }}>{item.SKILL}</div>
																			<div className="progresss resume-progress">
																				<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '99%' }}></div>
																			</div>
																		</li>
																	)

																}
																// return (
																// 	<li className="mb-2">
																// 		<div className="resume-skill-name" style={{ textTransform: "capitalize" }}>{item.SKILL}</div>
																// 		{/* <div className="progresss resume-progress">
																// 			<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '35%' }}></div>
																// 		</div> */}
																// 	</li>
																// )
																// else if (item.SKILL_LEVEL == "Intermidiate") {
																// 	return (
																// 		<li className="mb-2">
																// 			<div className="resume-skill-name" style={{ textTransform: "capitalize" }}>{item.SKILL_NAME}</div>
																// 			<div className="progresss resume-progress">
																// 				<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '75%' }}></div>
																// 			</div>
																// 		</li>
																// 	)
																// }
																// else if (item.SKILL_LEVEL == "Proficient") {
																// 	return (
																// 		<li className="mb-2">
																// 			<div className="resume-skill-name" style={{ textTransform: "capitalize" }}>{item.SKILL_NAME}</div>
																// 			<div className="progresss resume-progress">
																// 				<div className="progresss-bar theme-progress-bar-dark" role="progressbar" style={{ width: '98%' }}></div>
																// 			</div>
																// 		</li>
																// 	)
																// }
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
										</section>
										<section className="resume-section education-section pb-4">
											<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
											<div className="resume-section-content">
												<ul className="list-unstyled">
													{
														detail.Education && detail.Education.map((item) => {
															return (
																<>
																	<li className="mb-2">
																		<div className="resume-degree font-weight-bold">{item.COURSE_STREAM} in {item.SPECIALIZATION}</div>
																		<div className="resume-degree-org">{item.UNIVERSITY_INSTITUTE}</div>
																		<div className="resume-degree-time">{item.START_YEAR} - {item.PASSING_OUT_YEAR}</div>
																	</li>
																</>
															)
														})
													}
													{/* <li className="mb-2">
														<div className="resume-degree font-weight-bold">{detail.candidateLists} in Computer Science</div>
														<div className="resume-degree-org">University College London</div>
														<div className="resume-degree-time">2010 - 2011</div>
													</li> */}
													{/* <li>
														<div className="resume-degree font-weight-bold">BSc Maths and Physics</div>
														<div className="resume-degree-org">Imperial College London</div>
														<div className="resume-degree-time">2007 - 2010</div>
													</li> */}
												</ul>
											</div>
										</section>
										<section className="resume-section language-section pb-4">
											<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
											<div className="resume-section-content">
												<ul className="list-unstyled resume-lang-list">
													{
														detail.Language && detail.Language.map((item) => {
															return (
																<>
																	<li className="mb-2" style={{ textTransform: 'capitalize' }}><span className="resume-lang-name font-weight-bold">{item.LANGUAGE}</span> <small className="text-muted font-weight-normal">({item.PROFICIENCY})</small></li>
																</>
															)
														})
													}
													{/* <li className="mb-2"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Native)</small></li>
													<li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">French</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
													<li><span className="resume-lang-name font-weight-bold">Spanish</span> <small className="text-muted font-weight-normal">(Professional)</small></li> */}
												</ul>
											</div>
										</section>
										<section className="resume-section interests-section mb-5">
											<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
											<div className="resume-section-content">
												<ul className="list-unstyled">
													{
														detail.Interest && detail.Interest.map((item) => {
															return (
																<>
																	<li className="mb-1" style={{ textTransform: "capitalize" }}>{item.INTEREST}</li>
																</>
															)
														})
													}
													{/* <li className="mb-1">Climbing</li>
													<li className="mb-1">Snowboarding</li>
													<li className="mb-1">Cooking</li> */}
												</ul>
											</div>
										</section>

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
