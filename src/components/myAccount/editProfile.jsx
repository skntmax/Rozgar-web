import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'
import ResumeFile from './resumeFile'
import ResumeHeadline from './resumeHeadline'
import KeySkills from './keySkills'
import Employment from './employment'
import Education from './education'
import ItSkills from './itSkills'
import Projects from './projects'
import ProfileSummary from './profileSummary'
import Accomplishments from './accomplishments'
import CareerProfile from './careerProfile'
import PersonalDetails from './personalDetails'
import { formatPhoneNumber, getStorage, phonenumber } from '../../utils'
import { getCandidateDetail, GetCareerProfile, GetCertifications, getITSkills, getOnlineProfileList, GetPersonalDetail, getProfilePic, getProfileSummary, GetResume, getResumeHeadLine, GetWorkSample, keySkillsList, listEducationCandidate, ListEmployment, listProjectCandidate, uploadResume } from '../../action/CandidateAction'
import Pic from "../../assets/images/profilePic/secondary.jfif"
import Modal from 'react-modal';
import ProfilePicture from './profilePicture';
import moment from 'moment'
import VerifyEmailMobile from './VerifyEmailMobile'
import swal from 'sweetalert'
import { formatPhoneNumberIntl } from 'react-phone-number-input'
// import { ResumeContext } from '../../MyProvider'

export default class editProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: 'Resume',
            detail: getStorage(constant.keys.cd),
            isResumeHeadLine: false,
            isProfileSummary: false,
            candidateDetail: {},
            isListEmployement: false,
            isItSkills: false,
            isEducation: false,
            isProjects: false,
            isWorkSample: false,
            isOnlineProfile: false,
            isCertificate: false,
            isResumeAvailable: false,
            getFile: undefined,
            openModal: false,
            isCareerProfile: false,
            isPersonalDetail: false,
            resumeDetail: undefined,
            file: {}
        }
    }
    // static contextType = ResumeContext;

    showSection = (section) => {
        this.setState({ section: section })
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
        this.getCertificateLists()
        this.getOnlineProfileLists()
        this.getWorkSampleLists()
        this.getPersonalDetail()
        this.getResume()
        this.onGetFileChange()
        this.getCareerProfile()
    }

    getResume = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        GetResume({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.RESUME_FILE) {
                this.setState({
                    isResumeAvailable: true,
                    resumeDetail: (res.result)
                })
            } else {
                this.setState({
                    isResumeAvailable: false
                })
            }
        });
    }
    getPersonalDetail = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        GetPersonalDetail({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result) {
                this.setState({
                    isPersonalDetail: true
                })
            } else {
                this.setState({
                    isPersonalDetail: false
                })
            }
        });
    }

    getCertificateLists = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        GetCertifications({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({
                    isCertificate: true
                })
            } else {
                this.setState({
                    isCertificate: false
                })
            }
        });
    }

    getOnlineProfileLists = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        getOnlineProfileList({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({
                    isOnlineProfile: true
                })
            } else {
                this.setState({
                    isOnlineProfile: false
                })
            }
        });
    }

    getWorkSampleLists = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        GetWorkSample({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({
                    isWorkSample: true
                })
            } else {
                this.setState({
                    isWorkSample: false
                })
            }
        });
    }


    getResumeHeadLine = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        getResumeHeadLine({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.RESUME_HEADLINE) {
                this.setState({
                    isResumeHeadLine: true
                })
            } else {
                this.setState({
                    isResumeHeadLine: false
                })
            }
        });
    }

    getProfileSummary = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        getProfileSummary({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.PROFILE_SUMMARY) {
                this.setState({
                    isProfileSummary: true
                })
            } else {
                this.setState({
                    isProfileSummary: false
                })
            }
        });
    }

    getCandidateDetail = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        getCandidateDetail({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
                this.setState({
                    candidateDetail: res.result
                })
            }
        });
    }

    getCandidateKeySkillsList = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        keySkillsList({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({
                    isKeySkillsDetail: true
                })
            } else {
                this.setState({
                    isKeySkillsDetail: false
                })
            }
        });
    }

    getEmploymentDetails = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        ListEmployment({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({
                    isListEmployement: true
                })
            } else {
                this.setState({
                    isListEmployement: false
                })
            }
        });
    }

    getCandidateITSkillsList = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        getITSkills({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({
                    isItSkills: true
                })
            } else {
                this.setState({
                    isItSkills: false
                })
            }
        });
    }

    getCandidateEducationList = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        listEducationCandidate({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({
                    isEducation: true
                })
            } else {
                this.setState({
                    isEducation: false
                })
            }
        });
    }

    getCandidateProjectsLists = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        listProjectCandidate({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status && res.result && res.result.length > 0) {
                this.setState({
                    isProjects: true
                })
            } else {
                this.setState({
                    isProjects: false
                })
            }
        });
    }

    getCareerProfile = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        GetCareerProfile({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
           
            if (res.status && res.result ) {
                this.setState({
                    isCareerProfile:res.result
                })
            } else {
                this.setState({
                    isCareerProfile: false
                })
            }
        });
    }

    onGetFileChange = () => {
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ''
        getProfilePic({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            this.setState({ getFile: res.result })
        })
    }
    onCloseModal = () => {
        this.setState({ openModal: false })
        this.onGetFileChange()
    }
    onOpenModal = () => {
        this.setState({ openModal: true })
    }

    validateForm = (model) => {
        let data = model
        let error = {}
        let isValid = true
        if (data["file"] && data["file"].name) { }
        else {
            swal({
                icon: "error",
                text: "Please select file",
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
            isValid = false
        }

        this.setState({
            error: error
        })

        return isValid
    }

    onChangeFile = (e) => {
        e.preventDefault();
        var file = e.target.files[0];
        if (file) {
            this.setState({ file });
        }
        this.uploadResume(file)
    }

    uploadResume = (file) => {
       
        const { CANDIDATE_ID } = this.state.detail
        // const {file}=this.state
        const formData = new FormData();
        formData.append('CANDIDATE_ID', CANDIDATE_ID);
        formData.append('RESUME_FILE', file);
        let model = {
            file: file
        }
        let status = this.validateForm(model)
        if (status) {
            uploadResume(formData).then((res) => {
                if (res.status) {
                    swal({
                        icon: "success",
                        text: res.messageCode,
                        timer: 2000,
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
                    this.getResume()
                    // this.props.history.push(constant.component.editProfile.url)
                } else {
                    swal({
                        icon: "error",
                        text: "Something went wrong!!",
                        timer: 2000,
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
                }
            });
        }
    }
    render() {
        const { section, candidateDetail, getFile, resumeDetail } = this.state
        const { CANDIDATE_ID } = this.state.detail
        const profilePreviewURL = candidateDetail.CANDIDATE_NAME ? candidateDetail.CANDIDATE_NAME.toLowerCase().replace(" ", "-").split(" ").join("-") : ""
        return (
            <React.Fragment>
                <main id="rg-main" className="rg-main rg-haslayout pt-0">
                    <div className="rg-sectionspace rg-haslayout pt-0">
                        <VerifyEmailMobile getCandidateDetail={this.getCandidateDetail} />
                        <div className="rozgar-editprofileimgarea">
                            <div className="container">
                                <div className="row">
                                    <div className='col-md-2'>
                                        <div className='profilepic' style={{ cursor: "pointer" }}
                                        >
                                            {getFile != undefined && getFile.PROFILE_IMAGE ?
                                                <img src={`${process.env.REACT_APP_BASE_URL}/candidate/pic/${CANDIDATE_ID}/${getFile.PROFILE_IMAGE}`} /> :
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
                                            {candidateDetail.ProfileWeigh > 60 ? <p className='pt-2 pb-0'>Profile Strength ({candidateDetail.ProfileWeigh}% Completed)</p> : <p className='pt-2 pb-0'>Profile Strength <span style={{ fontWeight: "500" }}>  (Critical Fields Missing)  </span> <div style={{ display: "contents" }}>{candidateDetail.ProfileWeigh}% </div>  </p>}

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
                                            {/* <a href="javascript:void(0)">Update Profile</a> */}

                                            <div className='awardbtnbox'>
                                                <i class="fa fa-trophy" aria-hidden="true"></i>
                                                <span className='nubtext'>
                                                    <small>{candidateDetail.reward_points}</small> Rewards
                                                </span>
                                                <span className='use-reward'>Use Reward Points</span>
                                            </div>
                                        </div>
                                        <div className='profilepreview'>
                                            {candidateDetail.CANDIDATE_NAME?
                                            <Link to={constant.component.profilePreview.url.replace(':URL', profilePreviewURL)}>Profile Preview</Link>:<Link to={constant.component.profilePreviews.url}>Profile Preview</Link>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rozgar-profile-main-content pt-4'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div className='profileside'>
                                            <aside>
                                                <div className='resumearea'>
                                                    <img src={'./assets/images/resumepicpro.jpg'} />
                                                    <div className='resumeuploadbox'>
                                                        <h4>Resume</h4>
                                                        <p> Last Updated {resumeDetail ? moment(this.state.resumeDetail.RESUME_UPDATE_TIME).format('MMM Do YY') : ''}</p>
                                                        {/* <a */}
                                                            {/* //  target='_blank'
                                                            href="javascript:void(0)" className='btnupload'> */}
                                                            {/* <input type="file" name="file" id="upload"  
                                                        accept=".doc,.docx,.pdf"
                                                         hidden
                                                         onChange={(e)=>this.onChangeFile(e)} 
                                                         /> */}
                                                            {/* <label htmlFor="upload" style={{ color: 'white', fontSize: '0.8em' }}   >Upload</label> */}
                                                        {/* </a> */}
                                                    </div>
                                                </div>
                                                <nav >
                                                    <ul>
                                                        <a onClick={() => { this.showSection('Resume') }}><li className={section === 'Resume' && 'active'}><div style={{ width: '80%' }}><i class="ti-file"></i> Resume </div><div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isResumeAvailable ? 'UPDATE' : 'ADD'}</div></li></a>
                                                        <a onClick={() => { this.showSection('Resume_Headline') }}><li className={section === 'Resume_Headline' && 'active'}><div style={{ width: '80%' }}><i class="lnr lnr-license"></i> Resume Headline</div><div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isResumeHeadLine ? 'UPDATE' : 'ADD'}</div></li></a>
                                                        <a onClick={() => { this.showSection('KeySkills') }}><li className={section === 'KeySkills' && 'active'}><div style={{ width: '80%' }}><i class="lnr lnr-star"></i> Key Skills</div> <div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isKeySkillsDetail ? 'UPDATE' : 'ADD'}</div></li></a>
                                                        <a onClick={() => { this.showSection('Employment') }}><li className={section === 'Employment' && 'active'}> <div style={{ width: '80%' }}><i class="lnr lnr-briefcase"></i> Employment</div> <div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isListEmployement ? 'UPDATE' : 'ADD'}</div></li></a>
                                                        <a onClick={() => { this.showSection('Education') }}><li className={section === 'Education' && 'active'}><div style={{ width: '80%' }}> <i class="lnr lnr-graduation-hat"></i> Education</div> <div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isEducation ? 'UPDATE' : 'ADD'}</div></li></a>
                                                        <a onClick={() => { this.showSection('ItSkills') }}><li className={section === 'ItSkills' && 'active'}><div style={{ width: '80%' }}><i class="lnr lnr-star"></i> IT Skills </div><div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isItSkills ? 'UPDATE' : 'ADD'}</div></li></a>
                                                        <a onClick={() => { this.showSection('Projects') }}><li className={section === 'Projects' && 'active'}><div style={{ width: '80%' }}><em class="lnr lnr-apartment"></em> Projects</div> <div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isProjects ? 'UPDATE' : 'ADD'}</div></li></a>
                                                        <a onClick={() => { this.showSection('ProfileSummary') }}><li className={section === 'ProfileSummary' && 'active'}><div style={{ width: '80%' }}><em class="lnr lnr-apartment"></em> Profile Summary</div> <div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isProfileSummary ? 'UPDATE' : 'ADD'}</div></li></a>
                                                        <a onClick={() => { this.showSection('Accomplishments') }}><li className={section === 'Accomplishments' && 'active'}><div style={{ width: '80%' }}><i class="lnr lnr-layers"></i> Accomplishments</div> <div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isCertificate || this.state.isWorkSample || this.state.isOnlineProfile ? 'UPDATE' : 'ADD'}</div></li></a>
                                                        <a onClick={() => { this.showSection('CareerProfile') }}><li className={section === 'CareerProfile' && 'active'}><div style={{ width: '80%' }}><i className='lnr lnr-highlight'></i> Career Profile </div><div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isCareerProfile.INDUSTRY==null ? 'ADD' : 'UPDATE'}</div></li></a>
                                                        <a onClick={() => { this.showSection('PersonalDetails') }}><li className={section === 'PersonalDetails' && 'active'}><div style={{ width: '80%' }}><i className='lnr lnr-user'></i> Personal Details</div> <div style={{ color: '#008AB2', fontSize: '12px' }} >{this.state.isPersonalDetail ? 'UPDATE' : 'ADD'}</div></li></a>
                                                    </ul>
                                                </nav>
                                            </aside>
                                        </div>
                                        <div class="rg-adds rg-jobsearchadd mb-20 mt-20">
                                            <a href="javascript:void(0);" title="">
                                                <figure>
                                                    <img style={{ width: "100%" }} src="./assets/images/adds-05.jpg" alt="img description" />
                                                </figure>
                                            </a>
                                            <span>Ad</span>
                                        </div>
                                    </div>
                                    <div className='col-md-9'>
                                        {section === 'Resume' && < ResumeFile resumeDetails={this.state.resumeDetail} getResume={this.getResume} getCandidateDetail={this.getCandidateDetail} />}
                                        {section === 'Resume_Headline' && < ResumeHeadline getResumeHeadLine={this.getResumeHeadLine} getCandidateDetail={this.getCandidateDetail} />}
                                        {section === 'KeySkills' && < KeySkills getCandidateKeySkillsList={this.getCandidateKeySkillsList} getCandidateDetail={this.getCandidateDetail} />}
                                        {section === 'Employment' && < Employment getEmploymentDetails={this.getEmploymentDetails} getCandidateDetail={this.getCandidateDetail} />}
                                        {section === 'Education' && < Education getCandidateEducationList={this.getCandidateEducationList} getCandidateDetail={this.getCandidateDetail} />}
                                        {section === 'ItSkills' && < ItSkills getCandidateITSkillsList={this.getCandidateITSkillsList} getCandidateDetail={this.getCandidateDetail} />}
                                        {section === 'Projects' && < Projects getCandidateProjectsLists={this.getCandidateProjectsLists} getCandidateDetail={this.getCandidateDetail} />}
                                        {section === 'ProfileSummary' && < ProfileSummary getProfileSummary={this.getProfileSummary} getCandidateDetail={this.getCandidateDetail} />}
                                        {section === 'Accomplishments' && < Accomplishments getCertificateLists={this.getCertificateLists} getOnlineProfileLists={this.getOnlineProfileLists} getWorkSampleLists={this.getWorkSampleLists} getCandidateDetail={this.getCandidateDetail} />}
                                        {section === 'CareerProfile' && < CareerProfile getCareerProfile={this.getCareerProfile} getCandidateDetail={this.getCandidateDetail} />}
                                        {section === 'PersonalDetails' && < PersonalDetails getPersonalDetail={this.getPersonalDetail} getCandidateDetail={this.getCandidateDetail} />}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Modal
                                isOpen={this.state.openModal}
                                style={{ content: { top: "20%", left: '20%', right: 'auto', bottom: 'auto' }, overlay: { backgroundColor: 'rgba(15,29,45,0.70)' } }}
                                onRequestClose={this.onCloseModal}
                            >
                                <ProfilePicture closeModal={this.onCloseModal} />
                            </Modal>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
