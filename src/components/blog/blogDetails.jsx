import React, { Component } from 'react'
import { BlogListbyCategoryURL, BlogbyURL, recentblogList, addBlogComment, blogCommentList, blogCategory } from '../../action/BlogAction';
import moment from 'moment';
import constant from '../../constant';
import { Link } from 'react-router-dom';
import { capFirstLetterInSentence, clearForm, onChange, validateForm } from '../../utils';
import Parser from 'html-react-parser';
// import Header from '../common/Header';
// import Footer from '../common/Footer';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";
import Shimmer from '../common/Shimmer';
import Script from 'react-load-script'
import MetaTags from 'react-meta-tags';
import { Helmet } from 'react-helmet';
export default class blogDetails extends Component {
	constructor(props) {
		super(props);
		const detail = this.props.detail
		console.log("detail >>>>>>>... ", detail);

		const blogCategory = this.props.blogCategory
		this.state = {
			data: detail ? detail : undefined,
			recentList: undefined,
			name: { name: 'name', value: '', error: '', isRequired: true },
			email: { name: 'email', value: '', error: '', isRequired: true },
			message: { name: 'message', value: '', error: '', isRequired: true },
			blogCommentList: undefined,
			captcha: false,
			blogCategory: undefined,
			showShimmer: true,
			showBlogDetailShimmer: false,
			keyword: { name: 'keyword', value: '', error: '', isRequired: false },
		}

	}

	recaptchaHandler = (value) => {

		if (value) {
			this.setState({
				captcha: true
			})
		} else {
			this.setState({
				captcha: false
			})
		}
	}

	onChange = (e) => {
		const { name, value } = e.target;
		onChange(this, name, value);
	}

	onAddComment = (e) => {
		const st = this.state;
		e.preventDefault();
		if (validateForm(this) && this.state.captcha) {
			const { name, email, message, data } = st
			const model = {
				NAME: name.value,
				EMAIL: email.value,
				MESSAGE: message.value,
				BLOG_ID: data.BLOG_ID
			}
			addBlogComment(model).then((res) => {
				if (res.status) {
					Swal.fire({
						icon: 'success',
						text: res.messageCode,
						timer: 1500,
						showCancelButton: false,
						showConfirmButton: false
					})
					clearForm(this)
					window.location.reload()
				} else {
					Swal.fire({
						icon: 'error',
						text: "Undefined",
						timer: 1500,
						showCancelButton: false,
						showConfirmButton: false
					})
				}

			})
		}


	}

	componentDidMount() {
		document.title = constant.title.BlogDetail
		const urlType = this.props.match.path
		if (urlType === constant.component.blogCategory.url) {
			const url = this.props.match.params.category
			BlogListbyCategoryURL(url).then((res) => {
				this.setState({ url: res.result })
			}).catch((err) => {
				alert(err)
			})
		}

		else if (urlType === constant.component.blogDetail.url) {
			const url = this.props.match.params.url
			console.log("url", url);
			this.setState({ showBlogDetailShimmer: true })
			BlogbyURL(url).then((res) => {
				console.log("blog by result ", res.result);
				this.setState({ showBlogDetailShimmer: false })
				this.setState({ data: res.result, showShimmer: false })
				this.setState({ KEYWORD: this.state.keyword })
				document.title = res.result.BLOG_TITLE + " | Blog | Rozgar.com"


			}).catch((err) => {
				alert(err)
			})
			recentblogList().then((res) => {
				this.setState({ recentList: res.result.list })
			}).catch((err) => {
				alert(err)
			})

			blogCommentList(url).then((res) => {
				this.setState({ blogCommentList: res.result.list })
			}).catch((err) => {
				alert(err)
			})

			blogCategory(url).then((res) => {
				// console.log("cate", res.result);
				this.setState({ blogCategory: res.result.list })


			}).catch((err) => {
				alert(err)
			})

		}
	}

	onSearch = () => {

		const { keyword } = this.state;
		if (keyword.value.length) {
			console.log(constant.component.searchbBoglist.url.replace(':keyword', keyword.value))

			window.location.href = constant.component.searchbBoglist.url.replace(':keyword', keyword.value)
		}
	}

	render() {
		const { tags } = this.props
		const { data, name, email, message, keyword } = this.state
		return (

			<React.Fragment>
                    <Helmet>


<title title={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />

<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " ? Here are  8 tips for you to go about applying for your dream job abroad!"} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar Official Blog" />
<meta property="og:type" content="article" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " ? Here are  8 tips for you to go about applying for your dream job abroad!"} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="article:published_time" content="2022-10-18T06:04:34.000Z" />
<meta property="article:modified_time" content="2022-10-18T06:04:37.000Z" />
<meta property="article:tag" content="Career Advice" />
<meta property="article:tag" content="Career Insights" />

<meta property="article:publisher" content= {window.location.href} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " ? Here are  8 tips for you to go about applying for your dream job abroad!"} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" />
</Helmet>

				<Script
					url="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-62a2dab9cda69344"
					onCreate={this.handleScriptCreate.bind(this)}
					onError={this.handleScriptError.bind(this)}
					onLoad={this.handleScriptLoad.bind(this)}
				/>

				{/* <Header /> */}
				<div className="rg-breadcrumbarea">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<ol className="rg-breadcrumb">
									<li><Link to={constant.component.homepage.url}>Home</Link></li>
									<li><Link to={constant.component.blog.url}>Blog</Link></li>
									{
										this.state.data != undefined ?
											<li className='font-weight-normal'>{data.BLOG_TITLE}</li> : ""
									}
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="wrapper">
				</div>
				<main id="rg-main" className="rg-main rg-haslayout">
					<div className="rg-sectionspace rg-haslayout">
						<div className="container">
							<div className="row">
								<div id="rg-twocolumns" className="rg-twocolumns">

									{this.state.showBlogDetailShimmer === true &&
										<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 pull-right">
											<div id="rg-content" className="rg-content rg-blogdetail">

												<Shimmer />
											</div>
										</div>
									}

									{
										!this.state.showBlogDetailShimmer && this.state.data != undefined &&

										<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 pull-right">
											<div id="rg-content" className="rg-content rg-blogdetail">
												<div className=''>
													<div className="rg-innersectionhead">
														<div className="rg-title">
															<h2>{data.BLOG_TITLE}</h2>
														</div>
													</div>
													<ul className="rg-postarticlemetavtwo mb-2">
														<li>
															<a href="javascript:void(0);">
																<i className="lnr lnr-calendar-full"></i>
																<span>{moment(data.CREATED_ON).format('DD MMM, YYYY')}</span>
															</a>
														</li>
														<li>
															<a href="javascript:void(0);">
																<i className="lnr lnr-user" ></i>
																<span>{data.AUTHOR}</span>
															</a>
														</li>
														<li>

															<a href="javascript:void(0);">
																<i className="fa fa-list-alt" style={{ fontSize: "24px" }}></i>
																<span style={{ marginTop: "-1px" }}>{data.Blog_Category}</span>
															</a>
														</li>
														{/* <li>
															<a href="javascript:void(0);">
																<i className="fa fa-share"></i>
																<span>30</span>
															</a>
														</li>
														<li>
															<a href="javascript:void(0);">
																<i className="lnr lnr-eye"></i>
																<span>440</span>
															</a>
														</li> */}
													</ul>
													{/* <figure className="rg-blogdetailimgvtwo ">
														<img style={{ width: "915px", height: "335px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${data.PICTURE}`} alt="image description" />
													</figure> */}

													<div className="rg-description">
														{/* <p>{data.BLOG_DETAILS}</p> */}
														<figure className="rg-blogdetailimgvtwo">
															<img style={{ width: "100%", objectFit: "cover" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${data.PICTURE}`} alt="image description" />
														</figure>
														<p>{Parser(data.BLOG_DETAILS)}</p>
													</div>
												</div>
												<div className="rg-tagsshare">
													<div className="rg-tag">
														<span className='pt-0'>Tags:</span>
														{data.TAG.split(',').length && data.TAG.split(',').map((item, index) => {
															if (item.length) {
																return (
																	<a href="javascript:void(0);">{item}</a>

																)
															}

														})}

													</div>
													<ul className="rg-socialiconssimple rg-blogsocialicons d-flex">
														<div>
															<p className='mr-2 mt-1' style={{ fontWeight: "500" }}>Share Blogs</p>
														</div>
														<div className='addthis_inline_share_toolbox'></div>
													</ul>
												</div>
												{
													this.state.blogCommentList && this.state.blogCommentList.length > 0 && this.state.blogCommentList.map((ele, index) => {
														return (
															<div className="rg-author">
																<div className="rg-authordetails">
																	<figure>
																		{/* <a href="javascript:void(0);"><img style={{ width: "915px", height: "335px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${data.PICTURE}`} alt="image description" /> </a> */}
																	</figure>
																	<div className="rg-authorcontent">
																		<div className="rg-authorhead">
																			<div className="rg-boxleft">
																				<h3><a href="javascript:void(0);">{ele.NAME}</a></h3>
																				<span>Author Since: {moment(ele.CREATED_ON).format('DD MMM, YYYY')}</span>
																			</div>
																			{/* <div className="rg-boxright">
																					<ul className="rg-socialiconssimple">
																						<li className="rg-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook-f"></i></a></li>
																						<li className="rg-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter"></i></a></li>
																						<li className="rg-linkedin"><a href="javascript:void(0);"><i className="fab fa-linkedin-in"></i></a></li>
																						<li className="rg-googleplus"><a href="javascript:void(0);"><i className="fab fa-google"></i></a></li>
																					</ul>
																				</div> */}
																		</div>
																		<div className="rg-description">

																			<>
																				<p>{ele.MESSAGE}</p>
																			</>

																		</div>
																	</div>
																</div>
															</div>

														)
													})

												}



												<div className="rg-replaybox">
													<h2>Leave Your Comment</h2>
													<form onSubmit={this.onAddComment} className="rg-formtheme rg-formleavecomment">
														<fieldset>
															<div className="form-group rg-inputwithicon">
																<i className="lnr lnr-user " style={{ marginTop: "2px" }}></i>
																<input type="text"
																	name={name.name}
																	value={name.value}
																	className={name.error.length > 0 && !name.value ? "form-control is-invalid" : "form-control"}
																	onChange={this.onChange}
																	placeholder="Your Name" />
																{/* {name.error.length > 0 && !name.value && <span className='text-danger ml-1'>{name.error}</span>} */}
															</div>
															<div className="form-group rg-inputwithicon">
																<i className="lnr lnr-envelope"></i>
																<input type="email"
																	name={email.name}
																	value={email.value}
																	className={email.error.length && !email.value ? "form-control is-invalid" : "form-control formBorder"}
																	placeholder="Your Email"
																	onChange={this.onChange}
																/>
																{/* {email.error.length > 0 && !email.value && <span className='text-danger ml-1'>{email.error}</span>} */}
															</div>
															{/* <div className="form-group rg-inputwithicon">
																	<i className="lnr lnr-apartmenst"></i>
																	<input type="text" name="company" className="form-control" placeholder="Company" />
																</div> */}
															<div className="form-group rg-inputwithicon">
																<i className="lnr lnr-bubble" style={{ marginTop: '6px' }} ></i>
																<textarea name={message.name}
																	value={message.value}
																	className={message.error.length > 0 && !message.value ? "form-control is-invalid" : "form-control"}
																	placeholder="Your Message"
																	onChange={this.onChange}
																	style={{ width: "916px" }}></textarea>
																{/* {message.error.length > 0 && !message.value && <span className='text-danger ml-1'>{message.error}</span>} */}
															</div>
															<div className='ml-2'>
																<ReCAPTCHA
																	sitekey={`6LduKmsgAAAAAGNLTjeYypXIHBOnN-P0U3ETBklE`}
																	onChange={this.recaptchaHandler}
																	theme='light'
																/>
															</div>


														</fieldset>
														<div className="form-group">
															<button className="rg-btn rg-active mt-20" type="submit">submit</button>
														</div>
													</form>
												</div>
											</div>
										</div>
										// : <div className='d-flex flex-row justify-content-center'>   <Shimmer />  </div>


									}



									<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 float-left">
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
																	name={keyword.name}
																	onChange={this.onChange}
																	className="form-control"
																	value={keyword.value}
																	placeholder="Search Here" />
															</div>
															<button onClick={(e) => {
																e.preventDefault()
																this.onSearch()
															}} className="rg-btn" type="submit">Search Now</button>
														</fieldset>
													</form>
												</div>
											</div>
											<div className="rg-widget rg-categories">
												<div className="rg-widgettitle">
													<h3>Categories</h3>

												</div>

												<div>
													<ul className='blogcategoryscroll'>
														{
															this.state.blogCategory && this.state.blogCategory.length > 0 ? this.state.blogCategory.map((ele, index) => {
																return (

																	<li style={{ listStyleType: "none" }}>
																		<a target='_blank' href={constant.component.blogCategory.url.replace(':url', ele.URL)} style={{ color: "#000", fontWeight: "500", marginBottom: "10px" }}>{ele.CATEGORY}</a>
																	</li>


																)
															}) : <Shimmer />
														}
													</ul>
												</div>

											</div>


											<div className="rg-widget rg-recentposts">
												<div className="rg-widgettitle">
													<h3>Recent Posts</h3>
												</div>
												{
													this.state.recentList !== undefined && this.state.recentList.length > 0 ? this.state.recentList.map((ele, index) => {
														return (
															<div className="rg-recentpost">
																<div className="rg-recentpostdetails">
																	<a href={constant.component.blogDetail.url.replace(':url', ele.URL)}>
																		<figure className="rg-recentpostimg">
																			<img style={{ width: "60px", height: "60px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${ele.BLOG_IMAGE}`} alt="image description" />
																		</figure>
																		<div className="rg-recentpostcontent">
																			<h3>{ele.BLOG_TITLE.length > 15 ? ele.BLOG_TITLE.slice(0, 15) + '...' : ""}</h3>
																			<span><i className="lnr lnr-calendar-full"></i> {moment(ele.CREATED_ON).format('DD MMM, YYYY')}</span>
																		</div>
																	</a>
																</div>
															</div>
														)
													}) : <Shimmer />

												}
											</div>

											<div className="rg-widget rg-widgettags">
												<div className="rg-widgettitle">
													<h3>Tags Cloud</h3>
												</div>
												<div className="rg-tag">
													{this.state.recentList && this.state.recentList.length > 0 && this.state.recentList.map((ele, index) => {
														return (ele.TAG.split(",").length > 0 && ele.TAG.split(",").map(item => {
															if (item.length) {
																return (
																	<a href="javascript:void(0);">{item}</a>
																)
															}
														}))



													})
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
										</aside>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!--************************************
					Blog Detail End
			*************************************--> */}
				</main>
				{/* <!--************************************
				Main End
		*************************************--> */}
				{/* <Footer /> */}
			</React.Fragment >
		)
	}

	handleScriptCreate() {
		this.setState({ scriptLoaded: false })
	}

	handleScriptError() {
		this.setState({ scriptError: true })
	}

	handleScriptLoad() {
		this.setState({ scriptLoaded: true })
	}
}
