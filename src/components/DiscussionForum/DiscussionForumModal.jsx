import React, { Component } from 'react'
import swal from 'sweetalert'
import { deleteProfilePic, getProfilePic, uploadProfilePic } from '../../action/CandidateAction'
import constant from '../../constant'
import { getStorage } from '../../utils'
import Pic from "../../assets/images/profilePic/secondary.jfif"
import { border } from '@mui/system'
import { qaCommentReplyByCommentId, QACreateThread, qaDiscussionForumCategory, QAsendThreadCommentReply } from '../../action/discussionFormAction'
import Parser from 'html-react-parser';
export default class discussionForumModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detail: getStorage(constant.keys.cd),
            file: {},
            fileChange: undefined,
            getFile: undefined,
            categoryDropdown: undefined,
            categoryId: undefined,
            message: undefined,
            title: undefined,
            commentReply: undefined,
            commentReplyById: undefined,
            check: false,
        }
    }
    componentDidMount() {
        console.log("props", this.props);
    }
    ThreadCommentReply = (model) => {
        QAsendThreadCommentReply(model).then((res) => {
            this.setState({ commentReply: res.result })
            if (res.result) {
                swal({
                    icon: "success",
                    text: "Success: Reply Sent.",
                    timer: 2000,
                    showCancelButton: false,
                    showConfirmButton: false,
                })
                this.closeModalWindow()
            }
        }).catch((err) => {
            alert(err)
        })
    }

    onSubmit = () => {
        this.setState({ check: true })
        const ThreadCommentReply = JSON.parse(sessionStorage.getItem("ThreadCommentReply"))
        const { title, message, categoryId, reply } = this.state
        const { CANDIDATE_ID } = this.state.detail ? this.state.detail : ""
        const { TITLE, COMMENT, COMMENT_ID, THREAD_ID } = this.props

        const { COMMENT_REPLY_ID } = this.props
        if (message && COMMENT_REPLY_ID != 0) {
            if (CANDIDATE_ID) {
                const st = {
                    COMMENT: message,
                    COMMENT_ID: COMMENT_ID,
                    CANDIDATE_ID: CANDIDATE_ID,
                    THREAD_ID: THREAD_ID,
                    COMMENT_REPLY_ID:COMMENT_REPLY_ID
                }
                this.ThreadCommentReply(st)
            }
            else {
                const st = {
                    COMMENT: message,
                    COMMENT_ID: COMMENT_ID,
                    CANDIDATE_ID: CANDIDATE_ID,
                    THREAD_ID: THREAD_ID,
                    COMMENT_REPLY_ID:COMMENT_REPLY_ID
                }
                sessionStorage.setItem("ThreadCommentReply", JSON.stringify(st))
                this.props.history.push(constant.component.discussionForumSignIn.url)
            }
        }
        else if (message) {
            if (CANDIDATE_ID) {
                const st = {
                    COMMENT: message,
                    COMMENT_ID: COMMENT_ID,
                    CANDIDATE_ID: CANDIDATE_ID,
                    THREAD_ID: THREAD_ID
                }
                this.ThreadCommentReply(st)
            }
        }
    }
    closeModalWindow = () => {
        this.props.closeModal()
    }
    onDropdownClick = (id) => {
        this.setState({ categoryId: id })
    }
    render() {
        const { categoryDropdown, title, message, check } = this.state;
        const { TITLE, COMMENT } = this.props
        return (
            <React.Fragment>
                <p style={{ float: 'right', fontSize: '1.4em', color: 'grey', cursor: 'pointer', fontWeight: 'bold' }} onClick={this.closeModalWindow}>X</p>
                <div className='' style={{ margin: '2em', color: '#666', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: '500', fontSize: '20px', color: '#666', textTransform: 'capitalize', width: '22.5em' }}>
                            {TITLE.THREAD_TITLE?.length > 64 ? Parser(TITLE.THREAD_TITLE.slice(0, 64)) + '...' : Parser(TITLE.THREAD_TITLE)}
                        </p>

                        <div className='form-group' style={{ display: 'flex', flexDirection: 'column' }}>
                            <p style={{ width: '33em', textTransform: 'capitalize' }}>
                                {COMMENT?.length > 74 ? Parser(COMMENT.slice(0, 74)) + '...' : Parser(COMMENT)}
                            </p>
                            <textarea type="text" placeholder='Reply' className='mb-2 form-control' style={{ padding: '4px 10px', height: '9em' }} value={message ? message : ''} onChange={(e) => this.setState({ message: e.target.value.trimStart(), check: false })} />
                            {!message && check && <span style={{ color: 'red' }}>Comment Reply Cannot be Empty</span>}
                        </div>
                        <div>
                            <button className='rg-onButtonHover' style={{ display: 'flex', justifyContent: 'center', width: '6em' }} onClick={this.onSubmit}>
                                Reply
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

