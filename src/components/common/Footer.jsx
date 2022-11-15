import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant';
import Chatbot from '../home/ChatBot';
import logo from '../../assets/images/logo.png'
import { getGlobalSetting } from "../../action/dashboard";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MasterData: undefined,
        }
    }
    componentDidMount() {
        getGlobalSetting().then(res => {
            if (res.status) {
                this.setState({ MasterData: res.result })
            }
            else {
                console.log(res.error)
            }
        })

    }
    render() {
        const { MasterData } = this.state
        return (
            <React.Fragment>
                <footer id="rg-footer" className="rg-footer rg-haslayout">
                    <div className="rg-fourcolumns rg-bglight" id="mobilehide">
                        <div className="container">
                            <div className="row">
                                <div className="rg-footercol rg-widgetjobarea">
                                    <div className="rg-fwidgettitle"><h3>Jobs</h3></div>
                                    <div className="rg-widgetcontent">
                                        <ul>
                                            <li><a href={constant.component.homepage.url}>Search jobs</a></li>
                                            <li><Link to={constant.component.register.url}>Register now</Link></li>
                                            <li><Link to={constant.component.jobsByLocation.url}>Jobs by location</Link></li>
                                            <li><Link to={constant.component.AllJobs.url}>All jobs</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="rg-footercol rg-widgetjobarea">
                                    <div className="rg-fwidgettitle"><h3>&nbsp;</h3></div>
                                    <div className="rg-widgetcontent">
                                        <ul>
                                            <li><Link to={constant.component.jobsBySkill.url}>Jobs by skill</Link></li>
                                            <li><Link to={constant.component.jobsByDesignation.url}>Jobs by designation</Link></li>
                                            <li><Link to={constant.component.jobsByCompany.url}>Jobs by company</Link></li>
                                            <li><Link to={constant.component.jobsByCategory.url}>Jobs by category</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="rg-footercol rg-widgetjobarea">
                                    <div className="rg-fwidgettitle"><h3>Freshers Jobs</h3></div>
                                    <div className="rg-widgetcontent">
                                        <ul>
                                            <li><a target='_blank' href={constant.component.latestfresherjob.url}>Latest fresher jobs</a></li>
                                            <li><a target='_blank' href='https://campus.rozgar.com/'>Students</a></li>
                                            <li><a target='_blank' href='https://campus.rozgar.com/'>Institution</a></li>
                                            <li><a href={constant.component.jobsByCompany.url}>Hiring company</a></li>
                                            <li><a target='_blank' href='https://campus.rozgar.com/'>Internships</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="rg-footercol rg-widgetjobarea">
                                    <div className="rg-fwidgettitle"><h3>Companies</h3></div>
                                    <div className="rg-widgetcontent">
                                        <ul>
                                            <li><a target='_blank' href={constant.component.companieslist.url}>Browse all companies</a></li>
                                            <li><a target='_blank' href={constant.component.topcompanieslist.url}>Top companies</a></li>

                                            <li><Link to={{
                                                pathname: constant.component.interviewQuestion.url,

                                            }}>Interview questions</Link></li>
                                            {/* <li><a href="javascript:void(0)">Company reviews</a></li> */}
                                            {/* <li><a href="javascript:void(0)">Interview questions</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="rg-footercol rg-widgetusfulllinks">
                                    <div className="rg-fwidgettitle"><h3>Services</h3></div>
                                    <div className="rg-widgetcontent">
                                        <ul>
                                        <li><Link to={{
                                            pathname: constant.component.ResumeMaking.url,}}>Resume Making</Link></li>
                                            <li><Link to={{
                                                pathname: constant.component.studyAbroad.url
                                            }}>Study Abroad</Link></li>
                                            <li><Link to={{
                                                pathname: constant.component.internationalWorkVisas.url.replace(":Enquiry", 'international-work-visa'),
                                                state: { title: 'International work Visas' }
                                            }}>International work Visas</Link></li>
                                            <li><Link to={{
                                                pathname: constant.component.StudentsExplorer.url.replace(":Enquiry", 'career-explorer'),
                                                state: { title: 'Students Benefits' }
                                            }}>Career Explorer</Link></li>
                                            <li><Link to={{
                                                pathname: constant.component.careerAstrology.url.replace(":Enquiry", 'career-astrology'),
                                                state: { title: 'Career Astrology' }
                                            }}>Career Astrology</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rg-footeraboutus pt-2 pb-2" id="mobilehide">
                        <div className="container">
                            <div className="row">
                                <div className="fivecolom">
                                    <div className="colom5 pl-3">
                                        <a href={constant.component.homepage.url}><img className="roz-logo" src={logo} alt="Rozgar.com" title={constant.build.version} /></a>
                                        <h3 className="headh3">Connect with us</h3>
                                        <ul className="rg-socialiconssimple">
                                            <li className="rg-facebook"><a target="_blank" href={MasterData?.FACEBOOK_URL}><i className="fa fa-facebook-f"></i></a></li>
                                            <li className="rg-twitter"><a target="_blank" href={MasterData?.TWITTER_URL}><i className="fab fa-twitter"></i></a></li>
                                            <li className="rg-youtube"><a target="_blank" href={MasterData?.YOUTUBE_URL}><i className="fab fa-youtube"></i></a></li>
                                            <li className="rg-linkedin"><a target="_blank" href={MasterData?.LINKEDIN_URL}><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="colom5">
                                        <h3 className="headh4">Quick links</h3>
                                        <ul className="addfooter">
                                            <li><Link to={constant.component.register.url}>Register</Link></li>
                                            <li><Link to={constant.component.signin.url}>Log In</Link></li>
                                            <li><a target='_blank' href={constant.component.companieslist.url}>Companies</a></li>
                                        </ul>
                                    </div>

                                    <div className="colom5">
                                        <h3 className="headh4">Let's begin your search</h3>
                                        <ul className="addfooter">
                                            <li><Link to={constant.component.AllJobs.url}>Explore cities</Link></li>
                                            <li><Link to={constant.component.homepage.url}>Smart search</Link></li>
                                            <li><Link to={constant.component.discussionForum.url}>Discussion forum</Link></li>
                                            <li><Link to={constant.component.JobSearchIndia.url}>Job Search India</Link></li>
                                            <li><Link to={constant.component.FullStackDeveloperJobsInIndia.url}>Full Stack Jobs in India</Link></li>
                                            {/* <li><a href="javascript:void(0);">Explore cities</a></li> */}
                                            {/* <li><a href="javascript:void(0);">Smart search</a></li> */}
                                            {/* <li><a href="javascript:void(0);">Discussion forum</a></li> */}

                                        </ul>
                                    </div>

                                    <div className="colom5">
                                        <h3 className="headh4">Resource centre</h3>
                                        <ul className="addfooter">
                                            <li><Link to={constant.component.aboutUs.url}>About Us</Link></li>
                                            <li><Link to={constant.component.blog.url}>Blog</Link></li>
                                            <li><Link to={constant.component.faqs.url}>FAQs</Link></li>
                                        </ul>
                                    </div>

                                    <div className="colom5">
                                        <h3 className="headh4">Employer Zone</h3>
                                        <ul className="addfooter">
                                            <li><a href={'https://recruit.rozgar.com/job-post'} target='_blank'>Post a Job</a></li>
                                            <li><a href={'https://recruit.rozgar.com/subscriptions'} target='_blank'>Buy online</a></li>
                                            <li><a target='_blank' href={'https://recruit.rozgar.com/'}>Employer Login</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='discalaimerbox'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <p><span>Disclaimer:</span> <a href="/">Rozgar.com</a> intended only to serve as a preliminary medium of contact and exchange of information for its users / members / visitors who have a bona fide intention to contact and/or be contacted for the purposes related to genuine existing job vacancies and for other career enhancement services.  The site is a public site with free access and Rozgar assumes no liability for the quality and genuineness of responses. <a href="/">Rozgar.com</a> Pte. LTD cannot monitor the responses that a person may receive in response to information he/she has displayed on the site. The individual/company would have to conduct its own background checks on the bonafide nature of all response(s). We keep updating the portal so any queries and concerns please report a problem or check back soon.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rg-footerbottom">
                        {/* <a className="rg-btnscrolltop" href=""><i className="fa fa-angle-double-up"></i></a> */}
                        {/* <a className="rg-btnscrolltop" href="javascript:void(0);"><i className="fa fa-angle-double-up"></i></a> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <p className="rg-copyrights">Copyright © 2021-22 Rozgar.com. All Rights Reserved | Powered by : <span><a target='_blank' href="https://valueinnovationlabs.com/" className='powercom'>Value Innovation Labs</a></span></p>
                                    <nav className="rg-addnav">
                                        <ul>
                                            <li><a target='_blank' href={constant.component.reportIssue.url}>Report an issue</a></li>
                                            <li><Link to={constant.component.privacyPolicy.url}>Privacy policy</Link></li>
                                            <li><Link to={constant.component.termsConditions.url}>Terms &amp; conditions</Link></li>
                                            {/* <li><a href="javascript:void(0);">Fraud alert</a></li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Chatbot />
            </React.Fragment>
        )
    }


}
