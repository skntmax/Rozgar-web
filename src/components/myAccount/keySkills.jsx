import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditKeySkillsModel from './EditKeySkillsModel';
import ModalWindow from '../common/ModalWindow'
import { addKeySkills, deleteKeySkills, keySkillsList } from '../../action/CandidateAction';
import swal from 'sweetalert';
import { getStorage } from '../../utils';
import constant from '../../constant';
import noSearchFound from '../../../src/assets/images/no-results.png'
export default class keySkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            detail: getStorage(constant.keys.cd),
            selectedSkills: [],
            error: {},
        }
    }

    componentDidMount() {
        this.getCandidateKeySkillsList()
    }

    getCandidateKeySkillsList = () => {
        const { CANDIDATE_ID } = this.state.detail
        keySkillsList({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
                let d = res.result && res.result.map((data, index) => {
                    return {
                        SKILL_ID: data.SKILL_ID,
                        SKILL: data.SKILL,
                        label: data.SKILL
                    }
                })
                this.setState({
                    selectedSkills: d
                })
            }
        });
    }

    validateForm = (skills) => {
        
        // let data = this.state
        let data = skills
        let error = {}
        let isValid = true

        // if (!data["selectedSkills"]) {
        //     error["selectedSkills"] = "Please select skills"
        //     isValid = false
        // }
        if(!data[0] && this.state.selectedSkills.length==0 ){
            error["selectedSkills"] = "Please select skills"
            isValid = false
        }

        this.setState({
            error: error
        })

        return isValid
    }
    AddUpdateKeySkills = (skills) => {
        const { CANDIDATE_ID } = this.state.detail
        const { selectedSkills } = this.state
        let status = this.validateForm(skills)
        if (status) {
            addKeySkills({ CANDIDATE_ID: CANDIDATE_ID, Skills: skills }).then((res) => {
                if (res.status) {
                    swal({
                        icon: "success",
                        text: res.messageCode,
                        timer: 2000,
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
                    this.onhideModal()
                    this.getCandidateKeySkillsList()
                    this.props.getCandidateKeySkillsList()
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

    removeSkills = (data, e) => {
        const { CANDIDATE_ID } = this.state.detail
        deleteKeySkills({ CANDIDATE_ID: CANDIDATE_ID, SKILL_ID: data.SKILL_ID }).then((res) => {
            if (res.status) {
                this.getCandidateKeySkillsList()
                this.props.getCandidateKeySkillsList()
                this.props.getCandidateDetail()

            }
        })
    }

    onShowModal = () => {
        const st = this.state
        this.setState({ showModal: true })
    }


    onhideModal = () => {
        this.setState({ showModal: false ,error:{}})
    }
    render() {
        const { showModal, selectedSkills } = this.state
        console.log("data",this.state.error);
        return (
            <React.Fragment>
                <div className='edprofilerightside'>
                    <div className='edprojobtext'>Key Skills <Link className='pofileupdatetext' onClick={() => { this.onShowModal() }}>ADD KEY SKILLS</Link></div>
                    <div className='edprofilerightsideinner bb-01'>
                        <div className='pro-job-details'>
                            <div className='grid03'>
                                {
                                    selectedSkills && selectedSkills.length > 0 ? selectedSkills.map((data, index) => {
                                        return <span className='key-skills-box'>{data.SKILL} <i class="fa fa-times" onClick={(e) => { this.removeSkills(data, e) }} aria-hidden="true"></i>
                                        </span>
                                    }) : <div>
                                        <img src={noSearchFound} style={{ display: "block", margin: "0 auto" }} />
                                        <h6 className='text-center text-danger'>No Key Skills Added</h6>
                                        <p style={{ textAlign: "center" }}> <Link style={{ color: "#222222", textDecoration: "none", background: "#ffdede", display: "inline-block", borderRadius: "4px", fontSize: "13px", marginTop: "10px", padding: "6px 20px", marginLeft: "12px" }} onClick={() => { this.onShowModal() }} > Please Add Key Skill  <i style={{ marginLeft: '4px' }} className="fa fa-plus"></i></Link></p>
                                    </div>
                                }

                            </div>

                        </div>
                    </div>
                </div>

                {showModal && <ModalWindow
                    title="Key Skills"
                    backdrop="static"
                    toggleModal={this.onhideModal}>
                    <EditKeySkillsModel
                        error={this.state.error}
                        onSubmit={this.AddUpdateKeySkills}
                        onCancel={this.onhideModal}
                        skills={this.state.selectedSkills}
                    />
                </ModalWindow>}
            </React.Fragment>
        )
    }
}
