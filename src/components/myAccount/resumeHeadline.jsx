import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditResumeHeadlineModal from './EditResumeHeadlineModal';
import ModalWindow from '../common/ModalWindow'
import { getStorage } from '../../utils';
import constant from '../../constant';
import { addUpdateResumeHeadLine, getResumeHeadLine } from '../../action/CandidateAction';
import swal from 'sweetalert';
import noSearchFound from '../../../src/assets/images/no-results.png'
export default class employment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            detail: getStorage(constant.keys.cd),
            resumeHeadLine: '',
            error: {}

        }
    }

    componentDidMount() {
        this.getResumeHeadLine()
    }

    getResumeHeadLine = () => {
        const { CANDIDATE_ID } = this.state.detail
        getResumeHeadLine({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
                this.setState({
                    resumeHeadLine: res.result.RESUME_HEADLINE
                })
            }
        });
    }

    validateForm = (model) => {
        let data = model
        let error = {}
        let isValid = true

        if (!data["resumeHeadLine"]) {
            error["resumeHeadLine"] = "Resume Headline cannot be empty"
            isValid = false
        }

        this.setState({
            error: error
        })

        return isValid
    }

    AddUpdateResumeHeadLine = (model) => {
        const { CANDIDATE_ID } = this.state.detail

        let status = this.validateForm(model)
        if (status) {
            addUpdateResumeHeadLine({ CANDIDATE_ID: CANDIDATE_ID, ResumeHeadline: model.resumeHeadLine }).then((res) => {
                if (res.status) {
                    swal({
                        icon: "success",
                        text: res.messageCode,
                        timer: 2000,
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
                    this.onhideModal()
                    this.getResumeHeadLine()
                    this.props.getResumeHeadLine()
                    this.props.getCandidateDetail()
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

    onShowModal = () => {
        const st = this.state
        this.setState({ showModal: true })
    }

    onhideModal = () => {
        this.setState({ showModal: false, error: {} })
    }

    render() {
        const { showModal, resumeHeadLine } = this.state
        return (
            <React.Fragment>
                <div className='edprofilerightside'>
                    <div className='edprojobtext'>Resume Headline <Link className='pofileupdatetext' onClick={() => { this.onShowModal() }}>{this.state.resumeHeadLine && this.state.resumeHeadLine.length > 0 ? 'EDIT RESUME HEADLINE' : 'ADD RESUME HEADLINE'}</Link></div>
                    <div className='edprofilerightsideinner bb-01'>
                        <div className='pro-job-details'>

                            <div className='grid03'>
                                {resumeHeadLine != null ?
                                    <p>{resumeHeadLine}</p> : <div>
                                        <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                        <h6 className='text-center text-danger'>No Resume Headline Added</h6>
                                        <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} onClick={() => { this.onShowModal() }} > Please Add Resume Headline  <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
                {showModal && <ModalWindow
                    title="Resume Headline"
                    backdrop="static"
                    toggleModal={this.onhideModal}>
                    <EditResumeHeadlineModal
                        error={this.state.error}
                        onSubmit={this.AddUpdateResumeHeadLine}
                        onCancel={this.onhideModal}
                        headline={this.state.resumeHeadLine}
                    />
                </ModalWindow>}
            </React.Fragment>
        )
    }
}
