import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { jobCountByTopCategory, topCompanyList, topCompanyImages } from '../../action/dashboard';
import { premiumCityList } from '../../action/jobsByActions';
import { KeywordSearch, statistics } from '../../action/dashboard';
import constant from '../../constant';
import { Typeahead, AsyncTypeahead } from 'react-bootstrap-typeahead';
import { getRandomColorBtn, numberWithCommas, onChange, setOptions } from '../../utils';
// import Shimmer from '../common/Shimmer';
import Carousel from 'react-bootstrap/Carousel'
import { getGlobalSetting } from "../../action/dashboard";

export default class hometabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompanies: false,
            premiumService: false,
            CITY_LIST: [],
            clientCount: 0,
            MasterData: undefined,
            jobCount: 0,
            candidatesCount: 0,
            recruiterCount: 0,
            setclientCount: 0,
            setjobCount: 0,
            setcandidatesCount: 0,
            setrecruiterCount: 0,
            KEYWORD: { name: 'KEYWORD', value: [], options: [], error: '', isRequired: false },
            selectedKeyword: [],
            // JOB_COUNT_BY_TOP_CATEGORY: this.props.JOB_COUNT_BY_TOP_CATEGORY ? this.props.JOB_COUNT_BY_TOP_CATEGORY : [],
            // FEATURED_COMPANIES: this.props.FEATURED_COMPANIES ? this.props.FEATURED_COMPANIES : [],
            // PREMIUM_COMPANIES: this.props.PREMIUM_COMPANIES ? this.props.PREMIUM_COMPANIES : [],
            premium: [],
            // TOP_COMPANY_IMAGES: this.props.TOP_COMPANY_IMAGES ? this.props.TOP_COMPANY_IMAGES : [],



            LOCATION_LIST: null,
            JOB_COUNT_BY_TOP_CATEGORY: null,
            FEATURED_COMPANIES: null,
            PREMIUM_COMPANIES: null,
            TOP_COMPANY_IMAGES: null
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
        this.setState({ jobCount: 956843, clientCount: 7593, candidatesCount: 233676, recruiterCount: 98653 })
        this.loadlist()

        getGlobalSetting().then(res => {
            if (res.status) {
                this.setState({ MasterData: res.result })
            }
            else {
                console.log(res.error)
            }
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
            this.setState({ setcandidatesCount: setcandidatesCount + 962 })
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
        const { value, name } = e.target
        if (e.length > 0 && e[0].customOption) {
           let value = [{ name: e[0].name }];
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
        const { MasterData } = this.state
        const { showCompanies, premiumService, CITY_LIST, LOCATION_LIST, setclientCount, setjobCount, setcandidatesCount, setrecruiterCount, KEYWORD,
            JOB_COUNT_BY_TOP_CATEGORY, FEATURED_COMPANIES, PREMIUM_COMPANIES, premium, TOP_COMPANY_IMAGES } = this.state;

        return (
            <main id="rg-main" className="rg-main rg-haslayout">
                <section className="rg-haslayout rg-sectionspace">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className='roz-home-nav animated bounceInDown'>
                                    <ul>
                                        <li><a className="activetab" href='#'><i className="lnr lnr-magnifier"></i> Search Jobs</a></li>
                                        {/* <li><a href='#'><i className="lnr lnr-users"></i> Government Jobs</a></li> */}
                                        <li><a target='_blank' href='https://campus.rozgar.com/'><i className="lnr lnr-users"></i> Campus Drive</a></li>
                                        <li className='left-sub-menu' onClick={this.toggleCompanies}><a href='#'><i className="lnr lnr-apartment"></i> Companies<div class='fa fa-caret-down right'></div></a>
                                            {showCompanies ? <ul>
                                                <li><a href='#'>Browse All Companies</a></li>
                                                <li><a href='#'>Interview Questions</a></li>
                                                <li><a href='#'>Company Reviews</a></li>
                                                <li><a href='#'>Top Companies</a></li>
                                            </ul> : null}
                                        </li>
                                        <li className='left-sub-menu' onClick={this.togglePremiumService}><a href='#'><i className="lnr lnr-diamond"></i> Premium Services<div class='fa fa-caret-down right'></div></a>
                                            {premiumService ? <ul>
                                                <li><a href='#'>Resume Creation</a></li>
                                                <li><a href='#'>Study Abroad</a></li>
                                                <li><a href='#'>Admissions</a></li>
                                                <li><a href='#'>Students Benefits</a></li>
                                                <li><a href='#'>Career Astrology</a></li>
                                            </ul> : null}
                                        </li>
                                        <li><a target='_blank' href='https://campus.rozgar.com/'><i className="lnr lnr-indent-increase"></i> Universities</a></li>
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
                                                    <i className="lnr lnr-users"></i>
                                                    <Typeahead
                                                        useCache={false}
                                                        clearButton={true}
                                                        multiple={true}
                                                        allowNew={true}
                                                        name={KEYWORD.name}
                                                        selected={KEYWORD.value}
                                                        options={KEYWORD.options}
                                                        // onChange={(e) => { this.typeaheadOnChange(e) }}
                                                        placeholder="Skill, Company,Designation or Keyword"
                                                        onInputChange={(e) => { this.onKeywordPress(e, 'KEYWORD') }}
                                                    />
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
                                            <del><i className="fa fa-rupee"></i>{MasterData?.ACTUAL_PRICE}</del> <span><i className="fa fa-rupee"></i>{MasterData?.DISCOUNT_PRICE}</span>
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
                                            <a target='_blank' href={constant.component.jobsByCompany.url}>View All</a>
                                        </div>
                                    </div>
                                    <div className="company-hiring-logo">
                                        {/* {TOP_COMPANY_IMAGES !== null && TOP_COMPANY_IMAGES.length > 0 && TOP_COMPANY_IMAGES.map((item, index) => {
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

                <section className="rg-haslayout rg-sectionspace rg-bglight" id="section2">
                    <div className="container" id="container2">
                        <div className="row" id="row2">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="rg-sectionhead">
                                    <h2>Featured Companies Hirings</h2>
                                    <a data-interception='off' className="rg-btnviewall" target='_blank' href={constant.component.jobsByCompany.url}>View All</a>
                                </div>
                            </div>

                            <div className="rg-featuredjobs">

                                {/* <div id="roz-featured-companies-hirings" className="rg-topcompaniesslider rg-topcompanies owl-carousel "> */}
                                <div id="roz-featured-companies-hirings" className="rg-topcompaniesslider rg-topcompanies ">
                                    {/* {FEATURED_COMPANIES === null && <Shimmer />} */}
                                    {FEATURED_COMPANIES !== null && < Carousel prevIcon='' nextIcon='' prevLabel={null} nextLabel={null} controls={false}>
                                        {FEATURED_COMPANIES.map((item, index) => {
                                            return (
                                                <Carousel.Item>
                                                    <div className="rg-feature-full-width">
                                                        <div className='row'>
                                                            <div className='col-md-4'>
                                                                <div className="rg-featurejob job-slice mb-15">
                                                                    <figure className="rg-companyimg">
                                                                        {item.one.COMPANY_LOGO === 'NA' ? <h3>{item.one.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.one.COMPANY_LOGO}`} alt={item.one.COMPANY_NAME} />}

                                                                    </figure>
                                                                    <div className="rg-companycontent">
                                                                        <div className="rg-companyname">
                                                                            <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.one.URL)}>{item.one.COMPANY_NAME}</a></h3>
                                                                            <span title={item.one.ABOUT_COMPANY}>{item.one.ABOUT_COMPANY.length > 25 ? item.one.ABOUT_COMPANY.substring(0, 25) + '...' : item.one.ABOUT_COMPANY}</span>
                                                                        </div>
                                                                        <div className="rg-companyhead">
                                                                            <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                                <span className="star">
                                                                                    <i className="fa fa-star"></i>
                                                                                </span>
                                                                                <span className="main-2 rating">{(Math.round(item.one.rating * 10) / 10) > 5 ? 5 : Math.round(item.one.rating * 10) / 10}</span> |
                                                                                <span className="main-2 reviews">{item.one.reviewCount} reviews</span>
                                                                            </div>
                                                                            <div className="rg-rightarea">
                                                                                <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.one.URL)}>View Jobs</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <div className="rg-featurejob job-slice mb-15">
                                                                    <figure className="rg-companyimg">
                                                                        {item.two.COMPANY_LOGO === 'NA' ? <h3>{item.two.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.two.COMPANY_LOGO}`} alt={item.two.COMPANY_NAME} />}
                                                                    </figure>
                                                                    <div className="rg-companycontent">
                                                                        <div className="rg-companyname">
                                                                            <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.two.URL)}>{item.two.COMPANY_NAME}</a></h3>
                                                                            <span title={item.two.ABOUT_COMPANY}>{item.two.ABOUT_COMPANY.length > 25 ? item.two.ABOUT_COMPANY.substring(0, 25) + '...' : item.two.ABOUT_COMPANY}</span>
                                                                        </div>
                                                                        <div className="rg-companyhead">
                                                                            <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                                <span className="star">
                                                                                    <i className="fa fa-star"></i>
                                                                                </span>
                                                                                <span className="main-2 rating">{(Math.round(item.two.rating * 10) / 10) > 5 ? 5 : Math.round(item.two.rating * 10) / 10}</span> |
                                                                                <span className="main-2 reviews">{item.two.reviewCount} reviews</span>
                                                                            </div>
                                                                            <div className="rg-rightarea">
                                                                                <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.two.URL)}>View Jobs</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <div className="rg-featurejob job-slice mb-15">
                                                                    <figure className="rg-companyimg">
                                                                        {item.three.COMPANY_LOGO === 'NA' ? <h3>{item.three.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.three.COMPANY_LOGO}`} alt={item.three.COMPANY_NAME} />}
                                                                    </figure>
                                                                    <div className="rg-companycontent">
                                                                        <div className="rg-companyname">
                                                                            <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.three.URL)}>{item.three.COMPANY_NAME}</a></h3>
                                                                            <span title={item.three.ABOUT_COMPA}>{item.three.ABOUT_COMPANY.length > 25 ? item.three.ABOUT_COMPANY.substring(0, 25) + '...' : item.three.ABOUT_COMPANY}</span>
                                                                        </div>
                                                                        <div className="rg-companyhead">
                                                                            <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                                <span className="star">
                                                                                    <i className="fa fa-star"></i>
                                                                                </span>
                                                                                <span className="main-2 rating">{(Math.round(item.three.rating * 10) / 10) > 5 ? 5 : Math.round(item.three.rating * 10) / 10}</span> |
                                                                                <span className="main-2 reviews">{item.three.reviewCount} reviews</span>
                                                                            </div>
                                                                            <div className="rg-rightarea">
                                                                                <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.three.URL)}>View Jobs</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <div className="rg-featurejob job-slice mb-15">
                                                                    <figure className="rg-companyimg">
                                                                        {item.four.COMPANY_LOGO === 'NA' ? <h3>{item.four.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.four.COMPANY_LOGO}`} alt={item.four.COMPANY_NAME} />}
                                                                    </figure>
                                                                    <div className="rg-companycontent">
                                                                        <div className="rg-companyname">
                                                                            <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.four.URL)}>{item.four.COMPANY_NAME}</a></h3>
                                                                            <span title={item.four.ABOUT_COMPAN}>{item.four.ABOUT_COMPANY.length > 25 ? item.four.ABOUT_COMPANY.substring(0, 25) + '...' : item.four.ABOUT_COMPANY}</span>
                                                                        </div>
                                                                        <div className="rg-companyhead">
                                                                            <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                                <span className="star">
                                                                                    <i className="fa fa-star"></i>
                                                                                </span>
                                                                                <span className="main-2 rating">{(Math.round(item.four.rating * 10) / 10) > 5 ? 5 : Math.round(item.four.rating * 10) / 10}</span> |
                                                                                <span className="main-2 reviews">{item.four.reviewCount} reviews</span>
                                                                            </div>
                                                                            <div className="rg-rightarea">
                                                                                <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.four.URL)}>View Jobs</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'><div className="rg-featurejob job-slice mb-15">
                                                                <figure className="rg-companyimg">
                                                                    {item.five.COMPANY_LOGO === 'NA' ? <h3>{item.five.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.five.COMPANY_LOGO}`} alt={item.five.COMPANY_NAME} />}
                                                                </figure>
                                                                <div className="rg-companycontent">
                                                                    <div className="rg-companyname">
                                                                        <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.five.URL)}>{item.five.COMPANY_NAME}</a></h3>
                                                                        <span title={item.five.ABOUT_COMPAN}>{item.five.ABOUT_COMPANY.length > 25 ? item.five.ABOUT_COMPANY.substring(0, 25) + '...' : item.five.ABOUT_COMPANY}</span>
                                                                    </div>
                                                                    <div className="rg-companyhead">
                                                                        <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                            <span className="star">
                                                                                <i className="fa fa-star"></i>
                                                                            </span>
                                                                            <span className="main-2 rating">{(Math.round(item.five.rating * 10) / 10) > 5 ? 5 : Math.round(item.five.rating * 10) / 10}</span> |
                                                                            <span className="main-2 reviews">{item.five.reviewCount} reviews</span>
                                                                        </div>
                                                                        <div className="rg-rightarea">
                                                                            <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.five.URL)}>View Jobs</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div></div>
                                                            <div className='col-md-4'>

                                                                <div className="rg-featurejob job-slice mb-15">
                                                                    <figure className="rg-companyimg">
                                                                        {item.six.COMPANY_LOGO === 'NA' ? <h3>{item.six.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.six.COMPANY_LOGO}`} alt={item.six.COMPANY_NAME} />}
                                                                    </figure>
                                                                    <div className="rg-companycontent">
                                                                        <div className="rg-companyname">
                                                                            <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.six.URL)}>{item.six.COMPANY_NAME}</a></h3>
                                                                            <span title={item.six.ABOUT_COMPANY}>{item.six.ABOUT_COMPANY.length > 25 ? item.six.ABOUT_COMPANY.substring(0, 25) + '...' : item.six.ABOUT_COMPANY}</span>
                                                                        </div>
                                                                        <div className="rg-companyhead">
                                                                            <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                                <span className="star">
                                                                                    <i className="fa fa-star"></i>
                                                                                </span>
                                                                                <span className="main-2 rating">{(Math.round(item.six.rating * 10) / 10) > 5 ? 5 : Math.round(item.six.rating * 10) / 10}</span> |
                                                                                <span className="main-2 reviews">{item.six.reviewCount} reviews</span>
                                                                            </div>
                                                                            <div className="rg-rightarea">
                                                                                <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.six.URL)}>View Jobs</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Carousel.Item>
                                            )
                                        })}
                                    </Carousel>}
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
                <section className="rg-haslayout rg-sectionspace">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 pl-0">
                                <div className="rg-ourprofessionals">
                                    {/* 
                                    {JOB_COUNT_BY_TOP_CATEGORY.length > 0 && JOB_COUNT_BY_TOP_CATEGORY.map((item, index) => {
                                        for (const [key, value] of Object.entries(item)) {
                                            return (<div className="col-12 col-sm-12 col-md-6 col-lg-6 float-left">
                                                <div className="rg-ourprofessional height100">
                                                    <div className="rg-professionaldetail">
                                                        <div className="rg-popular-caregoriescontent">
                                                            <div className="rg-popular-caregories-text">
                                                                <h5>{key}</h5>
                                                            </div>
                                                            <div className="rg-popular-caregories-job">
                                                                <p>{value.totalJobs}</p>
                                                                <span className={getRandomColorBtn(key.replace(/ /g, '').length)}>{value.newJobs} New</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    }
                                    )
                                    } */}

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

                <section id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s">
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
                                        <a className="roz-btn-more" href="#">Learn More</a>
                                        <p>Includes paid services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s">
                    <div className="container" id="container5">
                        <div className="row" id="row5">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="rg-sectionhead mb-10">
                                    <h2>Rozgar Statistics</h2>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 stats">
                                <div className='count-box'>
                                    <i className="lnr lnr-briefcase" aria-hidden="true"></i>
                                    {/* <div className="counting" data-count="900000">0</div> */}
                                    <div className="counting" >{numberWithCommas(1156843)}</div>

                                    <h5>Jobs & Counting</h5>
                                </div>
                            </div>

                            <div className="col-6 col-lg-3 stats">
                                <div className='count-box'>
                                    <i className="lnr lnr-user" aria-hidden="true"></i>
                                    {/* <div className="counting" data-count="280">0</div> */}
                                    <div className="counting" >{numberWithCommas(9593)}</div>
                                    <h5>Clients</h5>
                                </div>
                            </div>

                            <div className="col-6 col-lg-3 stats">
                                <div className='count-box'>
                                    <i className="lnr lnr-users" aria-hidden="true"></i>
                                    {/* <div className="counting" data-count="23423434">0</div> */}
                                    <div className="counting" >{numberWithCommas(12333676)}</div>

                                    <h5>Candidates</h5>
                                </div>
                            </div>

                            <div className="col-6 col-lg-3 stats">
                                <div className='count-box'>
                                    <i className="lnr lnr-magnifier" aria-hidden="true"></i>
                                    <div className="counting" >{numberWithCommas(98653)}</div>
                                    <h5>Recruiters</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--************************************
                Sponsored Companies Start
        *************************************--> */}
                <section className="rg-haslayout rg-sectionspace rg-bglight" id="section6">
                    <div className="container" id="container6">
                        <div className="row" id="row6">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="rg-sectionhead">
                                    <h2>Sponsored Companies</h2>
                                    <a data-interception='off' className="rg-btnviewall" target='_blank' href={constant.component.jobsByCompany.url}>View All</a>
                                </div>
                            </div>
                            <div className="rg-featuredjobs">
                                <div id="roz-sponsored-companies-job" className="rg-topcompaniesslider rg-topcompanies ">
                                    {/* {PREMIUM_COMPANIES === null && <Shimmer />} */}
                                    {/* {PREMIUM_COMPANIES !== null && < Carousel prevIcon='' nextIcon='' prevLabel={null} nextLabel={null} controls={false}>
                                        {PREMIUM_COMPANIES.length > 0 && PREMIUM_COMPANIES.map((item, index) => {
                                            return (
                                                <Carousel.Item>
                                                    <div className="rg-feature-full-width">
                                                        <div className='row'>
                                                            <div className='col-md-4'>
                                                                <div className="rg-featurejob job-slice mb-15">
                                                                    <figure className="rg-companyimg">
                                                                        {item.one.COMPANY_LOGO === 'NA' ? <h3>{item.one.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.one.COMPANY_LOGO}`} alt={item.one.COMPANY_NAME} />}

                                                                    </figure>
                                                                    <div className="rg-companycontent">
                                                                        <div className="rg-companyname">
                                                                            <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.one.URL)}>{item.one.COMPANY_NAME}</a></h3>
                                                                            <span title={item.one.ABOUT_COMPANY}>{item.one.ABOUT_COMPANY.length > 25 ? item.one.ABOUT_COMPANY.substring(0, 25) + '...' : item.one.ABOUT_COMPANY}</span>
                                                                        </div>
                                                                        <div className="rg-companyhead">
                                                                            <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                                <span className="star">
                                                                                    <i className="fa fa-star"></i>
                                                                                </span>
                                                                                <span className="main-2 rating">{(Math.round(item.one.rating * 10) / 10) > 5 ? 5 : Math.round(item.one.rating * 10) / 10}</span> |
                                                                                <span className="main-2 reviews">{item.one.reviewCount} reviews</span>
                                                                            </div>
                                                                            <div className="rg-rightarea">
                                                                                <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.one.URL)}>View Jobs</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <div className="rg-featurejob job-slice mb-15">
                                                                    <figure className="rg-companyimg">
                                                                        {item.two.COMPANY_LOGO === 'NA' ? <h3>{item.two.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.two.COMPANY_LOGO}`} alt={item.two.COMPANY_NAME} />}
                                                                    </figure>
                                                                    <div className="rg-companycontent">
                                                                        <div className="rg-companyname">
                                                                            <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.two.URL)}>{item.two.COMPANY_NAME}</a></h3>
                                                                            <span title={item.two.ABOUT_COMPANY}>{item.two.ABOUT_COMPANY.length > 25 ? item.two.ABOUT_COMPANY.substring(0, 25) + '...' : item.two.ABOUT_COMPANY}</span>
                                                                        </div>
                                                                        <div className="rg-companyhead">
                                                                            <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                                <span className="star">
                                                                                    <i className="fa fa-star"></i>
                                                                                </span>
                                                                                <span className="main-2 rating">{(Math.round(item.two.rating * 10) / 10) > 5 ? 5 : Math.round(item.two.rating * 10) / 10}</span> |
                                                                                <span className="main-2 reviews">{item.two.reviewCount} reviews</span>
                                                                            </div>
                                                                            <div className="rg-rightarea">
                                                                                <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.two.URL)}>View Jobs</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <div className="rg-featurejob job-slice mb-15">
                                                                    <figure className="rg-companyimg">
                                                                        {item.three.COMPANY_LOGO === 'NA' ? <h3>{item.three.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.three.COMPANY_LOGO}`} alt={item.three.COMPANY_NAME} />}
                                                                    </figure>
                                                                    <div className="rg-companycontent">
                                                                        <div className="rg-companyname">
                                                                            <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.three.URL)}>{item.three.COMPANY_NAME}</a></h3>
                                                                            <span title={item.three.ABOUT_COMPA}>{item.three.ABOUT_COMPANY.length > 25 ? item.three.ABOUT_COMPANY.substring(0, 25) + '...' : item.three.ABOUT_COMPANY}</span>
                                                                        </div>
                                                                        <div className="rg-companyhead">
                                                                            <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                                <span className="star">
                                                                                    <i className="fa fa-star"></i>
                                                                                </span>
                                                                                <span className="main-2 rating">{(Math.round(item.three.rating * 10) / 10) > 5 ? 5 : Math.round(item.three.rating * 10) / 10}</span> |
                                                                                <span className="main-2 reviews">{item.three.reviewCount} reviews</span>
                                                                            </div>
                                                                            <div className="rg-rightarea">
                                                                                <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.three.URL)}>View Jobs</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <div className="rg-featurejob job-slice mb-15">
                                                                    <figure className="rg-companyimg">
                                                                        {item.four.COMPANY_LOGO === 'NA' ? <h3>{item.four.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.four.COMPANY_LOGO}`} alt={item.four.COMPANY_NAME} />}
                                                                    </figure>
                                                                    <div className="rg-companycontent">
                                                                        <div className="rg-companyname">
                                                                            <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.four.URL)}>{item.four.COMPANY_NAME}</a></h3>
                                                                            <span title={item.four.ABOUT_COMPAN}>{item.four.ABOUT_COMPANY.length > 25 ? item.four.ABOUT_COMPANY.substring(0, 25) + '...' : item.four.ABOUT_COMPANY}</span>
                                                                        </div>
                                                                        <div className="rg-companyhead">
                                                                            <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                                <span className="star">
                                                                                    <i className="fa fa-star"></i>
                                                                                </span>
                                                                                <span className="main-2 rating">{(Math.round(item.four.rating * 10) / 10) > 5 ? 5 : Math.round(item.four.rating * 10) / 10}</span> |
                                                                                <span className="main-2 reviews">{item.four.reviewCount} reviews</span>
                                                                            </div>
                                                                            <div className="rg-rightarea">
                                                                                <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.four.URL)}>View Jobs</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'><div className="rg-featurejob job-slice mb-15">
                                                                <figure className="rg-companyimg">
                                                                    {item.five.COMPANY_LOGO === 'NA' ? <h3>{item.five.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.five.COMPANY_LOGO}`} alt={item.five.COMPANY_NAME} />}
                                                                </figure>
                                                                <div className="rg-companycontent">
                                                                    <div className="rg-companyname">
                                                                        <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.five.URL)}>{item.five.COMPANY_NAME}</a></h3>
                                                                        <span title={item.five.ABOUT_COMPAN}>{item.five.ABOUT_COMPANY.length > 25 ? item.five.ABOUT_COMPANY.substring(0, 25) + '...' : item.five.ABOUT_COMPANY}</span>
                                                                    </div>
                                                                    <div className="rg-companyhead">
                                                                        <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                            <span className="star">
                                                                                <i className="fa fa-star"></i>
                                                                            </span>
                                                                            <span className="main-2 rating">{(Math.round(item.five.rating * 10) / 10) > 5 ? 5 : Math.round(item.five.rating * 10) / 10}</span> |
                                                                            <span className="main-2 reviews">{item.five.reviewCount} reviews</span>
                                                                        </div>
                                                                        <div className="rg-rightarea">
                                                                            <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.five.URL)}>View Jobs</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div></div>
                                                            <div className='col-md-4'>

                                                                <div className="rg-featurejob job-slice mb-15">
                                                                    <figure className="rg-companyimg">
                                                                        {item.six.COMPANY_LOGO === 'NA' ? <h3>{item.six.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.six.COMPANY_LOGO}`} alt={item.six.COMPANY_NAME} />}
                                                                    </figure>
                                                                    <div className="rg-companycontent">
                                                                        <div className="rg-companyname">
                                                                            <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.six.URL)}>{item.six.COMPANY_NAME}</a></h3>
                                                                            <span title={item.six.ABOUT_COMPANY}>{item.six.ABOUT_COMPANY.length > 25 ? item.six.ABOUT_COMPANY.substring(0, 25) + '...' : item.six.ABOUT_COMPANY}</span>
                                                                        </div>
                                                                        <div className="rg-companyhead">
                                                                            <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                                <span className="star">
                                                                                    <i className="fa fa-star"></i>
                                                                                </span>
                                                                                <span className="main-2 rating">{(Math.round(item.six.rating * 10) / 10) > 5 ? 5 : Math.round(item.six.rating * 10) / 10}</span> |
                                                                                <span className="main-2 reviews">{item.six.reviewCount} reviews</span>
                                                                            </div>
                                                                            <div className="rg-rightarea">
                                                                                <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.six.URL)}>View Jobs</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Carousel.Item>
                                            )
                                        })}

                                    </Carousel>} */}

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
                <section className="rg-haslayout rg-sectionspace">
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

                <section id="section8">
                    <div class="container" id="container8">
                        <div className='mobileappbg' id="mobile1">
                            <div class="row" id="row8">
                                <div class="col-xs-12 col-sm-12 col-md-7">
                                    <h3>Get Rozgar app link on your mobile</h3>
                                    <p>Available for both Android and iOS apps</p>
                                    <div class="appsearch">
                                        <input type="text" placeholder="Enter mobile number..." />
                                        <div class="button-src">
                                            <button>Get link</button>
                                        </div>
                                    </div>
                                    <strong class="applogo">
                                        <a data-interception='off' href="#"><img src={'./assets/images/android-img.png'} alt="Android Logo" /></a> &nbsp;
                                        <a data-interception='off' href="#"><img src={'./assets/images/apple-img.png'} alt="Apple Logo" /></a>
                                    </strong>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-5 text-left">
                                    <div className=''>
                                        <img src={'./assets/images/appdev.png'} alt="App Development" />
                                    </div>
                                </div>
                            </div>
                            <div className='appshaperight'>
                                <img src={'./assets/images/app-shape-right.png'} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--************************************
            Blogs News Article Start
        *************************************--> */}
                <section className="rg-sectionspace rg-haslayout">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-10 pl-0">
                                <div className="rg-sectionhead">
                                    <h2><i className="lnr lnr-map-marker"></i> Jobs by Location</h2>
                                    <a className="rg-btnviewall" target='_blank' href={constant.component.jobsByLocation.url}>View All</a>
                                </div>
                            </div>
                            <div className="roz-jobbylocation">
                                <ul>
                                    {LOCATION_LIST !== null && LOCATION_LIST?.city !== undefined && LOCATION_LIST?.city?.length > 0 && LOCATION_LIST?.city?.map((item, index) => {
                                        if (index < 30) {
                                            return (
                                                <li><i className="lnr lnr-map-marker"></i> <a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.URL)}> Jobs in {item.CITY.length > 15 ? item.CITY.substring(0, 13) + '..' : item.CITY}</a></li>

                                            )
                                        }
                                    })}
                                    {/* <li><a href="#"><i className="lnr lnr-map-marker"></i> Jobs in Mumbai</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--************************************
                Blogs News Article End
        *************************************--> */}
            </main >
        )


    }
    loadlist = () => {

        premiumCityList().then(res => {
            if (res.status) {
                this.setState({ LOCATION_LIST: res.result })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })


        jobCountByTopCategory().then(res => {
            if (res.status) {
                this.setState({ JOB_COUNT_BY_TOP_CATEGORY: res.result })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })

        topCompanyList().then(res => {
            if (res.status) {
                this.setState({ FEATURED_COMPANIES: res.result.featured2darr, PREMIUM_COMPANIES: res.result.premium2darr })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })


        topCompanyImages().then(res => {
            if (res.status) {
                this.setState({ TOP_COMPANY_IMAGES: res.result.images })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })
    }
}
