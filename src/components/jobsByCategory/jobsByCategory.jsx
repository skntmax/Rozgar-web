import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'

export default class jobsByCategory extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="rg-main" className="rg-main rg-haslayout pt-0">
                    <div className="rg-sectionspace rg-haslayout pt-0">
                        <div className="rozgar-jobbylocsearch">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 offset-2">
                                        <form className="rozgar-jobbylocsearchbox">
                                            <div className="rozgar-formbox">
                                                <div className="rozgar-jobbylocsearchcontent">
                                                    <div className="form-group">
                                                        <i className="lnr lnr-magnifier"></i>
                                                        <input type="text" name="keyword" className="form-control" placeholder="Search jobs by Skills, Designation, Companies" />
                                                    </div>
                                                </div>
                                                <div className="rozgar-jobbylocsearchbtn">
                                                    <a href="javascript:void(0)"><i className="lnr lnr-magnifier"></i></a>
                                                </div>
                                            </div>
                                        </form>
                                        <ul className='jobsbylocation-top'>
                                            <li><Link to={constant.component.jobsByLocation.url}>Jobs by Location</Link></li>
                                            <li><Link to={constant.component.jobsByCompany.url}>Jobs by Company</Link></li>
                                            <li><Link to={constant.component.jobsByCategory.url} className='active'>Jobs by Category</Link></li>
                                            <li><Link to={constant.component.jobsByDesignation.url}>Jobs by Designation</Link></li>
                                            <li><Link to={constant.component.jobsBySkill.url}>Jobs by Skill</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rozgar-profile-main-content'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-9'>
                                        <div className='jobsbylocationColumnBox'>
                                            <div className='headtext'>Browse Jobs by Functional Area / Department</div>
                                            <div className='jobsbylocationColumn colCount_four'>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Accounting Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Interior Design Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Bank Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Content Writing Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Consultant Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Engineering Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Export Import Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Merchandiser Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Security Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>HR Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Hotel Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Application Programming Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Client Server Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>DBA Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Ecommerce Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>ERP Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>VLSI Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Mainframe Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Middleware Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Mobile Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Network administrator Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>IT Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Testing Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>System Programming Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>EDP Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Telecom Software Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Telecom Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>BPO Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Legal Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Marketing Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Packaging Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Pharma Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Maintenance Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Logistics Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Sales Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Secretary Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Corporate Planning Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Site Engineering Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Film Jobs Teacher Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Airline Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Graphic Designer Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Shipping Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Analytics Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Business Intelligence Jobs</a>
                                            </div>
                                        </div>
                                        <div className='jobsbylocationColumnBox'>
                                            <div className='headtext'>Browse Jobs by Industry / Sector</div>
                                            <div className='jobsbylocationColumn colCount_four'>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Accounting Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Advertising Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Agriculture Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Animation Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Architecture Jobs </a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Automobile Jobs </a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Aviation Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>BPO Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Bank Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Brewery Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Sanitary Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Chemical Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Engineering Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Consumer Durables</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs Courier</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs Defence Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Teacher Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Electrical Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Export Import Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>FMCG Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Facility Management Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Fertilizers Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Food Processing Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Fresher Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Gems Jewellery Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Glass Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Air Conditioning Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Airline Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Networking Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>IT Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Industrial Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Insurance Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>KPO Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Legal Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Media Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Dotcom Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Entertainment Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Medical Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Mining Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>NGO Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Automation Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Oil and Gas Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Paper Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Pharma Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Printing Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Publishing Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Real Estate Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Recruitment Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Retail Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Security Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Electronics Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Shipping Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Steel Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Consultant Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Telecom Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Textiles Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Tyres Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Water Treatment Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Fitness Trainer Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Ecommerce Jobs</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Internet Jobs</a>
                                            </div>
                                        </div>

                                        <nav className="rg-pagination">
                                            <ul>
                                                <li className="rg-prevpage"><a href="#"><i className="fa fa-angle-left"></i> Previous</a></li>
                                                <li className="rg-active"><a href="#">01</a></li>
                                                <li><a href="#">02</a></li>
                                                <li><a href="#">03</a></li>
                                                <li><a href="#">04</a></li>
                                                <li><a href="#">05</a></li>
                                                <li><a href="#"></a></li>
                                                <li className="rg-nextpage"><a href="#">Next <i className="fa fa-angle-right"></i></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='rightform'>
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
                                                    <button type="button" className="btnregister">Register</button>
                                                </div>
                                                <div className="form-group roz-signedcheck">
                                                    <span>By registering with us you agree to our <a target='_blank' href={constant.component.Enquiry.url}>Terms & Conditions</a></span>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='rightform'>
                                            <h3>Popular Searches in Noida</h3>
                                            <ul className='popuraljobIncity'>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>Part Time Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>Fresher Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>HR Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>IT Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>Teacher Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>BPO Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>Data Entry Jobs in Noida</a></li>
                                            </ul>
                                        </div>
                                        <div class="rg-adds rg-jobsearchadd mb-20 mt-20">
                                            <a href="javascript:void(0);" title="">
                                                <figure>
                                                    <img src="./assets/images/adds-05.jpg" alt="img description" />
                                                </figure>
                                            </a>
                                            <span>Ad</span>
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
