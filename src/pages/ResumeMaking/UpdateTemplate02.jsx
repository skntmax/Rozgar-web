import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import swal from 'sweetalert'
import { getResumeData, UpdateResume } from '../../action/CandidateAction'
import ResumeForm from '../../components/ResumeMaking/ResumeViewOne/ResumeForm'
import TemplateEdit02 from '../../components/ResumeMaking/TemplateEdit02'
import constant from '../../constant'
import { capFirstLetterInSentence, getStorage } from '../../utils'
import resume03 from '../../assets/img/demos/demo-view-3.png';

export default class UpdateTemplate02 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showShimmer: false,
            showLoader: false,
            detail: undefined,
            candidateID: getStorage(constant.keys.cd) ? getStorage(constant.keys.cd) : '',
        }
    }

    componentDidMount() {
        // document.title = constant.title.TemplateUpdate03
        const CANDIDATEID = this.state.candidateID.CANDIDATE_ID
        this.ResumeDetail(CANDIDATEID)
    }

    ResumeDetail = (CANDIDATEID) => {
        this.setState({ showShimmer: true })
        getResumeData(CANDIDATEID).then((res) => {
            this.setState({ showShimmer: false })
            if (res.status) {
                this.setState({ showShimmer: false })
                this.setState({ detail: res.result })
            }
        }).catch((err) => {
            alert(err)
        })
    }

    updateResumeMaking = (model) => {
        this.setState({ showLoader: true })
        UpdateResume(model).then((res) => {
            this.setState({ showLoader: false })
            if (res.status) {
                this.setState({ showLoader: false })
                swal({
                    icon: 'success',
                    text: 'Resume updated successfully',
                    timer: 3000,

                })
                this.props.history.push(constant.component.ResumeViewThree.url)
            }
            else {
                this.setState({ showLoader: false })
                swal({
                    icon: 'error',
                    text: res.error,
                    timer: 2000,
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <React.Fragment>
                <Helmet >


                    <title title={" Create Free CV - " + capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "-Rozgar.com"}>{" Create Free CV - " + capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "-Rozgar.com"}</title>
                    <meta name="HandheldFriendly" content="True" />
                    <meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " Create a CV in Minutes, Free CV Builder, Free CV Templates, Free Online CV Generator, Create Free Resume Online, Rozgar CV"}></meta>
                    <meta name="description" content={" Create your Free CV Online - Use " + capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "for Free Online CV maker, allows you to create a perfect Resume in less than 5 minutes. See how easy it is to write a professional resume. Focus on building a career, not your CV. Create CV now!"} />
                    <link rel="canonical" href={window.location.href} />
                    <meta name="referrer" content="no-referrer-when-downgrade" />

                    {/* og meta tag */}
                    <meta property="og:site_name" content="Rozgar.com" />
                    <meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
                    <meta property="og:description" content={" Create your Free CV Online - Use " + capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "for Free Online CV maker, allows you to create a perfect Resume in less than 5 minutes. See how easy it is to write a professional resume. Focus on building a career, not your CV. Create CV now!"} />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
                    <meta property="og:image:width" content="4000" />
                    <meta property="og:image:height" content="6000" />

                    {/* Twitter Meta Tag */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
                    <meta name="twitter:description" content={" Create your Free CV Online - Use " + capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "for Free Online CV maker, allows you to create a perfect Resume in less than 5 minutes. See how easy it is to write a professional resume. Focus on building a career, not your CV. Create CV now!"} />
                    <meta name="twitter:url" content={window.location.href} />
                    <meta name="twitter:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
                    <meta name="twitter:label1" content="Written by" />
                    <meta name="twitter:data1" content="Smita Nag" />
                    <meta name="twitter:label2" content="Filed under" />
                    <meta name="twitter:data2" content="Career Advice, Career Insights" />
                    <meta name="twitter:site" content="@rozgar_india" />

                </Helmet>
                <section className="blog-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <div className="cv-prev">
                                    <div className="blog_thumbnail">
                                        <img src={resume03} className="temp-img" alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-md-7">
                                <div className="container">
                                    {this.state.detail && <ResumeForm
                                        details={this.state.detail}
                                        onSubmit={(model) => this.updateResumeMaking(model)}
                                        showLoader={this.state.showLoader}
                                        showShimmer={this.state.showShimmer}
                                    />}
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

            </React.Fragment>
        )
    }
}
