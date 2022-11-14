import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { KeywordSearch, statistics } from '../../action/dashboard';
import constant from '../../constant';
import { Typeahead, AsyncTypeahead } from 'react-bootstrap-typeahead';
import { getRandomColorBtn, numberWithCommas, onChange, setOptions } from '../../utils';
import Carousel from 'react-bootstrap/Carousel'
import { get } from 'react-scroll/modules/mixins/scroller';
import Shimmer from '../common/Shimmer';
export default class hometabs extends Component {
    constructor(props) {
        super(props);
        const city =
            this.state = {
                showCompanies: false,
                premiumService: false,
                employerService: false,
                CITY_LIST: this.props?.LOCATION_LIST?.city ? this.props?.LOCATION_LIST?.city : [],
                clientCount: 0,
                jobCount: 0,
                candidatesCount: 0,
                recruiterCount: 0,
                setclientCount: 0,
                setjobCount: 0,
                setcandidatesCount: 0,
                setrecruiterCount: 0,
                KEYWORD: { name: 'KEYWORD', value: [], options: [], error: '', isRequired: false },
                selectedKeyword: [],
                JOB_COUNT_BY_TOP_CATEGORY: this.props?.JOB_COUNT_BY_TOP_CATEGORY ? this.props?.JOB_COUNT_BY_TOP_CATEGORY : [],
                FEATURED_COMPANIES: this.props?.FEATURED_COMPANIES ? this.props?.FEATURED_COMPANIES : [],
                PREMIUM_COMPANIES: this.props?.PREMIUM_COMPANIES ? this.props?.PREMIUM_COMPANIES : [],
                premium: [],
                TOP_COMPANY_IMAGES: this.props?.TOP_COMPANY_IMAGES ? this.props?.TOP_COMPANY_IMAGES : [],
            }
    }

    toggleCompanies = () => {
        const { showCompanies } = this.state;
        this.setState({ showCompanies: !showCompanies })
    }
    togglePremiumService = () => {
        const { premiumService } = this.state;
        this.setState({ premiumService: !premiumService })
    }
    componentDidMount() {
        this.setState({ jobCount: 1156843, clientCount: 9593, candidatesCount: 12333676, recruiterCount: 98653 })
        let counter = setInterval(this.counter, 1);
        statistics().then(res => {
            if (res.status) {
                this.setState({ jobCount: 0, clientCount: 0, candidatesCount: 0, recruiterCount: 0 })
                let counter = setInterval(this.counter, 10);
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })

    }


    counter = () => {
        const { setclientCount, setjobCount, setcandidatesCount, setrecruiterCount, jobCount, clientCount, candidatesCount,
            recruiterCount } = this.state
        if (setclientCount < clientCount) {
            this.setState({ setclientCount: setclientCount + 575 })
        }
        if (setjobCount < jobCount) {
            this.setState({ setjobCount: setjobCount + 9543 })
        }
        if (setcandidatesCount < candidatesCount) {
            this.setState({ setcandidatesCount: setcandidatesCount + 3458 })
        }
        if (setrecruiterCount < recruiterCount) {
            this.setState({ setrecruiterCount: setrecruiterCount + 9956 })
        }
    }


    onKeywordPress = (input, TYPE) => {
        if (TYPE === 'KEYWORD') {
            KeywordSearch(input).then(res => {
                if (res.status) {
                    setOptions(this, this.state.KEYWORD, res.result.list)
                }
                else {
                    alert(res.error)
                }
            }).catch(err => {
                alert(err)
            })
        }

    }

    typeaheadOnChange = (e) => {
        let { value, name } = e.target
        if (e.length > 0 && e[0].customOption) {
            value = [{ name: e[0].name }];
        }
        onChange(this, name, value);
        this.onKeywordPress(e)

    }


    onKeywordInputChange(e) {
        this.setState({
            customKeyword: e
        });
    }

    render() {
        const { showCompanies, premiumService, CITY_LIST, setclientCount, setjobCount, setcandidatesCount, setrecruiterCount, KEYWORD,
            JOB_COUNT_BY_TOP_CATEGORY, FEATURED_COMPANIES, employerService, PREMIUM_COMPANIES, premium, TOP_COMPANY_IMAGES } = this.state;

        return (
            (
                <main id="rg-main" className="rg-main rg-haslayout">
                    <section className="rg-haslayout rg-sectionspace" id="sect1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className='roz-home-nav animated bounceInDown'>
                                        <ul>
                                            <li><a className="activetab" href='#'><i className="lnr lnr-magnifier" data-interception='off'></i> Search Jobs</a></li>
                                            <li><Link target='_blank' to={constant.component.latestfresherjob.url}><i className="lnr lnr-briefcase"></i> Fresher Jobs</Link></li>
                                            <li><a target='_blank' href={constant.component.internationalJobs.url} data-interception='off'><i className="lnr lnr-rocket"></i> International Jobs</a></li>
                                            <li className='left-sub-menu' onClick={this.toggleCompanies}><a href='#' data-interception='off'><i className="lnr lnr-apartment"></i> Companies<div class='fa fa-caret-down right'></div></a>
                                                {showCompanies ? <ul>
                                                    <li><a href={constant.component.companieslist.url} data-interception='off'>Browse All Companies</a></li>
                                                    <li><a href={constant.component.topcompanieslist.url} data-interception='off'>Top Companies</a></li>
                                                    <li><Link to={{
                                                        pathname: constant.component.Enquiry.url.replace(":Enquiry", 'companies-review'),
                                                        state: { title: 'Company Reviews' }
                                                    }}>Company Reviews</Link></li>
                                                    <li><Link to={{
                                                        pathname: constant.component.Enquiry.url.replace(":Enquiry", 'interview-questions'),
                                                        state: { title: 'Interview Questions' }
                                                    }}>Interview Questions</Link></li>
                                                </ul> : null}
                                            </li>
                                            <li className='left-sub-menu' onClick={this.togglePremiumService}><a href='#' data-interception='off'><i className="lnr lnr-graduation-hat"></i> Student Services<div class='fa fa-caret-down right'></div></a>
                                                {premiumService ? <ul>
                                                    <li><Link to={{
                                                        pathname: constant.component.register.url,
                                                    }}>Resume Making</Link></li>
                                                    <li><Link to={{
                                                        pathname: constant.component.Enquiry.url.replace(":Enquiry", 'study-abroad'),
                                                        state: { title: 'Study Abroad' }
                                                    }}>Study Abroad</Link></li>
                                                    <li><Link to={{
                                                        pathname: constant.component.Enquiry.url.replace(":Enquiry", 'international-work-visa'),
                                                        state: { title: 'International work Visas' }
                                                    }}>International work Visas</Link></li>
                                                    <li><Link to={{
                                                        pathname: constant.component.Enquiry.url.replace(":Enquiry", 'Students-benefits'),
                                                        state: { title: 'Students Benefits' }
                                                    }}>Students Benefits</Link></li>
                                                    <li><Link to={{
                                                        pathname: constant.component.Enquiry.url.replace(":Enquiry", 'career-astrology'),
                                                        state: { title: 'Career Astrology' }
                                                    }}>Career Astrology</Link></li>
                                                </ul> : null}
                                            </li>

                                            <li className='left-sub-menu' onClick={this.toggleEmployerService}><a href='#' data-interception='off'><i className="lnr lnr-users"></i> Employer Services<div class='fa fa-caret-down right'></div></a>
                                                {employerService ? <ul>
                                                    <li><Link to={constant.component.contracttualstaffing.url}>Contractual Staffing</Link></li>
                                                    <li><Link to={constant.component.hrmanagementsystem.url}>H R Management System</Link></li>
                                                    <li><Link to={constant.component.payrollautomation.url}>Payroll Automation</Link></li>
                                                    <li><Link to={constant.component.marketingtechnology.url}>Marketing Technology Solution</Link></li>
                                                    <li><Link to={constant.component.startupincubation.url}>Startup Incubation</Link></li>
                                                    <li><Link to={constant.component.fulltimehiring.url}>Full Time Hiring</Link></li>
                                                </ul> : null}
                                            </li>

                                            <li><a target='_blank' data-interception='off' href='https://campus.rozgar.com/'><i className="lnr lnr-indent-increase"></i> Campus Solutions</a></li>
                                        </ul>
                                        <div className="hire-company">
                                            <div className="hire-com-logo">
                                                <img src={'./assets/images/contact-condidate.jpg'} />
                                            </div>
                                            {/* <div class="hire-com-text">
                                        <h2>Let companies reach you directly</h2>
                                        <p>Companies contact candidates & schedule interviews</p>
                                        <a href="">Read More</a>
                                        <a href="">Quick Contact</a>
                                    </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="roz-search-job">
                                        <div className="search-head">
                                            <h2>Looking for a <span>Corporate</span> Job?</h2>
                                            <p>11 lakh+ jobs for you to explore</p>
                                        </div>
                                        <div className="search-form-area">
                                            <form className="rg-formtheme rg-formbasicinfo">
                                                <fieldset>
                                                    <div className="form-group rg-inputwithicon">
                                                        <i className="lnr lnr-magnifier"></i>
                                                        <input
                                                            type="text"
                                                            name={KEYWORD.name}
                                                            value={KEYWORD.value}
                                                            className="form-control"
                                                            placeholder="Enter Skill, Company, Designation"  />
                                                    </div>
                                                    <div className="form-group rg-inputwithicon">
                                                        <i className="ti-location-pin"></i>
                                                        <input type="text" name="middlename" className="form-control" placeholder="Location" />
                                                    </div>
                                                    <div className="form-group col-lg-6 rg-inputwithicon pl-0">
                                                        <i className="lnr lnr-calendar-full"></i>
                                                        <span className="rg-select">
                                                            <select>
                                                                <option>Experience (in Years)</option>
                                                                <option>0-1 Year</option>
                                                                <option>1-3 Years</option>
                                                                <option>3-5 Years</option>
                                                                <option>5-7 Years</option>
                                                                <option>10-12 Years</option>
                                                                <option>12-15 Years</option>
                                                            </select>
                                                        </span>
                                                    </div>

                                                    <div className="form-group col-lg-6 rg-inputwithicon pr-0">
                                                        <i className="fa fa-rupee"></i>
                                                        <span className="rg-select">
                                                            <select>
                                                                <option>Salary (in Lacs)</option>
                                                                <option>0-5 Lacs</option>
                                                                <option>5-10 Lacs</option>
                                                                <option>10-15 Lacs</option>
                                                                <option>15-20 Lacs</option>
                                                                <option>20-30 Lacs</option>
                                                            </select>
                                                        </span>
                                                    </div>
                                                    <div className="form-group rg-btnsarea mb-0">
                                                        <button type="button" className="rg-btn rg-active btn-primary float-right" id="showtoast">Search</button>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="get-your-own-box">
                                        <div className="head-box">
                                            <div className="head-text">
                                                <h2>Get your own Personal Recruiter</h2>
                                            </div>
                                            <div className="ownprice">
                                                <del><i className="fa fa-rupee"></i>4999</del> <span><i className="fa fa-rupee"></i>3999</span>
                                            </div>
                                            <div className="ownprice"><a href="#">Know More</a></div>
                                        </div>
                                        <div className="get-your-text-box">
                                            <div className="resume-box">
                                                <span><i className="fa fa-file-text"></i></span>
                                                <p>Resume<br />Writing</p>
                                            </div>
                                            <div className="per-box">
                                                <span><i className="fa fa-search"></i></span>
                                                <p>Personal Job Search</p>
                                            </div>
                                            <div className="linkdin-box">
                                                <span><i className="fa fa-linkedin-in"></i></span>
                                                <p>Linked-In Profile/ Other&nbsp;Job&nbsp;-&nbsp;site&nbsp;profiles</p>
                                            </div>
                                            <div className="astro-box">
                                                <span><i className="fa fa-snowflake-o"></i></span>
                                                <p>Astrology driven guidance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="roz-create-cv">
                                        <a target='_blank' href={constant.component.register.url}>
                                            <div className="imgfree">
                                                <img src={'./assets/images/cv-pic.jpg'} />
                                            </div>
                                            <div className="create-cv-bg">
                                                <div className="create-text">
                                                    <div className="free-text">Free</div>
                                                    <h4>Create CV</h4>
                                                </div>
                                                <div className="btn-cv">
                                                    <i className="fa fa-angle-double-right" ></i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="roz-company-hiring">
                                        <div className="company-hiring">
                                            <div className="company-hiring-text">
                                                <h3>Companies Hiring</h3>
                                            </div>
                                            <div className="company-hiring-view">
                                                <a target='_blank' href={constant.component.jobsByCompany.url}>All View</a>
                                            </div>
                                        </div>
                                        <div className="company-hiring-logo">
                                            <Shimmer />
                                            {/* {TOP_COMPANY_IMAGES.length > 0 && TOP_COMPANY_IMAGES.map((item, index) => {
                                                return (
                                                    <a href={constant.component.joblist.url.replace(':url', item.URL)} target='_blank'><img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} /></a>
                                                )
                                            })} */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--************************************
                    Featured Jobs Start
            *************************************--> */}

                    <section className="rg-haslayout rg-sectionspace rg-bglight" id="sect2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="rg-sectionhead">
                                        <h2>Featured Companies Hirings</h2>
                                        <a className="rg-btnviewall" target='_blank' href={constant.component.jobsByCompany.url}>View All</a>
                                    </div>
                                </div>

                                <div className="rg-featuredjobs">

                                    {/* <div id="roz-featured-companies-hirings" className="rg-topcompaniesslider rg-topcompanies owl-carousel "> */}
                                    <div id="roz-featured-companies-hirings" className="rg-topcompaniesslider rg-topcompanies ">
                                        <Shimmer />
                                    </div>

                                </div>



                            </div>
                        </div>
                    </section>
                    {/* <!--************************************
                    Featured Jobs End
            *************************************--> */}

                    {/* <!--************************************
                    Our Professionals Start
            *************************************--> */}
                    <section className="rg-haslayout rg-sectionspace" id="sect3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 pl-0">
                                    <div className="rg-ourprofessionals">

                                        <Shimmer />

                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="job-popular-box">
                                        <img src={'./assets/images/jop-popular.jpg'} />
                                        <a className="btn-tpcategories" target='_blank' href={constant.component.jobsByCategory.url}>VIEW ALL</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--************************************
                    Our Professionals End
                    *************************************--> */}

                    <section id="campusrogar" className="wow fadeInRight" data-wow-duration="1.4s">
                        <div className="container">
                            <div className="row">
                                <div className="accelerate-your-job row">
                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                        <div className="roz-sectionimg">
                                            <img src={'./assets/images/acc-your-job-search.jpg'} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="roz-sectiontext">
                                            <h2>Accelerate your job search with premium services</h2>
                                            <p>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</p>
                                            <ul>
                                                <li><i className="fa fa-pencil"></i> Resume writing</li>
                                                <li><i className="fa fa-bolt"></i> Priority applicant</li>
                                                <li><i className="fa fa-file-text"></i> Resume display</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                        <div className="roz-section-by-rozgar">
                                            <div className="by-rozgar">by Campus Rozgar</div>
                                            <a className="roz-btn-more" target='_blank' href='https://campus.rozgar.com/'>Learn More</a>
                                            <p>Includes paid services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="rg-sectionhead mb-10">
                                        <h2>Rozgar Statistics</h2>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 stats">
                                    <div className='count-box'>
                                        <i className="lnr lnr-briefcase" aria-hidden="true"></i>
                                        {/* <div className="counting" data-count="900000">0</div> */}
                                        <div className="counting" >{numberWithCommas(setjobCount)}</div>

                                        <h5>Jobs & Counting</h5>
                                    </div>
                                </div>

                                <div className="col-6 col-lg-3 stats">
                                    <div className='count-box'>
                                        <i className="lnr lnr-user" aria-hidden="true"></i>
                                        {/* <div className="counting" data-count="280">0</div> */}
                                        <div className="counting" >{numberWithCommas(setclientCount)}</div>
                                        <h5>Clients</h5>
                                    </div>
                                </div>

                                <div className="col-6 col-lg-3 stats">
                                    <div className='count-box'>
                                        <i className="lnr lnr-users" aria-hidden="true"></i>
                                        {/* <div className="counting" data-count="23423434">0</div> */}
                                        <div className="counting" >{numberWithCommas(setcandidatesCount)}</div>

                                        <h5>Candidates</h5>
                                    </div>
                                </div>

                                <div className="col-6 col-lg-3 stats">
                                    <div className='count-box'>
                                        <i className="lnr lnr-magnifier" aria-hidden="true"></i>
                                        <div className="counting" >{numberWithCommas(setrecruiterCount)}</div>
                                        <h5>Recruiters</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* <!--************************************
                    Sponsored Companies Start
            *************************************--> */}

                    <section className="rg-haslayout rg-sectionspace rg-bglight" id="sect6">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="rg-sectionhead">
                                        <h2>Sponsored Companies</h2>
                                        <a className="rg-btnviewall" target='_blank' href={constant.component.jobsByCompany.url}>View All</a>
                                    </div>
                                </div>
                                <div className="rg-featuredjobs">
                                    <div id="roz-sponsored-companies-job" className="rg-topcompaniesslider rg-topcompanies ">


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--************************************
                    Sponsored Companies End
            *************************************--> */}

                    {/* <!--************************************
                    Our Professionals Start
            *************************************--> */}
                    <section className="rg-haslayout rg-sectionspace" id="sect7">
                        <div className="container">
                            <div className='worried-about-box'>
                                <div className="row">
                                    <div className='col-md-3'>
                                        <img src={'./assets/images/next-interview.png'} />
                                    </div>
                                    <div className='col-md-9'>
                                        <div className='nextinterview'>Worried about your Next Interview? Start Preparing here with more than 50K Interview Questions</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 plr-0">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="rg-sectionhead">
                                            <h2>Interview Questions by Role</h2>
                                            <a className="rg-btnviewall" href="javascript:void(0);">View All</a>
                                        </div>
                                    </div>
                                    <div className="rg-ourprofessionals">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                                            <div className="rg-ourprofessional">
                                                <div className="rg-professionaldetail pb-0">
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-interviewbyrole">
                                                            <h3><a href="javascript:void(0);">Software Engineer</a></h3>
                                                            <span>(4.7K+ questions)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rg-professionaldetail pb-0">
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-interviewbyrole">
                                                            <h3><a href="javascript:void(0);">Business Analyst</a></h3>
                                                            <span>(2K+ questions)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rg-professionaldetail pb-0">
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-interviewbyrole">
                                                            <h3><a href="javascript:void(0);">Consultant</a></h3>
                                                            <span>(1.8K+ questions)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rg-professionaldetail">
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-interviewbyrole">
                                                            <h3><a href="javascript:void(0);">Financial Analyst</a></h3>
                                                            <span>(694 questions)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 plr-0">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="rg-sectionhead">
                                            <h2>Interview Questions by Skills</h2>
                                            <a className="rg-btnviewall" href="javascript:void(0);">View All</a>
                                        </div>
                                    </div>
                                    <div className="rg-ourprofessionals questions-skills-mobile ">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                                            <div className="rg-ourprofessional">
                                                <div className="rg-professionaldetail bb">
                                                    <figure className="rg-professionalimg">
                                                        <img src={'./assets/images/java-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a href="javascript:void(0);">JAVA</a></h3>
                                                            <span>(494 questions)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rg-professionaldetail bb">
                                                    <figure className="rg-professionalimg">
                                                        <img src={'./assets/images/python-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a href="javascript:void(0);">Python</a></h3>
                                                            <span>(694 questions)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rg-professionaldetail bb">
                                                    <figure className="rg-professionalimg">
                                                        <img src={'./assets/images/php-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a href="javascript:void(0);">PHP</a></h3>
                                                            <span>(694 questions)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rg-professionaldetail bb">
                                                    <figure className="rg-professionalimg">
                                                        <img src={'./assets/images/angular-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a href="javascript:void(0);">Angular</a></h3>
                                                            <span>(694 questions)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 plr-0">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="rg-sectionhead">
                                            <h2>Interview Questions by Company</h2>
                                            <a className="rg-btnviewall" href="javascript:void(0);">View All</a>
                                        </div>
                                    </div>
                                    <div className="rg-ourprofessionals">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                                            <div className="rg-ourprofessional  questions-company-mobile">
                                                <div className="rg-professionaldetail">
                                                    <figure className="rg-professionalimg">
                                                        <img className="incombylogo" src={'./assets/images/cognizant-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a href="javascript:void(0);">Cognizant</a></h3>
                                                            <span>850 Interviews</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rg-professionaldetail">
                                                    <figure className="rg-professionalimg">
                                                        <img className="incombylogo" src={'./assets/images/acc-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a href="javascript:void(0);">Accenture</a></h3>
                                                            <span>1.1K+ Interviews</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rg-professionaldetail">
                                                    <figure className="rg-professionalimg">
                                                        <img className="incombylogo" src={'./assets/images/byju-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a href="javascript:void(0);">Byjus</a></h3>
                                                            <span>1.1K+ Interviews</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rg-professionaldetail">
                                                    <figure className="rg-professionalimg">
                                                        <img className="incombylogo" src={'./assets/images/tcs-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a href="javascript:void(0);">TCS</a></h3>
                                                            <span>1.1K+ Interviews</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rg-professionaldetail">
                                                    <figure className="rg-professionalimg">
                                                        <img className="incombylogo" src={'./assets/images/amazon-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a href="javascript:void(0);">Amazon</a></h3>
                                                            <span>1.1K+ Interviews</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--************************************
                    Our Professionals End
            *************************************--> */}

                    <section id="sect8">
                        <div class="container">
                            <div className='mobileappbg'>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-8 push-lg-2">
                                        <h3>Get Rozgar app link on your mobile</h3>
                                        <p>Available for both Android and iOS apps</p>
                                        <div class="appsearch">
                                            <input type="text" placeholder="Enter mobile number..." />
                                            <div class="button-src">
                                                <button>Get link</button>
                                            </div>
                                        </div>
                                        <strong class="applogo">
                                            <a href="#"><img src={'./assets/images/android-img.png'} alt="Android Logo" /></a> &nbsp;
                                            <a href="#"><img src={'./assets/images/apple-img.png'} alt="Apple Logo" /></a>
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* <!--************************************
                Blogs News Article Start
            *************************************--> */}
                    <section className="rg-location-section rg-haslayout" id="sect9">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-10">
                                    <div className="rg-sectionhead">
                                        <h2><i className="lnr lnr-map-marker"></i> Jobs by Location</h2>
                                        <a className="rg-btnviewall" target='_blank' href={constant.component.jobsByLocation.url}>View All</a>
                                    </div>

                                    {/* <div className="roz-jobbylocation">
                                        <ul>
                                            {CITY_LIST !== undefined && CITY_LIST.length > 0 && CITY_LIST.map((item, index) => {
                                                if (index < 30) {
                                                    return (
                                                        <li><i className="lnr lnr-map-marker"></i> <a target='_blank' href={constant.component.joblist.url.replace(':url', item.URL)}> Jobs in {item.CITY.length > 15 ? item.CITY.substring(0, 13) + '..' : item.CITY}</a></li>
    
                                                    )
                                                }
                                            })}
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--************************************
                    Blogs News Article End
            *************************************--> */}


                </main >
            )

        )

    }
}
