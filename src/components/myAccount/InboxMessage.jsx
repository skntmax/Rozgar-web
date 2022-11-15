import React, { Component } from 'react'
import { CandidateMessage, CommunicationListByJob } from '../../action/CandidateAction'
import { CandidateToRecruiterMessage } from '../../action/CandidateAction'
import { capFirstLetterInSentence, clearForm, getStorage, onChange } from '../../utils'
import MessageById from './MessageById'
import { getMessage } from '../../action/CandidateAction'
import constant from '../../constant'
import { Helmet } from 'react-helmet'
export default class InboxMessage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: { name: 'message', value: "", error: "" },
            msgData: null,
            communicationList: undefined,
            updatedMsg: [],
            cd: getStorage(constant.keys.cd)
        }
    }

    onAddMessage = (action) => {

        if (action.type == "candidate_msg") {

            const { data } = action
            const { message } = data
            const { EMPLOYER_ID } = action.emp_data
            const { JOB_ID } = action.emp_data

            const model = {
                MESSAGE: message.value,
                USER_TYPE: "CANDIDATE",
                EMPLOYER_ID: EMPLOYER_ID,
                JOB_ID: JOB_ID
            }

            if (model.MESSAGE.length > 0) {

                CandidateToRecruiterMessage(model).then((res) => {
                    if (res.status) {

                        let model = {
                            EMPLOYER_ID: this.state.msgData.EMPLOYER_ID,
                            CANDIDATE_ID: this.state.cd.CANDIDATE_ID,
                            JOB_ID: this.state.msgData.JOB_ID
                        }

                        getMessage(model).then(res => {
                            if (res.status) {
                                this.setState({ updatedMsg: res.result })
                            }
                        }).catch(err => {
                            window.alert(err)
                        })

                    } else {
                        alert(res.error)
                    }
                })

            }

        }


        else {
            const { message } = this.state
            const model = {
                MESSAGE: message.value,
            }
            if (message.value.length > 0) {


                CandidateMessage(model).then((res) => {
                    if (res.status) {
                    }
                })
            }

        }


    }

    componentDidMount() {

        CommunicationListByJob({ CANDIDATE_ID: this.state.cd.CANDIDATE_ID, JOB_ID: this.props.JOB_ID }).then((res) => {
            if (res.status) {
                this.setState({ communicationList: res.result })
                res.result.length && this.getData(res.result[0])
            }
        })

    }





    getData(empData) {
        console.log("empData", empData);
        this.setState({ msgData: empData })


    }


    render() {
        console.log("communication list", this.state.communicationList);
        const { message, communicationList } = this.state
        return (
            <React.Fragment>
                <Helmet >


                    <title title={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}>{capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}</title>
                    <meta name="HandheldFriendly" content="True" />
                    <meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
                    <meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
                    <link rel="canonical" href={window.location.href} />
                    <meta name="referrer" content="no-referrer-when-downgrade" />

                    {/* og meta tag */}
                    <meta property="og:site_name" content="Rozgar.com" />
                    <meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
                    <meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
                    <meta property="og:image:width" content="4000" />
                    <meta property="og:image:height" content="6000" />

                    {/* Twitter Meta Tag */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
                    <meta name="twitter:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
                    <meta name="twitter:url" content={window.location.href} />
                    <meta name="twitter:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
                    <meta name="twitter:label1" content="Written by" />
                    <meta name="twitter:data1" content="Smita Nag" />
                    <meta name="twitter:label2" content="Filed under" />
                    <meta name="twitter:data2" content="Career Advice, Career Insights" />
                    <meta name="twitter:site" content="@rozgar_india" />

                </Helmet>
                <main id="rg-main" className="rg-main rg-haslayout pt-0">
                    <div className="rg-sectionspace rg-haslayout pt-0">
                        <div className="rozgar-profilesearch">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12">
                                        <div className='profile-performance-head'>
                                            <h2 className='chat-headtext'>Recruiter Communication</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className='pptopminushead'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='recruiter-messagebox'>
                                            <div className='recruiter-messagebox-head'>Message</div>
                                            <ul className='recruiter-messagebox-tabs'>

                                                {communicationList && communicationList.length > 0 ? communicationList.map((item, index) => {
                                                    return (
                                                        <li onClick={() => this.getData(item)}  >
                                                            <a className='active '  >
                                                                <div className='d-flex p-2'>
                                                                    <div className='persionimg'><img src={'./assets/images/no-avatar-pic.png'} /></div>
                                                                    <div className='chatpersion-name'>
                                                                        <h3>{item.COMPANY_NAME}</h3>
                                                                        <p>Company Recruiter at Company</p>
                                                                        <p>{item.JOB_TITLE}</p>
                                                                        <div className='d-flex justify-content-between'>
                                                                            <span className='chat-message-text'>Hi</span>
                                                                            <span className='chat-message-text'>6:20 pm</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                }) : <h5 className='text-danger' style={{ marginTop: "20px", marginLeft: "20px" }}>There is no recruiter message</h5>
                                                }


                                            </ul>
                                            <div className='py-4'></div>
                                        </div>
                                    </div>


                                    <MessageById updatedMsg={this.state.updatedMsg} data={this.state.msgData} onAddMessage={this.onAddMessage} />


                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
