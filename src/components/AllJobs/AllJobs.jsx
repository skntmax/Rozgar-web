import React, { Component } from 'react'

export default class AllJobs extends Component {
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
                                                        <input type="text" name="keyword" className="form-control" placeholder="Search by Company or Designation" />
                                                    </div>
                                                </div>
                                                <div className="rozgar-jobbylocsearchbtn">
                                                    <a href="javascript:void(0)"><i className="lnr lnr-magnifier"></i></a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 offset-1">
                                        <ul class="jobsbylocation-top jobsbylocation-list">
                                            <li>Browse Jobs</li>
                                            <li><a href=''>All Jobs</a></li>
                                            <li><a href=''>Jobs by Company</a></li>
                                            <li><a href=''>Jobs by Category</a></li>
                                            <li><a class='active' href=''>Jobs by Location</a></li>
                                            <li><a href=''>Jobs by Designation</a></li>
                                            <li><a href=''>Jobs by Skill</a></li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rozgar-browseJobs">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className='brows-by-locations-bx'>
                                            <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Locations</h2></div>
                                            <div className='hoz-location-bx'>
                                                <ul>
                                                    <li><a href=''>

                                                        <div className='images-box-location'><img src={'./assets/images/mumbai.png'} alt="img description" /></div>
                                                        <h5>Jobs in Mumbai</h5>
                                                    </a>
                                                    </li>
                                                    <li><a href=''>
                                                        <div className='images-box-location'><img src={'./assets/images/delhi.png'} alt="img description" /></div>
                                                        <h5>Jobs in Delhi</h5>
                                                    </a>
                                                    </li>
                                                    <li><a href=''>
                                                        <div className='images-box-location'><img src={'./assets/images/bangalore.png'} alt="img description" /></div>
                                                        <h5>Jobs in Bangalore</h5>
                                                    </a>
                                                    </li>
                                                    <li><a href=''>
                                                        <div className='images-box-location'><img src={'./assets/images/hyderabad.png'} alt="img description" /></div>

                                                        <h5>Jobs in Hyderabad</h5>
                                                    </a>
                                                    </li>
                                                    <li><a href=''>
                                                        <div className='images-box-location'><img src={'./assets/images/chennai.png'} alt="img description" /></div>
                                                        <h5>Jobs in Chennai</h5>
                                                    </a>
                                                    </li>

                                                    <li><a href=''>
                                                        <div className='images-box-location'><img src={'./assets/images/noida.png'} alt="img description" /></div>
                                                        <h5>Jobs in Noida</h5>
                                                    </a>
                                                    </li>
                                                </ul>
                                                <div className='view-all-box'><a href=''>View All Locations</a></div>
                                            </div>

                                        </div>

                                        <div className='job-maincontaine-row'>
                                            <div className='brows-by-locations-bx '>
                                                <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Functional Areas</h2></div>
                                                <ul className='functional-area-list'>
                                                    <li><a href=''> Accounting Jobs </a></li>
                                                    <li><a href=''> Bank Jobs </a></li>
                                                    <li><a href=''> Data Entry Jobs </a></li>
                                                    <li><a href=''> Teacher Jobs </a></li>
                                                    <li><a href=''> Finance Jobs</a></li>
                                                    <li><a href=''> BPO Jobs </a></li>
                                                    <li><a href=''> HR Jobs </a></li>
                                                    <li><a href=''> Defence Jobs </a></li>
                                                    <li><a href=''>  Content Writing Jobs  </a></li>
                                                    <li><a href=''>  Consultant Jobs  </a></li>




                                                </ul>
                                                <div className='view-all-box'><a href=''>View All Functional Areas</a></div>
                                            </div>
                                            <div className='brows-by-locations-bx '>
                                                <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Industries</h2></div>
                                                <ul className='functional-area-list'>
                                                    <li><a href=''> Govt Jobs </a></li>
                                                    <li><a href=''> Railway Jobs </a></li>
                                                    <li><a href=''> Ngo Jobs </a></li>
                                                    <li><a href=''> Pharma Jobs </a></li>
                                                    <li><a href=''> IT Jobs</a></li>
                                                    <li><a href=''> Agriculture Jobs </a></li>
                                                    <li><a href=''> Telecom Jobs </a></li>
                                                    <li><a href=''> Shipping Jobs </a></li>
                                                    <li><a href=''>  Oil And Gas Jobs  </a></li>
                                                    <li><a href=''>  Aviation Jobs  </a></li>


                                                </ul>
                                                <div className='view-all-box'><a href=''>View All Industries</a></div>
                                            </div>
                                        </div>

                                        <div className='brows-jobs-companies'>
                                            <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Companies</h2></div>
                                            <div className='companies-brows-list'>
                                                <ul>
                                                    <li><a href=''><img src={'./assets/images/tcs-company.png'} alt="img description" /> <h6>TCS</h6></a></li>
                                                    <li><a href=''><img src={'./assets/images/cognizant-company.png'} alt="img description" /><h6>Cognizant</h6></a></li>
                                                    <li><a href=''><img src={'./assets/images/byjus-company.png'} alt="img description" /><h6>Byjus</h6></a></li>
                                                    <li><a href=''><img src={'./assets/images/amazon-company.png'} alt="img description" /><h6>Amazon</h6></a></li>
                                                    <li><a href=''><img src={'./assets/images/accenture-company.png'} alt="img description" /><h6>Accenture</h6></a></li>

                                                </ul>
                                                <div className='view-all-box'><a href=''>View All Companies</a></div>
                                            </div>

                                        </div>
                                        <div className='job-maincontaine-row'>
                                            <div className='brows-by-locations-bx '>
                                                <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Designations</h2></div>
                                                <ul className='functional-area-list'>
                                                    <li><a href=''> Company Secretary Jobs </a></li>
                                                    <li><a href=''> Business Analyst Jobs </a></li>
                                                    <li><a href=''> Lecturer Jobs </a></li>
                                                    <li><a href=''> Air Hostess Jobs </a></li>
                                                    <li><a href=''> Clerk Jobs</a></li>
                                                    <li><a href=''> Oracle DBA Jobs </a></li>
                                                    <li><a href=''> Computer Operator Jobs </a></li>
                                                    <li><a href=''> Management Trainee Jobs </a></li>
                                                    <li><a href=''>  Pharmacist Jobs  </a></li>
                                                    <li><a href=''>  Consultant Jobs  </a></li>




                                                </ul>
                                                <div className='view-all-box'><a href=''>View All Designations</a></div>
                                            </div>
                                            <div className='brows-by-locations-bx '>
                                                <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Skills</h2></div>
                                                <ul className='functional-area-list'>
                                                    <li><a href=''> Biotechnology Jobs </a></li>
                                                    <li><a href=''> Software Testing Jobs </a></li>
                                                    <li><a href=''> Nursing Jobs</a></li>
                                                    <li><a href=''> Networking Jobs </a></li>
                                                    <li><a href=''> Mainframe Jobs</a></li>
                                                    <li><a href=''> SAP Jobs </a></li>
                                                    <li><a href=''> Animation Jobs </a></li>
                                                    <li><a href=''> .Net Jobs </a></li>
                                                    <li><a href=''> Accounting Jobs</a></li>
                                                    <li><a href=''> Oracle Jobs  </a></li>


                                                </ul>
                                                <div className='view-all-box'><a href=''>View All Skills</a></div>
                                            </div>
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
