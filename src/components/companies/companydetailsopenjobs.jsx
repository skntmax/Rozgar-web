import React, { Component } from 'react'
import { ToSeoUrl } from '../../utils';
import Shimmer from '../common/Shimmer';
import Parser from 'html-react-parser';
import constant from '../../constant';
import { Link } from 'react-router-dom';
import noRecordImg from '../../assets/images/no-results.png'
export default class
    companydetailsopenjobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { detail, jobs } = this.props
        return (
            <React.Fragment>
                <div class="rg-tabcontent tab-content">
                    <div class="rg-jobdetails rg-abouttab rg-tabpane tab-pane fade" id="about">
                        <div class="rg-jobdetaildescription">
                            <div class="rg-title">
                                <h2>About Tech Mahindra</h2>
                            </div>
                            <div class="rg-description">
                                <figure class="roz-employerdetailsimg"><img class=" float-left" src="./assets/images/img-02.jpg" alt="images description" /></figure>
                                <p>Tech Mahindra offers innovative and customer-centric digital experiences, enabling enterprises, associates, and society to rise. We are a USD 5.1 billion organization with 141,100+ professionals across 90 countries helping 1123 global customers, including Fortune 500 companies.</p>
                                <p>We are focused on leveraging next-generation technologies including 5G, Blockchain, Cybersecurity, Artificial Intelligence, and more, to enable end-to-end digital transformation for global customers. Tech Mahindra is one of the fastest-growing brands and amongst the top 15 IT service providers globally.</p>
                                <p>Tech Mahindra has consistently emerged as a leader in sustainability and is recognized amongst the ‘2021 Global 100 Most sustainable corporations in the World’ by Corporate Knights. With the NXT.NOW™ framework, Tech Mahindra aims to enhance ‘Human Centric Experience’ for our ecosystem and drive collaborative disruption with synergies arising from a robust portfolio of companies.</p>
                                <div class="jf-video jf-videovtwo"><a data-rel="prettyPhoto[video]" href="https://youtu.be/watch?v=wqEU10AtFV0"><img src="./assets/images/blogdetail/img-08.jpg" alt="image description" /></a></div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="roz-dep-hiring">
                                        <h4>Departments hiring at Tech Mahindra</h4>
                                        <div id="roz-departments-hiring" class="rg-topcompaniesslider rg-topcompanies owl-carousel">
                                            <div class="roz-out-dep-hiring-box">
                                                <div class="roz-dep-hiring-content-box mb-15">
                                                    <a href="#">
                                                        <div class="roz-dep-hiringcontent">
                                                            <div class="roz-dep-hiring-companyname">
                                                                <h3>Engineering - Software &amp; QA</h3>
                                                                <span>421 openings</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="roz-out-dep-hiring-box">
                                                <div class="roz-dep-hiring-content-box mb-15">
                                                    <a href="#">
                                                        <div class="roz-dep-hiringcontent">
                                                            <div class="roz-dep-hiring-companyname">
                                                                <h3>Engineering - Software &amp; QA</h3>
                                                                <span>421 openings</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="roz-out-dep-hiring-box">
                                                <div class="roz-dep-hiring-content-box mb-15">
                                                    <a href="#">
                                                        <div class="roz-dep-hiringcontent">
                                                            <div class="roz-dep-hiring-companyname">
                                                                <h3>Engineering - Software &amp; QA</h3>
                                                                <span>421 openings</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="roz-out-dep-hiring-box">
                                                <div class="roz-dep-hiring-content-box mb-15">
                                                    <a href="#">
                                                        <div class="roz-dep-hiringcontent">
                                                            <div class="roz-dep-hiring-companyname">
                                                                <h3>Engineering - Software &amp; QA</h3>
                                                                <span>421 openings</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <h4>More Information</h4>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="roz-more-informaiton"><span>Type:</span><span>Public</span></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="roz-more-informaiton"><span>Founded:</span><span>1986 (36 yrs old)</span></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="roz-more-informaiton"><span>Company Size:</span><span>100001+</span></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="roz-more-informaiton"><span>Website:</span><span><a href="#">https://www.mounttalent.com</a></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="jobintrested-box">
                            <div class="boxshow">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h4>Jobs you might be interested in</h4>
                                    </div>
                                    <div class="col-lg-12">
                                        <ul class="rg-themenavtabs nav navbar-nav">
                                            <li class="nav-item"><a class="" id="home-tab" data-toggle="tab" href="#tpjobabout">Tech Mahindra jobs across locations</a></li>
                                            <li class="nav-item"><a id="profile-tab" data-toggle="tab" href="#similarcomjob" class="active show">Jobs in similar companies</a></li>
                                        </ul>
                                        <div class="rg-tabcontent tab-content">
                                            <div class="roz-jobintrestedtext rg-abouttab rg-tabpane tab-pane fade" id="tpjobabout">
                                                <ul>
                                                    <li><a href="#">Tech Mahindra jobs in Remote</a></li>
                                                    <li><a href="#">Tech Mahindra jobs in Pune</a></li>
                                                    <li><a href="#">Tech Mahindra jobs in Noida</a></li>
                                                    <li><a href="#">Tech Mahindra jobs in Ahmedabad</a></li>
                                                    <li><a href="#">Tech Mahindra jobs in Kolkata</a></li>
                                                </ul>
                                            </div>
                                            <div class="roz-jobintrestedtext rg-abouttab rg-tabpane tab-pane fade active show" id="similarcomjob">
                                                <ul>
                                                    <li><a href="#">Tech Mahindra jobs in Remote</a></li>
                                                    <li><a href="#">Tech Mahindra jobs in Pune</a></li>
                                                    <li><a href="#">Tech Mahindra jobs in Noida</a></li>
                                                    <li><a href="#">Tech Mahindra jobs in Ahmedabad</a></li>
                                                    <li><a href="#">Tech Mahindra jobs in Kolkata</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="jobintrested-box">
                            <ul class="rg-socialiconssimple">
                                <li class="rg-sharejob"><span class="font-weight-bold">Connect with Tech Mahindra</span></li>
                                <li class="rg-facebook"><a href="javascript:void(0);"><i class="fa fa-facebook-f"></i></a></li>
                                <li class="rg-twitter"><a href="javascript:void(0);"><i class="fab fa-twitter"></i></a></li>
                                <li class="rg-linkedin"><a href="javascript:void(0);"><i class="fab fa-linkedin-in"></i></a></li>
                                <li class="rg-clone"><a href="javascript:void(0);"><i class="far fa-clone"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="rg-jobdetails rg-tabpane tab-pane fade active show" id="openjobs">
                        {jobs === undefined && <Shimmer />}
                        <div class="rg-jobdetaildescription">
                            <div class="rg-title">
                                {jobs.count != 0 && <h2>{jobs.count} {detail.COMPANY_NAME}</h2>}
                            </div>
                            {
                                jobs.count == 0 && jobs.list.length == 0 &&
                                <div className="text-danger" style={{ textAlign: 'center' }}>
                                    <img src={noRecordImg}></img>
                                    <h4>No jobs posted by {detail.COMPANY_NAME}</h4>
                                    <p style={{ color: 'black' }}><Link className='text-danger' to={constant.component.homepage.url}>click here</Link> to search jobs by Keywords, Desigation, Roles etc.</p>
                                    <p> You can browse jobs by <Link to={constant.component.jobsByCategory.url}>Functional Area, Industry</Link>, <Link to={constant.component.jobsByCompany.url}>Company</Link>, <Link to={constant.component.jobsBySkill.url}> Skills </Link> and <Link to={constant.component.jobsByDesignation.url}>Designations</Link> </p>
                                    <Link to={constant.component.login.url} class="rg-btn rg-active btn-primary mb-20" id="showtoast"><span className='text-white'>Browse More Jobs</span></Link>

                                </div>
                            }
                            <div class="rg-featurejobs">

                                {jobs.list.length > 0 && jobs.list.map((item, index) => {
                                    const nameInitial = item.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')
                                    const dynamicURL = ToSeoUrl(item.JOB_TITLE) + '-' + ToSeoUrl(item.COMPANY_NAME) + '-' + item.CITY.toLowerCase().split(',').join('-') + '-' + ToSeoUrl(item.WORK_EXP_MIN) + '-' + 'to' + '-' + ToSeoUrl(item.WORK_EXP_MAX) + '-' + 'years' + '-' + item.CUSTOM_JOB_ID.slice(4) + '?src-LIST-' + item.JOB_ID
                                                    
                                    return (
                                        <div class="rg-featurejob">
                                            <div class="rg-companycontent">
                                                <figure class="roz-companydetaillogo">
                                                    <a href="#">
                                                        {item.COMPANY_LOGO === 'NA' ? <h3>{nameInitial}</h3> : <a href={dynamicURL} target='_blank'><img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt="image description" /></a>}
                                                    </a>
                                                </figure>
                                                {/* <div class="rg-companyhead">
                                                    <div class="rg-rightarea"><a class="rg-tagfeature" href="javascript:void(0);"><i class="fa fa-bookmark"></i> Save</a></div>
                                                </div> */}
                                                <div class="rg-detailopensjobs">
                                                    <h3><a href={constant.component.jobdetails.url.replace(":url", dynamicURL)} target='_blank'>{item.JOB_TITLE}</a></h3>
                                                    <h6 style={{ fontSize: '13px' }}>{item.COMPANY_NAME}</h6>
                                                    <div class="jobcompanyreviewbox"><a href="#"></a><span class="reviewnumber">
                                                        {/* {(Math.round(item?.rating * 10) / 10) > 5 ? 5 : Math.round(item?.rating * 10) / 10} */}
                                                        <i class="fa fa-star"></i></span><a href="#"><span class="reviewlink">({0} Reviews)</span></a></div>
                                                </div>
                                                <ul class="jobcompanyhiringdetails" style={{ fontSize: "12px" }}>
                                                    <li><i class="lnr lnr-briefcase"></i> {item.WORK_EXP_MIN}-{item.WORK_EXP_MAX} Yrs</li>
                                                    <li><i class="fa fa-rupee"></i> {item?.IS_HIDE_SALARY_FROM_CANDIDATE === 'Y' ? 'Not disclosed' : item?.CTC_MIN + '-' + item?.CTC_MAX}</li>
                                                    <li><i class="lnr lnr-map-marker"></i> {item.CITY?.length > 18 ? Parser(item.CITY.slice(0, 18)) + '...' : Parser(item.CITY)}</li>
                                                </ul>
                                                <div class="roz-companyjobtans">
                                                    <div class="ellipsis"><i class="lnr lnr-file-empty"></i> {item.JOB_DETAILS?.length > 64 ? Parser(item.JOB_DETAILS.slice(0, 64)) + '...' : Parser(item.JOB_DETAILS)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    <div class="rg-jobdetails rg-qapolicys tab-pane fade" id="qa">
                        <div class="rg-jobdetaildescription">
                            <div class="rg-qapolicy"><span>Consectetur adipisicing elit sed do eiusmod tempor incididunt utaena lokate labore et dolore <a href="javascript:void(0);">Privacy Policy</a></span></div>
                            <div class="rg-title">
                                <h2>Ask Your Question</h2>
                            </div>
                            <form class="rg-formtheme rg-askjobform">
                                <fieldset>
                                    <div class="form-group rg-inputwithicon"><i class="lnr lnr-bubble"></i><input type="text" name="fullname" class="form-control" placeholder="Add a Question Title Here" /></div>
                                    <div class="rg-selectholder rg-inputwithicon">
                                        <i class="lnr lnr-layers"></i>
                                        <span class="rg-select">
                                            <select data-placeholder="All" name="Select Category">
                                                <option value="hamilton">Select Category</option>
                                                <option value="leeds">Leeds</option>
                                                <option value="leicester">Leicester</option>
                                                <option value="liverpool">Liverpool</option>
                                                <option value="london">London</option>
                                                <option value="louisville">Louisville</option>
                                                <option value="manchester">Manchester</option>
                                                <option value="sheffield">Sheffield</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div class="form-group rg-inputwithicon"><i class="lnr lnr-bubble"></i><textarea name="message" class="form-control" placeholder="What Would You Like To Ask?"></textarea></div>
                                    <div class="form-group"><button class="rg-btn rg-active" type="button">Submit</button></div>
                                </fieldset>
                            </form>
                            <div class="rg-questions">
                                <div class="rg-title">
                                    <h2>2,534,304 Questions</h2>
                                    <div class="rg-questionslect">
                                        <span>Sort by:</span>
                                        <span class="rg-select">
                                            <select data-placeholder="All" name="Select Category">
                                                <option value="hamilton">Interviews</option>
                                                <option value="leeds">Leeds</option>
                                                <option value="leicester">Leicester</option>
                                                <option value="liverpool">Liverpool</option>
                                                <option value="london">London</option>
                                                <option value="louisville">Louisville</option>
                                                <option value="manchester">Manchester</option>
                                                <option value="sheffield">Sheffield</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                                <div class="rg-interviewprocess">
                                    <div class="rg-title">
                                        <h2><a href="javascript:void(0);">What is the interview process like?</a></h2>
                                        <span>June 27, 2019</span>
                                    </div>
                                    <div class="rg-description">
                                        <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut laboreat dolore magna aliqua enim ad coaido consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                    <div class="rg-btns"><a href="employersdetailsans.html" class="rg-btn">Submit Your Answer</a><a href="employersdetailsans.html">View All Answers</a><span class="rg-reportbar"><i class="lnr lnr-bug"></i><a href="javascript:void(0);">Report Question</a></span></div>
                                </div>
                                <div class="rg-interviewprocess">
                                    <div class="rg-title">
                                        <h2><a href="javascript:void(0);">Do you get paid during training?</a></h2>
                                        <span>June 27, 2019</span>
                                    </div>
                                    <div class="rg-description">
                                        <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut laboreat dolore magna aliqua enim ad coaido consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                    <div class="rg-btns"><a href="javascript:void(0);" class="rg-btn">Submit Your Answer</a><a href="javascript:void(0);">View All Answers</a><span class="rg-reportbar"><i class="lnr lnr-bug"></i><a href="javascript:void(0);">Report Question</a></span></div>
                                </div>
                                <div class="rg-interviewprocess">
                                    <div class="rg-title">
                                        <h2><a href="javascript:void(0);">Is it worth it ? Specifically, Job tasks &amp; paycheque?</a></h2>
                                        <span>June 27, 2019</span>
                                    </div>
                                    <div class="rg-description">
                                        <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut laboreat dolore magna aliqua enim ad coaido consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                    <div class="rg-btns"><a href="javascript:void(0);" class="rg-btn">Submit Your Answer</a><a href="javascript:void(0);">View All Answers</a><span class="rg-reportbar"><i class="lnr lnr-bug"></i><a href="javascript:void(0);">Report Question</a></span></div>
                                </div>
                                <div class="rg-interviewprocess">
                                    <div class="rg-title">
                                        <h2><a href="javascript:void(0);">When do they get paid weekly basis or bi-weekly?</a></h2>
                                        <span>June 27, 2019</span>
                                    </div>
                                    <div class="rg-description">
                                        <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut laboreat dolore magna aliqua enim ad coaido consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                    <div class="rg-btns"><a href="javascript:void(0);" class="rg-btn">Submit Your Answer</a><a href="javascript:void(0);">View All Answers</a><span class="rg-reportbar"><i class="lnr lnr-bug"></i><a href="javascript:void(0);">Report Question</a></span></div>
                                </div>
                                <div class="rg-interviewprocess">
                                    <div class="rg-title">
                                        <h2><a href="javascript:void(0);">What is the minimum wage how much fo you get paid an hour?</a></h2>
                                        <span>June 27, 2019</span>
                                    </div>
                                    <div class="rg-description">
                                        <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut laboreat dolore magna aliqua enim ad coaido consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                    <div class="rg-btns"><a href="javascript:void(0);" class="rg-btn">Submit Your Answer</a><a href="javascript:void(0);">View All Answers</a><span class="rg-reportbar"><i class="lnr lnr-bug"></i><a href="javascript:void(0);">Report Question</a></span></div>
                                </div>
                                <div class="rg-interviewprocess">
                                    <nav class="rg-pagination">
                                        <ul>
                                            <li class="rg-prevpage"><a href="javascript:void(0);"><i class="fa fa-angle-left"></i> Previous</a></li>
                                            <li class="rg-active"><a href="#">01</a></li>
                                            <li><a href="javascript:void(0);">02</a></li>
                                            <li><a href="javascript:void(0);">03</a></li>
                                            <li><a href="javascript:void(0);">04</a></li>
                                            <li><a href="javascript:void(0);">05</a></li>
                                            <li><a href="javascript:void(0);"></a></li>
                                            <li class="rg-nextpage"><a href="javascript:void(0);">Next <i class="fa fa-angle-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rg-jobdetails rg-ourlocation em-tabpane tab-pane fade" id="contact">
                        <div class="rg-jobdetaildescription">
                            <div class="rg-title">
                                <h2>Our Locations</h2>
                            </div>
                            <div class="rg-ourlocations">
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 float-left">
                                        <div class="rg-locationdetails">
                                            <div id="rg-thememap" class="rg-thememap"></div>
                                            <div class="rg-locationcontant">
                                                <div class="rg-title">
                                                    <h2>VAV of Oceans, Chicago</h2>
                                                    <span>Office 33 - 37, 27 New Colmore Row Chicago, USA</span>
                                                </div>
                                                <ul class="rg-direction">
                                                    <li><a href="javascript:void(0);">Get Directions</a></li>
                                                    <li><a href="javascript:void(0);">Share Location</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 float-left">
                                        <div class="rg-locationdetails">
                                            <div id="rg-thememapvtwo" class="rg-thememap"></div>
                                            <div class="rg-locationcontant">
                                                <div class="rg-title">
                                                    <h2>VAV of Oceans, Chicago</h2>
                                                    <span>Office 33 - 37, 27 New Colmore Row Chicago, USA</span>
                                                </div>
                                                <ul class="rg-direction">
                                                    <li><a href="javascript:void(0);">Get Directions</a></li>
                                                    <li><a href="javascript:void(0);">Share Location</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 float-left">
                                        <div class="rg-locationdetails">
                                            <div id="rg-thememapvthree" class="rg-thememap"></div>
                                            <div class="rg-locationcontant">
                                                <div class="rg-title">
                                                    <h2>VAV of Oceans, Chicago</h2>
                                                    <span>Office 33 - 37, 27 New Colmore Row Chicago, USA</span>
                                                </div>
                                                <ul class="rg-direction">
                                                    <li><a href="javascript:void(0);">Get Directions</a></li>
                                                    <li><a href="javascript:void(0);">Share Location</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rg-contactformarea">
                                <div class="rg-title">
                                    <h2>Contact Us</h2>
                                </div>
                                <form class="rg-formtheme rg-formcontactus">
                                    <fieldset>
                                        <div class="form-group rg-inputwithicon"><i class="lnr lnr-user"></i><input type="text" name="fullname" class="form-control" placeholder="Full Name" /></div>
                                        <div class="form-group rg-inputwithicon"><i class="lnr lnr-envelope"></i><input type="email" name="emailid" class="form-control" placeholder="Email ID" /></div>
                                        <div class="form-group rg-inputwithicon"><i class="lnr lnr-tag"></i><input type="text" name="phone" class="form-control" placeholder="Phone" /></div>
                                        <div class="form-group rg-inputwithicon"><i class="lnr lnr-apartment"></i><input type="text" name="subject" class="form-control" placeholder="Subject" /></div>
                                        <div class="form-group rg-inputwithicon"><i class="lnr lnr-bubble"></i><textarea name="message" class="form-control" placeholder="Message"></textarea></div>
                                        <div class="form-group"><button class="rg-btn rg-active" type="button">Submit</button></div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
