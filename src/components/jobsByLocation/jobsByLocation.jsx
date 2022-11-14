import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'
export default class jobsByLocation extends Component {

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
                                            <li><Link to={constant.component.jobsByLocation.url} className='active'>Jobs by Location</Link></li>
                                            <li><Link to={constant.component.jobsByCompany.url}>Jobs by Company</Link></li>
                                            <li><Link to={constant.component.jobsByCategory.url}>Jobs by Category</Link></li>
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
                                            <div className='headtext'>Browse Jobs by Top Locations</div>
                                            <div className='jobsbylocationColumn colCount_four'>
                                                <Link to={constant.component.jobsInNoida.url}>Jobs in Mumbai</Link>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Bangalore</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Delhi</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Gurgaon</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs in NOIDA</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Chennai</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Pune</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Hyderabad</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Kolkata</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Ahmedabad</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Chandigarh</a>
                                            </div>
                                            <div className='text-right pr-2 pb-1'>
                                                <a href='' className='proknowmore'>View All</a>
                                            </div>
                                        </div>
                                        <div className='jobsbylocationColumnBox'>
                                            <div className='headtext'>Browse Jobs by Top Localities</div>
                                            <div className='jobsbylocationColumn colCount_four'>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Top Localities In Hyderabad / Secunderabad</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Top Localities In Pune</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Top Localities In Chennai</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Top Localities In Noida</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Top Localities In Mumbai</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Top Localities In Bengaluru/Bangalore</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Top Localities In Delhi/NCR(National Capital Region)</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Top Localities In Kolkata</a>
                                                <a target='_blank' href={constant.component.Enquiry.url}>Top Localities In Ahmedabad</a>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h6>Jobs in States / Union Territories and Cities across India</h6>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Andhra Pradesh</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Adilabad</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Anantapur </a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Cuddapah </a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Guntakal</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Guntur</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Kakinada</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Kamalapuram</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Kurnool</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Nellore </a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Rajahmundry</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Tirupati</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Vijayawada</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Visakhapatnam / Vizag</a>
                                                    </div>
                                                </div>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Gujrat</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Ahmedabad</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Anand</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Ankleshwar</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Bharuch</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Bhavnagar</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Bhuj</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Dahej</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Gandhinagar</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Gandhidham</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Gir</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Godhra</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Jamnagar</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Junagadh</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Godhra</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Jamnagar</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Junagadh</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Himachal Pradesh</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Baddi</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Chamba</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Dalhousie</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Dharmasala</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Kala</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Shimla</a>
                                                    </div>
                                                </div>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Jammu and Kashmir</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Jammu</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Srinagar</a>
                                                    </div>
                                                </div>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Jharkhand</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Bokaro</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Dhanbad</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Jamshedpur</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Ranchi</a>
                                                    </div>
                                                </div>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Karnataka</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Belgaum</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Bellary</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Bengaluru / Bangalore</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Bidar</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Davangere</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Dharwad</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Gulbarga</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Hospet</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Hubli</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Kolar</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Koppal</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Mangalore</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Manipur</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Imphal</a>
                                                    </div>
                                                </div>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Meghalaya</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Shillong</a>
                                                    </div>
                                                </div>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Mizoram</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Aizawl</a>
                                                    </div>
                                                </div>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Nagaland</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Dimapur</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Kohima</a>
                                                    </div>
                                                </div>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Odisha</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Angul</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Bhubaneshwar</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Cuttack</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Jharsuguda</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Paradeep</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Puri</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Rourkela</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Sambalpur</a>
                                                    </div>
                                                </div>
                                                <div className='jobsbylocation1ColumnBox'>
                                                    <div className='headtext'>Jobs in Punjab</div>
                                                    <div className='jobsbylocation1Column colCount_one'>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Amritsar</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Banur</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Barnala</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Bathinda</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Faridkot</a>
                                                        <a target='_blank' href={constant.component.Enquiry.url}>Jobs in Firozpur</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
