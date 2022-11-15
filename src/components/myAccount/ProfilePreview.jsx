import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getCandidateDetail, GetCareerProfile, GetCertifications, getITSkills, getOnlineProfileList, getPersonalDetail, getProfilePic, getProfileSummary, GetResume, getResumeHeadLine, GetWorkSample, keySkillsList, listEducationCandidate, ListEmployment, listProjectCandidate } from '../../action/CandidateAction'
import constant from '../../constant'
import { capFirstLetterInSentence, formatPhoneNumber, getStorage } from '../../utils'
import itSkills from './itSkills'
import moment from 'moment'
import FileSaver from 'file-saver'
import Pic from "../../assets/images/profilePic/secondary.jfif"
import Modal from 'react-modal';
import ProfilePicture from './profilePicture';
import noSearchFound from '../../../src/assets/images/no-results.png'
import LoadingOverlay from 'react-loading-overlay';
import { SpinnerCircular } from 'spinners-react'
import { padding } from '@mui/system'
import VerifyEmailMobile from './VerifyEmailMobile'
import nl2br from 'react-nl2br'
import { formatPhoneNumberIntl } from 'react-phone-number-input'
import { Helmet } from 'react-helmet'

export default class bProfilePreview extends Component {

    state = {
        detail: getStorage(constant.keys.cd),
        isResumeHeadLine: undefined,
        isProfileSummary: undefined,
        candidateDetail: {},
        isKeySkillsDetail: undefined,
        isListEmployement: undefined,
        isItSkills: undefined,
        isEducation: undefined,
        isProjects: undefined,
        workSampleList: undefined,
        onlineProfileLists: undefined,
        certificateLists: undefined,
        personalData: undefined,

        headLine: undefined,
        profileSummary: undefined,
        itSkills: undefined,
        candidateSkill: undefined,
        employeeList: undefined,
        education: undefined,
        projectList: [],
        resumeInfo: {},
        careerProfile: undefined,
        getFile: undefined,
        showLoader: false,
        openModal: false
    }
    componentDidMount() {
        this.getResumeHeadLine()
        this.getProfileSummary()
        this.getCandidateDetail()
        this.getCandidateKeySkillsList()
        this.getEmploymentDetails()
        this.getCandidateITSkillsList()
        this.getCandidateEducationList()
        this.getCandidateProjectsLists()
        this.getPersonalDetail()

        this.getCertificateLists()
        this.getOnlineProfileLists()
        this.getWorkSampleLists()
        this.getResume()
        this.onGetFileChange()
        this.getCareerProfile()
    }

    getResume = () => {
        const { CANDIDATE_ID } = this.state.detail
        this.setState({ showLoader: true })
        GetResume({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
                this.setState({ showLoader: false })
                this.setState({
                    resumeInfo: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })

    }

    getResumeHeadLine = () => {
        const { CANDIDATE_ID } = this.state.detail
        this.setState({ showLoader: true })
        getResumeHeadLine({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.RESUME_HEADLINE) {
                this.setState({ showLoader: false })
                this.setState({
                    isResumeHeadLine: true,
                    headLine: res.result.RESUME_HEADLINE
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }

    getProfileSummary = () => {
        const { CANDIDATE_ID } = this.state.detail
        this.setState({ showLoader: true })
        getProfileSummary({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.PROFILE_SUMMARY) {
                this.setState({ showLoader: false })
                this.setState({
                    isProfileSummary: true,
                    profileSummary: res.result.PROFILE_SUMMARY
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }
    getCandidateDetail = () => {
        const { CANDIDATE_ID } = this.state.detail
        this.setState({ showLoader: true })
        getCandidateDetail({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {

            if (res.status) {
                this.setState({ showLoader: false })
                this.setState({
                    candidateDetail: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }

    getCandidateKeySkillsList = () => {
        this.setState({ showLoader: true })
        const { CANDIDATE_ID } = this.state.detail
        keySkillsList({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({ showLoader: false })
                this.setState({
                    isKeySkillsDetail: true,
                    candidateSkill: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }
    getEmploymentDetails = () => {
        const { CANDIDATE_ID } = this.state.detail
        this.setState({ showLoader: true })
        ListEmployment({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({ showLoader: false })
                this.setState({
                    isListEmployement: true,
                    employeeList: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }
    getCandidateITSkillsList = () => {
        const { CANDIDATE_ID } = this.state.detail
        this.setState({ showLoader: true })
        getITSkills({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({ showLoader: false })
                this.setState({
                    isItSkills: true,
                    itSkills: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }

    getCandidateEducationList = () => {
        this.setState({ showLoader: true })
        const { CANDIDATE_ID } = this.state.detail
        listEducationCandidate({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({ showLoader: false })
                this.setState({
                    isEducation: true,
                    education: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }

    getCandidateProjectsLists = () => {
        const { CANDIDATE_ID } = this.state.detail
        this.setState({ showLoader: true })
        listProjectCandidate({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({ showLoader: false })
                this.setState({
                    isProjects: true,
                    projectList: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }

    // Candidate Accomplishments 

    getCertificateLists = () => {
        const { CANDIDATE_ID } = this.state.detail
        this.setState({ showLoader: true })
        GetCertifications({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
                this.setState({ showLoader: false })
                this.setState({
                    certificateLists: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }

    getOnlineProfileLists = () => {
        this.setState({ showLoader: true })
        const { CANDIDATE_ID } = this.state.detail
        getOnlineProfileList({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
                this.setState({ showLoader: false })
                this.setState({
                    onlineProfileLists: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }

    getWorkSampleLists = () => {
        this.setState({ showLoader: true })
        const { CANDIDATE_ID } = this.state.detail
        GetWorkSample({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
                this.setState({ showLoader: false })
                this.setState({
                    workSampleList: res.result
                })

            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }
    // Candidate Accomplishments 
    //Personal Details
    getPersonalDetail = () => {
        this.setState({ showLoader: true })
        const { CANDIDATE_ID } = this.state.detail
        getPersonalDetail({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
                this.setState({ showLoader: false })
                this.setState({
                    personalData: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }
    //Personal Details
    saveFile = (model, filename) => {
        const { RESUME_FILE, CANDIDATE_ID } = model
        FileSaver.saveAs(
            `${process.env.REACT_APP_BASE_URL}/candidate-resume/${CANDIDATE_ID}/${RESUME_FILE}`,
            RESUME_FILE
        );
    }


    onGetFileChange = () => {
        const { CANDIDATE_ID } = this.state.detail;
        getProfilePic({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            this.setState({ getFile: res.result })
        })
    }




    getCareerProfile = () => {
        const { CANDIDATE_ID } = this.state.detail
        this.setState({ showLoader: true })
        GetCareerProfile({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
                this.setState({ showLoader: false })
                this.setState({
                    careerProfile: res.result
                })
            }
        }).catch((err) => {
            this.setState({ showLoader: false })
            alert(err)
        })
    }
    onCloseModal = () => {
        this.setState({ openModal: false })
        this.onGetFileChange()
    }
    onOpenModal = () => {
        this.setState({ openModal: true })
    }

    diff_year_month_day = (dt1, dt2) => {
        var time = (dt2.getTime() - dt1.getTime()) / 1000;
        var year = Math.abs(Math.round((time / (60 * 60 * 24)) / 365.25));
        var month = Math.abs(Math.round(time / (60 * 60 * 24 * 7 * 4)));
        var days = Math.abs(Math.round(time / (3600 * 24)));

        let years = Math.floor(month / 12)
        let months = Math.floor(month % 12)
        return years + " " + "Years" + " " + months + " " + " Months"

    }

    render() {

        const { CANDIDATE_ID } = this.state.detail
        const { getFile } = this.state;
        let model = {
            RESUME_FILE: this.state.resumeInfo.RESUME_FILE,
            CANDIDATE_ID: CANDIDATE_ID
        }
        const { candidateDetail, PIN_CODE, careerProfile, projectList, workSampleList, certificateLists, onlineProfileLists, openModal } = this.state
        return (
            <React.Fragment>
                 <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " Profile-Preview | Rozgar.com"}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " Profile-Preview | Rozgar.com"}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
</Helmet>
                {this.state.showLoader &&
                    <div style={{
                        position: "fixed",
                        zIndex: "999",
                        left: "0",
                        top: " 0",
                        width: " 100%",
                        height: " 100%",
                        overflow: "auto",
                        padding: "210px",
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                    }}>
                        <LoadingOverlay

                            active={true}
                            spinner={<SpinnerCircular color={'rgba(0,0,0,0.44)'} secondaryColor={'rgb(230,46,45)'} />}
                        >
                        </LoadingOverlay></div>}
                <main id="rg-main" className="rg-main rg-haslayout pt-0">
                    <div className="rg-sectionspace rg-haslayout pt-0">
                        <VerifyEmailMobile getCandidateDetail={this.getCandidateDetail} />
                        <div className="rozgar-editprofileimgarea">

                            <div className="container">
                                <div className="row">
                                    <div className='col-md-2'>

                                        <div className='profilepic' style={{ cursor: "pointer" }}>
                                            {getFile != undefined && getFile.PROFILE_IMAGE ?
                                                <img src={`${getFile.PROFILE_IMAGE_PATH}/${getFile.PROFILE_IMAGE}`} /> :
                                                <img src={Pic} />
                                            }
                                            {/* <img src={'./assets/images/author/profile_icon.jpg'} alt="image description" /> */}
                                            <div className='proimgedit' onClick={this.onOpenModal}>
                                                <i class="fa fa-camera"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='proqaucontent'>
                                            <h3 className=''>{candidateDetail.CANDIDATE_NAME}</h3>
                                            <h5>{candidateDetail.CurrentEmp ? candidateDetail.CurrentEmp.CURRENT_COMPANY : 'Not Available'}</h5>
                                            <div className='profiledetails'>
                                                <div className='row'>
                                                    <div className='col-md-8'>
                                                        <ul>
                                                            <li>
                                                                <span className='allicon'><i class="lnr lnr-map-marker"></i></span>
                                                                <span>INDIA</span>
                                                            </li>
                                                            <li>
                                                                <span className='allicon'><i class="lnr lnr-phone"></i></span>
                                                                <span>{formatPhoneNumberIntl('+'+candidateDetail.PHONENO).replace(/\s+/g, '-')}</span>
                                                            </li>
                                                            <li>
                                                                <span className='allicon'><i class="lnr lnr-briefcase"></i></span>
                                                                <span>{candidateDetail.TOTAL_EXP_YEAR == null || undefined ?  0 + ' ' + 'Year' : candidateDetail.TOTAL_EXP_YEAR + ' ' + 'Years'} {candidateDetail.TOTAL_EXP_MONTH == null ||undefined ?  0 + ' ' + 'Month' : candidateDetail.TOTAL_EXP_MONTH + ' ' + 'Months'}</span>
                                                            </li>
                                                            <li>
                                                                <span className='allicon'><i class="lnr lnr-envelope"></i></span>
                                                                <span>{candidateDetail.EMAIL_ID}</span>
                                                            </li>
                                                            <li>
                                                                <span className='allicon'><i class="lnr lnr-layers"></i></span>
                                                                <span>{candidateDetail.CurrentEmp ? candidateDetail.CurrentEmp.CURRENT_ANNUAL_SALARY_LACS / 100000 + ' ' + 'Lacs' : 0 + ' ' + 'Lacs'} {candidateDetail.CurrentEmp ? candidateDetail.CurrentEmp.CURRENT_ANNUAL_SALARY_THOUSANDS / 1000 + ' ' + 'Thousands' : 0 + ' ' + 'Thousand'}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='col-md-4'>
                                                        <div className='btnverifid'>
                                                            <ul>
                                                                <li><i
                                                                    className={candidateDetail.IS_PHONE_VERIFIED == "Y" ? 'epiconverified ti-check' : 'epiconnotverified ti-check'}
                                                                ></i></li>
                                                                <li><span className={candidateDetail.IS_EMAIL_VERIFIED == "Y" ? 'btnepverifyjob' : 'btnepnotverifyjob'}>{candidateDetail.IS_EMAIL_VERIFIED == "Y" ? 'Verified' : 'Verify'}</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            {<p className='pt-2 pb-0'>Profile Strength ({candidateDetail.ProfileWeigh}% Completed)</p>}

                                            <div class="progress profile">
                                                {/* <div class="progress-done" data-done="60" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                                  {candidateDetail.Profilewighage}  60%
                                                </div> */}

                                                <progress max="100" value={candidateDetail.ProfileWeigh} style={{ width: '100%' }} ><span>{candidateDetail.ProfileWeigh}</span></progress>


                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-md-3 posrel'>
                                        <div className='profileupdate'>
                                            <div><Link to={constant.component.editProfile.url}>Update Profile</Link></div>
                                            <div className='awardbtnbox'>
                                                <i class="fa fa-trophy" aria-hidden="true"></i>
                                                <span className='nubtext'>
                                                    <small>{candidateDetail.reward_points}</small> Rewards
                                                </span>
                                                <span className='use-reward'>Use Reward Points</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rozgar-profile-main-content pt-4'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div className="navigation" id="mainNav">
                                            <div className='profileside mb-0'>
                                                <aside>
                                                    <div className='resumearea'>
                                                        <div className='resumeuploadbox'>
                                                            <h2>Profile Preview</h2>
                                                        </div>
                                                    </div>

                                                </aside>
                                            </div>
                                            <a className="navigation__link" href="#1">Resume</a>
                                            <a className="navigation__link" href="#2">Resume Headline</a>
                                            <a className="navigation__link" href="#3">Key Skills</a>
                                            <a className="navigation__link" href="#4">Employment</a>
                                            <a className="navigation__link" href="#5">Education</a>
                                            <a className="navigation__link" href="#6">IT Skills</a>
                                            <a className="navigation__link" href="#7">Projects</a>
                                            <a className="navigation__link" href="#8">Profile Summary</a>
                                            <a className="navigation__link" href="#9">Accomplishments</a>
                                            <a className="navigation__link" href="#10">Career Profile</a>
                                            <a className="navigation__link" href="#11">Personal Details</a>
                                        </div>
                                    </div>
                                    <div className='col-md-9'>
                                        <div className='edprofilerightside page-section' id="1">
                                            <div className='edprojobtext'>Resume</div>
                                            <div className='edprofilerightsideinner bb-01'>
                                                <div className='pro-job-details'>
                                                    <div className='grid03'>
                                                        <p >Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.</p>
                                                    </div>
                                                    {this.state.resumeInfo.RESUME_FILE != null ?
                                                        <div className='grid03 row pb-5'>
                                                            {
                                                                this.state.resumeInfo && this.state.resumeInfo.RESUME_FILE
                                                                &&
                                                                <div className='cvtype'><Link to='#' className='cvdownload'><i onClick={(e) => { this.saveFile(model, this.state.resumeInfo.RESUME_FILE) }} class="ti-download"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp; <span>{this.state.resumeInfo.RESUME_FILE} </span>- Uploaded on {moment(this.state.resumeInfo.RESUME_UPDATE_TIME).format('MMM Do YY')}</div>
                                                            }

                                                        </div>
                                                        : <div >
                                                            <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                            <h6 className='text-center text-danger'>No Resume Uploaded </h6>
                                                            <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} to={constant.component.editProfile.url}> Please Uploaded Resume <i className="fa fa-download" style={{ marginLeft: '4px' }}></i></Link></p>
                                                        </div>}  </div>
                                            </div>
                                        </div>

                                        <div className='edprofilerightside page-section' id="2">
                                            <div className='edprojobtext'>Resume Headline</div>
                                            <div className='edprofilerightsideinner bb-01'>
                                                <div className='pro-job-details'>
                                                    {this.state.headLine != null ?
                                                        <div className='grid03'>
                                                            <p>{this.state.headLine}</p>
                                                        </div> : <div>
                                                            <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                            <h6 className='text-center text-danger'>No Resume Headline Data </h6>
                                                            <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} to={constant.component.editProfile.url}> Please Add Resume Headline <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i> </Link></p>
                                                        </div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='edprofilerightside page-section' id="3">
                                            <div className='edprojobtext'>Key Skills</div>
                                            <div className='edprofilerightsideinner bb-01'>
                                                <div className='pro-job-details'>
                                                    {this.state.candidateSkill != null ?
                                                        <div className='grid03'>
                                                            {!!this.state.candidateSkill && this.state.candidateSkill.map((i, index) => (
                                                                <span className='key-skills-box' key={index}>{i.SKILL}</span>
                                                            ))
                                                            }
                                                        </div> : <div>
                                                            <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                            <h6 className='text-center text-danger'>No Key Skill Data </h6>
                                                            <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} to={constant.component.editProfile.url}> Please Add Key Skill <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                                        </div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='edprofilerightside page-section' id="4">
                                            <div className='edprojobtext'>Employment</div>
                                            {this.state.employeeList != null ?
                                                <div className='edprofilerightsideinner bb-01'>
                                                    {!!this.state.employeeList && this.state.employeeList.map((i, index) => {
                                                        const skill = i.SKILL_USED.split(",")
                                                        return (
                                                            <div className='pro-job-details mb-3' key={index}>
                                                                <div className='grid03'>
                                                                    <div className='font-weight-500 font-15'>{i.CURRENT_DESIGNATION}</div>
                                                                    <div className='font-weight-500 font-15'>{i.CURRENT_COMPANY}</div>
                                                                    <div className='font-weight-500'>{i.JOINING_DATE_MONTH_NAME} {i.JOINING_DATE_YEAR} to {i.IS_THIS_YOUR_CURRENT_COMPANY == 'Y' ? `Present ( ${this.diff_year_month_day(new Date(), new Date(`${i.JOINING_DATE_YEAR}-${i.JOINING_DATE_MONTH}-31`))})` : `${i.WORKING_TILL_DATE_MONTH_NAME} ${i.WORKING_TILL_DATE_YEAR} ( ${this.diff_year_month_day(new Date(`${i.WORKING_TILL_DATE_YEAR}-${i.WORKING_TILL_DATE_MONTH}-01`), new Date(`${i.JOINING_DATE_YEAR}-${i.JOINING_DATE_MONTH}-31`))})`} </div>
                                                                    <div className=''>{i.NOTICE_PERIOD}</div>
                                                                    <div className='font-weight-500  pb-1'>{i.JOB_PROFILE}</div>

                                                                    <div className=''><span className='font-weight-600'>Top Key Skills : </span>
                                                                        {skill.map((j) => (
                                                                            <span className='btn-keys-kills-sm mb-5'>{j}</span>
                                                                        ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    }
                                                    {/* <div className='pro-job-details mb-3'>
                                                    <div className='grid03'>
                                                        <div className='font-weight-500 font-17 pb-1'>Web Developer</div>
                                                        <div className='font-weight-500 font-15'>Value Innovation Labs</div>
                                                        <div className='font-weight-500'>Oct 2017 to Present (4 years 8 months)</div>
                                                        <div className=''>Available to join in 1 Months</div>
                                                        <div className=''>Web Developer</div>
                                                        <div className=''><span className='font-weight-600'>Top 5 Key Skills:</span> <span className='btn-keys-kills-sm'>html5</span><span className='btn-keys-kills-sm'>css</span><span className='btn-keys-kills-sm'>bootstrap</span> <span className='btn-keys-kills-sm'>jquery</span> <span className='btn-keys-kills-sm'>javascript</span></div>
                                                    </div>
                                                </div> */}
                                                </div> : <div>
                                                    <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                    <h6 className='text-center text-danger'>No Employment Data </h6>
                                                    <p style={{ textAlign: "center" }}> <Link style={{ color: "black", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} to={constant.component.editProfile.url}> Please Add Employment <i style={{ marginLeft: '4px' }} class="fa fa-plus"></i></Link></p>
                                                </div>}
                                        </div>

                                        <div className='edprofilerightside page-section' id="5">
                                            <div className='edprojobtext'>Education</div>
                                            {this.state.education != null ?
                                                <div className='edprofilerightsideinner bb-01'>
                                                    {!!this.state.education && this.state.education.map((k) => (
                                                        <div className='pro-job-details mb-3'>
                                                            <div className='grid03'>
                                                                <div className='font-weight-500 font-17 pb-1'>{k.EDUCATION_QUALIFICATION && k.EDUCATION_QUALIFICATION[0].COURSE_STREAM} - {k.SPECIALIZATION && k.SPECIALIZATION[0].SPECIALIZATION} </div>
                                                                <div className=''>{k.UNIVERSITY_INSTITUTE}</div>
                                                                <div className=''>{k.PASSING_OUT_YEAR} ({k.COURSE_TYPE})</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {/* <div className='pro-job-details mb-3'>
                                                    <div className='grid03'>
                                                        <div className='font-weight-500 font-17 pb-1'>BCA - Computers</div>
                                                        <div className=''>Delhi University</div>
                                                        <div className=''>2011 (Full Time)</div>
                                                    </div>
                                                </div>
                                                <div className='pro-job-details mb-3'>
                                                    <div className='grid03'>
                                                        <div className='font-weight-500 font-17 pb-1'>Uttar Pradesh - Hindi</div>
                                                        <div className=''>2006</div>
                                                    </div>
                                                </div>
                                                <div className='pro-job-details mb-3'>
                                                    <div className='grid03'>
                                                        <div className='font-weight-500 font-17 pb-1'>Uttar Pradesh - Hindi</div>
                                                        <div className=''>2004</div>
                                                    </div>
                                                </div> */}
                                                </div> : <div >
                                                    <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                    <h6 className='text-center text-danger'>No Education Data </h6>
                                                    <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} to={constant.component.editProfile.url}> Please Add Education  <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                                </div>}
                                        </div>

                                        <div className='edprofilerightside page-section' id="6">
                                            <div className='edprojobtext'>IT Skills</div>
                                            <div className='edprofilerightsideinner bb-01'>
                                                <div className='pro-job-details mb-3'>
                                                    <div className='grid03'>
                                                        <div style={{ overflowX: 'auto' }} className='text-left'>
                                                            {this.state.itSkills != null ?
                                                                <table>
                                                                    <tr>
                                                                        <th>Skills</th>
                                                                        <th>Version</th>
                                                                        <th>Last Used</th>
                                                                        <th>Experience</th>
                                                                    </tr>
                                                                    {this.state.itSkills && this.state.itSkills.map((i) => (
                                                                        <tr>
                                                                            <td>{i.IT_SKILLS}</td>
                                                                            <td>{i.SOFTWARE_VERSION}</td>
                                                                            <td>{i.LAST_USED}</td>
                                                                            <td>{i.EXP_YEAR}</td>
                                                                        </tr>
                                                                    ))
                                                                    }
                                                                    {/* <tr>
                                                                    <td>Ilead Guru</td>
                                                                    <td>2014</td>
                                                                    <td>-</td>
                                                                    <td>3 Years</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Kitinfinet</td>
                                                                    <td>2015</td>
                                                                    <td>-</td>
                                                                    <td>1 Years</td>
                                                                </tr> */}
                                                                </table> : <div >
                                                                    <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                                    <h6 className='text-center text-danger'>No IT Skills Data </h6>
                                                                    <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} to={constant.component.editProfile.url}> Please Add IT Skills  <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                                                </div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='edprofilerightside page-section' id="7">
                                            <div className='edprojobtext'>Projects</div>
                                            <div className='edprofilerightsideinner bb-01'>
                                                <div className='pro-job-details'>
                                                    <div className='grid03'>

                                                        {projectList && projectList.length > 0 ? projectList.map((i) => (
                                                            <tr>
                                                                <td>
                                                                    <h4>{i.PROJECT_TITLE}</h4>
                                                                    {/* <a style={{color:'blue'}} href={`${i.URL}`}>{i.URL}</a> */}
                                                                    <p>{i.PROJECT_DETAILS}</p>
                                                                </td>
                                                            </tr>
                                                        )) : <div >
                                                            <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                            <h6 className='text-center text-danger'>No Projects Data </h6>
                                                            <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} to={constant.component.editProfile.url}> Please Add Projects  <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='edprofilerightside page-section' id="8">
                                            <div className='edprojobtext'>Profile Summary <small> &nbsp;  &nbsp;</small></div>
                                            <div className='edprofilerightsideinner bb-01'>
                                                <div className='pro-job-details'>
                                                    {this.state.profileSummary != null ?
                                                        <div className='grid03'>
                                                            <p>{this.state.profileSummary}</p>
                                                        </div> : <div >
                                                            <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                            <h6 className='text-center text-danger'>No Profile Summary Data</h6>
                                                            <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} to={constant.component.editProfile.url}> Please Add Profile Summary  <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                                        </div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='edprofilerightside page-section' id="9">
                                            <div className='edprojobtext'>Accomplishments</div>
                                            <div className='edprofilerightsideinner bb-01'>
                                                <div className='pro-job-details mb-3'>
                                                    <div className='grid03'>
                                                        <div style={{ overflowX: 'auto' }} className='text-left'>
                                                            {onlineProfileLists?.length > 0 || workSampleList?.length > 0 || certificateLists?.length > 0 ?
                                                                <table>

                                                                    <tr>
                                                                        <td>
                                                                            <h4>Online Profile</h4>
                                                                            {
                                                                                onlineProfileLists && onlineProfileLists.length == 0 &&
                                                                                <p>Add link to Online profiles (e.g. Linkedin, Facebook etc.).</p>
                                                                            }
                                                                            {
                                                                                onlineProfileLists && onlineProfileLists.length > 0 ? onlineProfileLists.map((data, index) => {
                                                                                    return <div className='col-12 mt-2'>
                                                                                        <p style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                                                            <b>
                                                                                                {data.SOCIAL_PROFILE}
                                                                                            </b>

                                                                                        </p>
                                                                                        <p><a href={data.URL} target="_blank" style={{ color: '#009BC8', textDecoration: 'none', cursor: "pointer" }}>{data.URL}</a></p>
                                                                                        <p>{nl2br(data.PROFILE_DESCRITION)}</p>
                                                                                    </div>
                                                                                })
                                                                                    : <div >
                                                                                        <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                                                        <h6 className='text-center text-danger'>No Online Profile  Added </h6>
                                                                                        <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} onClick={(e) => { this.onShowModal(null, e, 'ADD') }}> Please Add Online Profile <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                                                                    </div>}
                                                                        </td>

                                                                    </tr>





                                                                    <tr>
                                                                        <td>
                                                                            <h4>Work Sample</h4>
                                                                            {
                                                                                workSampleList && workSampleList.length == 0 &&
                                                                                <p>Add work sample to get noticed faster.</p>
                                                                            }
                                                                            {
                                                                                workSampleList && workSampleList.length > 0 ? workSampleList.map((data, index) => {
                                                                                    return <div className='col-12 mt-2'>
                                                                                        <p style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                                                            <b>
                                                                                                {data.WORK_SAMPLE_TITLE}
                                                                                            </b>

                                                                                        </p>
                                                                                        <p><a href={data.URL} target="_blank" style={{ color: '#009BC8', textDecoration: 'none', cursor: "pointer" }}>{data.URL}</a></p>
                                                                                        <p>{nl2br(data.WORK_DETAILS)}</p>
                                                                                        <p>
                                                                                            {data.DURATION_FROM_MONTH_NAME} {data.DURATION_FROM_YEAR} - {data.DURATION_TO_MONTH_NAME} {data.DURATION_TO_YEAR}
                                                                                        </p>
                                                                                       

                                                                                    </div>
                                                                                })
                                                                                    : <div >
                                                                                        <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                                                        <h6 className='text-center text-danger'>No Work Sample  Added </h6>
                                                                                        <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} onClick={(e) => { this.onShowWorkSampleModal(null, e, 'ADD') }}> Please Add Work Sample <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                                                                    </div>}
                                                                        </td>
                                                                    </tr>


                                                                    <tr>
                                                                        <td>
                                                                            <h4>Certifications</h4>
                                                                            {
                                                                                certificateLists && certificateLists.length == 0 &&
                                                                                <p>Add certifications to show your skills.</p>
                                                                            }                                              {
                                                                                certificateLists && certificateLists.length > 0 ? certificateLists.map((data, index) => {
                                                                                    return <div className='col-12 mt-2'>
                                                                                        <p style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                                                            <b>
                                                                                                {data.CERTIFICATION_TITLE}
                                                                                            </b>
                                                                                           
                                                                                        </p>
                                                                                        <p>{nl2br(data.DESCRIPTION)}</p>
                                                                                        {/* condition to handle StartDate and EndDate */}
                                                                                        <p>{data.VALID_FROM_MONTH_NAME} {data.VALID_FROM_YEAR} {data.VALID_FROM_MONTH_NAME && data.VALID_TO_MONTH_NAME ? "-" : data.VALID_FROM_YEAR && data.VALID_TO_YEAR ? "-" : ''} {data.VALID_TO_MONTH_NAME} {data.VALID_TO_YEAR}</p>
                                                                                        <p><a href={data.CERTIFICATION_URL} target="_blank" style={{ color: '#009BC8', textDecoration: 'none', cursor: "pointer" }}>{data.CERTIFICATION_URL}</a></p>

                                                                                    </div>
                                                                                })
                                                                                    : <div >
                                                                                        <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                                                        <h6 className='text-center text-danger'>No Certifications Added </h6>
                                                                                        <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} onClick={(e) => { this.onShowCertificateModal(null, e, 'ADD') }}> Please Add Certifications  <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                                                                    </div>}
                                                                        </td>
                                                                       
                                                                    </tr>
                                                                </table> : ""}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='edprofilerightside page-section' id="10">
                                            <div className='edprojobtext'>Career Profile</div>
                                            <div className='edprofilerightsideinner bb-01'>
                                                <div className='pro-job-details mb-3'>
                                                    <div className='grid03'>
                                                        <div style={{ overflowX: 'auto' }} className='text-left'>
                                                            {careerProfile && careerProfile.INDUSTRY != null ?
                                                                <table>
                                                                    <tr>
                                                                        <td>
                                                                            <h5>Current Industry</h5>
                                                                            <p>{careerProfile ? careerProfile.INDUSTRY : ""}</p>
                                                                        </td>
                                                                        <td>
                                                                            <h5>Role Category</h5>
                                                                            <p>{careerProfile ? careerProfile.ROLE_CATEGORY_NAME : ''}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>

                                                                        <td>
                                                                            <h5>Job Role</h5>
                                                                            <p>{careerProfile ? careerProfile.ROLE_NAME : ""}</p>
                                                                        </td>
                                                                        <td>
                                                                            <h5>Desired Job Type</h5>
                                                            <p className='mt-1'>{careerProfile.DesiredJobTypes && careerProfile.DesiredJobTypes.map((d, i) => {
                                                                return <span className='key-skills-box'>{d.JOB_TYPE}
                                                                </span>
                                                            })}</p>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>
                                                                            <h5>Desired Employment Type</h5>
                                                                            <p>{careerProfile ? careerProfile.DesiredEmployementTypes.map((i) => i.EMPLOYMENT_TYPE).join(",") : ""}</p>
                                                                        </td>
                                                                        <td>
                                                                            <h5>Preferred Shift</h5>
                                                                            <p className='mt-1'>{careerProfile.PREFERRED_SHIFT == 'D' ? 'DAY' : careerProfile.PREFERRED_SHIFT == 'N' ? 'NIGHT' : careerProfile.PREFERRED_SHIFT == 'F' ? 'FLEXIBLE' : ''}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h5>Preferred Work Location</h5>
                                                                            <p>{careerProfile ? careerProfile.PreferredWorkLocations.map((i) => i.WORK_LOCATION).join(",") : ''}</p>
                                                                        </td>

                                                                        <td>
                                                                            <h5>Expected Salary</h5>
                                                                            <p>{careerProfile.EXPECTED_SALARY_LACS ? `Rs ${careerProfile.EXPECTED_SALARY_LACS} Lacs ${careerProfile.EXPECTED_SALARY_THOUSANDS} Thousands` : `Rs ${(careerProfile.EXPECTED_SALARY_THOUSANDS)} Thousands`} </p>

                                                                        </td>
                                                                    </tr>
                                                                </table> : <div >
                                                                    <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                                    <h6 className='text-center text-danger'>No Career Profile Data</h6>
                                                                    <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} to={constant.component.editProfile.url}> Please Add Career Profile  <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                                                </div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='edprofilerightside page-section' id="11">
                                            <div className='edprojobtext'>Personal Details</div>
                                            {this.state.personalData && this.state.personalData.FIRST_NAME != null ?
                                                <div className='edprofilerightsideinner bb-01'>
                                                    <div className='pro-job-details mb-3'>
                                                        <div className='grid03'>
                                                            <div style={{ overflowX: 'auto' }} className='text-left'>
                                                                <table>
                                                                    <tr>
                                                                        <td>
                                                                            <h5>First Name</h5>
                                                                            <p>{this.state.personalData.FIRST_NAME}</p>
                                                                        </td>
                                                                        <td>
                                                                            <h5>Last Name</h5>
                                                                            <p>{this.state.personalData.SECOND_NAME}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h5>Date of Birth</h5>
                                                                            <p>{this.state.personalData.DOB}</p>
                                                                        </td>
                                                                        <td>
                                                                            <h5>Permanent Address</h5>
                                                                            <p>{this.state.personalData.PERMANENT_ADDRESS}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h5>Gender</h5>
                                                                            <p>{this.state.personalData.GENDER}</p>
                                                                        </td>
                                                                        <td>
                                                                            <h5>Area Pin Code</h5>
                                                                            <p>{this.state.personalData.PINCODE}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h5>Marital Status</h5>
                                                                            <p>{this.state.personalData.MARITAL_STATUS}</p>
                                                                        </td>
                                                                        <td>
                                                                            <h5>Hometown</h5>
                                                                            <p>{this.state.personalData.HOME_TOWN}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h5>Category</h5>
                                                                            <p>{this.state.personalData.CAST_CATEGORY}</p>
                                                                        </td>
                                                                        <td>
                                                                            <h5>Work permit for India</h5>
                                                                            {/* <p>Add Work permit for USA</p> */}
                                                                            <p>{this.state.personalData.WORK_PERMIT_USA}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h5>Work permit of other countries</h5>
                                                                            {
                                                                                this.state.personalData.WorkPermitForOtherCountries && this.state.personalData.WorkPermitForOtherCountries.length > 0 && this.state.personalData.WorkPermitForOtherCountries.map((data, index) => {
                                                                                    return <span className='key-skills-box mt-1'>{data.COUNTRY}
                                                                                    </span>
                                                                                })
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            <h5>Differently Abled</h5>
                                                                            <p>{this.state.personalData.DIFFERENTLY_ABLED == 'Y' ? "Yes" : "No"}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h5>Email</h5>
                                                                            <p>{this.state.personalData.EMAIL_ID}</p>
                                                                        </td>
                                                                        <td>
                                                                            <h5>Mobile Number</h5>
                                                                            <p>{this.state.personalData.PHONENO}</p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div style={{ overflowX: 'auto' }} className='text-left'>
                                                                <table className='table-language'>
                                                                    <tr>
                                                                        <th>Languages</th>
                                                                        <th>Proficiency</th>
                                                                        <th>Read</th>
                                                                        <th>Write</th>
                                                                        <th>Speak</th>
                                                                    </tr>
                                                                    {
                                                                        this.state.personalData.Language && this.state.personalData.Language.map((d, i) => {
                                                                            return (
                                                                                <>
                                                                                    <tr>
                                                                                        <td>{d.LANGUAGE}</td>
                                                                                        <td>{d.PROFICIENCY}</td>
                                                                                        <td>{d.READ_SKILL == "Y" ? <i class="ti-check"></i> : <i class="fa fa-times"></i>}</td>
                                                                                        <td>{d.WRITE_SKILL == "Y" ? <i class="ti-check"></i> : <i class="fa fa-times"></i>}</td>
                                                                                        <td>{d.SPEAK_SKILL == "Y" ? <i class="ti-check"></i> : <i class="fa fa-times"></i>}</td>
                                                                                    </tr>
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : <div >
                                                    <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                                    <h6 className='text-center text-danger'>No Personal Detail Data</h6>
                                                    <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} to={constant.component.editProfile.url}> Please Add Personal Detail  <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                                </div>}
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <Modal
                            isOpen={openModal}
                            // onAfterOpen={afterOpenModal}
                            style={{ content: { top: "20%", left: '20%', right: 'auto', bottom: 'auto' }, overlay: { backgroundColor: 'rgba(15,29,45,0.70)' } }}
                            onRequestClose={this.onCloseModal}
                        >
                            <ProfilePicture closeModal={this.onCloseModal} />
                        </Modal>

                    </div>
                </main>
            </React.Fragment >
        )
    }
}


