import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { Component } from 'react'
import EmailIcon from '../../assets/img/test-img/email.png'
import mobileIcon from '../../assets/img/test-img/mobile-black01.png'
import locationIcon from '../../assets/img/test-img/location.png'
import moment from 'moment';
import '../../assets/css/rmaking/orbit-1.css'

export default class ResumeTemplate2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    printPDF2 = () => {

        window.html2canvas = html2canvas;
        let doc = new jsPDF({
            orientation: "p",
            unit: "px",
            format: "a4",
        });

        let content = document.getElementById("resume2");
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
        // document.title = constant.title.resumeTemplate2
    }
    render() {
        console.log(this.props.candidateLists, "candidateList")
        const detail = this.props.candidateLists
        return (
            <React.Fragment>
                <div style={{ paddingTop: "100px" }}>
                    <button style={{ display: "block", margin: "10px auto", padding: "12px", borderRadius: "5px", color: "#fff", backgroundColor: "red", fontSize: "14px", fontWeight: "500" }} onClick={() => { this.printPDF2() }}>Download Resume</button>
                </div>
                <section className="welcome_area demo2 flex align-items-center"
                    id={'resume2'}>
                    <div className="container">
                        <div className="row ">
                            <div className="col-12 col-lg-12 col-md-12">
                                <div className='resume-with-box' style={{ marginTop: "10px" }}>

                                    <div className='resume-right-temp-two-bx'>
                                        <div className='candidate-info-bx'>
                                            <div className='candidate-img-info'>
                                                <img src={`${process.env.REACT_APP_BASE_URL}/candidate/pic/${detail.CANDIDATE_ID}/${detail.PROFILE_IMAGE}`} alt='Image' />
                                            </div>
                                            <div className='candidate-name-info'>
                                                <h4 style={{ textTransform: 'capitalize' }}>{detail.CANDIDATE_NAME}</h4>
                                                <h5>{detail.RESUME_HEADLINE} </h5>
                                                {/* <p>Protfolio: <a href="">be.net/atishaygoyal</a></p> */}

                                            </div>

                                        </div>
                                        <div className='about-profile-bx'>

                                            <h4>Me, at a glance</h4>
                                            <ul>
                                                <li> {detail.PROFILE_SUMMARY}</li>
                                            </ul>

                                        </div>
                                        <div className='about-profile-bx'>
                                            <h4>Work Experiences</h4>
                                            {
                                                detail.Experience && detail.Experience.map((item) => {
                                                    return (
                                                        <>
                                                            <div className='employment-history-box emp-history-border'>
                                                                <h5>{item.CURRENT_DESIGNATION} <span className='duration-work-bx'>{moment(item.JOINING_DATE_MONTH).format('MMM')} {item.JOINING_DATE_YEAR} - {item.IS_THIS_YOUR_CURRENT_COMPANY == "N" ? `${moment(item.JOINING_DATE_MONTH).format('MMM')} ${item.JOINING_DATE_YEAR}` : 'Present'}</span></h5>
                                                                <h6>{item.CURRENT_COMPANY}</h6>
                                                                <ul>
                                                                    <li>{item.JOB_PROFILE}</li>
                                                                </ul>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }

                                        </div>



                                    </div>
                                    <div className='right-section-resume-two'>
                                        <div className='right-contact-bx'>
                                            <ul>
                                                <li><img src={EmailIcon} alt="" style={{ width: "20px" }} /> {detail.EMAIL_ID}</li>
                                                <li><img src={locationIcon} alt="" style={{ width: "20px" }} /> {detail.PERMANENT_ADDRESS}</li>
                                                <li><img src={mobileIcon} alt="" style={{ width: "20px" }} /> {detail.PHONENO}  </li>
                                            </ul>

                                        </div>
                                        <div className='about-profile-bx'>
                                            <h4>Set Skills</h4>
                                            {
                                                detail.Skills && detail.Skills.map((item) => {
                                                    if (item.SKILL_PROFICIENT == 'Beginner') {
                                                        return (
                                                            <div className='skills-history-box'>
                                                                <div className='progress-bar-box'>
                                                                    <h5>{item.SKILL}</h5>
                                                                    <div class="progress level-bar">
                                                                        <div class="progress-bar theme-progress-bar" role="progressbar" style={{ width: '35%', background: '#210f7e' }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    else if (item.SKILL_PROFICIENT == 'Intermidiate') {
                                                        return (
                                                            <div className='skills-history-box'>
                                                                <div className='progress-bar-box'>
                                                                    <h5>{item.SKILL}</h5>
                                                                    <div class="progress level-bar">
                                                                        <div class="progress-bar theme-progress-bar" role="progressbar" style={{ width: '75%', background: '#210f7e' }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    else if (item.SKILL_PROFICIENT == 'Proficient') {
                                                        return (
                                                            <div className='skills-history-box'>
                                                                <div className='progress-bar-box'>
                                                                    <h5>{item.SKILL}</h5>
                                                                    <div class="progress level-bar">
                                                                        <div class="progress-bar theme-progress-bar" role="progressbar" style={{ width: '99%', background: '#210f7e' }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )

                                                    }
                                                })
                                            }


                                        </div>
                                        <div className='about-profile-bx'>
                                            <h4>Hobbies</h4>
                                            <ul>
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

                                            {/* <div className='imas-history-box'>

                                                <div className='one'>Visual <br />Designer</div>
                                                <div className='two'>Information Architect</div>
                                                <div className='three'>Business Analyst</div>
                                                <div className='four'>Interaction designer</div>

                                            </div> */}


                                        </div>
                                        <div className='about-profile-bx'>
                                            <h4>Education</h4>
                                            {
                                                detail.Education && detail.Education.map((item) => {
                                                    return (
                                                        <>
                                                            <div className='employment-history-box'>
                                                                <h5>{item.COURSE_STREAM} in {item.SPECIALIZATION} <span>{item.START_YEAR} - {item.PASSING_OUT_YEAR}</span></h5>
                                                                <h6>{item.UNIVERSITY_INSTITUTE}</h6>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <section className="welcome_area demo2 flex align-items-center">
                    <div className="container">
                        <div className="row ">
                            <div className="col-12 col-lg-12 col-md-12">
                                <div className='resume-with-box'>

                                    <div className='resume-right-temp-two-bx'>
                                        <div className='candidate-info-bx'>
                                            <div className='candidate-img-info'>
                                                <img src={'./assets/images/resume-user.png'} alt='Image' />
                                            </div>
                                            <div className='candidate-name-info'>
                                                <h4>Atishay Goyal</h4>
                                                <h5>UX Designer & Entrepreneur </h5>
                                                <p>Protfolio: <a href="">be.net/atishaygoyal</a></p>

                                            </div>

                                        </div>
                                        <div className='about-profile-bx'>

                                            <h4>Me, at a glance</h4>
                                            <ul>
                                                <li> 4.2+ years of professional experience as a full Stack designer with authority
                                                    in UX Designing, UI Designing and Front-End Development.</li>
                                                <li>A Self taught designer and the first in university to form an incubation cell to
                                                    teach industry demanded technologies to colleagues and seniors.</li>
                                                <li>while in college started exploring entrepreneurship opportunities with my own design
                                                    studio - Mad N  Creative.</li>
                                                <li>Worked with MNC's Like Xebia, Spicejet, HCL, Adobe, Nuberg and with
                                                    start-ups like Connect2India, Jeevom and Midas.</li>
                                                <li>Successfully completed about 60 projects and worked with more than 200 people placed
                                                    at different locations worldwide.</li>

                                            </ul>

                                        </div>
                                        <div className='about-profile-bx'>
                                            <h4>Work Experiences</h4>
                                            <div className='employment-history-box emp-history-border'>
                                                <h5>Enterpreneur & Desiner <span className='duration-work-bx'>Aug 2012 - Present</span></h5>
                                                <h6><span>Mad N Creative Design Studio</span>, Ghaziabad</h6>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel a dolorum, voluptas nostrum voluptatem corporis dolore atque aliquid eaque veritatis rerum culpa</li>
                                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel a dolorum, voluptas nostrum voluptatem corporis dolore atque aliquid eaque veritatis rerum culpa</li>
                                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel a dolorum, voluptas nostrum voluptatem corporis dolore atque aliquid eaque veritatis rerum culpa</li>

                                                </ul>
                                            </div>
                                            <div className='employment-history-box emp-history-border'>
                                                <h5>Lead UX Engineer <span className='duration-work-bx'>Nov 2014 - Dec 2015</span></h5>
                                                <h6><span>DegiGrape Technologies</span>, Noida</h6>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel a dolorum, voluptas nostrum voluptatem corporis dolore atque aliquid eaque veritatis rerum culpa</li>
                                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel a dolorum, voluptas nostrum voluptatem corporis dolore atque aliquid eaque veritatis rerum culpa</li>
                                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel a dolorum, voluptas nostrum voluptatem corporis dolore atque aliquid eaque veritatis rerum culpa</li>

                                                </ul>
                                            </div>
                                            <div className='employment-history-box'>
                                                <h5>UI Developer <span className='duration-work-bx'>Jun 2014 - Oct 2014</span></h5>
                                                <h6><span>HCL Technologies</span>, Noida</h6>
                                                <ul>
                                                    <li>Worked with US Based client and developed its ERP in SAP UI5</li>
                                                    <li>Drafted technical Specifications for fellow colleagues enabling them interpret the system and technologies with ease.</li>

                                                </ul>
                                            </div>
                                        </div>



                                    </div>
                                    <div className='right-section-resume-two'>
                                        <div className='right-contact-bx'>
                                            <ul>
                                                <li><span className='fa fa-envelope'></span> atishaygoyal@gmail.com</li>
                                                <li><span className='fa fa-map-marker'></span> Ghaziabad, Uttar Pradesh, India</li>
                                                <li><span className='fa fa-mobile'></span> +91-9891535343</li>
                                            </ul>

                                        </div>
                                        <div className='about-profile-bx'>
                                            <h4>Set Skills</h4>
                                            <div className='skills-history-box'>
                                                <div className='progress-bar-box'>
                                                    <h5>Photoshop</h5>
                                                    <div className='progress'>

                                                        <div className='bar' style={{ width: "80%" }}>
                                                            <p className='percent'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='progress-bar-box'>
                                                    <h5>Illustrator</h5>
                                                    <div className='progress'>

                                                        <div className='bar' style={{ width: "60%" }}>
                                                            <p className='percent'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='progress-bar-box'>
                                                    <h5>Balsamiq, Axure, Experience Design</h5>
                                                    <div className='progress'>

                                                        <div className='bar' style={{ width: "75%" }}>
                                                            <p className='percent'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='progress-bar-box'>
                                                    <h5>HTML5, CSS3, jQuery, SASS, Bootstrap</h5>
                                                    <div className='progress'>

                                                        <div className='bar' style={{ width: "80%" }}>
                                                            <p className='percent'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='progress-bar-box'>
                                                    <h5>SVN, GIT, Source Tree, Bit Bucket</h5>
                                                    <div className='progress'>

                                                        <div className='bar' style={{ width: "50%" }}>
                                                            <p className='percent'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='progress-bar-box'>
                                                    <h5>SVN, GIT, Source Tree, Bit Bucket</h5>
                                                    <div className='progress'>

                                                        <div className='bar' style={{ width: "70%" }}>
                                                            <p className='percent'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='about-profile-bx'>
                                            <h4>As a UXD, I am a</h4>
                                            <div className='imas-history-box'>


                                                <div className='one'>Visual <br />Designer</div>
                                                <div className='two'>Information Architect</div>
                                                <div className='three'>Business Analyst</div>
                                                <div className='four'>Interaction designer</div>


                                            </div>


                                        </div>
                                        <div className='about-profile-bx'>
                                            <h4>Education</h4>
                                            <div className='employment-history-box'>
                                                <h5>MCA, in CS <span>2015 - 2018</span></h5>
                                                <h6>Gautam Buddha University, Uttar Pradesh</h6>
                                                <ul>
                                                    <li>Marketing Manager, Zene Telecommunications</li>


                                                </ul>
                                            </div>
                                            <div className='employment-history-box'>
                                                <h5>B.Tech, in CSE <span>2010 - 2014</span></h5>
                                                <h6>CCS University Meerut, Uttar Pradesh</h6>
                                                <ul>
                                                    <li>Marketing Manager, Zene Telecommunications</li>


                                                </ul>
                                            </div>
                                            <div className='employment-history-box'>
                                                <h5>BSc, in Science <span>2009 - 2012</span></h5>
                                                <h6>CCS University Meerut, Uttar Pradesh</h6>
                                                <ul>
                                                    <li>Marketing Manager, Zene Telecommunications</li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}
            </React.Fragment>
        )
    }
}
