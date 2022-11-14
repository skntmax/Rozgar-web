import React, { Component } from 'react'

export default class ResumeTemplate4 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        // document.title = constant.title.resumeTemplate4
    }
    render() {
        return (
            <React.Fragment>
                <section className="welcome_area demo2 flex align-items-center">
                    <div className="container">
                        <div className='resume-four-with-box'>
                            <div className="row ">
                                <div className="col-12 col-lg-12 col-md-12">
                                    <div className='top-had-resume4'>
                                        <div className='user-profile-bx'>
                                            <img src={'./assets/images/resume-user.png'} alt='Image' />
                                        </div>
                                        <div className='name-user-bx'>
                                            <h3>Gokul chandran</h3>
                                            <p>UI designer & Front-end developer</p>
                                        </div>
                                        <div className='user-info-bx'>
                                            <p className='com-box'><a href=''>iamgokul.com</a></p>
                                            <p className='mail-box'><a href=''>gokulchandran@gmail.com</a></p>
                                            <p className='phon-box'><a href=''>+91 8891719053</a></p>

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='temp-about-me-bx'>
                                        <p>I'm a UI designer & Front-end developer with curiosity and passion for designing
                                            and coding clean and functional user experiences. I enjoy turning complex problems into beautiful
                                            and intuitive interface designs. I focus on writing clean, elegant and efficient code.
                                            I'm constantly improving and developing my skills and abilities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='part-designer-bx'>
                                        <div className='had-py-sec'>
                                            <h4><span className='hd-lft'>Part Designer</span>  <span className='hd-rgt'>Part Coder</span></h4>
                                        </div>
                                        <div className='ma-section-box'>
                                            <div className='left-designer-bx'>
                                                <ul>
                                                    <li>UI / UX Design</li>
                                                    <li>App Design (iOS/ Android)</li>
                                                    <li>Web Design</li>
                                                    <li>Branding</li>
                                                    <li>Logo Design</li>
                                                </ul>
                                            </div>

                                            <div class="wrapper">
                                                <div class="d1">
                                                    <div><span>Coder </span></div>
                                                </div>
                                                <div class="d2">
                                                    <div><span>Designer</span></div>
                                                </div>

                                            </div>
                                            <div className='right-designer-bx'>
                                                <ul>
                                                    <li>Front End Development</li>
                                                    <li>App Design (iOS/ Android)</li>
                                                    <li>HTML5 </li>
                                                    <li>CSS3 / LESS</li>
                                                    <li>jQuery</li>
                                                    <li>Javascript</li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>
                                    <div className='part-designer-bx'>
                                        <div className='had-py-sec'>
                                            <h4><span className='hd-lft'>Technical Skills</span></h4>
                                        </div>
                                        <div className='about-profile-bx'>

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

                                                        <div className='bar bar-yellow' style={{ width: "60%" }}>
                                                            <p className='percent'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='progress-bar-box'>
                                                    <h5>HTML5</h5>
                                                    <div className='progress'>

                                                        <div className='bar bar-green' style={{ width: "75%" }}>
                                                            <p className='percent'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='progress-bar-box'>
                                                    <h5>CSS / LESS</h5>
                                                    <div className='progress'>

                                                        <div className='bar bar-red' style={{ width: "80%" }}>
                                                            <p className='percent'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='progress-bar-box'>
                                                    <h5>jQuery</h5>
                                                    <div className='progress'>

                                                        <div className='bar bar-greenblue' style={{ width: "50%" }}>
                                                            <p className='percent'></p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <div className='education-section-bx'>
                                        <div className='had-py-sec'>
                                            <h4><span className='hd-lft'>Education</span></h4>
                                        </div>
                                        <div className='education-in-bx'>
                                            <div className='education-item'>
                                                <h4>Advanced Diploma in Graphics & 3D Animation <span>2009</span></h4>
                                                <p>First Image Multimedia Education, Kerala, India.</p>
                                            </div>
                                            <div className='education-item'>
                                                <h4>Plus Two <span>2007</span></h4>
                                                <p>Board of Higher Secondary Education Kerala <span>80% Marks</span></p>
                                            </div>
                                            <div className='education-item'>
                                                <h4>SSLC <span>2005</span></h4>
                                                <p>Board of Secondary Education Kerala <span>81% Marks</span></p>
                                            </div>


                                        </div>

                                    </div>
                                    <div className='personal-information-sec'>
                                        <div className='had-py-sec'>
                                            <h4><span className='hd-lft'>Personal Information</span></h4>
                                        </div>
                                        <div className='personal-info-lft-bx'>
                                            <p><span>Age & Date of Birth:</span> 26, 03 February 1990</p>
                                            <p><span>Father’s Name:</span> Chandrasekharan Nair</p>
                                            <p><span>Sex, Marital status:</span> Male, Single</p>
                                            <p><span>Languages known:</span> English & Malayalam (Read, Write & Speak)</p>
                                            <p><span>Interests:</span> Digital Painting, Drawing, Music & Films</p>
                                            <p><span>Address:</span> Kurunithalakkal (H), Manjoora (P.O),<br /> Wayanad,
                                                Kerala, India 673575</p>


                                        </div>

                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='part-designer-bx'>
                                        <div className='had-py-sec'>
                                            <h4>Professional Experience</h4>
                                        </div>
                                        <div className='prof-experience-bx'>
                                            <div className='pr-experience-item-bx'>
                                                <h4>UI Designer</h4>
                                                <h5>N’celadus Infotek Pvt.Ltd - <small>Trivandrum, India. Dec 2010 - till date</small></h5>
                                                <p>Conceptualisation, design and development of Web and Mobile-based applications. The CSS framework & dynamic web templates and design assets I created were pivotal parts of the applications. Focused more on concept design, user interface design and art direction.</p>

                                            </div>
                                            <div className='pr-experience-item-bx'>
                                                <h4>Web / Graphic Designer</h4>
                                                <h5>Polus software Pvt.Ltd - <small>Polus software Pvt.Ltd Oct 2010 - Dec 2010</small></h5>
                                                <p>Responsibilities included UI design, front end development.</p>

                                            </div>
                                            <div className='pr-experience-item-bx'>
                                                <h4>Web / Graphic Designer</h4>
                                                <h5>Invision Technologies Pvt.Ltd  - <small>Trivandrum, India. May 2010 - Sep 2010</small></h5>
                                                <p>Design, HTML/CSS, flash and illustrations for websites and web marketing campaigns for a large and varied client base. I was also responsible to manage a small team of designers.</p>

                                            </div>
                                            <div className='pr-experience-item-bx'>
                                                <h4>Web / Graphic Designer</h4>
                                                <h5>Prolific Digital Creations - <small>Calicut, India. Nov 2009 - Apr 2010</small></h5>
                                                <p>Served as web designer designing websites, print design, illustrations, flash presentations and branding.</p>

                                            </div>

                                        </div>


                                    </div>
                                    <div className='join-me-section'>
                                        <div className='had-py-sec'>
                                            <h4>Join Me</h4>
                                        </div>
                                        <div className='join-me-link-bx'>
                                            <p><span>Linkedin : </span> <a href=''>https://in.linkedin.com/in/gokulkchandran</a></p>
                                            <p><span>Facebook : </span> <a href=''>https://www.facebook.com/gokulkchandran</a></p>
                                        </div>

                                    </div>
                                    <div className='join-me-section'>
                                        <div className='had-py-sec'>
                                            <h4>Reference</h4>
                                        </div>
                                        <div className='join-me-link-bx'>
                                            <p>References available on request.</p>
                                        </div>

                                    </div>
                                    <div className='join-me-section'>
                                        <div className='had-py-sec'>
                                            <h4>Declaration</h4>
                                        </div>
                                        <div className='join-me-link-bx'>
                                            <p>I hereby declare that the given details are true to the best of my knowledge and belief.</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='signature-bootom-box'>
                                        <p>Sincerely,</p>
                                        <h5>Gokul Chandran</h5>

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
