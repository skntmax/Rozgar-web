import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'
export default class jobsByDesignation extends Component {
    render() {
        const { DESIGNATION_LIST } = this.props;
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
                                            <li><Link to={constant.component.jobsByCategory.url}>Jobs by Category</Link></li>
                                            <li><Link to={constant.component.jobsByDesignation.url} className='active'>Jobs by Designation</Link></li>
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
                                            <div className='jobbycomsearch'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <h6>Browse Jobs by Designations / Job Titles</h6>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div class="jobComwrap">
                                                            <div class="jobComsearch">
                                                                <input type="text" class="jobComsearchTerm" placeholder="Search for a  Designation / Job Title" />
                                                                <button type="submit" class="jobComsearchButton">
                                                                    <i class="fa fa-search"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='boxatoz'>
                                                            <ul>
                                                                <li>
                                                                    <a href=''>A</a>
                                                                </li>
                                                                <li>
                                                                    <a href=''>A</a>
                                                                </li>
                                                                <li>
                                                                    <a href=''>A</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='jobsbylocationColumn colCount_four'>
                                                {DESIGNATION_LIST.length && DESIGNATION_LIST.map((item, index) => {
                                                    return (<Link to='#'>{item.DESIGNATION}</Link>)
                                                })}

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
                                                    <span>By registering with us you agree to our <a href='#'>Terms & Conditions</a></span>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='rightform'>
                                            <h3>Popular Searches in Noida</h3>
                                            <ul className='popuraljobIncity'>
                                                <li><a href=''>Part Time Jobs in Noida</a></li>
                                                <li><a href=''>Fresher Jobs in Noida</a></li>
                                                <li><a href=''>HR Jobs in Noida</a></li>
                                                <li><a href=''>IT Jobs in Noida</a></li>
                                                <li><a href=''>Teacher Jobs in Noida</a></li>
                                                <li><a href=''>BPO Jobs in Noida</a></li>
                                                <li><a href=''>Data Entry Jobs in Noida</a></li>
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
