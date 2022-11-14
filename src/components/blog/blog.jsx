import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'
import Pagination from 'react-js-pagination'
import moment from 'moment';
import { useParams } from 'react-router-dom';
import Shimmer from '../common/Shimmer';
import noSearchFound from '../../../src/assets/images/no-results.png'
import { MetaTags } from 'react-meta-tags';
export default class blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			// blogSearchKeys: "",
		}
	}

	recentList = this.props.list
	handlePageChange = (pageNumber) => {
		this.state.currentPage = (pageNumber);
		this.setState({
			currentPage: pageNumber
		})
		this.props.blogLists(pageNumber)
	};

	searchList = () => {

		// console.log(this.state.blogSearchKeys.trim().length)

		// this.props.keyword(this.state.blogSearchKeys)
		this.props.blogLists(this.state.currentPage)

	}
	render() {

		const { showShimmer, tags, category, list } = this.props
		return (
			<React.Fragment>
				<div className="rg-breadcrumbarea">

					{console.log("props lis t", this.props.list)}
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pt-10">
								<ol className="rg-breadcrumb">
									<li><Link to={constant.component.homepage.url}>Home</Link></li>
									{
										window.location.pathname == '/blog'
											?
											<li style={{ color: "#333", opacity: 0.6 }}>Blog</li>

											:
											<li> <Link to={constant.component.blog.url}>Blog</Link></li>

									}
									{/* {
										this.match.params.url
									} */}
									<li >{category}</li>
								</ol>


							</div>
						</div>
					</div>
				</div>
				{/* <!--************************************
				breadcrumbarea End
		*************************************-->
		<!--************************************
				Main Start
		*************************************--> */}
				<main id="rg-main" className="rg-main rg-haslayout">
					{/* <!--************************************
					Blog List Start
			*************************************--> */}
					<div className="rg-sectionspace rg-haslayout pt-3">
						<div className="container">
							<div className="row">
								<div id="rg-twocolumns" className="rg-twocolumns">
									<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 pull-right">
										<div id="rg-content" className="rg-content">
											<div className="rg-innersectionhead">
												<div className="rg-title">
													<h2>Latest Blogs &amp; News</h2>
													<span>Stay Updated With Our Latest News</span>
												</div>
											</div>
											{/* <div className="rg-sortandview">
												<div className="rg-views">
													Filter
												</div>
												<div className="rg-sortby">
													<span>Sort by:</span>
													<div className="rg-select">
														<select>
															<option value="Most Recent">Most Recent</option>
															<option value="Most Recent">Most Recent2</option>
															<option value="Most Recent">Most Recent3</option>
														</select>
													</div>
													<div className="rg-select">
														<select>
															<option value="Most Recent">30 Per Page</option>
															<option value="Most Recent">10 Per Page</option>
															<option value="Most Recent">20 Per Page</option>
															<option value="Most Recent">40 Per Page</option>
														</select>
													</div>
												</div>
											</div> */}



											{showShimmer && !this.props.list.length && <Shimmer />}
											{
												this.props.list && this.props.list.length > 0 ? this.props.list.map((ele, index) => {
													return (
														<React.Fragment>
															<a target='_blank' href={constant.component.blogDetail.url.replace(':url', ele.URL)}  >
																<div className="rg-posts rg-postsgrid">
																	<div className="row">

																		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
																			<article className="rg-newsarticle rg-newsarticlevtwo">
																				<figure className="rg-newsimg">
																					{/* <span className="rg-posttag"><i className="fas fa-ellipsis-v"></i></span> */}
																					<img style={{ maxWidth: "270px", height: "190px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${ele.BLOG_IMAGE}`} alt="" />
																				</figure>
																				<div className="rg-addcontent">
																					<div className="rg-postauthorname pt-0 pb-2">
																						<figure className="rg-postauthorpic">
																							<img src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${ele.AUTHOR_PIC}`} alt="" />
																						</figure>
																						<div className="rg-articlecontent">
																							<div className="rg-articletitle">
																								<h3><a target='_blank' to={constant.component.blogDetail.url.replace(':url', ele.URL)} >{ele.BLOG_TITLE}</a></h3>
																							</div>
																						</div>
																						<div className="rg-description">
																							<p className='pt-1'>{ele.BLOG_DETAILS.length > 300 ? ele.BLOG_DETAILS.slice(0, 400) + '...' : ele.BLOG_DETAILS}<span className='text-primary'>read more</span></p>
																						</div>
																					</div>
																					<ul className="rg-postarticlemeta">
																						<li className='d-flex text-left'>
																							<span className="rg-authorname pr-20"> {ele.AUTHOR}</span>

																						</li>
																						<li className='d-flex text-left'>

																							<span><i className="lnr lnr-calendar-full"></i> {moment(ele.CREATED_ON).format('DD MMM, YYYY')}</span>

																						</li>

																						<li>
																							<span className="pr-10">
																								<i className="fa fa-share"></i>
																								<span>Comment : {ele.commentCount}</span>
																							</span>
																							{/* <span>
																								<i className="lnr lnr-eye"></i>
																								<span>440</span>
																							</span>  */}
																						</li>
																					</ul>
																				</div>
																			</article>
																		</div>

																	</div>
																</div>

															</a>

														</React.Fragment>



													)
												}) : !showShimmer && <div className="rg-featurejob text-danger pt-20  " style={{ textAlign: 'center' }}>
													<img src={noSearchFound}></img>
													<h4>No Blog Search Found.</h4>
													<h6>Did you enter wrong spelling of any word?</h6>
													<p>Only Blog names and title are accepted in Blog Search</p>
												</div>
											}
											{/* <div className="rg-adds rg-featurejobholder">
												<a href="javascript:void(0);" title="">
													<figure>
														<img src={'./assets/images/adds-06.jpg'} alt="" />
													</figure>
												</a>
												<span>Ad</span>
											</div> */}
											<nav className="rg-pagination">
												<div className="row">
													<div className="col-lg-12">
														<ul className="pagination pagination-rounded justify-content-center mt-4">
															<Pagination
																activePage={this.state.currentPage}
																itemsCountPerPage={6}
																totalItemsCount={this.props.count}
																pageRangeDisplayed={5}
																onChange={this.handlePageChange}
																itemClass="page-item"
																linkClass="page-link"
															/>
														</ul>
													</div>
												</div>
											</nav>
										</div>
									</div>
									<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 ">
										<aside id="rg-sidebar" className="rg-sidebar">
											<div className="rg-widget rg-widgetsearch">
												<div className="rg-widgettitle">
													<h3>Start Search Here</h3>
												</div>
												<div className="rg-widgetcontent">
													<form className="rg-formtheme">
														<fieldset>
															<div className="form-group rg-inputwithicon">
																<i className="lnr lnr-magnifier"></i>
																<input type="search"
																	name="search"
																	onChange={(e) => {
																		this.props.keyword(e.target.value)
																	}}
																	className="form-control"
																	placeholder="Search Here" />
															</div>
															<button className="rg-btn" type="submit" onClick={(e) => {
																e.preventDefault()
																this.searchList()
															}}>Search Now</button>
														</fieldset>
													</form>
												</div>
											</div>

											<div className="rg-widget rg-recentposts">
												<div className="rg-widgettitle">
													<h3>Recent Posts</h3>
												</div>
												{this.props.recentList && this.props.recentList.length > 0 ? this.props.recentList.map((ele, index) => {
													return (
														<div className="rg-recentpost">
															<div className="rg-recentpostdetails">
																<Link to={constant.component.blogDetail.url.replace(':url', ele.URL)}>
																	<figure className="rg-recentpostimg">
																		<img style={{ width: "60px", height: "60px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${ele.BLOG_IMAGE}`} alt="image description" />
																	</figure>
																	<div className="rg-recentpostcontent">
																		<h3>{ele.BLOG_TITLE.length > 15 ? ele.BLOG_TITLE.slice(0, 15) + '...' : ""}</h3>
																		<span><i className="lnr lnr-calendar-full"></i> {moment(ele.CREATED_ON).format('DD MMM, YYYY')}</span>
																	</div>
																</Link>
															</div>
														</div>
													)
												}) : ""

												}
											</div>

											<div className="rg-widget rg-categories">
												<div className="rg-widgettitle">
													<h3>Categories</h3>

												</div>

												<div>
													<ul className='blogcategoryscroll'>
														{this.props.blogCategory === undefined && <Shimmer />}
														{
															this.props.blogCategory && this.props.blogCategory.length > 0 ? this.props.blogCategory.map((ele, index) => {
																return (

																	<li style={{ listStyleType: "none" }}>
																		<a target='_blank' href={constant.component.blogCategory.url.replace(':url', ele.URL)} style={{ color: "#000", fontWeight: "500", marginBottom: "10px" }}><i class="lnr lnr-chevron-right"></i> {ele.CATEGORY}</a>
																	</li>


																)
															}) : ""
														}
														{/* <li style={{ listStyleType: "none" }}>
																		<Link style={{ color: "#000", fontWeight: "500", marginBottom: "10px" }}>{ele.CATEGORY}</Link>
																	</li>
																	<li style={{ listStyleType: "none" }}>
																		<Link style={{ color: "#000", fontWeight: "500", marginBottom: "10px" }}>{ele.CATEGORY}</Link>
																	</li>
																	<li style={{ listStyleType: "none" }}>
																		<Link style={{ color: "#000", fontWeight: "500", marginBottom: "10px" }}>{ele.CATEGORY}</Link>
																	</li>
																	<li style={{ listStyleType: "none" }}>
																		<Link style={{ color: "#000", fontWeight: "500", marginBottom: "10px" }}>{ele.CATEGORY}</Link>
																	</li> */}
													</ul>
												</div>

											</div>

											<div className="rg-widget rg-widgettags">
												<div className="rg-widgettitle">
													<h3>Tags Cloud</h3>
												</div>

												<div className="rg-tag">
													{console.log("this.props.list", tags)}

													{tags && tags.length > 0 ? tags.map((ele, index) => {
														return (
															<a href="javascript:void(0);">{ele}</a>
														)


													}) : ''
													}
												</div>


											</div>
											<div className="rg-adds rg-jobsearchadd mb-20 mt-20">
												<a href="javascript:void(0);" title="">
													<figure>
														<img src={'/assets/images/adds-05.jpg'} alt="img description" />
													</figure>
												</a>
												<span>Ad</span>
											</div>
											{/* <div className="rg-adds rg-jobsearchadd mb-20 mt-20">
												<a href="javascript:void(0);" title="">
													<figure>
														<img src={'./assets/images/adds-04.jpg'} alt="img description" />
													</figure>
												</a>
												<span>Ad</span>
											</div> */}
										</aside>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!--************************************
					Blog List End
			*************************************--> */}
				</main>
				{/* <!--************************************
				Main End
		*************************************--> */}
			</React.Fragment>
		)
	}
}
