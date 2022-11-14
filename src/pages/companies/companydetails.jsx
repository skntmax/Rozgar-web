import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { companyDetail, FollowCompany, isFollowedByMe } from '../../action/companyAction';
import { topCompanyImages } from '../../action/dashboard';
import Companydetail from '../../components/companies/companydetails'
import constant from '../../constant';
import { capFirstLetterInSentence, getStorage } from '../../utils';
import Swiggy from './Swiggy/Swiggy'
export default class Companydetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: undefined,
            jobs: undefined,
            TOP_COMPANY_IMAGES: undefined,
            isFollowedByMe: false
        }
    }
    componentDidMount() {

        document.title = constant.title.Companydetails
        window.scrollTo(0, 0)
        const tk = getStorage(constant.keys.ctoken)



        companyDetail(this.props.match.params.url).then(res => {
            if (res.status) {
                this.setState({ detail: res.result.detail, jobs: res.result.jobs })
                if (tk) {
                    isFollowedByMe({ EMPLOYER_ID: res.result.detail.EMPLOYER_ID }).then(response => {
                        if (response.status) {
                            this.setState({ isFollowedByMe: response.result })
                        }
                    })
                }
            }
            else {
                this.props.history.push(constant.component.homepage.url)
            }
        })

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
    follow = (EMPLOYER_ID) => {
        const tk = getStorage(constant.keys.ctoken)
        FollowCompany({ EMPLOYER_ID: EMPLOYER_ID }).then(res => {
            if (res.status) {
                companyDetail(this.props.match.params.url).then(res => {
                    console.log(res.result,"resultjob");
                    if (res.status) {
                        this.setState({ detail: res.result.detail, jobs: res.result.jobs })
                        if (tk) {
                            isFollowedByMe({ EMPLOYER_ID: res.result.detail.EMPLOYER_ID }).then(response => {
                                if (response.status) {
                                    this.setState({ isFollowedByMe: response.result })
                                }
                            })
                        }
                    }
                    else {
                        alert(res.error);
                    }
                })
            }
        })
    }
    render() {
        const { detail, jobs, TOP_COMPANY_IMAGES, isFollowedByMe } = this.state
        const url = this.props.match.params.url;
        return (
            <React.Fragment>
                <Helmet>
                    <title title={document.title = constant.title.Companydetails + " Overview  – Jobs, Work Culture - Rozgar.com"}></title>
                    <meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " -Overview – Know more about job opportunities, employee feedback and Ratings, work culture, immediate hirings etc at Rozgar.com."} />
                    <link rel="canonical" href={window.location.href} />
                    <meta name="atdlayout" content="jobsearch" />
                    <meta name="robots" content="ALL" />
                    <meta name="classification" content="Jobs &amp; Career Opportunities: Job Posting, Job Search, Apply Jobs, Career Explorer, Free CV" />
                    <meta name="pragma" content="no-cache" />
                    <meta name="rating" content="general" />
                    <meta name="revisit-after" content="1 day" />
                    <meta name="distribution" content="GLOBAL" />
                    <meta name="resource-type" content="document" />
                    <meta name="author" content="www.rozgar.com" />
                    <meta name="content-language" content="EN" />
                    <meta name="copyright" content="2022 Rozgar.com" />

                    <meta property="fb:app_id" content="2077422969016028" />
                    <meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:site_name" content="Rozgar.com" />
                    <meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " -Overview – Know more about job opportunities, employee feedback and Ratings, work culture, immediate hirings etc at Rozgar.com."} />
                    <meta property="og:title" content={document.title + " Overview – Jobs, Work Culture - Rozgar.com"} />

                </Helmet>
                {url.split('-')[url.split('-').length - 1] == 16264 ?
                    <Swiggy /> :

                    <Companydetail
                        detail={detail}
                        isFollowedByMe={isFollowedByMe}
                        jobs={jobs}
                        follow={this.follow}
                        TOP_COMPANY_IMAGES={TOP_COMPANY_IMAGES}
                    />
                }

            </React.Fragment>
        )
    }
}
