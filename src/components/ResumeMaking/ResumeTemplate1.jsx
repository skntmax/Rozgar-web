import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { Component } from 'react'
import linkedIcon from '../../assets/img/test-img/linkedin.png'
import instagramIcon from '../../assets/img/test-img/instagram.png'
import facebookIcon from '../../assets/img/test-img/facebook.png'
import twitterIcon from '../../assets/img/test-img/twitter.png'
import globeIcon from '../../assets/img/test-img/globe.png'
import gitIcon from '../../assets/img/test-img/git.png'

export default class ResumeTemplate1 extends Component {

    printPDF2 = () => {

        window.html2canvas = html2canvas;
        var doc = new jsPDF({
            orientation: "p",
            unit: "px",
            format: "a4",
        });

        var content = document.getElementById("resume1");
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

    render() {
        console.log(this.props.candidateLists, "candidateList")
        const detail = this.props.candidateLists
        return (
            <React.Fragment>
                <div style={{ paddingTop: '100px' }}>
                    <button style={{ display: "block", margin: "10px auto", padding: "12px", borderRadius: "5px", color: "#fff", backgroundColor: "red", fontSize: "14px", fontWeight: "500" }} onClick={() => { this.printPDF2() }}>Download Resume</button>
                </div>
                <section className="welcome_area demo2 flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-12 col-md-12">
                                <div className='resume-template-one' id={'resume1'} style={{ marginTop: '35px' }}>
                                    <div className='top-header-resume'>
                                        <h4>Resume</h4>
                                    </div>
                                    <div className='body-resume-bx'>
                                        <div className='body-resume-right-section'>
                                            <div className='user-name'>
                                                <h5 style={{ textTransform: "capitalize" }}>{detail.CANDIDATE_NAME}</h5>
                                                <h3 style={{ textTransform: "capitalize" }}>{detail.RESUME_HEADLINE}</h3>
                                                <p style={{ textTransform: "capitalize" }}>{detail.PROFILE_SUMMARY}</p>
                                            </div>
                                            {
                                                detail.Experience && detail.Experience.map((item) => {
                                                    return (
                                                        <>
                                                            <div className='main-head-section'>
                                                                <div className='topoic-head-section'>
                                                                    <div className='div-year-bx'>{item.JOINING_DATE_YEAR} - {item.IS_THIS_YOUR_CURRENT_COMPANY == "N" ? item.WORKING_TILL_DATE_YEAR : 'Present'}</div>
                                                                    <div className='div-img-bx'><img src={'./assets/images/r1-img.png'} alt='Image' /></div>
                                                                    <div className='div-hd-bx'>
                                                                        <h4>{item.CURRENT_DESIGNATION}</h4>
                                                                        <p>{item.CURRENT_COMPANY}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='topoic-about-section' style={{
                                                                    alignItems: 'flex-start',
                                                                    minHeight: '60px'
                                                                }}>
                                                                    <ul>
                                                                        <li>
                                                                            {item.JOB_PROFILE}
                                                                        </li>
                                                                    </ul>

                                                                </div>

                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }

                                            {
                                                detail.Projects && detail.Projects.map((item) => {
                                                    return (
                                                        <>
                                                            <div className='main-head-section'>
                                                                <div className='topoic-head-section'>
                                                                    <div className='div-year-bx'>Project</div>
                                                                    <div className='div-img-bx'><img src={'./assets/images/r2-img.png'} alt='Image' /></div>
                                                                    <div className='div-hd-bx'>
                                                                        <h4>{item.PROJECT_TITLE}</h4>
                                                                    </div>
                                                                </div>
                                                                <div className='topoic-about-section' style={{
                                                                    alignItems: 'flex-start',
                                                                    minHeight: '50px'
                                                                }}>
                                                                    <ul>
                                                                        <li>
                                                                            {item.PROJECT_DETAILS}
                                                                        </li>
                                                                    </ul>

                                                                </div>

                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }


                                            {
                                                detail.Education && detail.Education.map((item) => {
                                                    return (
                                                        <>
                                                            <div className='main-head-section'>
                                                                <div className='topoic-head-section'>
                                                                    <div className='div-year-bx'>{item.START_YEAR} - {item.PASSING_OUT_YEAR}</div>
                                                                    <div className='div-img-bx'><img src={'./assets/images/r5-img.png'} alt='Image' /></div>
                                                                    <div className='div-hd-bx'>
                                                                        <h4>{item.SPECIALIZATION} - <span>{item.COURSE_STREAM}</span></h4>
                                                                        <p>{item.UNIVERSITY_INSTITUTE}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='body-resume-left-section'>
                                            <div className='resume-user-img'>
                                                <img src={`${process.env.REACT_APP_BASE_URL}/candidate/pic/${detail.CANDIDATE_ID}/${detail.PROFILE_IMAGE}`} alt='Image' />
                                            </div>
                                            <div className='right-title-hd'>
                                                <h4>Skills &amp; Tools</h4>
                                            </div>
                                            <div className='i-love-filed-bx'>
                                                <ul className='love-filed-list-bx'>
                                                    {
                                                        detail.Skills && detail.Skills.map((item) => {
                                                            return (
                                                                <>
                                                                    <li style={{ textTransform: "capitalize" }}>{item.SKILL}</li>
                                                                </>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            </div>

                                            <div className='right-title-hd'>
                                                <h4>I Love</h4>
                                            </div>
                                            <div className='i-love-filed-bx'>
                                                <ul className='love-filed-list-bx'>
                                                    {
                                                        detail.Interest && detail.Interest.map((item) => {
                                                            return (
                                                                <>
                                                                    <li style={{ textTransform: "capitalize" }}>{item.INTEREST}</li>
                                                                </>
                                                            )
                                                        })
                                                    }

                                                </ul>

                                            </div>
                                            <div className='right-title-hd'>
                                                <h4>Get in Touch</h4>
                                            </div>
                                            <div className='get-in-resume-bx'>
                                                <div className='get-resume-img-bx'>
                                                    <img src={'./assets/images/get-in-resume.png'} alt='Image' />
                                                </div>
                                                <div className='get-resume-text-bx'>
                                                    <p className='email-bx'>{detail.EMAIL_ID}</p>
                                                    <p className='email-bx'>{detail.PHONENO}</p>
                                                </div>

                                            </div>
                                            <div className='social-icons-box'>
                                                <div className='social-left-bx' style={{ width: "100%" }}>
                                                    <ul className='social-list-box'>
                                                        {
                                                            detail.OnlineProfile && detail.OnlineProfile.map((item) => {
                                                                if (item.SOCIAL_PROFILE == "L") {
                                                                    return (
                                                                        <li><span style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                        }}><img src={linkedIcon} alt="" style={{
                                                                            width: "20px",
                                                                            padding: '2px',

                                                                        }} /></span> {item.URL}</li>
                                                                    )

                                                                } else if (item.SOCIAL_PROFILE == "T") {
                                                                    return (
                                                                        <li><span style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                        }}><img src={twitterIcon} alt="" style={{
                                                                            width: "20px",
                                                                            padding: '2px',

                                                                        }} /></span> {item.URL}</li>
                                                                    )

                                                                } else if (item.SOCIAL_PROFILE == "I") {
                                                                    return (
                                                                        <li><span style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                        }}><img src={instagramIcon} alt="" style={{
                                                                            width: "20px",
                                                                            padding: '2px',

                                                                        }} /></span> {item.URL}</li>
                                                                    )

                                                                } else if (item.SOCIAL_PROFILE == "G") {
                                                                    return (
                                                                        <li><span style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                        }}><img src={gitIcon} alt="" style={{
                                                                            width: "20px",
                                                                            padding: '2px',

                                                                        }} /></span> {item.URL}</li>
                                                                    )

                                                                }
                                                                else if (item.SOCIAL_PROFILE == "F") {
                                                                    return (
                                                                        <li><span style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                        }}><img src={facebookIcon} alt="" style={{
                                                                            width: "20px",
                                                                            padding: '2px',

                                                                        }} /></span> {item.URL}</li>
                                                                    )

                                                                }
                                                                else {
                                                                    return (
                                                                        <li><span style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                        }}><img src={globeIcon} alt="" style={{
                                                                            width: "20px",
                                                                            padding: '2px',

                                                                        }} /></span> {item.URL}</li>
                                                                    )

                                                                }
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                {/* <section className="welcome_area demo2 flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-12 col-md-12">
                                <div className='resume-template-one'>
                                    <div className='top-header-resume'>
                                        <h4>Resume</h4>
                                    </div>
                                    <div className='body-resume-bx'>
                                        <div className='body-resume-right-section'>
                                            <div className='user-name'>
                                                <h5 style={{ textTransform: "capitalize" }}>{detail.CANDIDATE_NAME}</h5>

                                            </div>
                                            <div className='main-head-section'>
                                                <div className='topoic-head-section'>
                                                    <div className='div-year-bx'>2015 - 16</div>
                                                    <div className='div-img-bx'><img src={'./assets/images/r1-img.png'} alt='Image' /></div>
                                                    <div className='div-hd-bx'>
                                                        <h4>UX design Intern- <span>Innovation Labs</span></h4>
                                                        <p>Proptiger.com, Bangalore</p>
                                                    </div>
                                                </div>
                                                <div className='topoic-about-section'>
                                                    <ul>
                                                        <li>User research</li>
                                                        <li>Personas</li>
                                                        <li>Wireframing</li>
                                                        <li>Interaction Design</li>
                                                        <li>Prototyping</li>
                                                    </ul>

                                                </div>

                                            </div>
                                            <div className='main-head-section'>
                                                <div className='topoic-head-section'>
                                                    <div className='div-year-bx'>2013 - 15</div>
                                                    <div className='div-img-bx'><img src={'./assets/images/r2-img.png'} alt='Image' /></div>
                                                    <div className='div-hd-bx'>
                                                        <h4>Design For Digital Exprerience- <span>MDes</span></h4>
                                                        <p>National Institute of Design, Bangalore</p>
                                                    </div>
                                                </div>
                                                <div className='topoic-about-section'>
                                                    <ul>
                                                        <li>Design thinking</li>
                                                        <li>Learning by Doing</li>
                                                        <li>Founded NID India Alumni Network <img src={'./assets/images/network-icon.png'} alt='Image' /></li>
                                                    </ul>

                                                </div>

                                            </div>
                                            <div className='main-head-section'>
                                                <div className='topoic-head-section'>
                                                    <div className='div-year-bx'>2012 - 13</div>
                                                    <div className='div-img-bx'><img src={'./assets/images/r3-img.png'} alt='Image' /></div>
                                                    <div className='div-hd-bx'>
                                                        <h4>Solution Designer - <span>Mobile Banking Security</span></h4>
                                                        <p>Lioyds bank , London</p>
                                                    </div>
                                                </div>
                                                <div className='topoic-about-section'>
                                                    <ul>
                                                        <li>Design Documentation</li>
                                                        <li>Security Architecture</li>
                                                        <li>Information Architecture</li>
                                                        <li>Technical Excellence Award <img src={'./assets/images/resume-awards.png'} alt='Image' /></li>
                                                    </ul>

                                                </div>

                                            </div>
                                            <div className='main-head-section'>
                                                <div className='topoic-head-section'>
                                                    <div className='div-year-bx'>2010 - 12</div>
                                                    <div className='div-img-bx'><img src={'./assets/images/r4-img.png'} alt='Image' /></div>
                                                    <div className='div-hd-bx'>
                                                        <h4>UI Developer - <span>Lioyds Internet Banking</span></h4>
                                                        <p>Tata Consultancy Services, Gurgaon</p>
                                                    </div>
                                                </div>
                                                <div className='topoic-about-section'>
                                                    <ul>
                                                        <li>Develop, Debug, Test, Repeat.</li>
                                                        <li>JSF Tag Library customization</li>
                                                        <li>TCS Gem Award <img src={'./assets/images/resume-awards.png'} alt='Image' /></li>
                                                    </ul>

                                                </div>

                                            </div>
                                            <div className='main-head-section'>
                                                <div className='topoic-head-section'>
                                                    <div className='div-year-bx'>2006 - 10</div>
                                                    <div className='div-img-bx'><img src={'./assets/images/r5-img.png'} alt='Image' /></div>
                                                    <div className='div-hd-bx'>
                                                        <h4>Computer Engineering - <span>BE</span></h4>
                                                        <p>Maharshi Dayanand University, Rohtak</p>
                                                    </div>
                                                </div>
                                                <div className='topoic-about-section'>
                                                    <ul>
                                                        <li>Fastest Website developer award <img src={'./assets/images/resume-awards.png'} alt='Image' /></li>
                                                        <li>Best Creative Jingle <img src={'./assets/images/resume-awards.png'} alt='Image' /></li>
                                                        <li>Champion Dance Group at National Festival <img src={'./assets/images/resume-awards.png'} alt='Image' /></li>
                                                    </ul>

                                                </div>

                                            </div>
                                            <div className='main-head-section'>
                                                <div className='topoic-head-section'>
                                                    <div className='div-year-bx'>14-08-1988</div>
                                                    <div className='div-img-bx'><img src={'./assets/images/r6-img.png'} alt='Image' /></div>
                                                    <div className='div-hd-bx'>
                                                        <h4>BORN & BROUGHT-UP</h4>
                                                        <p>Paonta Sahib, Himachal Pradesh</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className='body-resume-left-section'>
                                            <div className='resume-user-img'>
                                                <img src={'./assets/images/resume-user.png'} alt='Image' />
                                            </div>
                                            <div className='right-title-hd'>
                                                <h4>Workbench Tools</h4>
                                            </div>
                                            <div className='skills-list-right'>
                                                <ul className='resume-skills-list-bx'>
                                                    <li className='skills-img-bx'><img src={'./assets/images/aei.png'} alt='Image' /></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>

                                                </ul>
                                            </div>
                                            <div className='skills-list-right'>
                                                <ul className='resume-skills-list-bx'>
                                                    <li className='skills-img-bx'><img src={'./assets/images/ai.png'} alt='Image' /></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                            <div className='skills-list-right'>
                                                <ul className='resume-skills-list-bx'>
                                                    <li className='skills-img-bx'><img src={'./assets/images/ps.png'} alt='Image' /></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>

                                                </ul>
                                            </div>
                                            <div className='skills-list-right'>
                                                <ul className='resume-skills-list-bx'>
                                                    <li className='skills-img-bx'><img src={'./assets/images/dimand.png'} alt='Image' /></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>

                                                </ul>
                                            </div>
                                            <div className='skills-list-right'>
                                                <ul className='resume-skills-list-bx'>
                                                    <li className='skills-img-bx'><img src={'./assets/images/micon.png'} alt='Image' /></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                            <div className='skills-list-right'>
                                                <ul className='resume-skills-list-bx'>
                                                    <li className='skills-img-bx'><img src={'./assets/images/html.png'} alt='Image' style={{ width: "25px" }} /></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                            <div className='skills-list-right'>
                                                <ul className='resume-skills-list-bx'>
                                                    <li className='skills-img-bx'><img src={'./assets/images/css.png'} alt='Image' style={{ width: "25px" }} /></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>

                                                </ul>
                                            </div>
                                            <div className='skills-list-right'>
                                                <ul className='resume-skills-list-bx'>
                                                    <li className='skills-img-bx'><img src={'./assets/images/dim.png'} alt='Image' /></li>
                                                    <li></li>
                                                    <li></li>

                                                </ul>
                                            </div>
                                            <div className='right-title-hd'>
                                                <h4>I Love</h4>
                                            </div>
                                            <div className='i-love-filed-bx'>
                                                <ul className='love-filed-list-bx'>
                                                    <li>New media</li>
                                                    <li>Dance</li>
                                                    <li>Traveling</li>
                                                    <li>Dreaming</li>
                                                    <li>Cooking</li>
                                                    <li>Social Innovation</li>
                                                    <li>Music</li>
                                                    <li>Hackathons</li>
                                                </ul>

                                            </div>
                                            <div className='right-title-hd'>
                                                <h4>Get in Touch</h4>
                                            </div>
                                            <div className='get-in-resume-bx'>
                                                <div className='get-resume-img-bx'>
                                                    <img src={'./assets/images/get-in-resume.png'} alt='Image' />
                                                </div>
                                                <div className='get-resume-text-bx'>
                                                    <p className='email-bx'>atul.kr.chhabra@gmail.com</p>
                                                    <p className='email-bx'>+91 - 8867697246</p>
                                                </div>

                                            </div>
                                            <div className='social-icons-box'>
                                                <div className='social-left-bx'>
                                                    <ul className='social-list-box'>
                                                        <li><span className='fa fa-behance'></span> be.me/atul.kc</li>
                                                        <li><span className='fa fa-facebook'></span> fb.me/atul.kc</li>
                                                        <li><span className='fa fa-twitter'></span> @/atul.kc</li>
                                                        <li><span className='fa fa-linkedin'></span> lnkd.in/atul.kc</li>
                                                    </ul>

                                                </div>
                                                <div className='social-right-bx'>

                                                    <img src={'./assets/images/resume-scancode.png'} alt='Image' />
                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section> */}


            </React.Fragment >
        )
    }
}
