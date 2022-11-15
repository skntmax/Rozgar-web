import jsPDF from 'jspdf';
import React, { Component } from 'react'
import userImage from '../../../assets/img/test-img/1.jpg'
import html2canvas from 'html2canvas';


export default class ResumeTemplateView02 extends Component {

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
    
    render() {
        console.log("listt>>>>>>>>>>>>>>>>>>>>>>", this.props.candidateLists);
        const details = this.props.candidateLists
        return (
            <React.Fragment>
                <button style={{ display: "block", margin: "10px auto", padding: "12px", borderRadius: "5px", color: "#fff", backgroundColor: "red", fontSize: "14px", fontWeight: "500" }} onClick={() => { this.printPDF2() }}>Download Resume</button>

<div>
    <div className="resume-wrapper-inner mx-auto text-start bg-white"
        ref={el => (this.componentRef = el)}
        id={'resume1'}
    >
                <main id="rg-main" className="rg-main rg-haslayout">
                    <div className="rg-haslayout rg-sectionspace">
                        <div className="container">
                            <div className="row">
                                <div className='col-md-12'>
                                    <div className='resume-sample2-box'>
                                        <div className='d-flex resume-header-box bor-b'>
                                            <div className='d-flex'>
                                                {
                                                    <div className='resume-sample2-img'>
                                                        {details && details.PROFILE_IMAGE == null ?
                                                            <img class="picture" src={userImage} alt="" /> :
                                                            <img class="picture" src={`${process.env.REACT_APP_BASE_URL}/candidate/pic/${details.CANDIDATE_ID}/${details.PROFILE_IMAGE}`} alt="" />
                                                        }
                                                    </div>
                                                }
                                                <div className='resume-sample2-name-details'>
                                                    <h3>{details.CANDIDATE_NAME}</h3>
                                                    <p>Phone: {details.PHONENO}</p>
                                                    <p>Email : {details.EMAIL_ID}</p>
                                                    {/* <p>Website : <span className='resume-web'>www.sitarashah.com</span></p> */}
                                                    {details.Education && details.Education.map((item, index) => {
                                                        return (


                                                            <p>Education : {item.QUALIFICATION_NAME} in {item.COURSE_STREAM}, IDC, IIT {item.PASSING_OUT_YEAR} {item.QUALIFICATION_NAME} in Applied Art {item.PASSING_OUT_YEAR}</p>
                                                        )
                                                    })
                                                    }                                        </div>
                                            </div>
                                            <div className='objective-content-one ml-auto col-md-3'>
                                                <h3>OBJECTIVE</h3>
                                                <p>{details.PROFILE_SUMMARY}</p>
                                            </div>
                                        </div>


                                        <div className='row'>
                                            <div className='col-md-12 font-20 pt-5 font-weight-600'>PROJECTS</div>
                                            {
                                                    details.Projects && details.Projects.map((item, index) => {
                                                        return (
                                            <div className='col-md-6'>
                                                
                                                            <div className='project-oned pt-4'>
                                                                <h4>{item.PROJECT_TITLE} | <span>Thesis project</span></h4>
                                                                <p>{item.PROJECT_DETAILS}</p>
                                                            </div>

                                                {/* <div className='project-oned'>
                                            <h4>Exploration of Mumbai Heritage | <span>Informative portal</span></h4>
                                            <p>Designing a flow for users to understand and learn different architectural styles found in Mumbai.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Hola Chef’s Blue Print | <span>Service design</span></h4>
                                            <p>Studying and creating the blue print of their current service (food ordering and selling platform). Also creating a revised and improved blue print after understanding the pain points.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Binee | <span>Augmented Reality App</span></h4>
                                            <p>A concept app to promote clean India, which locates dustbins with phone cameras using AR.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>HDFC Red | <span>Real estate</span></h4>
                                            <p>Information architecture and interface design of the mobile site for users to buy properties.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='project-oned'>
                                            <h4>Sounds of Indian streets | <span>Sound design</span></h4>
                                            <p>Documentation of various sounds of Crawford market and designing an audio clip to bring out the true essence of the place.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Data visualisation | <span>3D Visualisation</span></h4>
                                            <p>3D Visualisation to find out interesting insights about the educational background of students who get admission in IDC’s Masters Programme and identifying interesting patterns.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>#Loyalty | <span>Loyalty program</span></h4>
                                            <p>Loyalty program designed for multiple platforms for customers and merchants (admin) to offer rewards at different business outlets.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Glyph Diaries | <span>Devanagari glyph resource</span></h4>
                                            <p>An online portal designed to showcase various visual forms found in the Devanagari script. This collection has been in the form of physical diaries with documented visual form and the context of use.</p>
                                        </div> */}
                                            </div>
                                            
                                            )
                                        })
                                    }
                                        </div>

                                        <div className='row'>
                                            
                                            <div className='col-md-6'>
                                            <div className='font-20 pt-5 font-weight-600'>WORK EXPERIENCE</div>
                                                {details.Experience && details.Experience.map((item, index) => {
                                                    return (

                                                        <div className='project-oned pt-4'>
                                                            <h4>{item.CURRENT_COMPANY}</h4>
                                                            <p className='mb-0 text-italic'>Internship under Prof. Sudhir Bhatia | May-June 2015</p>
                                                            <p>{item.JOB_PROFILE}</p>
                                                        </div>
                                                    )
                                                })
                                                }
                                                {/* <div className='project-oned'>
                                                    <h4>Genii technologies</h4>
                                                    <p className='mb-0 text-italic'>User Experience Designer | August 2012 - July 2014</p>
                                                    <p>Conceptualising, making user journey, information architecture, creating high fidelity wire-frames, Interface designs for mobile and desktop.</p>
                                                </div>
                                                <div className='project-oned'>
                                                    <h4>UTV Production</h4>
                                                    <p className='mb-0 text-italic'>Assistant Producer and Graphic Designer | April - July 2012</p>
                                                    <p>Ideation and story building for upcoming shows, Designing campaigns and sets for reality shows.</p>
                                                </div>
                                                <div className='project-oned'>
                                                    <h4>Argus Communication</h4>
                                                    <p className='mb-0 text-italic'>Visualiser | September - October 2011</p>
                                                    <p>Branding and advertising for various products, Graphics and illustrations for entertainment parks and tourism.</p>
                                                </div>
                                                <div className='project-oned'>
                                                    <h4>Hindustan Times</h4>
                                                    <p className='mb-0 text-italic'>Internship - Graphic Designer | March - May 2011</p>
                                                    <p>Everyday graphics, icons and illustration for news articles.</p>
                                                </div> */}
                                            </div>
                                            <div className='col-md-6'>
                                               
                                                <div className='project-twod pt-4'>
                                                    <div className='font-20 pb-3 font-weight-600'>Interest</div>
                                                    {details.Interest && details.Interest.map((item, index)=>{
                                                        return(

                                                      
                                                        <ul className='exp-resume-two'>
                                                        <li>{item.INTEREST}</li>
                                                    </ul>
                                                      )
                                                    })
                                                    }
                                                </div>
                                                <div className='project-twod pt-4'>
                                                    <div className='font-20 pb-3 font-weight-600'>Skills</div>
                                                   { details.Skills && details.Skills.map((item)=>{
                                                    return(
                                                    <ul className='exp-resume-two'>
                                                        <li>{item.SKILL}</li>
                                                    </ul>
                                                     )
                                                    })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>




                {/* <main id="rg-main" className="rg-main rg-haslayout">
			<div className="rg-haslayout rg-sectionspace">
				<div className="container">
					<div className="row">
                        <div className='col-md-12'>
                            <div className='resume-sample2-box'>
                                <div className='d-flex resume-header-box bor-b'>
                                    <div className='d-flex'>
                                        <div className='resume-sample2-img'>
                                            <img src={'./assets/images/profile.jpg'} style={{width:'200px'}}/>
                                        </div>
                                        <div className='resume-sample2-name-details'>
                                            <h3>SITARA SHAH</h3>
                                            <p>Phone: +91-9619060661</p>
                                            <p>Email : sitara.shah7@gmail.com</p>
                                            <p>Website : <span className='resume-web'>www.sitarashah.com</span></p>
                                            <p>Education : Masters in Interaction Design, IDC, IIT (2014-2016) Bachelors in Applied Art, JJ Institute of Applied Art (2008-2012)</p>
                                        </div>
                                    </div>
                                    <div className='objective-content-one ml-auto col-md-3'>
                                        <h3>OBJECTIVE</h3>
                                        <p>“I seek to make everyday experiences desirable and efficient with good and balanced aesthetics”</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12 font-20 pt-5 font-weight-600'>PROJECTS</div>
                                    <div className='col-md-6'>
                                        <div className='project-oned pt-4'>
                                            <h4>VR for Ajanta Caves | <span>Thesis project</span></h4>
                                            <p>Framework for content distribution to create VR Experience for 29 caves of Ajanta. A new timeline visualisation was also designed for researchers to refer to.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Exploration of Mumbai Heritage | <span>Informative portal</span></h4>
                                            <p>Designing a flow for users to understand and learn different architectural styles found in Mumbai.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Hola Chef’s Blue Print | <span>Service design</span></h4>
                                            <p>Studying and creating the blue print of their current service (food ordering and selling platform). Also creating a revised and improved blue print after understanding the pain points.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Binee | <span>Augmented Reality App</span></h4>
                                            <p>A concept app to promote clean India, which locates dustbins with phone cameras using AR.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>HDFC Red | <span>Real estate</span></h4>
                                            <p>Information architecture and interface design of the mobile site for users to buy properties.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='project-oned'>
                                            <h4>Sounds of Indian streets | <span>Sound design</span></h4>
                                            <p>Documentation of various sounds of Crawford market and designing an audio clip to bring out the true essence of the place.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Data visualisation | <span>3D Visualisation</span></h4>
                                            <p>3D Visualisation to find out interesting insights about the educational background of students who get admission in IDC’s Masters Programme and identifying interesting patterns.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>#Loyalty | <span>Loyalty program</span></h4>
                                            <p>Loyalty program designed for multiple platforms for customers and merchants (admin) to offer rewards at different business outlets.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Glyph Diaries | <span>Devanagari glyph resource</span></h4>
                                            <p>An online portal designed to showcase various visual forms found in the Devanagari script. This collection has been in the form of physical diaries with documented visual form and the context of use.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 font-20 pt-5 font-weight-600'>WORK EXPERIENCE</div>
                                    <div className='col-md-6 font-20 pt-5 font-weight-600'>RESPONSIBILITIES</div>
                                    <div className='col-md-6'>
                                        <div className='project-oned pt-4'>
                                            <h4>bRnd Studio</h4>
                                            <p className='mb-0 text-italic'>Internship under Prof. Sudhir Bhatia | May-June 2015</p>
                                            <p>Design research, wire framing and prototyping of a tool that helps recognise content patterns and generate new content on the internet.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Genii technologies</h4>
                                            <p className='mb-0 text-italic'>User Experience Designer | August 2012 - July 2014</p>
                                            <p>Conceptualising, making user journey, information architecture, creating high fidelity wire-frames, Interface designs for mobile and desktop.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>UTV Production</h4>
                                            <p className='mb-0 text-italic'>Assistant Producer and Graphic Designer | April - July 2012</p>
                                            <p>Ideation and story building for upcoming shows, Designing campaigns and sets for reality shows.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Argus Communication</h4>
                                            <p className='mb-0 text-italic'>Visualiser | September - October 2011</p>
                                            <p>Branding and advertising for various products, Graphics and illustrations for entertainment parks and tourism.</p>
                                        </div>
                                        <div className='project-oned'>
                                            <h4>Hindustan Times</h4>
                                            <p className='mb-0 text-italic'>Internship - Graphic Designer | March - May 2011</p>
                                            <p>Everyday graphics, icons and illustration for news articles.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='project-twod pt-4'>
                                            <p><strong>Cumulus</strong> 2016 - Student Ambassador</p>
                                            <p><strong>Cumulus 2015</strong> - Overall Coordinator</p>
                                            <p><strong>Typo-day 2015</strong> - Overall Coordinator</p>
                                            <p><strong>HCI 2014, 2015</strong> - Student Volunteer</p>
                                        </div>
                                        <div className='project-twod pt-4'>
                                            <div className='font-20 pb-3 font-weight-600'>EXPERTISE</div>
                                            <ul className='exp-resume-two'>
                                                <li>User study and journey</li>
                                                <li>Contextual Inquiry</li>
                                                <li>Information architecture</li>
                                                <li>User centric visual design</li>
                                                <li>Storyboarding,</li>
                                                <li>High fidelity wire-framing</li>
                                                <li>Quick Prototyping</li>
                                                <li>Communication skills</li>
                                            </ul>
                                        </div>
                                        <div className='project-twod pt-4'>
                                            <div className='font-20 pb-3 font-weight-600'>SOFTWARES/ LANGUAGES KNOWN</div>
                                            <ul className='exp-resume-two'>
                                                <li>Adobe Photoshop</li>
                                                <li>Audition (basic)</li>
                                                <li>Adobe Illustrator</li>
                                                <li>Balsamiq</li>
                                                <li>Adobe InDesign</li>
                                                <li>Marvel</li>
                                                <li>Adobe Premiere Pro</li>
                                                <li>Basics of HTML, CSS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main> */}
        </div>
        </div>
            </React.Fragment>
        )
    }
}




