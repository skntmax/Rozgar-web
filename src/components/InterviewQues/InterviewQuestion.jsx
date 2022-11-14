import React, { Component } from 'react'
import JobsBySkill from '../../components/jobsBySkill/jobsBySkill'
import constant from '../../constant'
import { companyList, DesignationList, FunctionalAreaList, IndustryList, ITSkillList, locationList, NonITSkillList, premiumCityList } from '../../action/jobsByActions'
import Skills from './Skills';
import Designation from './designation';
import Company from './company'
import Location from '../../components/jobsBy/location';
import Category from '../../components/jobsBy/category';
import All from './all'
import { Link, NavLink } from 'react-router-dom';
import Searchbar from './searchBar';
import Loader from '../../components/common/Loader';
import JobsByLoader from '../../pages/jobsBy/jobsByLoader'
import { IQcompanyList, IQDesignationList, IQITSkillList, IQNonITSkillList } from '../../action/CompanyQuestionAction';
import { capFirstLetterInSentence } from '../../utils';
import { Helmet } from 'react-helmet';
export default class InterviewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IT_SKILL_LIST: [],
            NON_IT_SKILL_LIST: [],
            IT_SKILL_LIST_COUNT: undefined,
            NON_IT_SKILL_LIST_COUNT: undefined,
            DESIGNATION_LIST: [],
            DESIGNATION_LIST_COUNT: undefined,
            FUNCTIONAL_AREA_LIST: [],
            FUNCTIONAL_AREA_LIST_COUNT: undefined,
            INDUSTRY_LIST: [],
            INDUSTRY_LIST_COUNT: undefined,
            COMPANY_LIST: [],
            COMPANY_LIST_COUNT: undefined,
            LOCATION_LIST: null,
            TOP_LOCATION: null
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        IQITSkillList().then(res => {
            if (res.status) {
                this.setState({ IT_SKILL_LIST: res.result.list, IT_SKILL_LIST_COUNT: res.result.count })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })


        IQNonITSkillList().then(res => {
            if (res.status) {
                this.setState({ NON_IT_SKILL_LIST: res.result.list, NON_IT_SKILL_LIST_COUNT: res.result.count })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })

        IQDesignationList().then(res => {
            if (res.status) {
                this.setState({ DESIGNATION_LIST: res.result.list, DESIGNATION_LIST_COUNT: res.result.count })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })

        // FunctionalAreaList().then(res => {

        //     if (res.status) {
        //         this.setState({ FUNCTIONAL_AREA_LIST: res.result.list, FUNCTIONAL_AREA_LIST_COUNT: res.result.count })
        //     }
        //     else {
        //         alert(res.error)
        //     }
        // }).catch(err => {
        //     alert(err)
        // })

        // IndustryList().then(res => {
        //     if (res.status) {
        //         this.setState({ INDUSTRY_LIST: res.result.list, INDUSTRY_LIST_COUNT: res.result.count })
        //     }
        //     else {
        //         alert(res.error)
        //     }
        // }).catch(err => {
        //     alert(err)
        // })
        IQcompanyList().then(res => {
            if (res.status) {
                this.setState({ COMPANY_LIST: res.result.list, COMPANY_LIST_COUNT: res.result.count })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })

        // locationList().then(res => {
        //     if (res.status) {
        //         this.setState({ LOCATION_LIST: res.result })
        //     }
        //     else {
        //         alert(res.error)
        //     }
        // }).catch(err => {
        //     alert(err)
        // })

        // premiumCityList().then(res => {

        //     if (res.status) {
        //         this.setState({ TOP_LOCATION: res.result.city })
        //     }
        //     else {
        //         alert(res.error)
        //     }
        // }).catch(err => {
        //     alert(err)
        // })

    }
    componentDidUpdate(props) {

        switch (this.props.location.pathname) {
            case constant.component.interviewQuestion.url:
                document.title = constant.title.homeAllQuestions
                break;
            case constant.component.interviewQuestionBySkills.url:
                document.title = constant.title.homeBySkill
                break;
            case constant.component.interviewQuestionByCompany.url:
                document.title = constant.title.homeByCompany
                break;
            case constant.component.interviewQuestionByDesignation.url:
                document.title = constant.title.homeByRole
                break;
            default:
                document.title = 'Rozgar.com'
        }
    }


    render() {
        const { IT_SKILL_LIST, IT_SKILL_LIST_COUNT, NON_IT_SKILL_LIST, NON_IT_SKILL_LIST_COUNT, DESIGNATION_LIST, DESIGNATION_LIST_COUNT,
            INDUSTRY_LIST, INDUSTRY_LIST_COUNT, FUNCTIONAL_AREA_LIST, FUNCTIONAL_AREA_LIST_COUNT, COMPANY_LIST, COMPANY_LIST_COUNT, LOCATION_LIST, TOP_LOCATION } = this.state;

        return (
            <React.Fragment>
                    <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}>{capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " , By Skill , By Company, By Designations"}></meta>
<meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "The most common job interview questions that employers ask, examples of the best answers for each question, and tips for how to prepare and respond."} />
<link rel="canonical" href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "The most common job interview questions that employers ask, examples of the best answers for each question, and tips for how to prepare and respond."} />
<meta property="og:url" content={window.location.href} />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "The most common job interview questions that employers ask, examples of the best answers for each question, and tips for how to prepare and respond."} />
<meta name="twitter:url" content={window.location.href} />
<meta name="twitter:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" />
</Helmet>
                <main id="rg-main" className="rg-main rg-haslayout pt-0">
                    <div className="rg-sectionspace rg-haslayout pt-0">
                        <div className="rozgar-jobbylocsearch">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 offset-1">
                                        <Searchbar history={this.props.history} />
                                        <ul className='jobsbylocation-top jobsbylocation-list'>
                                        <li><Link style={{background:'none', color:'white'}} to={constant.component.interviewQuestion.url}>Browse Interview Questions</Link></li>
                                        {/* <li><Link to={constant.component.interviewQuestion.url} className={this.props.location.pathname === constant.component.interviewQuestion.url && 'active'}>Interview Questions</Link></li> */}
                                            <li><Link to={constant.component.interviewQuestionBySkills.url} className={this.props.location.pathname === constant.component.interviewQuestionBySkills.url && 'active'}>By Skill</Link></li>
                                            <li><Link to={constant.component.interviewQuestionByCompany.url} className={this.props.location.pathname === constant.component.interviewQuestionByCompany.url && 'active'}>By Company</Link></li>
                                            <li><Link to={constant.component.interviewQuestionByDesignation.url} className={this.props.location.pathname === constant.component.interviewQuestionByDesignation.url && 'active'}>By Designation</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={this.props.location.pathname === constant.component.interviewQuestion.url ? 'rozgar-browseJobs' : 'rozgar-profile-main-content'}>
                            <div className='container'>
                                <div className='row'>
                                    <div className={this.props.location.pathname !== constant.component.interviewQuestion.url ? 'col-md-9' : 'col-md-12'}>
                                        
                                        {this.props.location.pathname === constant.component.interviewQuestionBySkills.url && (!IT_SKILL_LIST.length || !NON_IT_SKILL_LIST.length) && <JobsByLoader />}
                                        {this.props.location.pathname === constant.component.interviewQuestionBySkills.url && IT_SKILL_LIST.length > 0 && NON_IT_SKILL_LIST.length > 0 &&
                                            <Skills
                                                IT_SKILL_LIST={IT_SKILL_LIST}
                                                IT_SKILL_LIST_COUNT={IT_SKILL_LIST_COUNT}
                                                NON_IT_SKILL_LIST={NON_IT_SKILL_LIST}
                                                NON_IT_SKILL_LIST_COUNT={NON_IT_SKILL_LIST_COUNT}
                                            />
                                        }
                                
                                        {this.props.location.pathname === constant.component.interviewQuestionByDesignation.url && !DESIGNATION_LIST.length && <JobsByLoader />}
                                        {
                                            this.props.location.pathname === constant.component.interviewQuestionByDesignation.url && DESIGNATION_LIST.length > 0 &&
                                            <Designation
                                                DESIGNATION_LIST={DESIGNATION_LIST}
                                                DESIGNATION_LIST_COUNT={DESIGNATION_LIST_COUNT}
                                            />
                                        }
                                        {this.props.location.pathname === constant.component.interviewQuestionByCompany.url &&
                                            !COMPANY_LIST.length && <JobsByLoader />
                                        }
                                        {this.props.location.pathname === constant.component.interviewQuestionByCompany.url &&
                                            COMPANY_LIST.length > 0 && < Company
                                                COMPANY_LIST={COMPANY_LIST}
                                                COMPANY_LIST_COUNT={COMPANY_LIST_COUNT}
                                            />
                                        }
                                        {/* {this.props.location.pathname == constant.component.jobsByCategory.url &&
                                            (!FUNCTIONAL_AREA_LIST.length || !INDUSTRY_LIST) &&
                                            <JobsByLoader />
                                        }
                                        {this.props.location.pathname == constant.component.jobsByCategory.url &&
                                            FUNCTIONAL_AREA_LIST.length > 0 && INDUSTRY_LIST &&
                                            <Category
                                                FUNCTIONAL_AREA_LIST={FUNCTIONAL_AREA_LIST}
                                                FUNCTIONAL_AREA_LIST_COUNT={FUNCTIONAL_AREA_LIST_COUNT}
                                                INDUSTRY_LIST={INDUSTRY_LIST}
                                                INDUSTRY_LIST_COUNT={INDUSTRY_LIST_COUNT}
                                            />
                                        } */}
                                        {/* {this.props.location.pathname === constant.component.jobsByLocation.url &&
                                            (!LOCATION_LIST || !TOP_LOCATION) &&
                                            <JobsByLoader />
                                        }
                                        {this.props.location.pathname === constant.component.jobsByLocation.url &&
                                            LOCATION_LIST && TOP_LOCATION &&
                                            <Location
                                                LOCATION_LIST={LOCATION_LIST}
                                                TOP_LOCATION={TOP_LOCATION}
                                            />
                                        } */}
                                        {this.props.location.pathname === constant.component.interviewQuestion.url &&
                                            // FUNCTIONAL_AREA_LIST.length > 0 && INDUSTRY_LIST &&
                                             DESIGNATION_LIST.length > 0 &&
                                            IT_SKILL_LIST.length > 0 && NON_IT_SKILL_LIST.length > 0 && <All
                                                // FUNCTIONAL_AREA_LIST={FUNCTIONAL_AREA_LIST}
                                                // INDUSTRY_LIST={INDUSTRY_LIST}
                                                DESIGNATION_LIST={DESIGNATION_LIST}
                                                IT_SKILL_LIST={IT_SKILL_LIST}
                                                NON_IT_SKILL_LIST={NON_IT_SKILL_LIST}
                                            />
                                        }

                                        {this.props.location.pathname === constant.component.interviewQuestion.url &&
                                            FUNCTIONAL_AREA_LIST.length == 0 && INDUSTRY_LIST && DESIGNATION_LIST.length == 0 &&
                                            IT_SKILL_LIST.length == 0 && NON_IT_SKILL_LIST.length == 0 && <><JobsByLoader />
                                                <JobsByLoader /></>
                                        }

                                    </div>
                                    {this.props.location.pathname !== constant.component.interviewQuestion.url && <div className='col-md-3'>
                                        {/* <div className='rightform'>
                                            <h3>Register Now</h3>
                                            <form className="roz-formtheme">
                                                <div className="form-group">
                                                    <input type="Name" name="Name" className="form-control" placeholder="Your Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" className="form-control" placeholder="Your Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" name="password" className="form-control" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="mobile" name="mobile" className="form-control" placeholder="Mobile" />
                                                </div>
                                                <div className="form-group">
                                                    <a href={constant.component.register.url}><button type="button" className="btnregister">Register</button></a>
                                                </div>
                                                <div className="form-group roz-signedcheck">
                                                    <span>By registering with us you agree to our <a target='_blank' href={constant.component.Enquiry.url}>Terms & Conditions</a></span>
                                                </div>
                                            </form>
                                        </div> */}
                                        <div className='rightform'>
                                            <h3>Popular Searches</h3>
                                            <ul className='popuraljobIncity'>
                                                <li><a href='https://rozgar.com/search-job?keyword=PHP%20Developer&location=Noida'>Latest PHP Jobs in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=full%20stack%20developer&location=noida">Full Stack Developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=React%20JS&location=noida">React Js Developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=JavaScript&location=noida">JavaScript Developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=UI%20Developer&location=noida">UI developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=mern%20developer&location=noida">Mern Developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=cloud%20computing&location=noida">Cloud Computing in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=IT&location=Noida">IT Jobs in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Python&location=noida">Python Developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=React%20JS&location=delhi">React Js Developer in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=JavaScript&location=delhi">JavaScript Developer in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=UI%20Developer&location=delhi">UI developer in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=cloud%20computing&location=delhi">Cloud Computing in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=PHP%20Developer&location=delhi">Latest PHP Jobs in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=full%20stack%20developer&location=delhi">Full Stack Developer in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=IT&location=delhi">IT Jobs in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Python&location=delhi">Python Developer in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=JavaScript&location=pune">JavaScript Developer in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=UI%20Developer&location=pune">UI developer in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=cloud%20computing&location=pune">Cloud Computing in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=PHP%20Developer&location=pune">Latest PHP Jobs in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=full%20stack%20developer&location=pune">Full Stack Developer in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=full%20stack%20developer&location=pune">IT Jobs in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Python&location=pune">Python Developer in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=JavaScript&location=gurugram">JavaScript Developer in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=UI%20Developer&location=gurugram">UI developer in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=cloud%20computing&location=gurugram">Cloud Computing in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=PHP%20Developer&location=gurugram">Latest PHP Jobs in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=full%20stack%20developer&location=gurugram">Full Stack Developer in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=IT&location=gurugram">IT Jobs in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Python&location=gurugram">Python Developer in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=aws&location=noida">AWS in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Machine%20Learning&location=noida">Machine Learning in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=blockchain&location=noida">BlockChain in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Java">Java Developer</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=NLP">Natural Language Processing</a></li>
                                            </ul>
                                        </div>
                                        {/* Sponsered Add */}
                                        {/* <div class="rg-adds rg-jobsearchadd mb-20 mt-20">
                                            <a href="javascript:void(0);" title="">
                                                <figure>
                                                    <img src="./assets/images/adds-05.jpg" alt="img description" />
                                                </figure>
                                            </a>
                                            <span>Ad</span>
                                        </div> */}
                                        {/* Sponsered Add */}
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
