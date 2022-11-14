import React, { Component } from 'react'
import { capitalizeWords, getDateParts, getStorage, numberWithCommas, setsessionStorage, ToSeoUrl } from '../../utils'
import nl2br from 'react-nl2br'
import constant from '../../constant';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import Shimmer from '../../components/common/Shimmer'
import { JobApppliedStatus, SaveJobStatus } from '../../action/jobDetail';
import Modal from 'react-modal';
import SignInForSaveUnsave from '../../pages/signin/SignInForSaveUnsave';
import { createJobAlert } from '../../action/jobsByActions';
import swal from 'sweetalert';
import { onChange } from '../../utils';
import ModalWindow from '../common/ModalWindow';
import NumberFormat from 'react-number-format';
export default class jobdetails extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.mod1 = React.createRef()
		this.state = {
			TOP_COMPANY_IMAGES: this.props.TOP_COMPANY_IMAGES ? this.props.TOP_COMPANY_IMAGES : [],
			saveJobIcon: undefined,
			detail: getStorage(constant.keys.cd),
			savedJobList: [],
			openModal: false,
			isJobApplied: false,
			JOB_ID: '',
			leftBar: false,
			alertName: { name: 'alertName', value: '', error: '', isRequired: false },
			mobile: { name: 'mobile', value: '', error: '', isRequired: false },
            email: { name: 'email', value: '', error: '', isRequired: false },
			jobStatus:false
		}
		this.handleChange = this.handleChange.bind(this)

        this.handleSubmit = this.onSubmit.bind(this)

	}


	validateEnquiryForm = () => {

        let data = this.state
        let error = {}
        let isValid = true

		if (!data['alertName'].value) {
            let alertName = data['alertName']
            alertName.error = "Please Enter Name"
            isValid = false
            this.setState({
                alertName: alertName
            })
        }
        if (!data['email'].value) {
            let email = data['email']
            email.error = "Please Enter Email"
            isValid = false
            this.setState({
                email: email
            })
        }

        if (data['email'].value) {
            let re = /\S+@\S+\.\S+/
            if (re.test(data['email'].value)) { } else {
                let email = data['email']
                email.error = "Please Enter Valid Email"
                isValid = false
                this.setState({
                    email: email
                })
            }
        }
		if (!data['mobile'].value) {
            let mobile = data['mobile']
            mobile.error = "Please Enter Mobile"
            isValid = false
            this.setState({
                mobile: mobile
            })
        }

        if (data["mobile"] != "") {
            const regexExp = /^[6789][0-9]{9}/
            if (regexExp.test(data.mobile.value)) { } else {
                let mobile = data['mobile']
                mobile.error = "Please Enter Valid Mobile Number";
                isValid = false;
            }
        }
		this.setState({
            error: error
        })

        return isValid
    }

	onSubmit=(e)=> {
        e.preventDefault();

        const { email, mobile, alertName} = this.state
        const model = {
			NAME:alertName.value,
            EMAIL_ID: email.value,
            MOBILE: mobile.value,
			TYPES: "AlertByJobDetails"
        }

        if (this.validateEnquiryForm()) {
            createJobAlert(model)
			.then((res) => {
                    if (res.status) {
                        swal({
                            icon: "success",
                            text: "Job Alert Created Succesfully ",
                            timer: 2000,
                            showCancelButton: false,
                            showConfirmButton: false,
                        });
                        window.location.reload()
						this.setState({
							jobStatus:false
						})
                    }
                    else {
                        alert(res.error)
                    }

                }).catch(err => {
                    alert(err)
                })
        }
    }

	handleChange(e) {
        let name = e.target.name
        let value = e.target.value
        onChange(this, name, value)
    }

	componentDidMount() {
		window.scrollTo(0, 0)
		const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ""
		if (CANDIDATE_ID) {
			this.saveJobsStatus(this.state.JOB_ID, CANDIDATE_ID)
			this.getStatus(CANDIDATE_ID)

		}
	}

	getStatus = (CANDIDATE_ID) => {
		if (this.props.props) {
			console.log(this.props.props);
			// let key= new URLSearchParams(this.props.props.location.search).get("src")
			let key = this.props.props.location.search
			console.log(key)
			let jobDetail = key ? key.split('-')[2] : null
			console.log(jobDetail);

			const body = {
				JOB_ID: jobDetail ? parseInt(jobDetail) : null,
				CANDIDATE_ID: CANDIDATE_ID
			}
			JobApppliedStatus(body).then((res) => {
				if (res.status) {
					this.setState({ isJobApplied: res.result.status })
				}
			}).catch(err => {
				console.log(err)
			})
		}

	}

	// onStatusChange = () => {
	// console.log("detail",this.state.detail);
	// const {CANDIDATE_ID,Job_ID} = this.state.detail
	// const model = {
	// 	CANDIDATE_ID:CANDIDATE_ID,
	// 	JOB_ID:Job_ID
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ""
	// 	if (CANDIDATE_ID) {
	// 		this.getStatus(CANDIDATE_ID)
	// 	} 
	//   }

	onStatusChange = () => {
		this.props.ApplyJobs()
	}

	onSaveJobStatusChange = () => {
		this.props.saveJobs()
	}

	onClickSave = (JOB_ID) => {
		const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ""
		if (CANDIDATE_ID) {
			this.props.getSavedJobs({ CANDIDATE_ID: CANDIDATE_ID, JOB_ID: JOB_ID, ACTION: "save" })
		} else {
			setsessionStorage("saveJobId", JOB_ID)
			this.setState({ openModal: true })
		}
	}

	onClickUnSave = (JOB_ID) => {
		const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ""
		if (CANDIDATE_ID) {
			this.props.getSavedJobs({ CANDIDATE_ID: CANDIDATE_ID, JOB_ID: JOB_ID, ACTION: "unsave" })
		}
	}

	saveJobsStatus = (JOB_Id) => {
		const body = {
			JOB_ID: JOB_Id
		}
		SaveJobStatus(body).then((res) => {
			if (res.status) {
				this.setState({ saveJobIcon: res.result.status })
			}
		}).catch(err => {
			console.log(err)
		})
	}

	onCloseModal = () => {
		this.setState({
			openModal: false, leftBar: true
		})
	}


	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.JOB_ID !== this.state.JOB_ID) {
	// 	  // Now fetch the new data here.
	// 	  const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ""
	// 	  if (CANDIDATE_ID) {
	// 	  this.getStatus(CANDIDATE_ID)
	// 	  }
	// 	}
	//   }

 

	render() {
		const { detail, cities, companyDetail, similarJobList } = this.props
		const { TOP_COMPANY_IMAGES, mobile,email,alertName } = this.state
		let savedJobList = this.props && this.props.list && this.props.list.length > 0 && this.props.detail && this.props.list.filter((d, i) => {
			return d.JOB_ID == this.props.detail.JOB_ID ? d : ''
		})
		return (
			<React.Fragment>
				<main id="rg-main" className="rg-main rg-haslayout">
					<Modal ref={this.mod1} isOpen={this.state.jobStatus} tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" id="bgcoltran">
                            <div class="modal-dialog" role="document"  >
                                <div  id="get_quote_frm">
                                    <div class="modal-content ">
                                        <div class="modal-header">
                                            <h2 class="modal-title">Enter your Email Id to get Job Alerts</h2>
                                            <button type="button" onClick={()=>this.setState({jobStatus:false})} class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body get_quote_view_modal_body pt-5">
                                            <form className='alertform-box'>
											<div class="form-group">
                                                    <label class="create-job-alert-label">Name</label>
                                                    <input type="text" 
													name={alertName.name}
													value={alertName.value} 
													onChange={this.handleChange}
													class="form-control" 
													placeholder="Enter your active Email ID"/>
													  {alertName.error.length > 0 && !alertName.value && <span className='text-danger ml-1'>{alertName.error}</span>}
                                                </div>
                                                <div class="form-group">
                                                    <label class="create-job-alert-label">Mobile No.</label>
                                                    <NumberFormat type="phone" 
													name={mobile.name}
													onChange={(e) => {
                                                        if (e.target.value !== "") {
                                                            const regexExp = /^[6789][0-9]{9}/
                                                            if (regexExp.test(e.target.value)) {
                                                                let mobile = this.state.mobile
                                                                mobile.value = e.target.value
                                                                this.setState({ mobile: mobile });
                                                            } else {
                                                                let mobile = this.state.mobile
                                                                mobile.value = ''
                                                                this.setState({ mobile: mobile });
                                                            }
                                                        }
                                                    }
                                                    }
													class="form-control" 
													placeholder="Enter your mobile no."/>
													  {mobile.error.length > 0 && !mobile.value && <span className='text-danger ml-1'>{mobile.error}</span>}

                                                </div>
                                                <div class="form-group">
                                                    <label class="create-job-alert-label">Email ID</label>
                                                    <input type="text" 
													name={email.name}
													value={email.value} 
													onChange={this.handleChange}
													class="form-control" 
													placeholder="Enter your active Email ID"/>
	                                                {email.error.length > 0 && !email.value && <span className='text-danger ml-1'>{email.error}</span>}

                                                </div>
                                            </form>
                                            <div className='alert-save-btn pt-3'>
                                                <a href='' onClick={()=>this.onCloseModal()}className='alert-btnsave'>CANCEL</a>
												<a href=''  onClick={e => this.onSubmit(e)}>CREATE JOB ALERT</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
					<div className="rg-haslayout rg-sectionspace">
						<div className="container">
							<div className="row">
								<div id="rg-twocolumns" className="rg-twocolumns">
									{detail === undefined &&
										<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 float-left">
											<Shimmer />
										</div>
									}
									{detail && detail !== undefined && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 float-left">
										<div className="rg-jobapplycenter rg-jobapplycentervfour">
											<figure className="rg-companyimg">
												{detail?.COMPANY_LOGO === 'NA' ? <h3 className='logotext'>{detail?.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${detail?.COMPANY_LOGO}`} alt={detail?.COMPANY_NAME} />}
											</figure>
											<div className="rg-companycontent">
												<div className="rg-jobapplydetails">
													<div className="rg-companyname jobdetails">
														<h3><span style={{ color: '#414141' }}>{detail?.JOB_TITLE}</span></h3>
														<h6>{detail?.COMPANY_NAME}</h6>
														<div className="companyreviewbox">
															<span className="reviewnumber">
																{/* {(Math.round(detail?.rating * 10) / 10) > 5 ? 5 : Math.round(detail?.rating * 10) / 10}  */}
																<i className="fa fa-star"></i></span>
															<a href="#"><span className="reviewlink">(
																{/* {numberWithCommas(detail?.reviewCount)}  */}
																0 Reviews)</span></a>
														</div>
														<ul className="rg-postarticlemetavthree">
															<li>
																<div className='job_exp'>
																	<i className="lnr lnr-briefcase"></i>
																	<span>{detail?.WORK_EXP_MIN}-{detail?.WORK_EXP_MAX} years</span>
																</div>
															</li>
															<li>
																<div className='job_exp'>
																	<i className="fa fa-rupee"></i>
																	<span>{detail?.IS_HIDE_SALARY_FROM_CANDIDATE === 'Y' ? 'Not disclosed' : detail?.CTC_MIN + '-' + detail?.CTC_MAX}</span>
																</div>
															</li>
															<li>
																<div className='job_exp'>
																	<i className="lnr lnr-clock"></i>
																	<span>Posted: {getDateParts(detail?.CREATED_ON).relativeTime}</span>
																</div>
															</li>
														</ul>
														<ul className="rg-postarticlemetavone">
															<li>
																<div className='job_exp'>
																	<i className="lnr lnr-map-marker"></i>
																	{/* <span>Noida, Kolkata, Mumbai, New Delhi, Hyderabad/Secunderabad, Pune, Chennai, Bangalore/Bengaluru</span> */}
																	<span>{capitalizeWords(detail?.CITY.split(',')).toString().replace(/,/g, ', ')}</span>
																</div>
															</li>
														</ul>
													</div>
												</div>
												<div className="rg-jobapplybtnlike">
													{
														this.state.isJobApplied
															?
															<div className="rg-likebtnbox">
																<button className="rg-applied-btn rg-active" style={{ cursor: 'default' }} >Applied</button>
															</div>
															:
															<div className="rg-likebtnbox">
																<button className="rg-btn rg-active" onClick={this.onStatusChange} >Apply Now</button>
															</div>
													}

													<ul className="rg-socialiconssimple">
														<div className="rg-rightarea">
															<button className="rg-btnjobtag rg-fulltimejob mr-10" style={{ outline: 'none' }}>
																<i className="ti-crown"></i> {detail.LISTNING_TYPE == 1 ? ' REGULAR' : detail.LISTNING_TYPE == 2 ? ' FEATURED' : ' PREMIUM'}
															</button>

															{
																savedJobList && savedJobList.length == 1
																	?
																	<button className="rg-tagfeature" onClick={() => this.onClickUnSave(detail.JOB_ID)} style={{ cursor: 'pointer', fontSize: '1em', outline: 'none' }}><i className="fa fa-star fa-sm" style={{ color: '#eea21d' }}></i> Saved</button>
																	:
																	<button className="rg-tagfeature" onClick={() => this.onClickSave(detail.JOB_ID)} style={{ cursor: 'pointer', fontSize: '1em', outline: 'none' }}><i className="fa fa-star fa-sm"></i> Save</button>
															}

														</div>
													</ul>
												</div>
											</div>
											<div className='postedjobapply'>
												<div className='postjobdays'>
													Posted: <span>{getDateParts(detail.CREATED_ON).relativeTime}</span>
												</div>
												<div className='postjobnum'>
													Job Applicants: <span>{detail.ApplicationCount.total}</span>
												</div>
												<div className='postjobsend'>
													{/* <a href='#' style={{ fontSize: '14px' }}>Send me jobs like this</a> */}
												</div>
												
												<div><button type="button" class="btn btn-success mt-3" ref={this.myRef} id="modal_view_right" data-toggle="modal" data-target="#information_modal2" className='sendme-jobslike' onClick={(e)=>{this.setState({jobStatus:true})}}>Send me jobs like these</button></div>
											</div>
										</div>
										<div className="rg-jobdetails">
											<div className="rg-jobdetaildescription">
												<div className="rg-title">
													<h2>Job Description</h2>
												</div>	
												<div className="rg-jobdescription">
													<p>{nl2br(Parser(detail?.JOB_DETAILS))}</p>

												</div>
												{
													detail?.POSITION_DETAIL_URL?.split('=').length > 1 &&
													<div className="rg-video rg-videovtwo">
														{
															<iframe width="998" height="527" src={`https://www.youtube.com/embed/${detail?.POSITION_DETAIL_URL.split('=')[1]}`} title={detail?.JOB_TITLE} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
														}
													</div>}
											</div>
											<div className="rg-jobdetailinfo">
												<div className="rg-title">
													<h2>Job Requirment</h2>
												</div>
												<ul>
													<li><span>Role:</span><em>{detail?.EMPLOYER_ROLE ? detail?.EMPLOYER_ROLE : 'NA'}</em></li>
													<li><span>Industry Type:</span><em>{detail?.INDUSTRY}</em></li>
													<li><span>Functional Area:</span><em>{detail?.FUNCTIONAL_AREA ? detail?.FUNCTIONAL_AREA : 'NA'}</em></li>
													<li><span>Employment Type:</span><em>{detail?.EMPLOYMENT_TYPE ? detail?.EMPLOYMENT_TYPE : 'NA'}</em></li>
													{/* <li><span>Role Category:</span><em>{detail?.FUNCTIONAL_AREA ? detail?.FUNCTIONAL_AREA : 'NA'}</em></li> */}

													<li><span>Education</span><em></em></li>
													<li><span>{detail?.QUALIFICATION_NAME}:</span><em>{detail?.COURSE_STREAM ? detail?.COURSE_STREAM : 'Any'}</em></li>
													{/* <li><span>PG:</span><em>MCA in Computers</em></li> */}
												</ul>
											</div>
											<div className="rg-jobbenefits">
												<div className="rg-title">
													<h2>Key Skills</h2>
												</div>
												<div className="rg-tagvtwo rg-withicon">
													{detail?.KEYWORDS.split(',').length && capitalizeWords(detail?.KEYWORDS.split(',')).map((item, index) => {
														return (

															// <a href="javascript:void(0);">{item}</a>
															<span>{item}</span>


														)
													})}
												</div>
											</div>
											<div className="rg-jobapply">
												<div className="rg-jobapplynowbtn">
													{
														this.state.isJobApplied
															?
															<div className="rg-likebtnbox">
																<button className="rg-applied-btn rg-active" style={{ cursor: 'default' }} >Applied</button>
															</div>
															:
															<div className="rg-likebtnbox">
																<button className="rg-btn rg-active" onClick={this.onStatusChange} >Apply Now</button>
															</div>
													}
												</div>
												{/* <ul className="rg-socialiconssimple">
													<li className="rg-sharejob"><span>Share this job</span></li>
													<li className="rg-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook-f"></i></a></li>
													<li className="rg-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter"></i></a></li>
													<li className="rg-linkedin"><a href="javascript:void(0);"><i className="fab fa-linkedin-in"></i></a></li>
													<li className="rg-clone"><a href="javascript:void(0);"><i className="far fa-clone"></i></a></li>
												</ul> */}
											</div>
										</div>
										<div className="rg-adds rg-addmargin">
											<a href="javascript:void(0);" title="">
												<figure>
													<img src={'../../assets/images/adds-03.jpg'} alt="img description" />
												</figure>
											</a>
											<span>Ad</span>
										</div>
										{!companyDetail && <Shimmer />}
										{companyDetail && <div className="rg-aboutcompany">
											<div className="rg-sectionhead">
												<h2>About Company</h2>
											</div>
											<div className="rg-aboutcompanybox">
												<figure className="rg-aboutimg">
													{companyDetail?.COMPANY_LOGO === 'NA' ? <h2 className='logotext'>{companyDetail?.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h2> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${companyDetail?.COMPANY_LOGO}`} alt={companyDetail?.COMPANY_NAME} />}
												</figure>
												<div className="rg-aboutdetails">
													{/* <h3>{companyDetail?.COMPANY_NAME}</h3> */}
													<h4><span className="comname">{companyDetail?.COMPANY_NAME}</span><span>
														{/* {
													(Math.round(companyDetail?.rating * 10) / 10) > 5 ? 5 : Math.round(companyDetail?.rating * 10) / 10}  <i className="fa fa-star"></i> {(numberWithCommas(companyDetail?.reviewCount))
													} */}
														0 Reviews</span></h4>
													<ul className="rg-employerjobs">
														<li><span >{companyDetail?.COMPANY_TYPE}</span></li>
														{/* <li><a href="javascript:void(0);">Acadecraft</a></li> */}
														{/* <li><a href="javascript:void(0);">B2B</a></li> */}
													</ul>
													<a href={constant.component.joblist.url.replace(':url', companyDetail.URL)} target='_blank' className="rg-btn">View Jobs</a>

												</div>
												<div className="rg-description">
													<p><strong>{companyDetail?.COMPANY_NAME}</strong><br />{Parser(companyDetail?.ABOUT_COMPANY)}</p>
													{/* Incendo is the world'™s leading independent, end- to-end IT services company, helping clients harness the power of innovation to thrive on change. Created by the merger of CSC and the Enterprise Services business of Hewlett Packard Enterprise, Incendo is a $25 billion company with a 60-year legacy of delivering results for thousands of clients in more than 70 countries. Our technology independence, global talent and extensive partner network combine to deliver powerful next-generation IT services and solutions.</p> */}
													{/* <p>As the world'™s leading independent, end-to- end IT services company, we are uniquely positioned to lead digital transformations , creating greater value for clients, partners and shareholders, and presenting growth opportunities for our people. We are among the world'™s best corporate citizens.</p> */}
												</div>
												<div className="rg-comaboutdetails">
													<h4>Company Info</h4>
													<p><strong>Address:</strong> {companyDetail?.ADDRESS}</p>
												</div>
											</div>
										</div>}
										{similarJobList.length > 0 && <div className="rg-similarjobs">
											<div className="rg-sectionhead">
												<h2>Similar Jobs</h2>
												<button className="rg-btnviewall"
													onClick={(e) => {
														e.preventDefault()
														this.props.props.history.goBack()
													}}>View All</button>
											</div>
											<div className="rg-featuredjobs">
												{similarJobList.map((item, index) => {
													// const dynamicURL = ToSeoUrl(item.JOB_TITLE) + '_' + ToSeoUrl(item.JOB_DETAILS) + '_' + 'EXP' + '-' + ToSeoUrl(item.WORK_EXP_MIN) + '_' + ToSeoUrl(item.WORK_EXP_MAX) + '_' + item.CUSTOM_JOB_ID + '_' + ToSeoUrl(item.KEYWORDS) + '?src=SIMILAR_JOBS=' + item.JOB_ID
													let dynamicURL = ToSeoUrl(item.JOB_TITLE) + '-' + ToSeoUrl(item.COMPANY_NAME) + '-' + item.CITY?.toLowerCase().split(',').join('-') + '-' + ToSeoUrl(item.WORK_EXP_MIN) + '-' + 'to' + '-' + ToSeoUrl(item.WORK_EXP_MAX) + '-' + 'years' + '-' + item.CUSTOM_JOB_ID.slice(4) + '?src-LIST-' + item.JOB_ID
													dynamicURL = dynamicURL.replace(/ /g, '')
													return (
														<div className="rg-featurejobholder">
															<div className="rg-featurejob">
																<figure className="rg-companyimg">
																	{item.COMPANY_LOGO === 'NA' ? <h3 className='logotext'>{item.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} />}
																</figure>
																<div className="rg-companycontent">
																	<div className="rg-companyhead">
																		<div className="rg-rightarea">
																			<span className="rg-tagfeature" ><i className="fa fa-clock mr-1"></i>{'' + getDateParts(item.CREATED_ON).relativeTime}</span>
																		</div>
																	</div>
																	<div className="rg-similarcompanyname">
																		<h3><a target='_blank' href={constant.component.jobdetails.url.replace(':url', dynamicURL)}>{item.JOB_TITLE}</a></h3>
																		<h6>{item.COMPANY_NAME}</h6>
																		<div className="companyreviewbox">
																			<span className="reviewnumber">
																				{/* {(Math.round(item.rating * 10) / 10) > 5 ? 5 : Math.round(item.rating * 10) / 10} */}
																				{" "}<i className="fa fa-star"></i></span>
																			<a href="#"><span className="reviewlink">(
																				{/* {item.reviewCount}  */}
																				0
																				Reviews)</span></a>
																		</div>
																		<span>{item.JOB_DETAILS.length > 64 ? Parser(item.JOB_DETAILS.slice(0, 64)) + '...' : Parser(item.JOB_DETAILS)}</span>
																	</div>
																	<div className="rg-rightarea mt-10">
																		<a className={item.LISTNING_TYPE == '1' ? 'rg-btnjobtag rg-internship mr-10' : item.LISTNING_TYPE == '2' ? 'rg-btnjobtag rg-parttimejob mr-10' : 'rg-fulltimejob rg-btnjobtag mr-10'} href="javascript:void(0);">
																			<i className="ti-thumb-up"></i> {item.LISTNING_TYPE == '1' ? 'Regular' : item.LISTNING_TYPE == '2' ? 'Featured' : 'Premium'}
																		</a>
																		{/* <a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a> */}
																		<div className="rg-tagfeaturetemp"></div>
																	</div>
																</div>
															</div>
														</div>
														// <div className="rg-featurejobholder">
														// 	<div className="rg-featurejob">
														// 		<figure className="rg-companyimg">
														// 			{item.COMPANY_LOGO === 'NA' ? <h3 className='logotext'>{item.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} />}
														// 		</figure>
														// 		<div className="rg-companycontent">
														// 			<div className="rg-companyhead">
														// 				<div className="rg-rightarea">
														// 					<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i>{getDateParts(item.CREATED_ON).relativeTime} Days Ago</a>
														// 				</div>
														// 			</div>
														// 			<div className="rg-similarcompanyname">
														// 				<h3><a href="javascript:void(0);">{item.JOB_TITLE}</a></h3>
														// 				<h6>{item.COMPANY_NAME}</h6>
														// 				<div className="companyreviewbox">
														// 					{/* <a href="#"><span>Accenture - </span></a> */}
														// 					<span className="reviewnumber">4.5 <i className="fa fa-star"></i></span>
														// 					<a href="#"><span className="reviewlink">(22835 Reviews)</span></a>
														// 				</div>
														// 				<span>{item.JOB_DETAILS}</span>
														// 			</div>
														// 			<div className="rg-rightarea mt-10">
														// 				<a className="rg-btnjobtag rg-parttimejob mr-10" href="javascript:void(0);">
														// 					<i className="ti-thumb-up"></i> FEATURED
														// 				</a>
														// 				<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a>
														// 			</div>
														// 		</div>
														// 	</div>
														// </div>

														// <div className="rg-featurejobholder">
														// 	<div className="rg-featurejob">
														// 		<figure className="rg-companyimg">
														// 			{item.COMPANY_LOGO === 'NA' ? <h3 className='logotext'>{item.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} />}
														// 		</figure>
														// 		<div className="rg-companycontent">
														// 			<div className="rg-companyhead">
														// 				<div className="rg-rightarea">
														// 					<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i> {getDateParts(item.CREATED_ON).relativeTime}</a>
														// 				</div>
														// 			</div>
														// 			<div className="rg-companyname">
														// 				<h3><Link to={constant.component.jobdetails.url.replace(':url', dynamicURL)}>{item.JOB_TITLE} </Link></h3>
														// 				<h6>{item.COMPANY_NAME}</h6>
														// 				<div className="companyreviewbox">
														// 					<span className="reviewnumber">4.5 <i className="fa fa-star"></i></span>
														// 					<a href="#"><span className="reviewlink">(22835 Reviews)</span></a>
														// 				</div>
														// 			</div>
														// 			<div className="rg-description">
														// 				{/* <p>We are looking for 6 months experienced candidate who must have sound background and basic knowledge</p> */}
														// 				<p>{item.JOB_DETAILS.length > 64 ? Parser(item.JOB_DETAILS.slice(0, 64)) + '...' : Parser(item.JOB_DETAILS)}</p>
														// 				<ul className="skilllist">

														// 					{item.KEYWORDS.split(',').length && item.KEYWORDS.split(',').map((item, index) => {
														// 						if (index <= 3) {
														// 							return (
														// 								<span> <li>{item}</li> |                                                                                                                                                                         </span>
														// 							)
														// 						}
														// 						else if (index == 4)
														// 							return (
														// 								<span> <li>{item}</li>                                                                                                                                                                          </span>
														// 							)
														// 						else if (index == 5) {
														// 							return "..."
														// 						}
														// 					})}
														// 				</ul>
														// 			</div>
														// 			<div className="rg-rightarea">
														// 				<a className="rg-btnjobtag rg-fulltimejob mr-10" href="javascript:void(0);">
														// 					<i className="ti-crown"></i> PREMIUM
														// 				</a>
														// 				<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a>
														// 			</div>
														// 		</div>
														// 	</div>
														// 	<ul className="rg-professionalinfo">
														// 		<li><i className="lnr lnr-briefcase"></i><span>{item.WORK_EXP_MIN}-{item.WORK_EXP_MAX} Yrs</span></li>
														// 		<li><i className="fa fa-rupee"></i><span>{item.IS_HIDE_SALARY_FROM_CANDIDATE === 'Y' ? 'Not disclosed' : item.CTC_MIN + '-' + item.CTC_MAX}</span></li>
														// 		<li><i className="lnr lnr-map-marker"></i><span>{item.STATE}</span></li>
														// 	</ul>
														// </div>
													)
												})}
												{/* <div className="rg-featurejobholder">
													<div className="rg-featurejob">
														<figure className="rg-companyimg">
															<a href="#"><img src={'../../assets/images/topcompanies/img-04.png'} alt="image description" /></a>
														</figure>
														<div className="rg-companycontent">
															<div className="rg-companyhead">
																<div className="rg-rightarea">
																	<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i>  2 Days Ago</a>
																</div>
															</div>
															<div className="rg-similarcompanyname">
																<h3><a href="javascript:void(0);">Sales Executive - Call Center</a></h3>
																<h6>Future Group</h6>
																<div className="companyreviewbox">
																	<a href="#"><span>Accenture - </span></a>
																	<span className="reviewnumber">4.5 <i className="fa fa-star"></i></span>
																	<a href="#"><span className="reviewlink">(22835 Reviews)</span></a>
																</div>
																<span>We are looking for 6 months experienced</span>
															</div>
															<div className="rg-rightarea mt-10">
																<a className="rg-btnjobtag rg-parttimejob mr-10" href="javascript:void(0);">
																	<i className="ti-thumb-up"></i> FEATURED
																</a>
																<a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-star"></i> Save</a>
															</div>
														</div>
													</div>
												</div> */}
											</div>
										</div>}
									</div>}
									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 float-left">
										<aside id="rg-sidebarvtwo" className="rg-sidebar rg-sidebarvtwo">

											<div className="roz-company-hiring mb-30 mt-0">
												<div className="roz-create-cv">
													<div className='urgent-hiring-area'>
														<div className='hiring-img'>
															<img src={'../assets/images/announce-img01.png'}/>
														</div>
														<div className='immediate-joiners'>
															<Link to={constant.component.hiringfresherjob.url}>Immediate Joiners</Link>
														</div>
													</div>
													<a target='_blank' href={constant.component.ResumeMaking.url}>
														<div className="imgfree">
														    <img src={'../assets/images/cv-pic01.png'} />
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
												<div className="company-hiring-logo">
													{TOP_COMPANY_IMAGES.length > 0 && TOP_COMPANY_IMAGES.map((item, index) => {
														return (
															<a href={constant.component.joblist.url.replace(':url', item.URL)} target='_blank'><img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} /></a>
														)
													})}

												</div>
												{/* <div className="company-hiring-logo">
													<a href="#"><img src={'../../assets/images/client-logo/bcg-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/oyo-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/acce-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/lazada-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/seq-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/bcg-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/oyo-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/acce-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/lazada-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/seq-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/bcg-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/oyo-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/acce-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/lazada-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/seq-logo.jpg'} /></a>
													<a href="#"><img src={'../../assets/images/client-logo/bcg-logo.jpg'} /></a>
												</div> */}
											</div>
											<div className="rg-adds rg-jobsearchadd">
												<a href="javascript:void(0);" title="">
													<figure>
														<img src={'../../assets/images/adds-05.jpg'} alt="img description" />
													</figure>
												</a>
												<span>Ad</span>
											</div>
											{<div className="roz-aside-jobs-by-location">
												<div className="roz-aside-jobs-by-location-box">
													<h3>Jobs by Locality</h3>
													{cities === undefined &&
														<ul id="style-3">
															<li><i className="fa fa-angle-double-right">
																<Shimmer />
															</i></li>
															<li><i className="fa fa-angle-double-right">
																<Shimmer />
															</i></li>
															<li><i className="fa fa-angle-double-right">
																<Shimmer />
															</i></li>
															<li><i className="fa fa-angle-double-right">
																<Shimmer />
															</i></li>
														</ul>

													}
													<ul id="style-3">

														{cities !== undefined && cities.map(item => {
															return (
																<li><a target='_blank' href={constant.component.joblist.url.replace(':url', item.URL)}><i className="fa fa-angle-double-right"></i> Jobs in {item.CITY}</a></li>
															)
														})}


													</ul>
												</div>
											</div>}
										</aside>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Modal
						isOpen={this.state.openModal}
						style={{ content: { top: "5%", left: '30%', right: 'auto', bottom: 'auto' }, overlay: { backgroundColor: 'rgba(15,29,45,0.70)' } }}
						onRequestClose={this.onCloseModal}
						backdrop="static"
					>
						<SignInForSaveUnsave
							leftBar={this.state.leftBar}
							history={this.props.history}
							onCloseModal={this.onCloseModal}

						/>
					</Modal>
				</main>

			</React.Fragment>
		)
	}
}
