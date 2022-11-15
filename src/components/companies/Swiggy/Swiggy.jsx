import React, { Component } from 'react';
import swiggylogoapp from '../../../assets/images/swiggy-logo-app.png';
import smallswiggylogo from '../../../assets/images/small-swiggy-logo.jpg';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import constant from '../../../constant';
import cafeteriaIcon from '../../../assets/images/author/cafeteria-icon.png'
import freefood from '../../../assets/images/author/free-food.png'
import transporticon from '../../../assets/images/author/transport-icon.png'
import educationAssistance from '../../../assets/images/author/education-assistance.png'
import pic04 from '../../../assets/images/swiggy/pic04.jpg'
import pic03 from '../../../assets/images/swiggy/pic03.jpg'
import pic02 from '../../../assets/images/swiggy/pic02.jpg'
import pic01 from '../../../assets/images/swiggy/pic01.jpg'
import { ToSeoUrl } from '../../../utils';
import Parser from 'html-react-parser';

export default class Swiggys extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
      }
    
      componentDidMount() {
        window.scroll(0, 0)
      }
  render() {
    const {swiggy,count}=this.props
    const featuredsettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false,
                    arrows: false
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]

    };
    return (
      <React.Fragment>
          <div id="rg-innerbannervtwo" class="rg-swiggybgbanner"></div>
            <div className='swiggynavbg'>
                <div className="container">
                    <div className="row">
                        <div className="col md 12">
                            <div className='d-flex justify-content-between'>
                                <ul className='swiggynav'>
                                    <li><Link to={constant.component.Swiggy.url} className='active'>Home</Link></li>
                                    <li><Link to={constant.component.SwiggyJobs.url}>Jobs</Link></li>
                                    <li><Link to={constant.component.SwiggyAboutUs.url}>About Us</Link></li>
                                    <li><Link to={constant.component.SwiggyLife.url}>The Swiggy Life</Link></li>
                                </ul>
                                <div className='swiggy-follow-box'>
                                    <span>4.2K followers</span>
                                    <a href='' className='swiggy-follow-btn'>+ FOLLOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='swiggy-services-box'>
                    <ul>
                        <li>Internet</li>
                        <li>Courier / Logistics</li>
                        <li>Startup</li>
                        <li>B2C</li>
                        <li>B2B</li>
                        <li>Unicorn</li>
                    </ul>
                </div>
            </div>
          <main id="rg-main" className="rg-main rg-haslayout">
            <div className="rg-haslayout rg-sectionspace">
                <div className="container">
                <div className="row">
                    <div id="rg-twocolumns" className="rg-twocolumns">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 float-left">
                        <div className="swiggy-about-box">
                            <h2>About Swiggy</h2>
                            <p>Our mission is to elevate the quality of life for the urban consumer by offering unparalleled convenience. From starting out as a hyperlocal food delivery service in 2014 to becoming a logistics hub that also covers instant grocery deliveries, as well as concierge services; our capabilities result not only in lightning-fast deliveries for our customers, but also in providing our people with a productive and fulfilling career.</p>
                            <p>Swiggy is now India's leading convenience commerce platform, with a tech-first approach to logistics and a solution-first approach to consumer demands. Built on the back of robust ML technology and fuelled by terabytes of data processed everyday, Swiggy offers a fast, seamless, and reliable delivery experience for millions of customers.</p>
                            <p>With a presence in over 500 cities across India, partnerships with over 150K restaurants, an employee base of 5000+, and a 2.6L+ strong independent fleet of Delivery Executives; Swiggy is driven to elevate the quality of life for urban consumers by delivering unparalleled convenience.</p>
                        </div>

                        <div className='swiggy-benefits-box mb-3'>
                            <div className="swiggy-benefits-head">
                                <h3>Benefits reported by employees</h3>
                            </div>
                            <div className="rg-feature-full-width px-4">
                                <Slider {...featuredsettings}>
                                    <React.Fragment>
                                        <div className='col-md-12 mob-pad-0'>
                                            <div className="rg-featurejob job-slice mb-15">
                                                <div className="rg-companycontent text-center">
                                                    <img className='swiggy-facility-icon' src={cafeteriaIcon}/>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <h3 className='m-0 swiggy-facility-size'>Cafeteria</h3>
                                                        {/* <span> (20)</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <div className='col-md-12 mob-pad-0'>
                                            <div className="rg-featurejob job-slice mb-15">
                                                <div className="rg-companycontent text-center">
                                                    <img className='swiggy-facility-icon' src={freefood}/>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <h3 className='m-0 swiggy-facility-size'>Free Food</h3>
                                                        {/* <span> (50)</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <div className='col-md-12 mob-pad-0'>
                                            <div className="rg-featurejob job-slice mb-15">
                                                <div className="rg-companycontent text-center">
                                                    <img className='swiggy-facility-icon' src={transporticon}/>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <h3 className='m-0 swiggy-facility-size'>Transport</h3>
                                                        {/* <span> (18)</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <div className='col-md-12 mob-pad-0'>
                                            <div className="rg-featurejob job-slice mb-15">
                                                <div className="rg-companycontent text-center">
                                                    <img className='swiggy-facility-icon' src={educationAssistance}/>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <h3 className='m-0 swiggy-facility-size'>Education Assistance</h3>
                                                        {/* <span> (65)</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                </Slider>
                            </div>
                        </div>


                        <div className='swiggy-com-info my-2  mb-4'>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3 className='pb-2'>More Information</h3>
                                    <div className="row">
                                    <div className="col-lg-6">
                                        <div className="roz-more-informaiton swiggy-more-info-text">
                                        <span>Type:</span>
                                        <span>Private</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="roz-more-informaiton swiggy-more-info-text">
                                        <span>Company Size:</span>
                                        <span>5001-10000</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="roz-more-informaiton swiggy-more-info-text">
                                        <span>Founded</span>
                                        <span>2014 (8 yrs old)</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="roz-more-informaiton swiggy-more-info-text">
                                        <span>Headquarters</span>
                                        <span>Bengaluru</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='swiggy-benefits-box mb-3'>
                            <div className="swiggy-benefits-head">
                                <h3>Life at Swiggy</h3>
                            </div>
                            <div className="rg-feature-full-width px-4">
                                <Slider {...featuredsettings}>
                                    <React.Fragment>
                                        <div className='col-md-12 mob-pad-0'>
                                            <div className="rg-featurejob job-slice mb-15 p-0">
                                                <div className="rg-companycontent text-center p-0">
                                                    <img className='swiggy-facility-icon' src={pic04}/>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <div className='col-md-12 mob-pad-0'>
                                            <div className="rg-featurejob job-slice mb-15 p-0">
                                                <div className="rg-companycontent text-center p-0">
                                                    <img className='swiggy-facility-icon' src={pic03}/>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <div className='col-md-12 mob-pad-0'>
                                            <div className="rg-featurejob job-slice mb-15 p-0">
                                                <div className="rg-companycontent text-center p-0">
                                                    <img className='swiggy-facility-icon' src={pic02}/>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <div className='col-md-12 mob-pad-0'>
                                            <div className="rg-featurejob job-slice mb-15 p-0">
                                                <div className="rg-companycontent text-center p-0">
                                                    <img className='swiggy-facility-icon' src={pic01}/>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                </Slider>
                            </div>
                        </div>

                        <div className="jobs-at-swiggy-box">
                            <div className="swiggy-boxshow pt-2">
                                <div className="row">
                                    <div className="pb-2">
                                        <h3>Jobs at Swiggy</h3>
                                    </div>
                                  
                                    <div className="rg-featurejobs">
                                    {  swiggy?.jobs?.list.map((item,index)=>{
                                         const nameInitial = item.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')
                                         const dynamicURL = ToSeoUrl(item.JOB_TITLE) + '-' + ToSeoUrl(item.COMPANY_NAME) + '-' + item.CITY.toLowerCase().split(',').join('-') + '-' + ToSeoUrl(item.WORK_EXP_MIN) + '-' + 'to' + '-' + ToSeoUrl(item.WORK_EXP_MAX) + '-' + 'years' + '-' + item.CUSTOM_JOB_ID.slice(4) + '?src-LIST-' + item.JOB_ID
                                   if(index<=3){
                                    return(
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
                                                                <i class="fa fa-star"></i></span><a href="#"><span class="reviewlink">(
                                                                    0 {" "}
                                                                    Reviews)</span></a></div>
                                                        </div>
                                                        <ul class="jobcompanyhiringdetails" >
                                                            <li><i class="lnr lnr-briefcase"></i> {item.WORK_EXP_MIN}-{item.WORK_EXP_MAX} Yrs</li>
                                                            <li><i class="fa fa-rupee"></i> {item?.IS_HIDE_SALARY_FROM_CANDIDATE === 'Y' ? 'Not disclosed' : item?.CTC_MIN + '-' + item?.CTC_MAX}</li>
                                                            <li><i class="lnr lnr-map-marker"></i> {item.CITY?.length > 18 ? Parser(item.CITY.slice(0, 18)) + '...' : Parser(item.CITY)}</li>
                                                        </ul>
                                                        <div class="roz-companyjobtans">
                                                            <div class="ellipsis"><i class="lnr lnr-file-empty"></i>{item.JOB_DETAILS?.length > 64 ? Parser(item.JOB_DETAILS.slice(0, 64)) + '...' : Parser(item.JOB_DETAILS)}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                      )
                                   }
                                        
                                    })}
                                    </div>
                                    <div class="view-all-openings pb-1 text-right">
                                    <Link to={constant.component.SwiggyJobs.url}>View All Openings</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiggyon-web">
                            <div className="swiggyon-web-head">Swiggy on the web</div>
                            <div className="swiggyon-web-icons">
                                <ul>
                                    <li><a href=''><i class="fa fa-external-link"></i> Website</a></li>
                                    <li><a href=''><i class="fa fa-linkedin-square"></i> LinkedIn</a></li>
                                    <li><a href=''><i class="fa fa-twitter-square"></i> Twitter</a></li>
                                    <li><a href=''><i class="fa fa-instagram"></i> Instagram</a></li>
                                    <li><a href=''><i class="fa fa-android"></i> Android App</a></li>
                                    <li><a href=''><i class="fa fa-apple"></i> iOS App</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="swiggy-tech-stack">
                            <div className="swiggy-tech-stack-head">Swiggy's Tech Stack</div>
                            <ul className="swiggy-tech-point">
                                <li>Java</li>
                                <li>Golang</li>
                                <li>Big Data</li>
                                <li>Microservices</li>
                                <li>Machine Learning</li>
                                <li>React.js</li>
                                <li>Android</li>
                                <li>iOS</li>
                                <li>React Native</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 float-left">
                        <aside id="rg-sidebarvtwo" className="rg-sidebar rg-sidebarvtwo">
                            <div className="swiggy-apply-jobbox">
                                <div className="swiggy-text-logo">
                                    <h3>Want to work at Swiggy?</h3>
                                    <img src={swiggylogoapp}/>
                                </div>
                                <div className="swiggyjobapply">
                                <Link to={constant.component.SwiggyJobs.url}>Apply to jobs</Link>
                                </div>
                            </div>
                            <div className="roz-company-hiring mb-30">
                                <div className="d-flex align-items-center">
                                    <div className='small-swiggy-logo'>
                                        <img src={smallswiggylogo} />
                                    </div>
                                    <div className='swiggy-job-opning'>
                                        <h4>{count} job openings</h4>
                                        <span className='swiggy-hiring-now'>Hiring now</span>
                                    </div>
                                </div>
                               
                                <div className="opning-jobs-swiggy">
                                {  swiggy?.jobs?.list.map((item,index)=>{
                                         const dynamicURL = ToSeoUrl(item.JOB_TITLE) + '-' + ToSeoUrl(item.COMPANY_NAME) + '-' + item.CITY.toLowerCase().split(',').join('-') + '-' + ToSeoUrl(item.WORK_EXP_MIN) + '-' + 'to' + '-' + ToSeoUrl(item.WORK_EXP_MAX) + '-' + 'years' + '-' + item.CUSTOM_JOB_ID.slice(4) + '?src-LIST-' + item.JOB_ID
                                         if(index<=1){
                                    return(
                                    <ul>
                                        <li>
                                            <a href=''>
                                            <h4><a href={constant.component.jobdetails.url.replace(":url", dynamicURL)} target='_blank'>{item.JOB_TITLE}</a></h4>
                                                <div className='d-flex swiggy-yearlocation'>
                                                <span><i class="lnr lnr-briefcase"></i> {item.WORK_EXP_MIN}-{item.WORK_EXP_MAX} Yrs</span>
                                                    <span><li><i class="lnr lnr-map-marker"></i> {item.CITY?.length > 18 ? Parser(item.CITY.slice(0, 18)) + '...' : Parser(item.CITY)}</li></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                      )}
                                
                                     
                                    })}
                                    <div className='view-all-openings'>
                                        <Link to={constant.component.SwiggyJobs.url}>View All Openings</Link>
                                    </div>
                                </div>
                                
                            </div>
                        <div className="rg-adds rg-jobsearchadd">
                            <a href="javascript:void(0);" title="">
                            <figure>
                                <img
                                src="../../assets/images/swiggy-adds-04.jpg"
                                alt="img description"
                                />
                            </figure>
                            </a>
                            <span>Ad</span>
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
