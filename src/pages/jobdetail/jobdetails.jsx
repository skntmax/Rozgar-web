import React, { Component } from 'react'
import swal from 'sweetalert';
import { applyJobs, topCompanyImages } from '../../action/dashboard';
import { jobDetail, similarJobs } from '../../action/jobDetail';
import Jobdetails from '../../components/joblist/jobdetails'
import constant from '../../constant';
import { capFirstLetterInSentence, getStorage, setsessionStorage, setStorage } from '../../utils';
import Modal from 'react-modal';
import SignInForApplyJobs from '../signin/SignInForApplyJobs';
import { getSaveJobList, SaveJobs } from '../../action/CandidateAction';
import SignInForSaveUnsave from '../signin/SignInForSaveUnsave';
import { withRouter } from 'react-router-dom';
import { MetaTags } from 'react-meta-tags';
import { Helmet } from 'react-helmet';
class jobdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: undefined,
            cities: undefined,
            TOP_COMPANY_IMAGES: [],
            companyDetail: null,
            similarJobList: [],
            detail1: getStorage(constant.keys.cd),
            openModal: false,
            leftBar: false,
            list: [],
            totalCount: 0,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.getJobDetails()
        this.getSaveJobLists()
        topCompanyImages().then(res => {
            if (res.status) {
                this.setState({ TOP_COMPANY_IMAGES: res.result.images })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })

    }

    getSaveJobLists = () => {
        const { CANDIDATE_ID } = this.state.detail1 ? this.state.detail1 : ''
        getSaveJobList({ CANDIDATE_ID: CANDIDATE_ID }).then((res) => {
            if (res.status) {
            }
            this.setState({ totalCount: res.result.count })
            this.setState({ list: res.result.list })
        }).catch((err) => {
            console.log(err)
        })
    }

    getJobDetails = () => {
        jobDetail({ URL: this.props.match.params.url, QUERY: this.props.location.search }).then(res => {
            if (res.status) {
                this.setState({ detail: res.result.detail, cities: res.result.cities, companyDetail: res.result.companyDetail })
                document.title = res.result.detail.JOB_TITLE + '- Rozgar.com'
                similarJobs(res.result.detail.KEYWORDS).then(res => {
                    this.setState({ similarJobList: res.result.similarJobList })
                }).catch(err => {
                    console.log(err)
                })
            }
            else {
                this.props.history.push(constant.component.homepage.url)
            }
        }).catch(err => {
            alert(err)
        })
    }

    applyJobs = () => {
        const { CANDIDATE_ID } = this.state.detail1 ? this.state.detail1 : ''
        const { token } = this.state.detail1 ? this.state.detail1 : ''
        const { JOB_ID } = this.state.detail

        const model = {
            CANDIDATE_ID: CANDIDATE_ID,
            JOB_ID: JOB_ID
        }

        setsessionStorage(constant.keys.addAndUpdate, model)
        localStorage.setItem("JobUrl", `${this.props.history.location.pathname}${this.props.history.location.search}`)

        if (CANDIDATE_ID && token) {
            this.props.history.push(constant.component.recommendedJobs.url);
        } else {
            this.onOpenModal()
        }
    }

    onCloseModal = () => {
        this.setState({ openModal: false, leftBar: true })
    }

    onOpenModal = () => {
        this.setState({ openModal: true })
    }



    getSavedJobs = (model) => {
        SaveJobs(model).then((res) => {
            if (res.status) {
                this.getSaveJobLists()
            }
        }).catch((err) => {
            alert(err)
        })
    }

    render() {
        const { TOP_COMPANY_IMAGES, companyDetail, similarJobList } = this.state
        return (
            <React.Fragment>
<Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title> */}
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
                <Jobdetails
                    detail={this.state.detail}
                    cities={this.state.cities}
                    TOP_COMPANY_IMAGES={TOP_COMPANY_IMAGES}
                    companyDetail={companyDetail}
                    similarJobList={similarJobList}
                    ApplyJobs={this.applyJobs}
                    saveState={this.state.saveState}
                    getSavedJobs={this.getSavedJobs}
                    list={this.state.list}
                    props={this.props}
                />
                {
                    this.state.detail === null && <h1>Something Went Wrong</h1>
                }
                <Modal
                    isOpen={this.state.openModal}
                    style={{ content: { top: "5%", left: '30%', right: 'auto', bottom: 'auto' }, overlay: { backgroundColor: 'rgba(15,29,45,0.70)' } }}
                    onRequestClose={this.onCloseModal}
                >
                    <SignInForApplyJobs
                        leftBar={this.state.leftBar}
                        history={this.props.history}
                        onCloseModal={this.onCloseModal}
                    />
                </Modal>


            </React.Fragment>
        )
    }
}

export default withRouter(jobdetails)