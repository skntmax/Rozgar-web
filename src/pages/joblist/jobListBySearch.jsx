import React, { Component } from 'react'
import { topCompanyImages } from '../../action/dashboard';
import { isLocationUrl } from '../../action/jobDetail';
import { searchJobs } from '../../action/jobsByActions';
import queryString from 'query-string'
import Joblist from '../../components/joblist/listforsearch'
import constant from '../../constant';
import { capFirstLetterInSentence, capitalizeWords } from '../../utils';
import { MetaTags } from 'react-meta-tags';
import { Helmet } from 'react-helmet';
export default class joblist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            JOB_LIST: [],
            JOB_LOCATION: {},
            JOB_COUNT: undefined,
            CURRENT_PAGE: 1,
            aboutJobName: 'India',
            title: 'Rozgar.com'
            // isLocation: false,
            // CITIES: [],
            // TOP_COMPANY_IMAGES: []
        }

    }
    joblist = (page, data) => {
        this.setState({ JOB_LIST: [], JOB_COUNT: undefined })
        const q = '?' + document.location.href.split('?')[1]
        // const qParam = queryString.parse(this.props.location.search)
        const qParam = queryString.parse(q)
        // const qParam = queryString.parse(this.props.location.search)

        const model = {
            KEYWORD: qParam.keyword.split(','),
            LOC: qParam?.location ? qParam?.location?.split(',') : [],
            EXP: {
                MIN: qParam?.exp ? qParam?.exp?.split('-')[0] : undefined,
                MAX: qParam?.exp ? qParam?.exp?.split('-')[1] : undefined,
            },
            SAL: {
                MIN: qParam?.sal ? qParam?.sal?.split('-')[0] : undefined,
                MAX: qParam?.sal ? qParam?.sal?.split('-')[1] : undefined,
            },
            page: page
        }
        model.filter = data
        searchJobs(model).then((res) => {
            if (res.status) {
                this.setState({ JOB_LIST: res.result.list })
                this.setState({ JOB_COUNT: res.result.count })
            } else {
                alert(res.error)
            }

        }).catch(err => {
            alert(err)
        })
    }



    joblistforfilter = (page, data, url) => {
        this.setState({ JOB_LIST: [], JOB_COUNT: undefined })
        const qParam = queryString.parse(url)
        const model = {
            KEYWORD: qParam.keyword.split(','),
            LOC: qParam?.location ? qParam?.location?.split(',') : [],
            EXP: {
                MIN: qParam?.exp ? qParam?.exp?.split('-')[0] : undefined,
                MAX: qParam?.exp ? qParam?.exp?.split('-')[1] : undefined,
            },
            SAL: {
                MIN: qParam?.sal ? qParam?.sal?.split('-')[0] : undefined,
                MAX: qParam?.sal ? qParam?.sal?.split('-')[1] : undefined,
            },
            page: page,
        }
        model.filter = data
        searchJobs(model).then((res) => {
            if (res.status) {
                this.setState({ JOB_LIST: res.result.list })
                this.setState({ JOB_COUNT: res.result.count })
            } else {
                alert(res.error)
            }

        }).catch(err => {
            alert(err)
        })
    }

    filterData = (data, url) => {
        this.joblistforfilter(1, data, url)
    }

    componentDidMount() {
        // console.log(document.location.href.split('?')[1])
        const q = '?' + document.location.href.split('?')[1]
        // const qParam = queryString.parse(this.props.location.search)
        const qParam = queryString.parse(q)
        const LOCATION = qParam?.location ? qParam?.location.split(',') : null
        this.setState({ aboutJobName: qParam.keyword.replace(/,/g, ', ') })
        if (LOCATION) {
            document.title = `${qParam.keyword} Jobs in ${LOCATION} - Rozgar.com`
            this.setState({ title: `${qParam.keyword} Jobs in ${LOCATION} - Rozgar.com` })
        } else {
            document.title = `${qParam.keyword} Jobs - Rozgar.com`
            this.setState({ title: `${qParam.keyword} Jobs - Rozgar.com` })
        }

        this.joblist(this.state.CURRENT_PAGE, {})
        topCompanyImages().then(res => {
            if (res.status) {
                this.setState({ TOP_COMPANY_IMAGES: res.result.images })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            console.log(err)
        })

    }

    render() {
        window.localStorage.setItem("jobListByCity", `${this.props.history.location.pathname}${this.props.history.location.search}`)
        const { title, JOB_LIST, CURRENT_PAGE, JOB_COUNT, aboutJobName, TOP_COMPANY_IMAGES } = this.state
        return (
            <React.Fragment >
                <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title>
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
                <Joblist
                    JOB_LIST={JOB_LIST}
                    JOB_COUNT={JOB_COUNT}
                    filterData={(data, url) => this.filterData(data, url)}
                    TOP_COMPANY_IMAGES={TOP_COMPANY_IMAGES}
                    aboutJobName={aboutJobName}
                    joblist={(page, data) => { this.joblist(page, data) }}
                    CURRENT_PAGE={CURRENT_PAGE}
                />
            </React.Fragment>
        )
    }
}
