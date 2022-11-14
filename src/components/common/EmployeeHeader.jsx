import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'
import logo from "../../assets/images/logo.png"
import { courseList, getProfilePic } from '../../action/CandidateAction'
import { getGlobalSetting } from '../../action/dashboard'
import Pic from "../../assets/images/profilePic/secondary.jfif"
import { getStorage } from '../../utils'
export default class EmployeeHeader extends Component {
    constructor() {
        super()
        this.state = {
            data: undefined,
            MasterData: undefined,
            detail: getStorage(constant.keys.cd),
            getFile: undefined,
        }
    }
    componentDidMount() {
        this.onGetFileChange()
        courseList().then((res) => {
            if (res.status) {
                this.setState({ data: res.result })
            }
        })

        getGlobalSetting().then(res => {
            if (res.status) {
                this.setState({ MasterData: res.result })
            }
            else {
                console.log(res.error)
            }
        })
    }

    onGetFileChange = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        getProfilePic({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            this.setState({ getFile: res.result })
        })
    }

    render() {
        const { data, MasterData, detail, getFile } = this.state

        const { CANDIDATE_ID } = this.state.detail
        return (
            <React.Fragment>
                <div className="social">
                    <a target='_blank' href={MasterData?.FACEBOOK_URL}>
                        <div className="social-btn color-facebook">
                            <div className="icons8-facebook-app"></div>
                            <p className="order-1 google-font margin-telgram">Facebook</p>
                        </div>
                    </a>
                    <a target='_blank' href={MasterData?.TWITTER_URL}>
                        <div className="social-btn color-twitter">
                            <div className="icons8-twitter-app"></div>
                            <p className="order-1 google-font margin-instagram">Twitter</p>
                        </div>
                    </a>
                    <a target='_blank' href={MasterData?.YOUTUBE_URL}>
                        <div className="social-btn color-youtube">
                            <div className="icons8-youtube-app"></div>
                            <p className="order-1 google-font margin-instagram">YouTube</p>
                        </div>
                    </a>
                    <a target='_blank' href={MasterData?.LINKEDIN_URL}>
                        <div className="social-btn color-linkedin">
                            <div className="icons8-linkedin-app"></div>
                            <p className="order-1 google-font margin-instagram">Linkedin</p>
                        </div>
                    </a>
                </div>
                {/* <div className="preloader-outer">
                    <div className='loader'></div>
                </div> */}
                <header id="rg-header" className="rg-header rg-haslayout" style={{ overflowX: "clip" }}>
                    <div className="rg-navigationlogoarea">
                        <div className="top-menu top-menu-new">
                            <div className='container'>
                                <div className='col-md-12 text-right'>
                                    <ul>
                                        <li><i className='lnr lnr-phone-handset'></i> {MasterData?.PHONE_NUMBER}</li>
                                        <li><i className='lnr lnr-envelope'></i> {MasterData?.EMAIL_ID}</li>
                                        <li><a target='_blank' href={`https://wa.me/${MasterData?.WHATSAPP_NUMBER}?text=Please%20use%20the%20below%20number%20for%20Drop%20your%20CV%20feature.`} className='dropyourcv'>Drop your CV<i class="fa fa-whatsapp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <strong className="rg-logo"><Link to="/"><img src={logo} alt="Rozgar.com" title={constant.build.version} /></Link></strong>
                                    <div className="rg-rightarea" id="rg-nav-user">
                                        <nav id="rg-nav" className="rg-nav navbar-expand-lg navbar-toggleable-sm">
                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                <i className="lnr lnr-menu"></i>
                                            </button>
                                            <div className="collapse navbar-collapse rg-navigation" id="navbarNav">
                                                <ul>
                                                    <li className="menu-item-has-children page_item_has_children">
                                                        <Link to={constant.component.AllJobs.url}>Jobs</Link>
                                                        <div className="mega-menu c1">
                                                            <div className="mega-menu-row br-radiu-mega-menu">
                                                                <ul className="mega-menu-col mega-menu-group">
                                                                    {/* <li className="menhead spacehide">&nbsp;</li> */}
                                                                    <li className="menhead">Explore jobs</li>
                                                                    <li><Link target='_blank' to={constant.component.jobsBySkill.url}>Jobs by skill</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.jobsByDesignation.url}>Jobs by designation</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.jobsByCompany.url}>Jobs by company</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.jobsByCategory.url}>Jobs by category</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.jobsByLocation.url}>Jobs by location</Link></li>
                                                                </ul>
                                                                <ul className="mega-menu-col mega-menu-group">
                                                                    <li className="menhead">Explore Rozgar</li>
                                                                    <li><Link target='_blank' to={constant.component.homepage.url}>Search jobs</Link></li>
                                                                    {/* <li><Link to={''}>Create Rozgar alert</Link></li> */}
                                                                    <li><Link target='_blank' to={constant.component.register.url}>Register now</Link></li>
                                                                    {/* <li><Link to={constant.component.jobsByLocation.url}>Jobs by location</Link></li> */}
                                                                    <li><Link target='_blank' to={constant.component.AllJobs.url}>All jobs</Link></li>

                                                                </ul>
                                                                <ul className="mega-menu-col mega-menu-group">
                                                                    <li className="menhead">Freshers jobs</li>
                                                                    <li><a target='_blank' href={constant.component.latestfresherjob.url}>Latest fresher jobs</a></li>
                                                                    <li><a target='_blank' href='https://campus.rozgar.com/'>Students</a></li>
                                                                    <li><a target='_blank' href='https://campus.rozgar.com/'>Institution</a></li>
                                                                    <li><a target='_blank' href={constant.component.jobsByCompany.url}>Hiring Company</a></li>
                                                                    <li><a target='_blank' href='https://campus.rozgar.com/'>Internships</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* <li className="menu-item-has-children page_item_has_children">
                                            <a href="javascript:void(0);">Government Jobs</a>
                                        </li> */}

                                                    <li className="menu-item-has-children page_item_has_children">
                                                        <Link to={constant.component.companieslist.url}>Companies</Link>
                                                        <ul className="sub-menu">
                                                            <li><a target='_blank' href={constant.component.companieslist.url}>Browse all companies</a></li>
                                                            <li><a target='_blank' href={constant.component.topcompanieslist.url}>Top companies</a></li>

                                                            <li><Link to={{
                                                                pathname: constant.component.interviewQuestion.url

                                                            }}>Interview questions</Link></li>
                                                            {/* <li><a href="javascript:void(0)">Company reviews</a></li> */}
                                                            {/* <li><a href="javascript:void(0)">Interview questions</a></li> */}
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children page_item_has_children">
                                                        <a href="javascript:void(0);">Services</a>
                                                        <div className="mega-menu Sc2" >
                                                            <div className="mega-menu-row br-radiu-mega-menu">
                                                                <ul className="mega-menu-col mega-menu-group">
                                                                    <li className="menhead">Student Services</li>
                                                                    <li><Link target='_blank' to={{
                                                                        pathname: constant.component.ResumeMaking.url,
                                                                    }}>Resume Making</Link></li>
                                                                    <li><Link target='_blank' to={{
                                                                        pathname: constant.component.studyAbroad.url
                                                                    }}>Study Abroad</Link></li>
                                                                    <li><Link target='_blank' to={{
                                                                        pathname: constant.component.internationalWorkVisas.url.replace(":Enquiry", 'international-work-visa'),
                                                                        state: { title: 'International work Visas' }
                                                                    }}>International work Visas</Link></li>
                                                                    <li><Link target='_blank' to={{
                                                                        pathname: constant.component.StudentsExplorer.url.replace(":Enquiry", 'Career-explorer'),
                                                                        state: { title: 'Career Explorer' }
                                                                    }}>Career Explorer</Link></li>
                                                                    <li><Link target='_blank' to={{
                                                                        pathname: constant.component.careerAstrology.url.replace(":Enquiry", 'career-astrology'),
                                                                        state: { title: 'Career Astrology' }
                                                                    }}>Career Astrology</Link></li>
                                                                    <li><Link target='_blank' to={{
                                                                        pathname: constant.component.educationLoan.url.replace(":Enquiry", 'education-loan'),
                                                                        state: { title: 'Education Loan' }
                                                                    }}>Education Loan</Link></li>
                                                                </ul>
                                                                <ul className="mega-menu-col mega-menu-group">
                                                                    <li className="menhead">Employer Services</li>
                                                                    <li><Link target='_blank' to={constant.component.contracttualstaffing.url}>Contractual Staffing</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.hrmanagementsystem.url}>H R Management System</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.payrollautomation.url}>Payroll Automation</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.marketingtechnology.url}>Marketing Technology Solution</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.startupincubation.url}>Startup Incubation</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.fulltimehiring.url}>Full Time Hiring</Link></li>


                                                                    {/* <li><a href='https://www.mounttalent.com/contractual-staffing/' target='_blank'>Contractual Staffing</a></li>

                                                                    <li><a href='https://www.mounttalent.com/contractual-staffing/' target='_blank'>Contractual Staffing</a></li>
                                                                    <li><a href='https://www.mounttalent.com/hrms/' target='_blank'>H R Management System</a></li>
                                                                    <li><a href='https://www.mounttalent.com/employee-management/' target='_blank'>Payroll Automation</a></li>
                                                                    <li><a href='https://www.mounttalent.com/marketing-technology-solutions/' target='_blank'>Marketing Technology Solution</a></li>
                                                                    <li><a href='https://www.mounttalent.com/startup-incubation/' target='_blank'>Startup Incubation</a></li> */}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-item-has-children page_item_has_children">
                                                        <a href="javascript:void(0);">Resources</a>
                                                        <div className="mega-menu c2">
                                                            <div className="mega-menu-row br-radiu-mega-menu">
                                                                <ul className="mega-menu-col mega-menu-group">
                                                                    <li className="menhead">Let's begin your search</li>
                                                                    <li><Link target='_blank' to={{
                                                                        pathname: constant.component.AllJobs.url,
                                                                    }}>Explore cities</Link></li>
                                                                    <li><Link target='_blank' to={{
                                                                        pathname: constant.component.homepage.url
                                                                    }}>Smart search</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.discussionForum.url}>Discussion forum</Link></li>

                                                                    {/* <li className="menhead">Let's begin your search</li>
                                                                    <li><a href="javascript:void(0)">Explore cities</a></li>
                                                                    <li><a href="javascript:void(0)">Smart search</a></li>
                                                                    <li><a href="javascript:void(0)">Discussion forum</a></li> */}
                                                                </ul>
                                                                <ul className="mega-menu-col mega-menu-group">
                                                                    {/* <li className="menhead">Resource centre</li>
                                                                    <li><a href="javascript:void(0)">Resume samples</a></li> */}
                                                                    <li className="menhead">Resource centre</li>
                                                                    <li><Link target='_blank' to={constant.component.aboutUs.url}>About Us</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.blog.url}>Blog</Link></li>
                                                                    <li><Link target='_blank' to={constant.component.faqs.url}>FAQs</Link></li>
                                                                    {/* <li><Link to={constant.component.ads.url}>Ads</Link></li> */}
                                                                </ul>
                                                                <ul className="mega-menu-col mega-menu-group">
                                                                    <li className="menhead">Learning Hub</li>
                                                                    {this.state.data !== undefined && this.state.data.map((item, index) => {
                                                                        return (

                                                                            <li><a target="_blank" href={constant.component.courseDetailById.url.replace(':url/:COURSE_ID', item.URL + '/' + item.COURSE_ID)}>{item.COURSE_TITLE}</a></li>

                                                                        )
                                                                    })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a target='_blank' href={'https://recruit.rozgar.com/job-post'}>Post a job</a>
                                                    </li>
                                                    {/* <li className="menu-item-has-children prologinpd">
                                                        <Link className="loginhome" to={constant.component.logout.url}> Logout <i className="ti-power-off"></i></Link>
                                                    </li> */}
                                                    <li className="menu-item-has-children my-rozgar profileli page_item_has_children">
                                                        <a href="javascript:void(0);" className="rg-menubar-ez">
                                                            <div className='profileheader'>

                                                                {getFile != undefined && getFile.PROFILE_IMAGE ?
                                                                    <img src={`${process.env.REACT_APP_BASE_URL}/candidate/pic/${CANDIDATE_ID}/${getFile.PROFILE_IMAGE}`} /> :
                                                                    <img src={Pic} />
                                                                }
                                                                <i class="fas fa-chevron-down ml-2"></i>
                                                            </div>
                                                        </a>
                                                        <div className="mega-menu c3">
                                                            <div className="mega-menu-row br-radiu-mega-menu rg-EmployeeHeaderHover">
                                                                <ul className="mega-menu-col mega-menu-group">
                                                                    <li><Link to={constant.component.myRozgar.url}> My Rozgar</Link></li>
                                                                    <li><Link to={constant.component.editProfile.url}>Edit Profile</Link></li>
                                                                    <li><Link to={constant.component.recommendedJobs.url}>Recommended Jobs</Link></li>
                                                                    <li><Link to={constant.component.ProfilePerformance.url}>Profile Performance</Link></li>
                                                                    <li><Link to={constant.component.InboxMessage.url}>Recruiter Messages</Link></li>
                                                                    <li><Link to={constant.component.applicationStatus.url}> Application Status </Link></li>
                                                                    <li><a href="#">Manage Alerts</a></li>
                                                                </ul>
                                                                <ul className="mega-menu-col mega-menu-group">
                                                                    <li><Link to={constant.component.savedJobs.url}>Saved Jobs</Link></li>
                                                                    {/* <li><a href="#">Settings</a></li>
                                                                    <li><a href="#">Boost My Profile</a></li> */}
                                                                    <li><Link to={constant.component.changePassword.url}>Change Password</Link></li>
                                                                    <li><a href="#">Rewards</a></li>
                                                                    <li><Link to={constant.component.premiumJobs.url}>Premium Jobs</Link></li>
                                                                    <li><Link to={constant.component.featuredJobs.url}>Featured Jobs</Link></li>
                                                                    <li><Link to={constant.component.logout.url}>Logout</Link></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="menu-item-has-children p-0">
                                                        <ul className='rg-langnotification m-0'>
                                                            <li>
                                                                <a class="rg-notification" href="javascript:void(0);">
                                                                    <span class="rg-notificationtag">0</span>
                                                                    <i class="lnr lnr-alarm"></i>
                                                                </a>
                                                                <ul class="rg-dropdownmenu">
                                                                    <li><Link
                                                                    // to={{
                                                                    //         pathname: constant.component.Enquiry.url.replace(":Enquiry", 'update-job-profile'),
                                                                    //         state: { title: 'Update Job Profile' }
                                                                    //     }}
                                                                    >No Notifications</Link></li>
                                                                    {/* <li><Link to={{
                                                                        pathname: constant.component.Enquiry.url.replace(":Enquiry", 'job-recommendation'),
                                                                        state: { title: 'Job Recommendation' }
                                                                    }}>Job Recommendations</Link></li>
                                                                    <li><Link to={{
                                                                        pathname: constant.component.Enquiry.url.replace(":Enquiry", 'update-job-profile'),
                                                                        state: { title: 'Update Job Profile' }
                                                                    }}>Pending Actions03<em>- Update Job Profile</em></Link></li>
                                                                    <li><Link to={{
                                                                        pathname: constant.component.Enquiry.url.replace(":Enquiry", 'recruiter-searches'),
                                                                        state: { title: 'Recruiter Seaches' }
                                                                    }}>Recruiter Searches</Link></li> */}
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}
