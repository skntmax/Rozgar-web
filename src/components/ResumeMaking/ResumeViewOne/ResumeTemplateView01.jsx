import React, { Component } from 'react'
import userpic from '../../../assets/images/author/img-01.jpg'
export default class ResumeTemplateView01 extends Component {
  render() {
    return (
      <React.Fragment>
        <main id="rg-main" className="rg-main rg-haslayout">
			<div className="rg-haslayout rg-sectionspace">
				<div className="container">
					<div className="row">
                        <div className='col-md-12'>
                            <div className='resume-sample-box'>
                                <div className='resumetem-view-box'>
                                    <div className='bgleft-top-color-cv'>
                                        <i class="fa fa-bars" aria-hidden="true"></i>
                                    </div>
                                    <div className='bgright-top-color-cv'>
                                        <img className='img-responsive' src={userpic}/>
                                    </div>
                                </div>
                                <div className='d-flex resume-name-content-box'>
                                        <div className='resume-contact-info-box'>
                                            <div className='resume-contact-area'>
                                                CONTACTS
                                            </div>
                                            <ul className='person01-E-M-L'>
                                                <li><i class="fa fa-envelope-o"></i> mayurdevatwal@gmail.com</li>
                                                <li><i class="fa fa-phone"></i> +91-9988334422</li>
                                                <li><i class="fa fa-map-marker"></i> Dehradun</li>
                                            </ul>
                                        </div> 
                                        <div className='resume-persion-info'>
                                            <ul>
                                                <li>
                                                    <div className='persion-name-info01'>
                                                        <h1>MAYUR <span>DEVATWAL</span></h1>
                                                        <p>SR. UX DESIGNER <span>(MOBILE UX+VISUAL)</span></p>
                                                        <div className='d-flex align-items-center'>
                                                            <span className='portfolio-deg-logo'>Be</span>
                                                            <span className='portfilio-web'>behance.net/mayurdevatwal</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                <div className='resumetem-view-box'>
                                    <div className='bgleftcolor-cv pt-5'>
                                        <div className='educaiton-value-area'>
                                            <h3>EDUCATION VALUE</h3>
                                            <div className='educaiton-value-area-box'>
                                                <h2>B.E. IN COMPUTING</h2>
                                                <p>2008 - 2022</p>
                                                <h3>APIIT SD INDIA</h3>
                                            </div>
                                        </div>
                                        <div className='educaiton-value-area'>
                                            <h3>INDUSTRY EXPERIENCE -3.10</h3>
                                            <div className='educaiton-value-area-box mb-4'>
                                                <h2>SNAPDEAL</h2>
                                                <p>2005 - 2010</p>
                                                <h3>Sr. UX Desinger</h3>
                                            </div>
                                            <div className='educaiton-value-area-box mb-4'>
                                                <h2>CK12 Foundation (Khosla Labs)</h2>
                                                <p>2014 - 2022</p>
                                                <h3>UX Desinger</h3>
                                            </div>
                                            <div className='educaiton-value-area-box'>
                                                <h2>HUAWEI</h2>
                                                <p>2012 - 2014</p>
                                                <h3>UI Desinger</h3>
                                            </div>
                                        </div>
                                        <div className='educaiton-value-area'>
                                            <h3>ACHIEVEMENTS</h3>
                                            <div className='educaiton-value-area-box'>
                                                <h2>HUAWEI Mobile UI Design Winner</h2>
                                                <p>1st Prize 5000$</p>
                                                <h3><span className='font-weight-500'>Microsoft Snapdeal</span> Hackathon Winner</h3>
                                            </div>
                                        </div>
                                        <div className='educaiton-value-area pt-5'>
                                            <h3 className='pb-0'>PROJECT ACCOMPLISHED</h3>
                                        </div>
                                    </div>
                                    <div className='bgrightcolor-cv pt-5'>
                                        <div className='educaiton-value-area'>
                                            <h3>EDUCATION VALUE</h3>
                                            <div className='desgination-about-area-box'>
                                                <p>Mayur Devatawal is a Sr. UX Designer in Snapdeal. He is taking care of iOS & Android apps in the origanizations. He takes care of userflow, interactions and visuals alos. He has completed is BE from APPIT SD INDIA with degree in computing. Design is his pro-fession by Passion.</p>

                                                <div className='d-flex align-items-center pt-3'>
                                                    <span className='portfolio-deg-logo'>IN</span>
                                                    <span className='portfilio-web'>in.linkedin.com/in/mayurdevatwal</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='educaiton-value-area'>
                                            <h3>SKILLS</h3>
                                            <div className='desgination-about-area-box'>
                                                <p><span className='font-weight-600 pb-1'>Primary Skills:</span>UX, Interaction and Visual Designer</p>
                                                <p><span className='font-weight-600 pb-1'>Software Practice:</span>Agile</p>
                                                <p><span className='font-weight-600 pb-1'>Multimedia Tools:</span>Photoshop, Illustrator, Sketch</p>
                                                <p><span className='font-weight-600 pb-1'>Prototyping Tools:</span>Axure, Marvelapp</p>
                                                <p><span className='font-weight-600 pb-1'>General Business Tools:</span>M PowerPoint, Word, Excel & Visio</p>
                                                <div className='d-flex pt-3'>
                                                    <img className='pr-2' src={'./assets/images/photosho-Icons.jpg'}/>
                                                    <img className='pr-2' src={'./assets/images/photosho-Icons.jpg'}/>
                                                    <img src={'./assets/images/photosho-Icons.jpg'}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='educaiton-value-area'>
                                            <h3>RATING</h3>
                                            <div className='rating-box-area'>
                                                <div className='d-flex'>
                                                    <div className='d-flex flex-column' style={{width:'80%'}}>
                                                        <span className='text-white font-weight-600'>PHOTOSHOP</span>
                                                        <div className='d-flex'>
                                                        <progress class="progress-bar-rating" style={{width:'80%'}} value="50" max="100"></progress><span className='text-white'>60%</span></div>
                                                        <span className='text-orange font-weight-600'>PRO</span>
                                                    </div>
                                                    <div className='d-flex flex-column' style={{width:'80%'}}>
                                                        <span className='text-white font-weight-600'>RAPID PROTOTYPES</span>
                                                        <div className='d-flex'>
                                                        <progress class="progress-bar-rating" style={{width:'80%'}} value="50" max="100"></progress><span className='text-white'>40%</span></div>
                                                        <span className='text-orange font-weight-600'>PRO</span>
                                                    </div>
                                                </div>
                                                <div className='d-flex mt-4 pt-4'>
                                                    <div className='d-flex flex-column' style={{width:'80%'}}>
                                                        <span className='text-white font-weight-600'>ILLUSTRATOR</span>
                                                        <div className='d-flex'>
                                                        <progress class="progress-bar-rating" style={{width:'80%'}} value="50" max="100"></progress><span className='text-white'>70%</span></div>
                                                        <span className='text-orange font-weight-600'>INTERMEDIATE</span>
                                                    </div>
                                                    <div className='d-flex flex-column' style={{width:'80%'}}>
                                                        <span className='text-white font-weight-600'>SKETCH</span>
                                                        <div className='d-flex'>
                                                        <progress class="progress-bar-rating" style={{width:'80%'}} value="50" max="100"></progress><span className='text-white'>60%</span></div>
                                                        <span className='text-orange font-weight-600'>BEGINNER</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='project-name-content-box'>
                                    <div className='project-details-per01'>
                                        <h4>SNAPDEAL SELLER APPS</h4>
                                        <h5>UX+VISUAL + USER RESEARCH</h5>
                                        <p>Working on Android and iOS seller apps. Taking care of interaction and visuals. Performinf research meeting sellers and designing based on the inputs and feedback.</p>
                                    </div>
                                    <div className='project-details-per01'>
                                        <h4>SNAPDEAL SELLER APPS</h4>
                                        <h5>UX+VISUAL + USER RESEARCH</h5>
                                        <p>Working on Android and iOS seller apps. Taking care of interaction and visuals. Performinf research meeting sellers and designing based on the inputs and feedback.</p>
                                    </div>
                                    <div className='project-details-per01'>
                                        <h4>SNAPDEAL SELLER APPS</h4>
                                        <h5>UX+VISUAL + USER RESEARCH</h5>
                                        <p>Working on Android and iOS seller apps. Taking care of interaction and visuals. Performinf research meeting sellers and designing based on the inputs and feedback.</p>
                                    </div>
                                    <div className='project-details-per01'>
                                        <h4>SNAPDEAL SELLER APPS</h4>
                                        <h5>UX+VISUAL + USER RESEARCH</h5>
                                        <p>Working on Android and iOS seller apps. Taking care of interaction and visuals. Performinf research meeting sellers and designing based on the inputs and feedback.</p>
                                    </div>
                                </div>
                                <div className='boi-overview-box'>
                                    <div className='bgleftcolor-cv d-flex pt-1'>
                                        <h4 className='boi-overview'><span>BOI</span> OVERVIEW</h4>
                                    </div>
                                    <div className='boi-details-box pt-3'>
                                        <ul className='d-flex justify-content-center'>
                                            <li>
                                                <img src={'./assets/images/height-icon.jpg'}/>
                                                <span>HEIGHT</span>
                                            </li>
                                            <li>
                                                <img src={'./assets/images/age-icons.jpg'}/>
                                                <span>AGE</span>
                                            </li>
                                            <li>
                                                <img src={'./assets/images/online-icons.jpg'}/>
                                                <span>ONLINE</span>
                                            </li>
                                            <li>
                                                <img src={'./assets/images/music-icons.jpg'}/>
                                                <span>MUSIC</span>
                                            </li>
                                            <li>
                                                <img src={'./assets/images/sleep-icons.jpg'}/>
                                                <span>SLEEP</span>
                                            </li>
                                            <li>
                                                <img src={'./assets/images/ps4-icons.jpg'}/>
                                                <span>PS4</span>
                                            </li>
                                        </ul>
                                        <hr className='hrlinebreack d-flex justify-content-center'/>
                                        <ul className='d-flex justify-content-center pt-2'>
                                            <li>
                                                <div>178</div>
                                                <span>CENTIMETERS</span>
                                            </li>
                                            <li>
                                                <div>27</div>
                                                <span>AVERAGE<br/>YEARS</span>
                                            </li>
                                            <li>
                                                <div>10</div>
                                                <span>HOURS<br/>PER DAY</span>
                                            </li>
                                            <li>
                                                <div>04</div>
                                                <span>HOURS<br/>PER DAY</span>
                                            </li>
                                            <li>
                                                <div>07</div>
                                                <span>HOURS<br/>PER DAY</span>
                                            </li>
                                            <li>
                                                <div>02</div>
                                                <span>HOURS<br/>PER DAY</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </React.Fragment>
    )
  }
}
