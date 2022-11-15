import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import moment from 'moment'
import React, { Component } from 'react'
import emailIcon from '../../../assets/img/test-img/email-white.png'
import mobileIcon from '../../../assets/img/test-img/mobile-white01.png'
import locationIcon from '../../../assets/img/test-img/location-white.png'
import linkedIcon from '../../../assets/img/test-img/linkedin-white.png'
import instagramIcon from '../../../assets/img/test-img/instagram-white.png'
import facebookIcon from '../../../assets/img/test-img/facebook-white.png'
import twitterIcon from '../../../assets/img/test-img/twitter-white.png'
import globeIcon from '../../../assets/img/test-img/globe-white.png'
import gitIcon from '../../../assets/img/test-img/git-white.png'

export default class ResumeTemplateView03 extends Component {
    printPDF2 = () => {

        window.html2canvas = html2canvas;
        let doc = new jsPDF({
            orientation: "p",
            unit: "px",
            format: "a4",
        });

        let content = document.getElementById("resume3");
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
            <>
                <main id="rg-main" className="rg-main rg-haslayout">
                    <button style={{ display: "block", margin: "10px auto", padding: "12px", borderRadius: "5px", color: "#fff", backgroundColor: "red", fontSize: "14px", fontWeight: "500" }} onClick={() => { this.printPDF2() }}>Download Resume</button>
                    <div className="rg-haslayout rg-sectionspace" id={'resume3'}>
                        <div className="container">
                            <div className="row">
                                <div className='col-md-12'>
                                    <div className='d-flex cvboxshadow'>
                                        <div className='cv-left-details'>
                                            <div className='text-center'>
                                                <img className='pro-radius' src={`${process.env.REACT_APP_BASE_URL}/candidate/pic/${detail.CANDIDATE_ID}/${detail.PROFILE_IMAGE}`}
                                                    style={{
                                                        width: "102px",
                                                        height: "102px"
                                                    }}
                                                />
                                                <h3 className='text-white' style={{ textTransform: "capitalize" }}>{detail.CANDIDATE_NAME}</h3>
                                                <div className='line20pix'></div>
                                                <div className='per-degination'>
                                                    <h5 style={{ color: "#fff" }}>{detail.RESUME_HEADLINE}</h5>
                                                </div>
                                                <div className='detailscv'>
                                                    <h2>Details</h2>
                                                    <div className='address-cv-text'>
                                                        <span style={{ fontWeight: "600" }}>Address:</span> {detail.PERMANENT_ADDRESS}
                                                    </div>
                                                    <div className='address-cv-text'>
                                                        <span>Phone:</span> {detail.PHONENO}
                                                    </div>
                                                    <div className='address-cv-text'>
                                                        <span style={{ fontWeight: "600" }}>Email Id:</span> {detail.EMAIL_ID}
                                                    </div>
                                                </div>
                                                <div className='skills-cvp'>
                                                    <h2>Skills</h2>
                                                    {
                                                        detail.Skills && detail.Skills.map((item) => {
                                                            if (item.SKILL_PROFICIENT == 'Beginner') {
                                                                return (
                                                                    <div className='skill-progress'>
                                                                        <div className='proress-bar' style={{ width: '35%', background: '#fff' }}></div>
                                                                        <div className='progress-text'>{item.SKILL}</div>
                                                                    </div>
                                                                )
                                                            }
                                                            else if (item.SKILL_PROFICIENT == 'Intermidiate') {
                                                                return (
                                                                    <div className='skill-progress'>
                                                                        <div className='proress-bar' style={{ width: '75%', background: '#fff' }}></div>
                                                                        <div className='progress-text'>{item.SKILL}</div>
                                                                    </div>
                                                                )
                                                            }
                                                            else if (item.SKILL_PROFICIENT == 'Proficient') {
                                                                return (
                                                                    <div className='skill-progress'>
                                                                        <div className='proress-bar' style={{ width: '99%', background: '#fff' }}></div>
                                                                        <div className='progress-text'>{item.SKILL}</div>
                                                                    </div>
                                                                )

                                                            }
                                                        })
                                                    }
                                                </div>
                                                <div className='detailscv' style={{ marginTop: "20px" }}>
                                                    <h2>Join Me</h2>
                                                    {/* <div style={{
                                                        display: "grid",
                                                        gridTemplateColumns: "auto auto auto auto",
                                                        gap: '19px 40px'
                                                    }}>
                                                        {
                                                            detail.OnlineProfile && detail.OnlineProfile.map((item) => {
                                                                if (item.SOCIAL_PROFILE == "L") {
                                                                    return (
                                                                        <a target="_blank" href={item.URL}><img src={linkedIcon} alt="" style={{ width: "20px" }} /></a>
                                                                    )

                                                                } else if (item.SOCIAL_PROFILE == "T") {
                                                                    return (
                                                                        <a target="_blank" href={item.URL}><img src={twitterIcon} alt="" style={{ width: "20px" }} /></a>
                                                                    )

                                                                } else if (item.SOCIAL_PROFILE == "I") {
                                                                    return (
                                                                        <a target="_blank" href={item.URL}><img src={instagramIcon} alt="" style={{ width: "20px" }} /></a>
                                                                    )

                                                                } else if (item.SOCIAL_PROFILE == "G") {
                                                                    return (
                                                                        <a target="_blank" href={item.URL}><img src={gitIcon} alt="" style={{ width: "20px" }} /></a>
                                                                    )

                                                                }
                                                                else if (item.SOCIAL_PROFILE == "F") {
                                                                    return (
                                                                        <a target="_blank" href={item.URL}><img src={facebookIcon} alt="" style={{ width: "20px" }} /></a>
                                                                    )

                                                                }
                                                                else {
                                                                    return (
                                                                        <a target="_blank" href={item.URL}><img src={globeIcon} alt="" style={{ width: "20px" }} /></a>
                                                                    )

                                                                }
                                                            })
                                                        }
                                                    </div> */}
                                                    {
                                                        detail.OnlineProfile && detail.OnlineProfile.map((item) => {
                                                            if (item.SOCIAL_PROFILE == "L") {
                                                                return (
                                                                    <div className='address-cv-text join-Me-section'>
                                                                        <span>Linkedin:</span> <a href="">{item.URL}</a>
                                                                    </div>
                                                                )

                                                            } else if (item.SOCIAL_PROFILE == "T") {
                                                                return (
                                                                    <div className='address-cv-text join-Me-section'>
                                                                        <span>Twitter:</span> <a href="">{item.URL}</a>
                                                                    </div>
                                                                )

                                                            } else if (item.SOCIAL_PROFILE == "I") {
                                                                return (
                                                                    <div className='address-cv-text join-Me-section'>
                                                                        <span>Instagram:</span> <a href="">{item.URL}</a>
                                                                    </div>
                                                                )

                                                            } else if (item.SOCIAL_PROFILE == "G") {
                                                                return (
                                                                    <div className='address-cv-text join-Me-section'>
                                                                        <span>Git:</span> <a href="">{item.URL}</a>
                                                                    </div>
                                                                )

                                                            }
                                                            else if (item.SOCIAL_PROFILE == "F") {
                                                                return (
                                                                    <div className='address-cv-text join-Me-section'>
                                                                        <span>Facebook:</span> <a href="">{item.URL}</a>
                                                                    </div>
                                                                )

                                                            }
                                                            else {
                                                                return (
                                                                    <div className='address-cv-text join-Me-section'>
                                                                        <span>Other:</span> <a href="">{item.URL}</a>
                                                                    </div>
                                                                )

                                                            }
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div className='cv-right-details'>
                                            <div className='pro-details-cv'>
                                                <h2>Profile</h2>
                                                <p>{detail.PROFILE_SUMMARY}</p>
                                            </div>
                                            <div className='project-cv-details'>
                                                <h2>Employment History</h2>
                                                {
                                                    detail.Experience && detail.Experience.map((item) => {
                                                        return (
                                                            <>
                                                                <div className='project-cv-onebyone'>
                                                                    <div className='project-cv-name' style={{ textTransform: "capitalize" }}>{item.CURRENT_DESIGNATION}</div>
                                                                    <div className='project-start-end'>{moment(item.JOINING_DATE_MONTH).format('MMM')} {item.JOINING_DATE_YEAR} - {item.IS_THIS_YOUR_CURRENT_COMPANY == "N" ? `${moment(item.JOINING_DATE_MONTH).format('MMM')} ${item.JOINING_DATE_YEAR}` : 'Present'}</div>
                                                                    <ul className='project-line-manage'>
                                                                        <li>{item.JOB_PROFILE}</li>
                                                                    </ul>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                                {/* <div className='project-cv-onebyone'>
                                                    <div className='project-cv-name'>Branch Customer Service Representative</div>
                                                    <div className='project-start-end'>April,12,2010 to March 29 2019</div>
                                                    <ul className='project-line-manage'>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                    </ul>
                                                </div>
                                                <div className='project-cv-onebyone'>
                                                    <div className='project-cv-name'>Branch Customer Service Representative</div>
                                                    <div className='project-start-end'>April,12,2010 to March 29 2019</div>
                                                    <ul className='project-line-manage'>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                    </ul>
                                                </div> */}
                                            </div>
                                            <div className='project-cv-details'>
                                                <h2>Education</h2>
                                                {
                                                    detail.Education && detail.Education.map((item) => {
                                                        return <>
                                                            <div className='project-cv-onebyone'>
                                                                <div className='project-cv-name'>{item.QUALIFICATION_NAME}, {item.UNIVERSITY_INSTITUTE}</div>
                                                                <div className='project-start-end'>{item.START_YEAR} to {item.PASSING_OUT_YEAR}</div>
                                                                <ul className='project-line-manage'>
                                                                    <li>{item.COURSE_STREAM} in {item.SPECIALIZATION}</li>
                                                                </ul>
                                                            </div>
                                                        </>
                                                    })
                                                }
                                            </div>
                                            <div className='project-cv-details'>
                                                <h2>Interest</h2>
                                                <div className='project-cv-onebyone'>
                                                    <ul className='project-line-manage'>
                                                        {
                                                            detail.Interest && detail.Interest.map((item) => {
                                                                return <>
                                                                    <>
                                                                        <li style={{ textTransform: "capitalize" }}>{item.INTEREST}</li>
                                                                    </>
                                                                </>
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <div className='project-cv-details'>
                                                <h2>Interest</h2>
                                                <ul>
                                                    {
                                                        detail.Interest && detail.Interest.map((item) => {
                                                            return <>
                                                                <>
                                                                    <li style={{ textTransform: "capitalize" }}>{item.INTEREST}</li>
                                                                </>
                                                            </>
                                                        })
                                                    }
                                                </ul>

                                            </div> */}
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
                                    <div className='d-flex cvboxshadow'>
                                        <div className='cv-left-details'>
                                            <div className='text-center'>
                                                <img className='pro-radius' src={'./assets/images/author/img-01.jpg'} />
                                                <h3 className='text-white'>Sophie Walton</h3>
                                                <div className='line20pix'></div>
                                                <div className='per-degination'>
                                                    <h5 style={{ color: "#fff" }}>{detail.RESUME_HEADLINE}</h5>
                                                </div>
                                                <div className='detailscv'>
                                                    <h2>Details</h2>
                                                    <div className='address-cv-text'>
                                                        <span>Address:</span> A 51, Noida Sector - 16
                                                    </div>
                                                    <div className='phone-cv-text'>
                                                        <span>Phone:</span> +91-993388445533
                                                    </div>
                                                    <div className='emial-cv-text'>
                                                        <span>Email Id:</span> sophiewalton@gmail.com
                                                    </div>
                                                </div>
                                                <div className='skills-cvp'>
                                                    <h2>Skills</h2>
                                                    <div className='skill-progress'>
                                                        <div className='proress-bar'></div>
                                                        <div className='progress-text'>Photoshop</div>
                                                    </div>
                                                    <div className='skill-progress'>
                                                        <div className='proress-bar'></div>
                                                        <div className='progress-text'>Illustrator</div>
                                                    </div>
                                                    <div className='skill-progress'>
                                                        <div className='proress-bar'></div>
                                                        <div className='progress-text'>Balsamiq, Axure, Experience Design</div>
                                                    </div>
                                                    <div className='skill-progress'>
                                                        <div className='proress-bar'></div>
                                                        <div className='progress-text'>HTML5, CSS3, jQuery, SASS, Bootstrap</div>
                                                    </div>
                                                    <div className='skill-progress'>
                                                        <div className='proress-bar'></div>
                                                        <div className='progress-text'>SVN, GIT, Source Tree, Bit Bucke</div>
                                                    </div>
                                                </div>
                                                <div className='detailscv' style={{ marginTop: "50px" }}>
                                                    <h2>Join Me</h2>
                                                    <div className='address-cv-text join-Me-section'>
                                                        <span>Linkedin:</span> <a href="">{item.URL}</a>
                                                    </div>
                                                    <div className='phone-cv-text join-Me-section'>
                                                        <span>Facebook:</span> <a href="">https://www.facebook.com/gokulkchandran
                                                        </a>                                            </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='cv-right-details'>
                                            <div className='pro-details-cv'>
                                                <h2>Profile</h2>
                                                <p>{detail.PROFILE_SUMMARY}</p>
                                            </div>
                                            <div className='project-cv-details'>
                                                <h2>Employment History</h2>
                                                <div className='project-cv-onebyone'>
                                                    <div className='project-cv-name'>Branch Customer Service Representative</div>
                                                    <div className='project-start-end'>April,12,2010 to March 29 2019</div>
                                                    <ul className='project-line-manage'>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                    </ul>
                                                </div>
                                                <div className='project-cv-onebyone'>
                                                    <div className='project-cv-name'>Branch Customer Service Representative</div>
                                                    <div className='project-start-end'>April,12,2010 to March 29 2019</div>
                                                    <ul className='project-line-manage'>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                        <li>Maintained up to date knowledge of products and services</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='project-cv-details'>
                                                <h2>Education</h2>
                                                <div className='project-cv-onebyone'>
                                                    <div className='project-cv-name'>Bachelor of Communications, University of Seattle</div>
                                                    <div className='project-start-end'>April,12-2010 to April,12,2015</div>
                                                    <ul className='project-line-manage'>
                                                        <li>Graducation with High School</li>
                                                    </ul>
                                                </div>
                                                <div className='project-cv-onebyone'>
                                                    <div className='project-cv-name'>Bachelor of Communications, University of Seattle</div>
                                                    <div className='project-start-end'>April,12-2010 to April,12,2015</div>
                                                    <ul className='project-line-manage'>
                                                        <li>Graducation with High School</li>
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
            </>

        )
    }
}
