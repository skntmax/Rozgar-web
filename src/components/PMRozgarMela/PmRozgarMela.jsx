import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import constant from '../../constant';
import rozgarmela from '../../assets/images/rozgar-mela.jpg'
import rozgarmelahad from '../../assets/images/rozgar-mela2.jpg'
import Shimmer from '../common/Shimmer';
import Parser from 'html-react-parser';
import { blogCategory } from '../../action/BlogAction';
import { Joblistfresher } from '../../action/jobDetail';
import { getDateParts, ToSeoUrl } from '../../utils';
export default class PmRozgarMela extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      blogCategory: undefined,
      pageNumber: 1,
      jobslist: '',
      limit: 4,
      filter: ''

    }
  }


  componentDidMount() {
    document.title = constant.title.PMRozgarMela
    const { pageNumber, limit, filter } = this.state
    blogCategory().then((res) => {
      console.log("cate", res.result);
      this.setState({ blogCategory: res.result.list })
    }).catch((err) => {
      alert(err)
    })
    Joblistfresher({ page: pageNumber, limit: limit, filter: filter }).then(res => {
      if (res.status) {
        console.log(res.result, "resultJoblist");
        this.setState({ jobslist: res.result })
      }
    }).catch(err => {
      alert(err)
    })
  }

  render() {
    const { blogCategory, jobslist } = this.state
    return (
      <React.Fragment>
        <div className='pm-had-banners'>

          <div className='container-fluid'>
            <div className='text-center pb-4'>
              <img src={rozgarmelahad} />
            </div>

          </div>
        </div>
        <main id="rg-main" className="rg-main rg-haslayout">
          <div className="rg-haslayout rg-sectionspace">

            <div className="container">

              <div className="row">
                <div id="rg-twocolumns" className="rg-twocolumns">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 float-left">

                    <div className="swiggy-about-box">
                      <h2 className='jobs-lakh pb-3 font-weight-bold font-22'>PM Rozgar Mela 2022 Registration for <span>10 Lakh Jobs</span>.</h2>
                      <p><strong>PM Rozgar Mela 2022</strong> Apply Online for 10 Lakh Jobs, Direct Link | PM Modi Rozgar Mela Online Registration, Eligibility & Vacancy Details</p>

                      <p>The Prime Minister of India, Narendra Modi, is going to say something about the 10 lakh jobs that are open in the Central Government. It has been reported that <strong>PM Rozgar Mela 2022</strong> will be introduced on the 22nd of October 2022. This program is regarded as the most generous Diwali gift that the government can provide to its young people. Now is the time to complete <strong>PM Rozgar Mela 2022</strong> Registration if you are between the ages of 18 and 40, have completed your 10th, 12th, or Graduation Level Education, and are eligible to do so</p>
                      <div className='text-center pb-4 azadi-banner-box'>
                        <img src={rozgarmela} />
                      </div>
                      <p>If you are also interested in working for the government, then this is for you: on October 22, 2022, Prime Minister Narendra Modi is going to deliver a significant gift in honor of Diwali. At the PM Modi Rozgar Mela 2022 job fair, 10 lakh people will get jobs from Prime Minister Modi himself. The PM Rojgar Mela Application Form 2022 is scheduled to get underway on October 22nd, 2022, and will include the appointment of 75,000 candidates. The PMO’s directives will serve as the basis for how the recruitment is carried out moving forward. When Prime Minister Modi issued the directive in June 2022 for the ministries to begin filling up the vacant positions in their departments, the recruitment campaign got underway.</p>

                      <p>In spite of having recruited 7.22 lakh individuals across various departments, Prime Minister Modi discovered that there were still 8.72 open positions after conducting an analysis of the human resource index in each ministry. Because of this, it was declared that ten million open positions would be filled ASAP. The UPSC, the SSC, and the RRB are going to be in charge of the hiring. Applicants who are interested in these positions will be able to submit their applications through the appropriate websites. The initial application for the <strong>PM Rozgar Mela 2022</strong> will be made available at the appropriate time. In order to ensure that only the most qualified individuals are hired, the recruiting process will include the administration of a number of different exams.</p>

                      <div className='overview-table'>
                        <h2>PM Modi Rozgar Mela 2022 Overview</h2>
                        <table className='table table-striped'>

                          <tbody>
                            <tr>
                              <td>Name of article </td>
                              <td>PM Rojgar Mela Registration</td>
                            </tr>
                            <tr>
                              <td>Conducted By </td>
                              <td>UPSC, SSC & RRB</td>
                            </tr>
                            <tr>
                              <td>Posts Cadre</td>
                              <td>Group A, Group B (Gazetted), Group B (Non-Gazetted), and Group C posts</td>
                            </tr>
                            <tr>
                              <td>Normal Posts</td>
                              <td>Central Army Personnel, Sub Inspector, Constable, Steno, LDC, Income Tax Inspectors, Railway MTS</td>
                            </tr>
                            <tr>
                              <td>Vacancies</td>
                              <td>10 lakh</td>
                            </tr>
                            <tr>
                              <td>Age criteria</td>
                              <td>21 to 32 years</td>
                            </tr>
                            <tr>
                              <td>Application Start Date</td>
                              <td>22nd October 2022</td>
                            </tr>
                            <tr>
                              <td>Website</td>
                              <td>www.upsc.gov.in, www.ssc.nic.in</td>
                            </tr>
                          </tbody>
                        </table>

                      </div>
                      <h2>PM Rozgar Mela 2022 Objectives</h2>
                      <p>The objective of the Rozgar Mela is to increase recruitment opportunities for the youth. which will boost their careers and morale.</p>

                      <h2>PM Rozgar Mela 2022 Benefits</h2>
                      <p>The benefits of PM Rozgar Mela are listed below.</p>
                      <ul className='list-benefits-box'>
                        <li>Youths will be provided with Job opportunities. Around 10 lakh youth will get employment opportunities only in Government offices.</li>
                        <li>In a number of the ministries that are part of the Central Government, recruitment campaigns are going to take place.</li>
                        <li>Such individuals will be offered positions at varying levels throughout 38 different ministries.</li>
                        <li>According to the information available, many ministries and departments will be conducting mission-style hiring with the assistance of organizations such as the UPSC, SSC, and the Railway Recruitment Board.</li>

                      </ul>
                      <div className='overview-table'>
                        <h2>PM Rozgar Mela Vacancies</h2>
                        <table className='table table-striped'>
                          <thead>
                            <tr>
                              <th style={{ width: "300px" }}>Name of the post</th>
                              <th>Total Vacancies</th>

                            </tr>
                          </thead>

                          <tbody>

                            <tr>
                              <td>Gazetted </td>
                              <td>23,584 Posts</td>
                            </tr>
                            <tr>
                              <td>Gazetted and Non-Gazetted</td>
                              <td>1.25 Lakh Posts</td>
                            </tr>
                            <tr>
                              <td>LDC, Clerk, Steno, Constable, etc.</td>
                              <td>5.38 Lakh Posts</td>
                            </tr>
                            <tr>
                              <td>Peon, MTS, Safaiwala 	</td>
                              <td>3.5 Lakh Posts</td>
                            </tr>
                            <tr>
                              <td>Group B and C Posts	</td>
                              <td>94,000 posts</td>
                            </tr>
                            <tr>
                              <td>Multiple</td>
                              <td>1.5 Lakh posts</td>
                            </tr>

                          </tbody>
                        </table>

                      </div>
                      <h2 style={{ marginTop: "30px" }}>PM Rozgar Mela 2022 Documents</h2>
                      <p>We have yet to keep generalized information about the documents, which are</p>
                      <ul className='list-benefits-box'>
                        <li>Identity Card</li>
                        <li>Photograph</li>
                        <li>Email id</li>
                        <li>Mobile Number.</li>

                      </ul>
                      <h2 style={{ marginTop: "30px" }}>PM Rozgar Mela 2022 Eligibility</h2>
                      <p>Soon, the 10-lakh-person national recruitment campaign will commence. Apply for your preferred job. Indian law sets qualifying requirements:</p>
                      <ul className='list-benefits-box'>
                        <li>Based on the position you are pursuing, he or she must hold a Class X certificate, a Class 10+2 certificate, and a bachelor’s degree.</li>
                        <li>Whenever necessary, you must also possess computer abilities such as English and Hindi typing at a rate of 30 words per minute.</li>
                        <li>There will be a reservation for SC/ST/OBC/EWS/Ex-Serviceman candidates in accordance with the norms imposed by the Government of India.</li>
                        <li>21–32-year-olds are eligible.</li>

                      </ul>
                      <h2 style={{ marginTop: "30px" }}>PM Rozgar Mela 2022 Application Procedure</h2>

                      <ul className='list-benefits-box'>
                        <li>You will need to begin by going to the recruiting board’s official website as your first step.</li>
                        <li>Then look for a section on the site labeled “Notice Board.”</li>
                        <li>After that, look on the Notice Board for the position that you are interested in applying for; there, you will find the advertising as well as the PM Rozgar Mela 2022 Application Form.</li>
                        <li>Simply select the employment application for the position that you are interested in and click on it.</li>
                        <li>Please ensure that all of the essential credentials are filled out, and also submit all of the relevant documents.</li>
                        <li>First, the application cost has to be paid, and then the application form needs to be printed off.</li>
                        <li></li>
                        <li>You are also strongly encouraged to download the exam’s curriculum and carefully go over it in order to maximize your chances of passing the test.</li>

                      </ul>

                    </div>
                    <div className='job-list-section'>

                      <h2 className='job-title-bx'>Latest Jobs</h2>
                      <div className='rg-featuredjobs rg-featuredjobsvtwo rg-featuredjobsvthree'>
                        {jobslist?.list?.length>0  && <div className="rg-similarjobs">
                          <div className="rg-sectionhead">
                          </div>
                          <div className="rg-featuredjobs">
                            { jobslist.list.map((item, index) => {
                              const nameInitial = item.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')
                              let dynamicURL = ToSeoUrl(item.JOB_TITLE) + '-' + ToSeoUrl(item.COMPANY_NAME) + '-' + item.CITY?.toLowerCase().split(',').join('-') + '-' + ToSeoUrl(item.WORK_EXP_MIN) + '-' + 'to' + '-' + ToSeoUrl(item.WORK_EXP_MAX) + '-' + 'years' + '-' + item.CUSTOM_JOB_ID.slice(4) + '?src-LIST-' + item.JOB_ID
                              dynamicURL = dynamicURL.replace(/ /g, '')
                              return (
                                <div className="rg-featurejobholder">
                                  <div className="rg-featurejob">
                                    <figure className="rg-companyimg">
                                      {item.COMPANY_LOGO === 'NA' && <h3>{nameInitial}</h3> } {item.COMPANY_LOGO != 'NA' && <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} />}
                                    </figure>
                                    <div className="rg-companycontent">
                                      <div className="rg-companyhead">
                                        <div className="rg-rightarea">
                                          <span className="rg-tagfeature" ><i className="fa fa-clock mr-1"></i>{'' + getDateParts(item.CREATED_ON).relativeTime}</span>
                                        </div>
                                      </div>
                                      <div className="rg-similarcompanyname">
                                        <h3><a href={constant.component.jobdetails.url.replace(":url", dynamicURL)} target='_blank'>{item.JOB_TITLE}</a></h3>
                                        <h6 style={{ fontSize: '13px' }}>{item.COMPANY_NAME}</h6>
                                        <div class="jobcompanyreviewbox"><a href="#"></a><span class="reviewnumber">
                                          <i class="fa fa-star"></i></span><a href="#"><span class="reviewlink">(
                                            0 {" "}
                                            Reviews)</span></a>

                                        </div>
                                        <ul class="jobcompanyhiringdetails" >
                                          <li><i class="lnr lnr-briefcase"></i> {item.WORK_EXP_MIN}-{item.WORK_EXP_MAX} Yrs</li>
                                          <li><i class="fa fa-rupee"></i> {item?.IS_HIDE_SALARY_FROM_CANDIDATE === 'Y' && 'Not disclosed'} {item?.IS_HIDE_SALARY_FROM_CANDIDATE != 'Y' && item?.CTC_MIN + '-' + item?.CTC_MAX}</li>
                                          <li><i class="lnr lnr-map-marker"></i> {item.CITY?.length > 18 ? Parser(item.CITY.slice(0, 18)) + '...' : Parser(item.CITY)}</li>
                                        </ul>
                                      </div>
                                      <div className="rg-rightarea mt-10">
                                        {
                                          item.LISTNING_TYPE=='1'
                                          &&
                                          <a className={'rg-btnjobtag rg-internship mr-10' } href="javascript:void(0);">
                                          <i className="ti-thumb-up"></i> { 'Regular'}
                                        </a>
                            }
                            {
                                        item.LISTNING_TYPE=='2'
                                        &&
                                        <a className={ 'rg-btnjobtag rg-parttimejob mr-10'} href="javascript:void(0);">
                                          <i className="ti-thumb-up"></i> { 'Featured'}
                                        </a>
                            }
                            {
                              item.LISTNING_TYPE=='3' &&
                                        <a className={'rg-fulltimejob rg-btnjobtag mr-10'} href="javascript:void(0);">
                                          <i className="ti-thumb-up"></i> {'Premium'}
                                        </a>
                                        }
                                        <div className="rg-tagfeaturetemp"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              )
                            })}

                          </div>
                        </div>}


                      </div><div class="view-all-openings pb-1 text-right"><a target="_blank" href={constant.component.latestfresherjob.url}>View All Openings</a></div>
                    </div>

                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 float-left">
                    <aside id="rg-sidebarvtwo" className="rg-sidebar rg-sidebarvtwo">
                      <div className="roz-company-hiring mb-30 mt-0">
                        <div className="roz-create-cv">
                          <div className='urgent-hiring-area'>
                            <div className='hiring-img'>
                              <img src={'../assets/images/announce-img01.png'} />
                            </div>
                            <div className='immediate-joiners'>
                              <Link to={constant.component.hiringfresherjob.url}>Immediate Joiners</Link>
                            </div>
                          </div>
                          <a target='_blank' href={constant.component.ResumeMaking.url}>
                            <div className="imgfree">
                              <img src='./assets/images/cv-pic01.png' />
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
                      </div>
                      <div className="rg-adds rg-jobsearchadd pb-4">
                        <Link to={constant.component.register.url} title="">
                          <figure>
                            <img src={'../../assets/images/adds-04.jpg'} alt="img description" />
                          </figure>
                        </Link>
                        <span>Ad</span>
                      </div>
                      <div className="rg-adds rg-jobsearchadd">
                        <a href="javascript:void(0);" title="">
                          <figure>
                            <img src={'../../assets/images/adds-05.jpg'} alt="img description" />
                          </figure>
                        </a>
                        <span>Ad</span>
                      </div>

                      <div className="rg-widget rg-categories  rg-categories-rozgarmela">
                        <div className="rg-widgettitle">
                          <h3>Categories</h3>

                        </div>

                        <div className='pm-rozgarmela-blog'>
                          <ul className='blogcategoryscroll'>
                            {blogCategory === undefined && <Shimmer />}
                            {
                              blogCategory && blogCategory.length > 0 ? blogCategory.map((ele, index) => {
                                return (

                                  <li style={{ listStyleType: "none" }}>
                                    <a target='_blank' href={constant.component.blogCategory.url.replace(':url', ele.URL)} style={{ color: "#000", fontWeight: "500", marginBottom: "10px" }}><i class="lnr lnr-chevron-right"></i> {ele.CATEGORY}</a>
                                  </li>


                                )
                              }) : ""
                            }

                          </ul>
                        </div>

                      </div>

                    </aside>
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
