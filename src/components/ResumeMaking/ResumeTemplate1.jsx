import React, { Component } from 'react'
import constant from '../../constant'

export default class ResumeTemplate1 extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.resumeTemplate1
    }
  render() {
    return (
        <React.Fragment>
             <section className="welcome_area demo2 flex align-items-center">
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
                                            <h5>Annu singh Chhabra</h5>
                                            
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
                                                <li className='skills-img-bx'><img src={'./assets/images/html.png'} alt='Image'  style={{width: "25px"}}/></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className='skills-list-right'>
                                            <ul className='resume-skills-list-bx'>
                                                <li className='skills-img-bx'><img src={'./assets/images/css.png'} alt='Image' style={{width: "25px"}}/></li>
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
            </section>            

            
        </React.Fragment>
    )
  }
}
