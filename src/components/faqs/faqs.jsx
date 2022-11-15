import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'
import FaqBlog from './FaqBlog';
import FaqEnquiryfrom from './faqEnquiryfrom';
import Shimmer from '../common/Shimmer';
import noSearchFound from '../../../src/assets/images/no-results.png'


export default class faqs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: this.props.list,
			data: this.props.data,
			blogSearchKeys: "",
			isSearch: false,
			dynamicURL: '',
			showError: false,
		}

	}
	searchList = (e) => {
		this.setState({
			isSearch: true,
			showError: true

		})

		this.props.keyword(this.state.blogSearchKeys)
		e.preventDefault()
	}


	render() {
		const { showQuickShimmer, showBrowseShimmer } = this.props
		return (

			<React.Fragment >
				<main id="rg-main" className="rg-main rg-haslayout pt-0">
					<div className="rg-sectionspace rg-haslayout pt-0">
						<div className="rozgar-faqssearch">
							<div className="container">
								<div className="row">
									<div className="col-12 col-sm-12 col-md-8 col-lg-8 offset-2">
										<h4>Hi, how can we help you?</h4>
										<form className="rozgar-faqssearchbox">
											<div className="rozgar-formbox">
												<div className="rozgar-searchcontent">
													<div className="form-group">
														<i className="lnr lnr-magnifier"></i>
														<input type="search" name="search"

															onChange={(e) => {
																this.setState({ blogSearchKeys: e.target.value })
																//this.searchList(e.target.value)

															}}
															className="form-control" placeholder="Search by keyword" />

													</div>
												</div>
												<button className="rozgar-searchbtn" type="submit"

													onClick={this.searchList}><a href="javascript:void(0)"><i className="lnr lnr-magnifier"></i></a></button>



											</div>
										</form>
									</div>
								</div>
							</div>
						</div>

						<div className="rg-breadcrumbarea">
							<div className="container">
								<div className="row">
									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pt-10">
										<ol className="rg-breadcrumb">
											<li><Link to={constant.component.homepage.url}>Home</Link></li>
											<li className="rg-active">FAQs</li>
										</ol>
									</div>
								</div>
							</div>
						</div>

						<div className="rozgar-quciksolution">
							<div className="container">
								<div className="row">
									<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">


										<div className="rozgar-quciksolutionbox">
											{this.state.blogSearchKeys && this.state.isSearch ?
												<h1 style={{ fontSize: '20px' }}>Search Result for <span style={{ color: "blue" }}> <span>"</span> {this.state.blogSearchKeys}<span>"</span> </span></h1>
												: <h2 className="headline">Quick Solution</h2>}


											<React.Fragment>
												{showQuickShimmer && !this.props.list.length && <Shimmer />}
												{
													this.props.list.list && this.props.list.list.length > 0 ?

														<ul className="autoheight" id="style-4">
															{
																this.props.list.list && this.props.list.list.length > 0 &&
																this.props.list.list.map((ele, index) => {
																	return (
																		<li >
																			<span>Q.</span>
																			<Link to={constant.component.faqDetails.url.replace(':URL', ele.URL)} >
																				{ele.QUESTION}
																			</Link>

																		</li>)
																}
																)
															}
														</ul>
														: !showQuickShimmer &&
														<ul id="style-4">
															<div className="rg-featurejob text-danger pt-20" style={{ textAlign: 'center' }}>
																<img src={noSearchFound} style={{ maxHeight: "75px" }}></img>
																<h4>No Search Found.</h4>
																<h6>Did you enter wrong spelling of any word?</h6>
																<p>Only FAQs Question/Answer names are accepted in FAQs Search</p>


															</div>
														</ul>
												}
											</React.Fragment>

										</div>



									</div>

									<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
										<div className="rozgar-browsebytopic">
											<h2 className="headline">Browse by topic</h2>

											<React.Fragment>
												<ul className="autoheight" id="style-4">
													{showQuickShimmer && !this.props.list.length && <Shimmer />}
													{
														this.props.data.list && this.props.data.list.length > 0 &&
														this.props.data.list.map((ele, index) => {

															return <Link to={constant.component.faqCategory.url.replace(':URL', ele.URL)} > <li >
																<i style={{ color: "red" }} className={ele.ICON}></i>
																<a style={{ color: "black" }}>	{ele.CATEGORY}</a>

															</li>
															</Link>
														}
														)
													}
													{/* {!showBrowseShimmer && <h5 className='text-center text-danger'>No FAQ Found</h5>} */}
												</ul>
											</React.Fragment>
										</div>
									</div>
								</div>
							</div>
						</div>

						<FaqBlog />
						
						<FaqEnquiryfrom />

					</div>
				</main>
			</React.Fragment >

		)


	}
}
