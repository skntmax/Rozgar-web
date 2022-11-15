import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
import { capitalizeWords, convertToPlain, getDateParts, getStorage, setsessionStorage, setStorage, ToSeoUrl } from '../../utils'
import Shimmer from '../common/Shimmer'
import CVPIC from '../../assets/images/cv-pic.jpg'
import { Link } from 'react-router-dom'
import constant from '../../constant'
import Parser from 'html-react-parser';
import noRecordImg from '../../assets/images/no-results.png'
import Search from './search'
import Filter from './filterforsearch'
import { getSaveJobList, SaveJobs } from '../../action/CandidateAction'
import Modal from 'react-modal';
import SignInForSaveUnsave from '../../pages/signin/SignInForSaveUnsave'
import { withRouter } from 'react-router-dom';
import { createJobAlert } from '../../action/jobsByActions'
import swal from 'sweetalert'
import { onChange } from '../../utils'
import queryString from 'query-string'
import NumberFormat from 'react-number-format'




class JobLists extends Component {


    constructor(props) {
        super(props)
        this.state = {
            JOB_LIST: [],
            CURRENT_PAGE: 1,
            filterdata: {
                EXPERIENCE: [],
                SALARY: [],
                POSTED_BY: [],
                WORK_FROM_HOME: [],
                LOCATION: [],
                jobStatus: [],

            },
            detail: getStorage(constant.keys.cd),
            openModal: false,
            saveList: [],
            reRender: false,
            unsaved: undefined,
            saveId: undefined,
            leftBar: false,
            alertName: { name: 'alertName', value: '', error: '', isRequired: false },
            mobile: { name: 'mobile', value: '', error: '', isRequired: false },
            email: { name: 'email', value: '', error: '', isRequired: false },

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

    onSubmit(e) {
        e.preventDefault();

        const { email, mobile, alertName } = this.state
        const qParam = queryString.parse(this.props.location.search)


        const model = {
            EMAIL_ID: email.value,
            NAME: alertName.value,
            MOBILE: mobile.value,
            KEYWORDS: this.props.aboutJobName,
            LOCATION: qParam?.location ? qParam?.location?.split(',') : [],

            MIN_EXPERIENCE: qParam?.exp ? qParam?.exp?.split('-')[0] : undefined,
            MAX_EXPERIENCE: qParam?.exp ? qParam?.exp?.split('-')[1] : undefined,
            TYPES: "AlertByJobSearch"

        }

        if (this.validateEnquiryForm()) {
            createJobAlert
                (model).then((res) => {
                    if (res.status) {
                        swal({
                            icon: "success",
                            text: "Job Alert Created Successfully",
                            timer: 2000,
                            showCancelButton: false,
                            showConfirmButton: false,
                        });
                        window.location.reload()

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
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ""
        const saveJobId = getStorage("saveJobId")
        const unSaveJobId = getStorage("unSaveJobId")
        //only one button is going to archieve at a time
        if (this.state.reRender) {
            if (saveJobId) {
                this.getSavedJobs({ CANDIDATE_ID: CANDIDATE_ID, JOB_ID: saveJobId, ACTION: "save" })
                localStorage.removeItem("saveJobId")
            } else if (unSaveJobId) {
                this.getSavedJobs({ CANDIDATE_ID: CANDIDATE_ID, JOB_ID: unSaveJobId, ACTION: "unsave" })
                localStorage.removeItem("unSaveJobId")
            }
        }
        this.savedJobsDetail()
    }
    handlePageChange = (pageNumber) => {
        this.setState({
            CURRENT_PAGE: pageNumber
        })
        this.props.joblist(pageNumber, this.state.filterdata)
    };

    filterData = (data, url) => {
        this.setState({ CURRENT_PAGE: 1, filterdata: data })
        this.props.filterData(data, url)
    }

    onClickSave = (JOB_ID) => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ""
        if (CANDIDATE_ID) {
            this.getSavedJobs({ CANDIDATE_ID: CANDIDATE_ID, JOB_ID: JOB_ID, ACTION: "save" })
            this.setState({ saveList: [...this.state.saveList, JOB_ID] })
        } else {
            setsessionStorage("saveJobId", JOB_ID)
            this.setState({ openModal: true })
        }
    }

    onClickUnSave = (JOB_ID) => {
        // this.setState({unSaveId:JOB_ID})
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ""
        if (CANDIDATE_ID) {
            this.getSavedJobs({ CANDIDATE_ID: CANDIDATE_ID, JOB_ID: JOB_ID, ACTION: "unsave" })
            this.setState({ saveList: this.state.saveList?.filter((e) => e !== JOB_ID) })
        }
        // else{
        //     setStorage("unSaveJobId",JOB_ID)
        // this.setState({openModal:true})
        // }
    }

    getSavedJobs = (model) => {
        SaveJobs(model).then((res) => {
            this.setState({ saveState: res.result })
            // this.likedJobsList({ CANDIDATE_ID: this.candidateId })
        }).catch((err) => {
            alert(err)
        })
        // this.savedJobsDetail()
    }
    //Save and UnSave a Job 

    savedJobsDetail = (model) => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ""
        getSaveJobList({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
                this.setState({ saveList: res.result.list.map(i => i.JOB_ID) })
                // console.log("saveList",res.result.list.map(i=>i.JOB_ID));
                // this.setState({ likedJobListData: res.result.list?.map((item) => item.JOB_ID) })
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    //All Saved Job List are here.
    onCloseModal = () => {
        this.setState({
            openModal: false, leftBar: true
        })
        this.setState({ reRender: true })
        //    this.setState({detail:getStorage(constant.keys.ud)})
        const saveJobId = getStorage("saveJobId")
        const unSaveJobId = getStorage("unSaveJobId")
        if (saveJobId || unSaveJobId) {
            const { CANDIDATE_ID } = getStorage(constant.keys.cd)

            //only one button is going to archieve at a time
            if (this.state.reRender) {
                if (saveJobId) {
                    this.getSavedJobs({ CANDIDATE_ID: CANDIDATE_ID, JOB_ID: saveJobId, ACTION: "save" })
                    this.setState({ saveList: [...this.state.saveList, saveJobId] })
                    localStorage.removeItem("saveJobId")
                } else if (unSaveJobId) {
                    this.getSavedJobs({ CANDIDATE_ID: CANDIDATE_ID, JOB_ID: unSaveJobId, ACTION: "unsave" })
                    this.setState({ saveList: this.state.saveList?.filter((e) => e !== unSaveJobId) })
                    localStorage.removeItem("unSaveJobId")
                }
            }
        }

    }
    //Use to close the Modal Window

    render() {
        const { JOB_LIST, JOB_COUNT, aboutJobName, CITIES, TOP_COMPANY_IMAGES } = this.props
        const { filterdata, alertName, mobile, email } = this.state
        return (
            <React.Fragment>

                <main id="rg-main" className="rg-main rg-haslayout">
                    <div className="rg-sectionspace rg-haslayout pt-0">
                        <div className="rg-successstorysbanner">
                            <div className="container">
                                <div className="row">
                                    <Search />
                                </div>
                            </div>
                        </div>

                        <div className="modal modal_outer right_modal fade" id="information_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" >
                            <div className="modal-dialog" role="document">
                                <div id="get_quote_frm">
                                    <div className="modal-content ">
                                        <div className="modal-header">
                                            <h2 className="modal-title">Receive jobs for your search!</h2>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <p className='poptext'>We will send you jobs based on your search criteria as soon as they are posted</p>
                                        <div className="modal-body get_quote_view_modal_body">
                                            <p>You are saving alert for your search query <strong className='pr-2'>{aboutJobName}</strong></p>

                                            <form className='alertform-box'>
                                                <div className="form-group">
                                                    <label className="create-job-alert-label">Alert Name</label>
                                                    <input type="text"
                                                        name={alertName.name}
                                                        value={alertName.value}
                                                        onChange={this.handleChange}
                                                        className="form-control"
                                                        placeholder="Alert Name" />
                                                    {alertName.error.length > 0 && !alertName.value && <span className='text-danger ml-1'>{alertName.error}</span>}

                                                </div>
                                                <div className="form-group">
                                                    <label className="create-job-alert-label">Mobile No.</label>
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
                                                        className="form-control"
                                                        placeholder="Enter your mobile no." />
                                                    {mobile.error.length > 0 && !mobile.value && <span className='text-danger ml-1'>{mobile.error}</span>}

                                                </div>
                                                <div className="form-group">
                                                    <label className="create-job-alert-label">Email ID</label>
                                                    <input type="text"
                                                        name={email.name}
                                                        value={email.value}
                                                        onChange={this.handleChange}
                                                        className="form-control"
                                                        placeholder="Enter your active Email ID" />
                                                    {email.error.length > 0 && !email.value && <span className='text-danger ml-1'>{email.error}</span>}
                                                </div>
                                            </form>
                                            <p className='alert-help-text'>Help us send you relevant jobs by adding more details to your job alert preferences</p>
                                            <div className='alert-save-btn'>
                                                <a href='' onClick={e => this.onSubmit(e)}>SAVE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rg-haslayout">
                            <div className="container">
                                <div className="row">
                                    <div id="rg-threecolumns" className="rg-threecolumns">
                                        {(JOB_COUNT != 0 || (filterdata.EXPERIENCE.length > 0 || filterdata.SALARY.length > 0 || filterdata.POSTED_BY.length > 0 || filterdata.WORK_FROM_HOME.length > 0 || filterdata.LOCATION.length > 0)) && <Filter hideExperience={this.props.hideExperience} getFilterData={(data, url) => this.filterData(data, url)} />}
                                        <div className={(JOB_COUNT != 0 || (filterdata?.EXPERIENCE.length > 0 || filterdata?.SALARY.length > 0 || filterdata.POSTED_BY?.length > 0 || filterdata?.WORK_FROM_HOME.length > 0 || filterdata?.LOCATION.length > 0)) ? "col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-6 float-left" : "col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 float-left"}>
                                            <div className="rg-innersectionhead d-flex">
                                                <div className="rg-title">
                                                    <h2>Search Result</h2>
                                                </div>
                                                <div class="sendme-jobs">
                                                    <button type="button" class="mt-0" id="modal_view_right" data-toggle="modal" data-target="#information_modal">
                                                        Send me jobs like these
                                                    </button>
                                                </div>
                                            </div>

                                            {JOB_COUNT !== undefined && JOB_COUNT != 0 ?
                                                <div className="rg-sortandview">
                                                    <div className="rg-views">
                                                        <span>{JOB_COUNT} Jobs In {aboutJobName}</span>
                                                    </div>
                                                </div>
                                                : ""
                                            }
                                            <div className="rg-featuredjobs rg-featuredjobsvtwo rg-featuredjobsvthree">
                                                {JOB_COUNT === undefined && <Shimmer />}
                                                {JOB_COUNT !== undefined && JOB_LIST !== undefined && JOB_LIST?.length > 0 && JOB_LIST.map((item, index) => {
                                                    const URL = item.COMPANY_URL ? item.COMPANY_URL + '-' + item.EMPLOYER_ID : 'rozgar' + '-' + item.EMPLOYER_ID;
                                                    // console.log(item.COMPANY_NAME ? ToSeoUrl(item.COMPANY_NAME) : 'rozgar' + '-' + item.EMPLOYER_ID)
                                                    // const dynamicURL = ToSeoUrl(item.JOB_TITLE) + '_' + ToSeoUrl(item.COMPANY_NAME) + '_' + 'EXP' + '-' + ToSeoUrl(item.WORK_EXP_MIN) + '_' + ToSeoUrl(item.WORK_EXP_MAX) + '_' + item.CUSTOM_JOB_ID + '_' + ToSeoUrl(item.KEYWORDS) + '?src=LIST=' + item.JOB_ID
                                                    let dynamicURL = ToSeoUrl(item.JOB_TITLE) + '-' + item.COMPANY_URL + '-' + item.CITY.toLowerCase().split(',').join('-') + '-' + ToSeoUrl(item.WORK_EXP_MIN) + '-' + 'to' + '-' + ToSeoUrl(item.WORK_EXP_MAX) + '-' + 'years' + '-' + item.CUSTOM_JOB_ID.slice(4) + '?src-LIST-' + item.JOB_ID
                                                    dynamicURL = dynamicURL.replace(/ /g, '')
                                                    // if (index == 3) {
                                                    return (<React.Fragment>

                                                        <div className="rg-featurejobholder">
                                                            <div className="rg-featurejob">
                                                                <figure className="rg-companyimg">
                                                                    {item.COMPANY_LOGO === 'NA' ? <h3 className='logotext'>
                                                                        {item.COMPANY_NAME?.split(' ').map((i) => i.substring(0, 1)).join('')}
                                                                    </h3> :
                                                                        <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} />}
                                                                </figure>
                                                                <div className="rg-companycontent">
                                                                    <div className="rg-companyhead">
                                                                        <div className="rg-rightarea">
                                                                            <a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i> {getDateParts(item.CREATED_ON).relativeTime.split(' ')[0] == 'a' ? '1 ' + getDateParts(item.CREATED_ON).relativeTime.split(' ').splice(1).join(' ') : getDateParts(item.CREATED_ON).relativeTime}</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rg-companyname">
                                                                        <h3 title={item.JOB_TITLE}><Link to={constant.component.jobdetails.url.replace(':url', dynamicURL)}>{item.JOB_TITLE} </Link></h3>
                                                                        <h6><Link to={constant.component.companydetails.url.replace(':url', URL)} target='_blank'>{item.COMPANY_NAME === null || item.COMPANY_NAME == "[object Object]" ? capitalizeWords(item.COMPANY_URL.split('-')).join(' ') : item.COMPANY_NAME}</Link></h6>
                                                                        <div className="companyreviewbox">
                                                                            <span className="reviewnumber"><i className="fa fa-star"></i></span>
                                                                            <a href="#"><span className="reviewlink">(0 Reviews)</span></a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rg-description">
                                                                        <p>{item.JOB_DETAILS?.length > 64 ? convertToPlain(item.JOB_DETAILS.replace('Job description', '')).slice(0, 64).trim() + '...' : convertToPlain(item.JOB_DETAILS.replace('Job description', '')).slice(0, 64).trim()}</p>
                                                                        {/* <p>{item.JOB_DETAILS?.length > 64 ? item.JOB_DETAILS?.replace('Job description', '').slice(0, 64) + '...' : item.JOB_DETAILS.replace('Job description', '')}</p> */}
                                                                        <ul className="skilllist">
                                                                            {item.KEYWORDS.split(',')?.length && item.KEYWORDS.split(',').map((i, index) => {
                                                                                if (item.KEYWORDS.split(',').length - 1 == index) {
                                                                                    return (
                                                                                        <span> <li>{i}</li>                                                                                                                                                                        </span>
                                                                                    )
                                                                                }
                                                                                else if (index <= 3) {
                                                                                    return (
                                                                                        <span> <li>{i}</li> |                                                                                                                                                                         </span>
                                                                                    )
                                                                                }
                                                                                else if (index == 4)
                                                                                    return (
                                                                                        <span> <li>{i}</li>                                                                                                                                                                          </span>
                                                                                    )
                                                                                else if (index == 5) {
                                                                                    return "..."
                                                                                }
                                                                            })}
                                                                        </ul>
                                                                    </div>
                                                                    <div className="rg-rightarea">
                                                                        <a className="rg-btnjobtag rg-fulltimejob mr-10" href="javascript:void(0);">
                                                                            <i className="ti-crown"></i> {item.LISTNING_TYPE == 1 ? ' REGULAR' : item.LISTNING_TYPE == 2 ? ' FEATURED' : ' PREMIUM'}
                                                                        </a>

                                                                        {
                                                                            !this.state.saveList.includes(item.JOB_ID)
                                                                                ?
                                                                                <a className="rg-tagfeature" href="javascript:void(0);" onClick={() => this.onClickSave(item.JOB_ID)} style={{ cursor: 'pointer', fontSize: '1em' }}><i className="fa fa-star fa-sm"></i> Save</a>
                                                                                :
                                                                                <a className="rg-tagfeature" href="javascript:void(0);" onClick={() => this.onClickUnSave(item.JOB_ID)} style={{ cursor: 'pointer', fontSize: '1em' }}><i className="fa fa-star fa-sm" style={{ color: '#eea21d' }}></i> saved</a>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul className="rg-professionalinfo">
                                                                <li><i className="lnr lnr-briefcase"></i><span>{item.WORK_EXP_MIN}-{item.WORK_EXP_MAX} Yrs</span></li>
                                                                <li><i className="fa fa-rupee"></i><span>{item.IS_HIDE_SALARY_FROM_CANDIDATE === 'Y' ? 'Not disclosed' : item.CTC_MIN + '-' + item.CTC_MAX}</span></li>
                                                                {/* <li><i className="lnr lnr-map-marker"></i><span>{item.CITY.length <= 25 ? item.CITY : item.CITY.slice(0, 25) + '...'}</span></li> */}
                                                                <li><i className="lnr lnr-map-marker"></i><span title={item.CITY}>{item.CITY?.length <= 25 ? item.CITY : (item.CITY?.slice(0, 25) + '...')}</span></li>

                                                            </ul>
                                                        </div>
                                                    </React.Fragment>
                                                    )
                                                    // }
                                                    // else {
                                                    //     return (
                                                    //         <div className="rg-featurejobholder">
                                                    //             <div className="rg-featurejob">
                                                    //                 <figure className="rg-companyimg">
                                                    //                     {item.COMPANY_LOGO === 'NA' ? <h3 className='logotext'>{item.COMPANY_NAME?.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} />}
                                                    //                 </figure>
                                                    //                 <div className="rg-companycontent">
                                                    //                     <div className="rg-companyhead">
                                                    //                         <div className="rg-rightarea">
                                                    //                             <a className="rg-tagfeature" href="javascript:void(0);"><i className="fa fa-clock"></i> {getDateParts(item.CREATED_ON).relativeTime.split(' ')[0] == 'a' ? '1 ' + getDateParts(item.CREATED_ON).relativeTime.split(' ').splice(1).join(' ') : getDateParts(item.CREATED_ON).relativeTime}</a>
                                                    //                         </div>
                                                    //                     </div>
                                                    //                     <div className="rg-companyname">
                                                    //                         <h3 title={item.JOB_TITLE}><Link to={constant.component.jobdetails.url.replace(':url', dynamicURL)}>{item.JOB_TITLE} </Link></h3>
                                                    //                         <h6><Link to={constant.component.companydetails.url.replace(':url', URL)} target='_blank'>{item.COMPANY_NAME}</Link></h6>
                                                    //                         <div className="companyreviewbox">
                                                    //                             <span className="reviewnumber"> <i className="fa fa-star"></i></span>
                                                    //                             <a href="#"><span className="reviewlink">(0 Reviews)</span></a>
                                                    //                         </div>
                                                    //                     </div>
                                                    //                     <div className="rg-description">
                                                    //                         <p>{item.JOB_DETAILS?.length > 64 ? item.JOB_DETAILS?.replace('Job description', '').slice(0, 64) + '...' : item.JOB_DETAILS.replace('Job description', '')}</p>

                                                    //                         <ul className="skilllist">

                                                    //                             {item.KEYWORDS.split(',').length && item.KEYWORDS.split(',').map((i, index) => {
                                                    //                                 if (item.KEYWORDS.split(',').length - 1 == index) {
                                                    //                                     return (
                                                    //                                         <span> <li>{i}</li>                                                                                                                                                                        </span>
                                                    //                                     )
                                                    //                                 }
                                                    //                                 else if (index <= 3) {
                                                    //                                     return (
                                                    //                                         <span> <li>{i}</li> |                                                                                                                                                                         </span>
                                                    //                                     )
                                                    //                                 }
                                                    //                                 else if (index == 4)
                                                    //                                     return (
                                                    //                                         <span> <li>{i}</li>                                                                                                                                                                          </span>
                                                    //                                     )
                                                    //                                 else if (index == 5) {
                                                    //                                     return "..."
                                                    //                                 }
                                                    //                             })}
                                                    //                         </ul>
                                                    //                     </div>
                                                    //                     <div className="rg-rightarea">
                                                    //                         <a className="rg-btnjobtag rg-fulltimejob mr-10" href="javascript:void(0);">
                                                    //                             <i className="ti-crown"></i>{item.LISTNING_TYPE == 1 ? ' REGULAR' : item.LISTNING_TYPE == 2 ? ' FEATURED' : ' PREMIUM'}                                                                            </a>
                                                    //                         {
                                                    //                             !this.state.saveList.includes(item.JOB_ID)
                                                    //                                 ?
                                                    //                                 <a className="rg-tagfeature" href="javascript:void(0);" onClick={() => this.onClickSave(item.JOB_ID)} style={{ cursor: 'pointer', fontSize: '1em' }}><i className="fa fa-star fa-sm"></i> Save</a>
                                                    //                                 :
                                                    //                                 <a className="rg-tagfeature" href="javascript:void(0);" onClick={() => this.onClickUnSave(item.JOB_ID)} style={{ cursor: 'pointer', fontSize: '1em' }}><i className="fa fa-star fa-sm" style={{ color: '#eea21d' }}></i> saved</a>
                                                    //                         }

                                                    //                     </div>
                                                    //                 </div>
                                                    //             </div>
                                                    //             <ul className="rg-professionalinfo">
                                                    //                 <li><i className="lnr lnr-briefcase"></i><span>{item.WORK_EXP_MIN}-{item.WORK_EXP_MAX} Yrs</span></li>
                                                    //                 <li><i className="fa fa-rupee"></i><span>{item.IS_HIDE_SALARY_FROM_CANDIDATE === 'Y' ? 'Not disclosed' : item.CTC_MIN + '-' + item.CTC_MAX}</span></li>
                                                    //                 <li><i className="lnr lnr-map-marker"></i><span title={item.CITY}>{item.CITY?.length <= 25 ? item.CITY : (item.CITY?.slice(0, 25) + '...')}</span></li>
                                                    //             </ul>
                                                    //         </div>
                                                    //     )
                                                    // }
                                                })}
                                                {JOB_COUNT == 0 && <div className="rg-featurejob text-danger pt-20" style={{ textAlign: 'center' }}>
                                                    <img src={noRecordImg}></img>
                                                    <h4>We could not find jobs matching your search criteria.</h4>
                                                    <h6>Did you enter wrong spelling of any word?</h6>
                                                    <p>Only cities/states/country names are accepted in location field</p>
                                                    <p> You can browse jobs by <Link to={constant.component.jobsByCategory.url}>Functional Area, Industry</Link>, <Link to={constant.component.jobsByCompany.url}>Company</Link>, <Link to={constant.component.jobsBySkill.url}> Skills </Link> and <Link to={constant.component.jobsByDesignation.url}>Designations</Link> </p>
                                                    <Link to={constant.component.login.url} class="rg-btn rg-active btn-primary mb-20" id="showtoast"><span className='text-white'>Browse More Jobs</span></Link>

                                                </div>}

                                                {JOB_LIST !== undefined && < nav className="rg-pagination">
                                                    <ul>
                                                        <Pagination
                                                            activePage={this.state.CURRENT_PAGE}
                                                            itemsCountPerPage={25}
                                                            totalItemsCount={JOB_COUNT ? JOB_COUNT : 1}
                                                            pageRangeDisplayed={5}
                                                            onChange={this.handlePageChange}
                                                            itemClass="page-item"
                                                            linkClass="page-link"
                                                        />
                                                    </ul>
                                                </nav>}
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 float-left">
                                            <aside id="rg-sidebarvtwo" className="rg-sidebar rg-sidebarvtwo">
                                                {
                                                    this.props.isLocation && <div className="jobscitypage mb-20">
                                                        <ul>
                                                            <li><a target='_blank' href={constant.component.CityOverview.url.replace(':city', this.props.isLocation.URL)}><i className="fa fa-caret-right"></i> {this.props.isLocation.CITY} - An Overview</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Companies in {this.props.isLocation.CITY}</a></li>
                                                            <li><a target='_blank' href={constant.component.CityOverview.url.replace(':city', this.props.isLocation.URL)}><i className="fa fa-caret-right"></i> Jobs Trends in {this.props.isLocation.CITY}</a></li>
                                                        </ul>
                                                    </div>
                                                }
                                                <div className="roz-create-cv">
                                                    <div className='urgent-hiring-area'>
                                                        <div className='hiring-img'>
                                                            <img src={'./assets/images/announce-img01.png'} />
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
                                                        {TOP_COMPANY_IMAGES && TOP_COMPANY_IMAGES.length > 0 && TOP_COMPANY_IMAGES.map((item, index) => {
                                                            return (
                                                                <a href={constant.component.joblist.url.replace(':url', item.URL)} target='_blank'><img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} /></a>
                                                            )
                                                        })}

                                                    </div>
                                                </div>
                                                <div className="rg-adds rg-jobsearchadd">
                                                    <a href="javascript:void(0);" title="">
                                                        <figure>
                                                            <img src={'../../assets/images/adds-05.jpg'} alt="img description" />
                                                        </figure>
                                                    </a>
                                                    <span>Ad</span>
                                                </div>
                                                {CITIES && CITIES.length > 0 && <div className="roz-aside-jobs-by-location">
                                                    <div className="roz-aside-jobs-by-location-box">
                                                        <h3>Jobs by location</h3>
                                                        <ul id="style-3">
                                                            {CITIES.map(item => {
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
                        >
                            <SignInForSaveUnsave
                                leftBar={this.state.leftBar}
                                history={this.props.history}
                                onCloseModal={this.onCloseModal}
                            />
                        </Modal>
                    </div>
                </main>
            </React.Fragment >
        )
    }
}



export default withRouter(JobLists);
