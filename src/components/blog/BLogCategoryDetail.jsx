// import React, { Component } from 'react'
// import { BlogbyCategoryURL, BlogbyURL, recentblogList, blogCategory } from '../../actions/BlogAction';
// import moment from 'moment';
// import constant from '../../constant';



// export default class BLogCategoryDetail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: undefined,
//             recentList: undefined,
//         }
//     }

//     componentDidMount() {

//         const urlType = this.props.match.path
//         console.log("urlType", urlType === constant.component.blogCategory.url)

//         console.log(this.props.match.params);


//         const model = {
//             // CATEGORY_ID: this.props.match.params.CATEGORY_ID,
//             URL: this.props.match.params.URL
             
//          }

//         BlogbyCategoryURL(model.URL).then((res) => {
//             console.log("blog data ", res.result)
//             this.setState({ data: res.result })
//         }).catch((err) => {
//             alert(err)
//         })


//         if (urlType === constant.component.blogCategory.url) {
//             const url = this.props.match.params.category

//             // BlogbyCategoryURL(url).then((res) => {
//             // 	this.setState({ url: res.result })
//             // }).catch((err) => {
//             // 	alert(err)
//             // })


//         }


//         else if (urlType === constant.component.blogCategory.url) {
//             const url = this.props.match.params.url
//             // BlogbyURL(url).then((res) => {
//             //     console.log("blog data ", res.result)
//             //     this.setState({ data: res.result })
//             // }).catch((err) => {
//             //     alert(err)
//             // })


//             // recentblogList().then((res) => {
//             // 	this.setState({ recentList: res.result.list })
//             // }).catch((err) => {
//             // 	alert(err)
//             // })


//         }
//     }

//     render() {
//         console.log("log", this.state.data);
//         const { data } = this.state
//         return (
//             <React.Fragment>
//                 <div className="rg-breadcrumbarea">

//                     {
//                         console.log(this.state)



//                     }
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                                 <ol className="rg-breadcrumb">
//                                     <li><a href="#">Home</a></li>
//                                     <li>Blog</li>
//                                 </ol>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <main id="rg-main" className="rg-main rg-haslayout">
//                     <div className="rg-sectionspace rg-haslayout">
//                         <div className="container">
//                             <div className="row">
//                                 <div id="rg-twocolumns" className="rg-twocolumns">


//                                     {
//                                         this.state.data != undefined ?
//                                             <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 pull-right">

//                                                 <div id="rg-content" className="rg-content rg-blogdetail">
//                                                     <div className="rg-nextprevposts">
//                                                         {/* <div className="rg-btnprevpost">
// 															<a href="javascript:void(0);">
// 																<figure>
// 																	<img styel={{ width: "915px", height: "335px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${data.PICTURE}`} alt="image description" />
// 																</figure>
// 																<div className="rg-posttname">
// 																	<h3>{data.BLOG_TITLE}</h3>
// 																	<span><i className="lnr lnr-arrow-left"></i> Previous Post</span>
// 																</div>
// 															</a>
// 														</div> */}
//                                                         {/* <div className="rg-btnnextpost">
// 															<a href="javascript:void(0);">
// 																<figure>
// 																	<img styel={{ width: "915px", height: "335px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${data.PICTURE}`} alt="image description" />
// 																</figure>
// 																<div className="rg-posttname">
// 																	<h3>{data.BLOG_TITLE}</h3>
// 																	<span>Next Post <i className="lnr lnr-arrow-right"></i></span>
// 																</div>
// 															</a>
// 														</div> */}
//                                                     </div>
//                                                     <div className="rg-innersectionhead">
//                                                         <div className="rg-title">
//                                                             <h2>{data.BLOG_TITLE}</h2>
//                                                         </div>
//                                                     </div>
//                                                     <ul className="rg-postarticlemetavtwo">
//                                                         <li>
//                                                             <a href="javascript:void(0);">
//                                                                 <i className="lnr lnr-calendar-full"></i>
//                                                                 <span>{moment(data.CREATED_ON).format('DD MMM, YYYY')}</span>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="javascript:void(0);">
//                                                                 <i className="lnr lnr-user"></i>
//                                                                 <span>{data.AUTHOR}</span>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="javascript:void(0);">
//                                                                 <i className="fa fa-share"></i>
//                                                                 <span>30</span>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="javascript:void(0);">
//                                                                 <i className="lnr lnr-eye"></i>
//                                                                 <span>440</span>
//                                                             </a>
//                                                         </li>
//                                                     </ul>
//                                                     {/* <figure className="rg-blogdetailimgvtwo ">
// 														<img style={{ width: "915px", height: "335px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${data.PICTURE}`} alt="image description" />
// 													</figure> */}
//                                                     <div className="rg-description">
//                                                         {/* <p>{data.BLOG_DETAILS}</p> */}
//                                                         <figure className="rg-blogdetailimgvtwo">
//                                                             <img style={{ width: "915px", height: "335px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${data.PICTURE}`} alt="image description" />
//                                                         </figure>
//                                                         <p>{data.BLOG_DETAILS}</p>
//                                                     </div>
//                                                     <div className="rg-tagsshare">
//                                                         <div className="rg-tag">
//                                                             <span>Tags:</span>
//                                                             <a href="javascript:void(0);">Sales</a>
//                                                             <a href="javascript:void(0);">Tyre</a>
//                                                             <a href="javascript:void(0);">DIY</a>
//                                                             <a href="javascript:void(0);">Medical</a>
//                                                             <a href="javascript:void(0);">Transport</a>
//                                                         </div>
//                                                         <ul className="rg-socialiconssimple rg-blogsocialicons">
//                                                             <li className="rg-sharejob"><span>Share this job</span></li>
//                                                             <li className="rg-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook-f"></i></a></li>
//                                                             <li className="rg-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter"></i></a></li>
//                                                             <li className="rg-linkedin"><a href="javascript:void(0);"><i className="fab fa-linkedin-in"></i></a></li>
//                                                             <li className="rg-clone"><a href="javascript:void(0);"><i className="far fa-clone"></i></a></li>
//                                                         </ul>
//                                                     </div>
//                                                     <div className="rg-author">
//                                                         <div className="rg-authordetails">
//                                                             <figure>
//                                                                 {/* <a href="javascript:void(0);"><img style={{ width: "915px", height: "335px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${data.PICTURE}`} alt="image description" /> </a> */}
//                                                             </figure>
//                                                             <div className="rg-authorcontent">
//                                                                 <div className="rg-authorhead">
//                                                                     <div className="rg-boxleft">
//                                                                         <h3><a href="javascript:void(0);">{data.AUTHOR}</a></h3>
//                                                                         <span>Author Since: {moment(data.CREATED_ON).format('DD MMM, YYYY')}</span>
//                                                                     </div>
//                                                                     <div className="rg-boxright">
//                                                                         <ul className="rg-socialiconssimple">
//                                                                             <li className="rg-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook-f"></i></a></li>
//                                                                             <li className="rg-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter"></i></a></li>
//                                                                             <li className="rg-linkedin"><a href="javascript:void(0);"><i className="fab fa-linkedin-in"></i></a></li>
//                                                                             <li className="rg-googleplus"><a href="javascript:void(0);"><i className="fab fa-google"></i></a></li>
//                                                                         </ul>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="rg-description">
//                                                                     <p>{data.BLOG_DETAILS}</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="rg-replaybox">
//                                                         <h2>Leave Your Comment</h2>
//                                                         <form className="rg-formtheme rg-formleavecomment">
//                                                             <fieldset>
//                                                                 <div className="form-group rg-inputwithicon">
//                                                                     <i className="lnr lnr-user"></i>
//                                                                     <input type="text" name="name" className="form-control" placeholder="Your Name" />
//                                                                 </div>
//                                                                 <div className="form-group rg-inputwithicon">
//                                                                     <i className="lnr lnr-envelope"></i>
//                                                                     <input type="email" name="email" className="form-control" placeholder="Your Email" />
//                                                                 </div>
//                                                                 {/* <div className="form-group rg-inputwithicon">
// 																	<i className="lnr lnr-tag"></i>
// 																	<input type="text" name="subject" className="form-control" placeholder="Subject" />
// 																</div> */}
//                                                                 {/* <div className="form-group rg-inputwithicon">
// 																	<i className="lnr lnr-apartment"></i>
// 																	<input type="text" name="company" className="form-control" placeholder="Company" />
// 																</div> */}
//                                                                 <div className="form-group rg-inputwithicon">
//                                                                     <i className="lnr lnr-bubble" ></i>
//                                                                     <textarea name="message" className="form-control" placeholder="Your Message" style={{ width: "916px" }}></textarea>
//                                                                 </div>

//                                                             </fieldset>
//                                                             <div className="form-group mt-5">
//                                                                 <button className="rg-btn rg-active" type="submit">submit</button>
//                                                             </div>
//                                                         </form>
//                                                     </div>
//                                                 </div>
//                                             </div> : ""


//                                     }

//                                     <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 float-left">
//                                         <aside id="rg-sidebar" className="rg-sidebar">
//                                             <div className="rg-widget rg-widgetsearch">
//                                                 <div className="rg-widgettitle">
//                                                     <h3>Start Search Here</h3>
//                                                 </div>
//                                                 <div className="rg-widgetcontent">
//                                                     <form className="rg-formtheme">
//                                                         <fieldset>
//                                                             <div className="form-group rg-inputwithicon">
//                                                                 <i className="lnr lnr-magnifier"></i>
//                                                                 <input type="search" name="search" className="form-control" placeholder="Search Here" />
//                                                             </div>
//                                                             <button className="rg-btn" type="button">Search Now</button>
//                                                         </fieldset>
//                                                     </form>
//                                                 </div>
//                                             </div>
//                                             <div className="rg-widget rg-categories">
//                                                 <div className="rg-widgettitle">
//                                                     <h3>Categories</h3>
//                                                 </div>
//                                                 <div className="rg-checkboxgroup">
//                                                     <span className="rg-checkbox">
//                                                         <input type="checkbox" id="rg-salesexecutive" name="bycondition" value="Sales Executive" />
//                                                         <label for="rg-salesexecutive">
//                                                             <span>Sales Executive</span>
//                                                         </label>
//                                                     </span>
//                                                     <span className="rg-checkbox">
//                                                         <input type="checkbox" id="rg-graphicdesigner" name="bycondition" value="Graphic Designer" checked="" />
//                                                         <label for="rg-graphicdesigner">
//                                                             <span>Graphic Designer</span>
//                                                         </label>
//                                                     </span>
//                                                     <span className="rg-checkbox">
//                                                         <input type="checkbox" id="rg-marketingexecutive" name="bycondition" value="Marketing Executive" />
//                                                         <label for="rg-marketingexecutive">
//                                                             <span>Marketing Executive</span>
//                                                         </label>
//                                                     </span>
//                                                     <span className="rg-checkbox">
//                                                         <input type="checkbox" id="rg-accountant" name="bycondition" value="Accountant" />
//                                                         <label for="rg-accountant">
//                                                             <span>Accountant</span>
//                                                         </label>
//                                                     </span>
//                                                     <span className="rg-checkbox">
//                                                         <input type="checkbox" id="rg-salesmarketingexecutive" name="bycondition" value="Sales / Marketing Executive" />
//                                                         <label for="rg-salesmarketingexecutive">
//                                                             <span>Sales / Marketing Executive</span>
//                                                         </label>
//                                                     </span>
//                                                     <a href="javascript:void(0);" className="rg-viewmore">View More</a>
//                                                 </div>
//                                             </div>


//                                             <div className="rg-widget rg-recentposts">
//                                                 <div className="rg-widgettitle">
//                                                     <h3>Recent Posts</h3>
//                                                 </div>
//                                                 {
//                                                     this.state.recentList && this.state.recentList.length > 0 ? this.state.recentList.map((ele, index) => {
//                                                         return (
//                                                             <div className="rg-recentpost">
//                                                                 <div className="rg-recentpostdetails">
//                                                                     <figure className="rg-recentpostimg">
//                                                                         <img style={{ width: "60px", height: "60px" }} src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${ele.BLOG_IMAGE}`} alt="image description" />
//                                                                     </figure>
//                                                                     <div className="rg-recentpostcontent">
//                                                                         <h3>{ele.BLOG_TITLE}</h3>
//                                                                         <span><i className="lnr lnr-calendar-full"></i> {moment(data.CREATED_ON).format('DD MMM, YYYY')}</span>
//                                                                     </div>
//                                                                 </div>
//                                                                 {/* <div className="rg-recentpostdetails">
// 																	<figure className="rg-recentpostimg">
// 																		<img src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${ele.BLOG_IMAGE}`} alt="image description" />
// 																	</figure>
// 																	<div className="rg-recentpostcontent">
// 																		<h3>{ele.BLOG_TITLE}</h3>
// 																		<span><i className="lnr lnr-calendar-full"></i> {moment(data.CREATED_ON).format('DD MMM, YYYY')}</span>
// 																	</div>
// 																</div> */}
//                                                                 {/* <div className="rg-recentpostdetails">
// 																	<figure className="rg-recentpostimg">
// 																		<img src={`${process.env.REACT_APP_BASE_URL}/blog/Picture/${ele.BLOG_IMAGE}`} alt="image description" />
// 																	</figure>
// 																	<div className="rg-recentpostcontent">
// 																		<h3>{ele.BLOG_TITLE}</h3>
// 																		<span><i className="lnr lnr-calendar-full"></i> {moment(data.CREATED_ON).format('DD MMM, YYYY')}</span>
// 																	</div>
// 																</div> */}
//                                                             </div>
//                                                         )
//                                                     }) : ''

//                                                 }
//                                             </div>

//                                             <div className="rg-widget rg-widgettags">
//                                                 <div className="rg-widgettitle">
//                                                     <h3>Tags</h3>
//                                                 </div>
//                                                 <div className="rg-tag">
//                                                     <a href="javascript:void(0);">Sales</a>
//                                                     <a href="javascript:void(0);">Tyre</a>
//                                                     <a href="javascript:void(0);">DIY</a>
//                                                     <a href="javascript:void(0);">Medical</a>
//                                                     <a href="javascript:void(0);">Transport</a>
//                                                 </div>
//                                             </div>
//                                             <div className="rg-adds rg-jobsearchadd mb-20 mt-20">
//                                                 <a href="javascript:void(0);" title="">
//                                                     <figure>
//                                                         <img src={'./assets/images/adds-05.jpg'} alt="img description" />
//                                                     </figure>
//                                                 </a>
//                                                 <span>Ad</span>
//                                             </div>
//                                             <div className="rg-adds rg-jobsearchadd mb-20 mt-20">
//                                                 <a href="javascript:void(0);" title="">
//                                                     <figure>
//                                                         <img src={'./assets/images/adds-04.jpg'} alt="img description" />
//                                                     </figure>
//                                                 </a>
//                                                 <span>Ad</span>
//                                             </div>
//                                         </aside>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <!--************************************
// 					Blog Detail End
// 			*************************************--> */}
//                 </main>
//                 {/* <!--************************************
// 				Main End
// 		*************************************--> */}
//             </React.Fragment >
//         )
//     }
// }
