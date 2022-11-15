import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'

export default class jobbycity extends Component {
  render() {
    return (
      <React.Fragment>
          <main id="rg-main" className="rg-main rg-haslayout">
			<div className="rg-sectionspace rg-haslayout pt-0">
				{/* <!--************************************
						Search Area start
				*************************************--> */}
				<div className="rg-successstorysbanner">
					<div className="container">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-12 col-lg-12">
								<h4>Jobs in Noida</h4>
								<form className="rg-formtheme rg-formbannersearch rg-formbannersearchinner">
									<fieldset className="rg-searcharea">
										<div className="rg-searchholder">
											<div className="form-group rg-inputwithicon">
												<i className="lnr lnr-user"></i>
												<input type="text" name="skill" className="form-control" placeholder="Skill, Company, Designation or Keyword"/>
											</div>
										</div>
										<div className="rg-searchholder">
											<div className="form-group rg-inputwithicon">
												<i className="ti-location-pin"></i>
												<input type="text" name="locationname" className="form-control" placeholder="Location"/>
											</div>
										</div>
										<div className="rg-searchholder bl-0">
											<i className="lnr lnr-calendar-full"></i>
											<span className="rg-select padleft">
												<select data-placeholder="All" className="chosen-select locations" name="experience">
													<option selected>Fresher (less than 1 year)</option>
													<option value="aberdeen">1 year</option>
													<option value="aldershot">2 year</option>
													<option value="altrincham">3 year</option>
													<option value="aylesbury">4 year</option>
													<option value="bamber">5 year</option>
													<option value="bangor">6 year</option>
													<option value="batley">7 year</option>
													<option value="bebingto">8 year</option>
													<option value="bedford">9 year</option>
													<option value="birmingham">10 year</option>
													<option value="blackpool">11 year</option>
													<option value="brentwood">12 year</option>
													<option value="bristol">13 year</option>
													<option value="cardiff">14 year</option>
													<option value="carlisle">15 year</option>
													<option value="crawley">16 year</option>
													<option value="darlington">17 year</option>
													<option value="eastleigh">18 year</option>
													<option value="edinburg">19 year</option>
													<option value="esher">20 year</option>
												</select>
											</span>
										</div>
										<div className="rg-searchbtn">
											<a href="javascript:void(0)" className="rg-btn"><i className="lnr lnr-magnifier"></i></a>
										</div>
									</fieldset>
								</form>
						   </div>
						</div>   
					</div>
				</div>
				{/* <!--************************************
						Search Area end
				*************************************-->
				<!--************************************
						Blog Grid Start
				*************************************--> */}
				<div className="rg-haslayout">
					<div className="container">
						<div className="row">
							<div id="rg-threecolumns" className="rg-threecolumns">
								<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 float-left">
									<aside id="rg-sidebar" className="rg-sidebar rg-sidebarcol">
										<div className="rg-widget rg-widgetsearch rg-widgetjobalert mb-10">
											<div className="filterbox">
												<div className="filtericon">
													<i className="fa fa-filter" aria-hidden="true"></i>
												</div>
												<div className="filtername">
													<span className="filtername">All Filters</span>
												</div>
												{/* <div className="filterapply">
													<a href="#" className="appliesno">Applied(4)</a>
												</div> */}
											</div>
										</div>
										<div id="rg-narrowsearchcollapse" className="rg-themecollapse rg-narrowsearchcollapse">
											<div className="rg-widget rg-themecollapsetitle">
												<div className="rg-widgettitle">
													<h3>Work from home</h3>
													<span className="fa fa-chevron-right"></span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsecontent">
												<div className="rg-checkboxgroup">
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-salesexecutive" name="bycondition" value=""/>
														<label for="rg-salesexecutive">
															<span>WFH during Covid</span>
														</label>
													</span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsetitle">
												<div className="rg-widgettitle">
													<h3>Experience</h3>
													<span className="fa fa-chevron-right"></span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsecontent">
												<div className="rg-checkboxgroup">
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-armagh" name="bycondition" value=""/>
														<label for="rg-armagh">
															<span>Armagh</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-bangor" name="bycondition" value=""/>
														<label for="rg-bangor">
															<span>Bangor</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-bath" name="bycondition" value=""/>
														<label for="rg-bath">
															<span>Bath</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-belfast" name="bycondition" value=""/>
														<label for="rg-belfast">
															<span>Belfast</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-cambridge" name="bycondition" value=""/>
														<label for="rg-cambridge">
															<span>Cambridge</span>
														</label>
													</span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsetitle">
												<div className="rg-widgettitle">
													<h3>Salary</h3>
													<span className="fa fa-chevron-right"></span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsecontent">
												<div className="rg-checkboxgroup">
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-fresh" name="bycondition" value=""/>
														<label for="rg-fresh">
															<span>0-3 Lakhs(5850)</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-lessthan" name="bycondition" value=""/>
														<label for="rg-lessthan">
															<span>3-6 Lakhs(31824)</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-1year" name="bycondition" value=""/>
														<label for="rg-1year">
															<span>6-10 Lakhs(51824)</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-2years" name="bycondition" value=""/>
														<label for="rg-2years">
															<span>10-15 Lakhs(71824)</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-3years" name="bycondition" value=""/>
														<label for="rg-3years">
															<span>15-20 Lakhs(81824)</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-3years" name="bycondition" value=""/>
														<label for="rg-3years">
															<span>20-25 Lakhs(81824)</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-3years" name="bycondition" value=""/>
														<label for="rg-3years">
															<span>25-30 Lakhs(81824)</span>
														</label>
													</span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsetitle">
												<div className="rg-widgettitle">
													<h3>Posted by</h3>
													<span className="fa fa-chevron-right"></span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsecontent">
												<div className="rg-checkboxgroup">
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-fulltimepermanent" name="bycondition" value=""/>
														<label for="rg-fulltimepermanent">
															<span>Company Jobs (77797)</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-internship" name="bycondition" value=""/>
														<label for="rg-internship">
															<span>Consultant Jobs (19231)</span>
														</label>
													</span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsetitle">
												<div className="rg-widgettitle">
													<h3>Top companies</h3>
													<span className="fa fa-chevron-right"></span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsecontent">
												<div className="rg-checkboxgroup">
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-communicationskills" name="bycondition" value=""/>
														<label for="rg-communicationskills">
															<span>Accenture (5000)</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-englishfluency" name="bycondition" value=""/>
														<label for="rg-englishfluency">
															<span>IBM India (717)</span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-php" name="bycondition" value="php"/>
														<label for="rg-php">
															<span>Capgemini <span className="price">(335)</span></span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-adobephotoshop" name="bycondition" value=""/>
														<label for="rg-adobephotoshop">
															<span>SAP Labs <span className="price">(253)</span></span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-Javascript" name="bycondition" value=""/>
														<label for="rg-Javascript">
															<span>Wipro Infotech <span className="price">(8)</span></span>
														</label>
													</span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsetitle">
												<div className="rg-widgettitle">
													<h3>Location</h3>
													<span className="fa fa-chevron-right"></span>
												</div>
											</div>
											<div className="rg-widget rg-themecollapsecontent">
												<div className="rg-checkboxgroup">
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-entrylevel" name="bycondition" value=""/>
														<label for="rg-entrylevel">
															<span>Remote <span className="price">(1852)</span></span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-internstudent" name="bycondition" value=""/>
														<label for="rg-internstudent">
															<span>Bangalore/Bengaluru <span className="price">(38909)</span></span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-departmenthead" name="bycondition" value=""/>
														<label for="rg-departmenthead">
															<span>Hyderabad/Secunderabad<span className="price">(98)</span></span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-experiencedprofessional" name="bycondition" value=""/>
														<label for="rg-experiencedprofessional">
															<span>Delhi / NCR <span className="price">(18674)</span></span>
														</label>
													</span>
													<span className="rg-checkbox">
														<input type="checkbox" id="rg-countryhead" name="bycondition" value=""/>
														<label for="rg-countryhead">
															<span>New Delhi <span className="price">(2721)</span></span>
														</label>
													</span>
												</div>
											</div>
										</div>
										<div className="roz-near-facilities-box">
											<div className="roz-near-facilities-heading">
												<h4>Advertisement</h4>
											</div>
											<div className="roz-near-facilities-body">

												<div className="roz-jobschedules">
													<div className="roz-tabcontent tab-content">
														<div className="roz-jobdetails roz-abouttab roz-tabpane">
															<div className="roz-jobdetaildescription">
																<div className="roz-near-locality-box">
																	<div className="loccontentbox">
																		<h4><span className="adbox">Ad</span> <a href="#">Web Design & Development - Web Design Agency in Delhi NCR</a></h4>
																		<p>Looking for an agency to design and develop an amazing website?</p>
																		<span className="roz-locrating-star">
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star-o"></i>
																			<i className="fa fa-star-o"></i>
																			<span>3.0</span>
																		</span>
																		<div className="roz-callphone">
																			<i className="fa fa-globe"></i> <a href="#">www.webimpetus.com</a>
																		</div>
																		<div className="roz-callphone">
																			<i className="lnr lnr-phone"></i> +91-1800 274 4515
																		</div>
																	</div>
																</div>
																
															</div>
															<div className="roz-jobdetaildescription">
																<div className="roz-near-locality-box">
																	<div className="loccontentbox">
																		<h4><span className="adbox">Ad</span> <a href="#">Tata The Indian Food Company, Sector 2, Noida - Zomato</a></h4>
																		<p>Tata The Indian Food Company Noida; Tata The Indian Food Company.</p>
																		<span className="roz-locrating-star">
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star-o"></i>
																			<i className="fa fa-star-o"></i>
																			<span>3.0</span>
																		</span>
																		<div className="roz-callphone">
																			<i className="fa fa-globe"></i> <a href="#">www.zomato.com</a>
																		</div>
																		<div className="roz-callphone">
																			<i className="lnr lnr-phone"></i> +91-1600 676 4514
																		</div>
																	</div>
																</div>
															</div>
															<div className="roz-jobdetaildescription">
																<div className="roz-near-locality-box">
																	<div className="loccontentbox">
																		<h4><span className="adbox">Ad</span> <a href="#">Corporate Companies For Food Products - Noida Sector 62</a></h4>
																		<p>Top Corporate Companies For Food Products in Noida Sector 62, Delhi.</p>
																		<span className="roz-locrating-star">
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star-o"></i>
																			<span>4.0</span>
																		</span>
																		<div className="roz-callphone">
																			<i className="fa fa-globe"></i> <a href="#">www.justdial.com</a>
																		</div>
																		<div className="roz-callphone">
																			<i className="lnr lnr-phone"></i> +91-1400 474 4516
																		</div>
																	</div>
																</div>
															</div>
															<div className="roz-jobdetaildescription">
																<div className="roz-near-locality-box">
																	<div className="loccontentbox">
																		<h4><span className="adbox">Ad</span> <a href="#">Web Design & Development - Web Design Agency in Delhi NCR</a></h4>
																		<p>Looking for an agency to design and develop an amazing website?</p>
																		<span className="roz-locrating-star">
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star"></i>
																			<i className="fa fa-star-o"></i>
																			<i className="fa fa-star-o"></i>
																			<span>3.0</span>
																		</span>
																		<div className="roz-callphone">
																			<i className="fa fa-globe"></i> <a href="#">www.webimpetus.com</a>
																		</div>
																		<div className="roz-callphone">
																			<i className="lnr lnr-phone"></i> +91-1800 274 4515
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="roz-postfreejob">
												<a href="#">Place your ad here <i className="fa fa-angle-double-right"></i></a>
											</div>
										</div>
									</aside>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-6 float-left">
									<div className="rg-innersectionhead">
										<div className="rg-title">
											<h2>Search jobs in Noida</h2>
										</div>
									</div>
									<div className="rg-sortandview">
										<div className="rg-views">
											<span>About 1,425,000 Jobs In India</span>
										</div>
										<div className="rg-sortby">
											<span><i className="fa fa-sort-amount-desc" aria-hidden="true"></i></span>
											<div className="rg-select">
												<select>
													<option value="Relevance">Relevance</option>
													<option value="Date">Date</option>
												</select>
											</div>
										</div>
									</div>
									<div className="rg-featuredjobs rg-featuredjobsvtwo rg-featuredjobsvthree">
										<div className="rg-featurejobholder">
											<div className="rg-featurejob">
												<figure className="rg-companyimg">
													<img src={'./assets/images/topcompanies/img-01.png'} alt="image description"/>
												</figure>
												<div className="rg-companycontent">
													<div className="rg-companyhead">
														<div className="rg-rightarea">
															<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i> 2 Days Ago</a>
														</div>
													</div>
													<div className="rg-companyname">
														<h3><a href="javascript:void(0);">ServiceNow IT Service Management Application Developer</a></h3>
														<h6>AXIS BANK</h6>
														<div className="companyreviewbox">
															<a href="#"><span>Accenture - </span></a> 
															<span className="reviewnumber">4.5 <i className="fa fa-star"></i></span>
															<a href="#"><span className="reviewlink">(22835 Reviews)</span></a>
														</div>
													</div>
													<div className="rg-description">
														<p>We are looking for 6 months experienced candidate who must have sound background and basic knowledge</p>
														<ul className="skilllist">
															<li>CSS</li>
															<li>HTML</li>
															<li>IT Skills</li>
															<li>MVC Framework</li>
															<li>Programming</li>
															<li>JQuery</li>
															<li>Web Designing</li>
														</ul>
													</div>
													<div className="rg-rightarea">
														<a className="rg-btnjobtag rg-fulltimejob mr-10" href="javascript:void(0);">
															<i className="ti-crown"></i> PREMIUM
														</a>
														<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a>
													</div>
												</div>
											</div>
											<ul className="rg-professionalinfo">
												<li><i className="lnr lnr-briefcase"></i><span>6-8 Yrs</span></li>
												<li><i className="fa fa-rupee"></i><span>Not disclosed</span></li>
												<li><i className="lnr lnr-map-marker"></i><span>Bangalore/Bengaluru</span></li>
											</ul>
										</div>
										<div className="rg-featurejobholder">
											<div className="rg-featurejob">
												<figure className="rg-companyimg">
													<img src={'./assets/images/topcompanies/img-02.png'} alt="image description"/>
												</figure>
												<div className="rg-companycontent">
													<div className="rg-companyhead">
														<div className="rg-rightarea">
															<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i> 2 Days Ago</a>
														</div>
													</div>
													<div className="rg-companyname">
														<h3><a href="javascript:void(0);">ServiceNow IT Service Management Application Developer</a></h3>
														<h6>Birla Soft</h6>
														<div className="companyreviewbox">
															<a href="#"><span>Accenture - </span></a> 
															<span className="reviewnumber">4.5 <i className="fa fa-star"></i></span>
															<a href="#"><span className="reviewlink">(22835 Reviews)</span></a>
														</div>
													</div>
													<div className="rg-description">
														<p>We are looking for 6 months experienced candidate who must have sound background and basic knowledge</p>
														<ul className="skilllist">
															<li>CSS</li>
															<li>HTML</li>
															<li>IT Skills</li>
															<li>MVC Framework</li>
															<li>Programming</li>
															<li>JQuery</li>
															<li>Web Designing</li>
														</ul>
													</div>
													<div className="rg-rightarea">
														<a className="rg-btnjobtag rg-parttimejob mr-10" href="javascript:void(0);">
															<i className="ti-thumb-up"></i> FEATURED
														</a>
														<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a>
													</div>
												</div>
											</div>
											<ul className="rg-professionalinfo">
												<li><i className="lnr lnr-briefcase"></i><span>6-8 Yrs</span></li>
												<li><i className="fa fa-rupee"></i><span>Not disclosed</span></li>
												<li><i className="lnr lnr-map-marker"></i><span>Bangalore/Bengaluru</span></li>
											</ul>
										</div>
										<div className="rg-featurejobholder">
											<div className="rg-featurejob">
												<figure className="rg-companyimg">
													<img src={'./assets/images/topcompanies/img-03.png'} alt="image description"/>
												</figure>
												<div className="rg-companycontent">
													<div className="rg-companyhead">
														<div className="rg-rightarea">
															<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i> 2 Days Ago</a>
														</div>
													</div>
													<div className="rg-companyname">
														<h3><a href="javascript:void(0);">Software Engineer 2 - IT</a></h3>
														<h6>Data Matics</h6>
														<div className="companyreviewbox">
															<a href="#"><span>Dell Technologies - </span></a> 
															<span className="reviewnumber">4.1 <i className="fa fa-star"></i></span>
															<a href="#"><span className="reviewlink">(21835 Reviews)</span></a>
														</div>
													</div>
													<div className="rg-description">
														<p>We are looking for 6 months experienced candidate who must have sound background and basic knowledge</p>
														<ul className="skilllist">
															<li>CSS</li>
															<li>HTML</li>
															<li>IT Skills</li>
															<li>MVC Framework</li>
															<li>Programming</li>
															<li>JQuery</li>
															<li>Web Designing</li>
														</ul>
													</div>
													<div className="rg-rightarea">
														<a className="rg-btnjobtag rg-homebasejob mr-10" href="javascript:void(0);">
															<i className="ti-thumb-up"></i> FEATURED
														</a>
														<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a>
													</div>
												</div>
											</div>
											<ul className="rg-professionalinfo">
												<li><i className="lnr lnr-briefcase"></i><span>3-6 Yrs</span></li>
												<li><i className="fa fa-rupee"></i><span>Not disclosed</span></li>
												<li><i className="lnr lnr-map-marker"></i><span>Bangalore/Bengaluru</span></li>
											</ul>
										</div>
										<div className="rg-featurejobholder">
											<div className="rg-featurejob">
												<figure className="rg-companyimg">
													<img src={'./assets/images/topcompanies/img-01.png'} alt="image description"/>
												</figure>
												<div className="rg-companycontent">
													<div className="rg-companyhead">
														<div className="rg-rightarea">
															<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i> 2 Days Ago</a>
														</div>
													</div>
													<div className="rg-companyname">
														<h3><a href="javascript:void(0);">ServiceNow IT Service Management Application Developer</a></h3>
														<h6>Axis Bank</h6>
														<div className="companyreviewbox">
															<a href="#"><span>Accenture - </span></a> 
															<span className="reviewnumber">4.5 <i className="fa fa-star"></i></span>
															<a href="#"><span className="reviewlink">(22835 Reviews)</span></a>
														</div>
													</div>
													<div className="rg-description">
														<p>We are looking for 6 months experienced candidate who must have sound background and basic knowledge</p>
														<ul className="skilllist">
															<li>CSS</li>
															<li>HTML</li>
															<li>IT Skills</li>
															<li>MVC Framework</li>
															<li>Programming</li>
															<li>JQuery</li>
															<li>Web Designing</li>
														</ul>
													</div>
													<div className="rg-rightarea">
														<a className="rg-btnjobtag rg-fulltimejob mr-10" href="javascript:void(0);">
															<i className="ti-crown"></i> PREMIUM
														</a>
														<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a>
													</div>
												</div>
											</div>
											<ul className="rg-professionalinfo">
												<li><i className="lnr lnr-briefcase"></i><span>6-8 Yrs</span></li>
												<li><i className="fa fa-rupee"></i><span>Not disclosed</span></li>
												<li><i className="lnr lnr-map-marker"></i><span>Bangalore/Bengaluru</span></li>
											</ul>
										</div>
										<div className="rg-adds rg-featurejobholder">
								   			<a href="javascript:void(0);" title="">
												<figure>	
													<img src={'./assets/images/adds-06.jpg'} alt="img description"/>
												</figure>
											</a>
											<span>Ad</span>
										</div>
										<div className="rg-featurejobholder">
											<div className="rg-featurejob">
												<figure className="rg-companyimg">
													<img src={'./assets/images/topcompanies/img-02.png'} alt="image description"/>
												</figure>
												<div className="rg-companycontent">
													<div className="rg-companyhead">
														<div className="rg-rightarea">
															<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i> 2 Days Ago</a>
														</div>
													</div>
													<div className="rg-companyname">
														<h3><a href="javascript:void(0);">ServiceNow IT Service Management Application Developer</a></h3>
														<h6>Birla Soft</h6>
														<div className="companyreviewbox">
															<a href="#"><span>Accenture - </span></a> 
															<span className="reviewnumber">4.5 <i className="fa fa-star"></i></span>
															<a href="#"><span className="reviewlink">(22835 Reviews)</span></a>
														</div>
													</div>
													<div className="rg-description">
														<p>We are looking for 6 months experienced candidate who must have sound background and basic knowledge</p>
														<ul className="skilllist">
															<li>CSS</li>
															<li>HTML</li>
															<li>IT Skills</li>
															<li>MVC Framework</li>
															<li>Programming</li>
															<li>JQuery</li>
															<li>Web Designing</li>
														</ul>
													</div>
													<div className="rg-rightarea">
														<a className="rg-btnjobtag rg-parttimejob mr-10" href="javascript:void(0);">
															<i className="ti-thumb-up"></i> FEATURED
														</a>
														<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a>
													</div>
												</div>
											</div>
											<ul className="rg-professionalinfo">
												<li><i className="lnr lnr-briefcase"></i><span>6-8 Yrs</span></li>
												<li><i className="fa fa-rupee"></i><span>Not disclosed</span></li>
												<li><i className="lnr lnr-map-marker"></i><span>Bangalore/Bengaluru</span></li>
											</ul>
										</div>
										<div className="rg-featurejobholder">
											<div className="rg-featurejob">
												<figure className="rg-companyimg">
													<img src={'./assets/images/topcompanies/img-03.png'} alt="image description"/>
												</figure>
												<div className="rg-companycontent">
													<div className="rg-companyhead">
														<div className="rg-rightarea">
															<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i> 2 Days Ago</a>
														</div>
													</div>
													<div className="rg-companyname">
														<h3><a href="javascript:void(0);">Software Engineer 2 - IT</a></h3>
														<h6>Data Matics</h6>
														<div className="companyreviewbox">
															<a href="#"><span>Dell Technologies - </span></a> 
															<span className="reviewnumber">4.1 <i className="fa fa-star"></i></span>
															<a href="#"><span className="reviewlink">(21835 Reviews)</span></a>
														</div>
													</div>
													<div className="rg-description">
														<p>We are looking for 6 months experienced candidate who must have sound background and basic knowledge</p>
														<ul className="skilllist">
															<li>CSS</li>
															<li>HTML</li>
															<li>IT Skills</li>
															<li>MVC Framework</li>
															<li>Programming</li>
															<li>JQuery</li>
															<li>Web Designing</li>
														</ul>
													</div>
													<div className="rg-rightarea">
														<a className="rg-btnjobtag rg-homebasejob mr-10" href="javascript:void(0);">
															<i className="ti-thumb-up"></i> FEATURED
														</a>
														<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a>
													</div>
												</div>
											</div>
											<ul className="rg-professionalinfo">
												<li><i className="lnr lnr-briefcase"></i><span>3-6 Yrs</span></li>
												<li><i className="fa fa-rupee"></i><span>Not disclosed</span></li>
												<li><i className="lnr lnr-map-marker"></i><span>Bangalore/Bengaluru</span></li>
											</ul>
										</div>
										<div className="rg-featurejobholder">
											<div className="rg-featurejob">
												<figure className="rg-companyimg">
													<img src={'./assets/images/topcompanies/img-01.png'} alt="image description"/>
												</figure>
												<div className="rg-companycontent">
													<div className="rg-companyhead">
														<div className="rg-rightarea">
															<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i> 2 Days Ago</a>
														</div>
													</div>
													<div className="rg-companyname">
														<h3><a href="javascript:void(0);">ServiceNow IT Service Management Application Developer</a></h3>
														<h6>Axis Bank</h6>
														<div className="companyreviewbox">
															<a href="#"><span>Accenture - </span></a> 
															<span className="reviewnumber">4.5 <i className="fa fa-star"></i></span>
															<a href="#"><span className="reviewlink">(22835 Reviews)</span></a>
														</div>
													</div>
													<div className="rg-description">
														<p>We are looking for 6 months experienced candidate who must have sound background and basic knowledge</p>
														<ul className="skilllist">
															<li>CSS</li>
															<li>HTML</li>
															<li>IT Skills</li>
															<li>MVC Framework</li>
															<li>Programming</li>
															<li>JQuery</li>
															<li>Web Designing</li>
														</ul>
													</div>
													<div className="rg-rightarea">
														<a className="rg-btnjobtag rg-fulltimejob mr-10" href="javascript:void(0);">
															<i className="ti-crown"></i> PREMIUM
														</a>
														<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a>
													</div>
												</div>
											</div>
											<ul className="rg-professionalinfo">
												<li><i className="lnr lnr-briefcase"></i><span>6-8 Yrs</span></li>
												<li><i className="fa fa-rupee"></i><span>Not disclosed</span></li>
												<li><i className="lnr lnr-map-marker"></i><span>Bangalore/Bengaluru</span></li>
											</ul>
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
								</div>
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 float-left">
									<aside id="rg-sidebarvtwo" className="rg-sidebar rg-sidebarvtwo">
										<div className="jobscitypage mb-20">
											<ul>
												<li><Link to={constant.component.jobsInNoida.url}><i className="fa fa-caret-right"></i> Noida - An Overview</Link></li>
												<li><a href="#"><i className="fa fa-caret-right"></i> Companies in Noida</a></li>
												<li><a href="#"><i className="fa fa-caret-right"></i> Jobs Trends in Noida</a></li>
											</ul>
										</div>
										<div className="roz-create-cv">
											<div className='urgent-hiring-area'>
												<div className='hiring-img'>
													<img src={'./assets/images/announce-img01.png'}/>
												</div>
												<div className='immediate-joiners'>
													<Link to={constant.component.hiringfresherjob.url}>Immediate Joiners</Link>
												</div>
											</div>
											<a target='_blank' href={constant.component.ResumeMaking.url}>
												<div className="imgfree">
													<img src={'./assets/images/cv-pic01.png'} />
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
										<div className="roz-company-hiring mb-30">
											<div className="company-hiring">
												<div className="company-hiring-text">
													<h3>Companies Hiring</h3>
												</div>
												<div className="company-hiring-view">
												<a target='_blank' href={constant.component.jobsByCompany.url}>View All</a>
												</div>
											</div>
											<div className="company-hiring-logo">
                                            <a href="#"><img src={'./assets/images/client-logo/bcg-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/oyo-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/acce-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/lazada-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/seq-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/bcg-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/oyo-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/acce-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/lazada-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/seq-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/bcg-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/oyo-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/acce-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/lazada-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/seq-logo.jpg'}/></a>
                                            <a href="#"><img src={'./assets/images/client-logo/bcg-logo.jpg'}/></a>
											</div>
										</div>
										<div className="rg-adds rg-jobsearchadd">
								   			<a href="javascript:void(0);" title="">
												<figure>	
													<img src={'./assets/images/adds-05.jpg'} alt="img description"/>
												</figure>
											</a>
											<span>Ad</span>
										</div>
										<div className="roz-aside-jobs-by-location">
											<div className="roz-aside-jobs-by-location-box">
												<h3>Jobs by location</h3>
													<ul id="style-3">
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Ahmednagar</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Akola</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Amravati</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Baramati</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Chandrapur</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Chennai</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Chiplun</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Dhule</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Jalgaon</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Khopoli</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Kolhapur</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Mumbai</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Mumbai Suburbs</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Nagpur</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Nasik</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Navi Mumbai</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Pune</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Raigad</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Ratnagiri</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Satara</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Solapur</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Tarapur</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Thane</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Vasai</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Ghatpokar</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Chembur</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Kurla</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Dadar</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Diva</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Powai</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Saki Naka</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Worli</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Pali Hill</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Parel</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Colaba</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Bandra (E)</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Bandra (W)</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Byculla</a></li>
													<li><a href="#"><i className="fa fa-angle-double-right"></i> Jobs in Church Gate</a></li>
												</ul>
											</div>
										</div>
									</aside>
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
