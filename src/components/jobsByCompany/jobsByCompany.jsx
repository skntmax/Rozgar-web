import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'
export default class jobsByCompany extends Component {
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
                                              <input type="text" name="keyword" className="form-control" placeholder="Search jobs by Skills, Designation, Companies"/>
                                          </div>
                                      </div>
                                      <div className="rozgar-jobbylocsearchbtn">
                                          <a href="javascript:void(0)"><i className="lnr lnr-magnifier"></i></a>
                                      </div>
                                  </div>
                              </form>
                              <ul className='jobsbylocation-top'>
                                  <li><Link to={constant.component.jobsByLocation.url}>Jobs by Location</Link></li>
                                  <li><Link to={constant.component.jobsByCompany.url} className='active'>Jobs by Company</Link></li>
                                  <li><Link to={constant.component.jobsByCategory.url}>Jobs by Category</Link></li>
                                  <li><Link to={constant.component.jobsByDesignation.url}>Jobs by Designation</Link></li>
                                  <li><Link to={constant.component.jobsBySkill.url}>Jobs by Skill</Link></li>
                              </ul>
                         </div>
                      </div>   
                  </div>
              </div>

              <div className='rozgar-profile-main-content pt-2'>
                  <div className='container'>
                      <div className='row'>
                        <div className='col-md-9'>
                            <div className='jobsbylocationColumnBox'>
                                <div className='jobbycomsearch'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h6>Browse Jobs by Companies</h6>
                                        </div>
                                        <div className='col-md-6'>
                                            <div class="jobComwrap">
                                                <div class="jobComsearch">
                                                    <input type="text" class="jobComsearchTerm" placeholder="Search for a Company"/>
                                                    <button type="submit" class="jobComsearchButton">
                                                        <i class="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='jobsbylocationColumn colCount_four'>
                                    <a target='_blank' href={constant.component.Enquiry.url}>24/7 Customer Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>3D PLM Software Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>3i Infotech Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>AAPC India Hotel Management Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>ACC Jobs ACT Television Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>ADP Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>AIG Analytics & Services Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>ANG INDUSTRIES Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>ANI Technologies Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>ANZ Support Services Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>ARSTEG Solutions Pvt Ltd Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>ASAP Info Systems Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>ASM Technologies Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>AT&T Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>AVEVA Software Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>AXA Technology Services Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>AXIS IT & T Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Abbott Healthcare Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Accel Frontline Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Accenture Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Adani Enterprises Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aditi Technologies Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aditya Birla Group Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aditya Birla Retail Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Adlabs Entertainment Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Adobe Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aegis Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aegon Religare Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>African Commodities DMCC</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Jobs Agilis International</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Jobs Agility Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>AgreeYa Mobility Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Agreeya Solutions Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>AirWatch Technologies Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aircel Jobs Ajax Fiori Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Akamai Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Akamai Technologies Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Alcatel-Lucent Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Alembic Pharma Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Alere Medical Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Alert Enterprise Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>All Services Global Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Alliance Global Services Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Allianz - AMOS Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Allianz Cornhill Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Allied Digital Services Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Allscripts Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Allstate Solutions Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Alstom Transport Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Altair Engineering Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Altimetrik Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Altisource Business Solutions Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Amadeus Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Amadeus Software Labs Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Amar Ujala Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Amarprakash Developers Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Amazon Development Centre Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Ambuja Cements Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Amdocs Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>American Express Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Ameriprise Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Amicorp Group Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Amity University Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Ample Technologies Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Anand Automotive Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>AnandRathi Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Anchor Electricals Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Andhra Pradesh Paper Mills Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Angel Broking Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Angelique Intl. Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Ansal Housing Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Ansal Properties Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Ansys India Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aon Hewitt Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aparna Constructions Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Apeejay Stya Group Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Apex Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Apollo Munich Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Apotex Research Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Applied Materials Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Appster pty Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aptech Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aricent Technologies Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aristocrat Technologies Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Arris India Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Arrow Electronics Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Arvind Jobs Ascent Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Ascent Infotech Jobs </a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Asian Paints Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Atkins Global Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Atlas Copco Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Atlas Jewellery Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Atos Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Atrenta India Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aurobindo Pharma Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Avantha Business Solutions</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Jobs Avaya Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Aviva Life Insurance Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Avvas Infotech Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Axis Bank Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>BA Continuum Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>BBC Heart Care Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>BCG Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>BMC Software Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>BPTP Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>BSCPL Infrastructure Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>BT Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>BT e-Serv Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>BYD Electronics Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bahwan Cyber Tek Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bahwan Engineering Group Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bajaj Allianz Gen Insurance Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bajaj Allianz Life Insurance Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bajaj Auto Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bajaj Auto Finance Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bajaj Capital Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bajaj Electricals Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bajaj Hindusthan Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bapco Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Barclays Shared Services Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Barclays Technology Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bard India Healthcare Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bata Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bausch And Lomb Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Baxter Jobs</a>
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bebo Technologies Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bentley Systems Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Berger Paints Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bharat Hotels Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bharti AXA Gen Insurance Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bharti AXA Life Insurance Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bharti Airtel Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bharti Infratel Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bharti Walmart Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bigshoebazaar Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bikanervala Foods Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bilt Paper B.V. Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Biocon Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Birlasoft Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Blue Dart Express Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Blue Star Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bombay Stock Exchange Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>BookMyShow Jobs</a> 
                                    <a target='_blank' href={constant.component.Enquiry.url}>Bosch Jobs</a>
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
                                        <input type="Name" name="Name" className="form-control" placeholder="Your Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" placeholder="Your Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="mobile" name="mobile" className="form-control" placeholder="Mobile"/>
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
                                        <img src="./assets/images/adds-05.jpg" alt="img description"/>
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
