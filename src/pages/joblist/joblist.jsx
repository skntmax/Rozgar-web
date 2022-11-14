import React, { Component } from 'react'
import { topCompanyImages } from '../../action/dashboard';
import { isLocationUrl } from '../../action/jobDetail';
import { searchJobBy } from '../../action/jobsByActions';
import JobLists from '../../components/joblist/joblist';
import constant from '../../constant';
import { capFirstLetterInSentence, capitalizeWords } from '../../utils';
import MetaTags from 'react-meta-tags';
import { Helmet } from 'react-helmet';
export default class joblist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            JOB_LIST: [],
            JOB_COUNT: undefined,
            CURRENT_PAGE: 1,
            aboutJobName: 'India',
            isLocation: false,
            CITIES: [],
            TOP_COMPANY_IMAGES: [],
            locatlities: [],
            includeJobsInTitle: false
        }

    }
    componentDidMount() {
        this.setState({ aboutJobName: capitalizeWords(this.props.match.params.url.split('-')).join(' ') })
        document.title = capitalizeWords(this.props.match.params.url.split('-')).join(' ') + ' Jobs - Rozgar.com'
        window.scrollTo(0, 0)
        this.joblist(this.state.CURRENT_PAGE, {})
        isLocationUrl(this.props.match.params.url).then(res => {
            if (res.status) {
                this.setState({ isLocation: res.result.status, CITIES: res.result.cities, locatlities: res.result.locatlities })
                if (res.result.status) {
                    document.title = `Jobs in  ${capitalizeWords(this.props.match.params.url.split('-')).join(' ')} - Rozgar.com`
                    this.setState({ includeJobsInTitle: true })
                }
                else {
                    document.title = capitalizeWords(this.props.match.params.url.split('-')).join(' ') + ' Jobs - Rozgar.com'

                }
            }
            else {
                alert(res.error)
            }
        }).catch(err => {

            console.log(err)
        })

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

    joblist = (page, data) => {

        this.setState({ JOB_LIST: [], JOB_COUNT: undefined })
        searchJobBy({
            LIMIT: 25,
            URL: this.props.match.params.url,
            page: page,
            filter: data

        }).then(res => {
            if (res.status) {
                this.setState({ JOB_LIST: res.result.count ? res.result.list : undefined, JOB_COUNT: res.result.count })
            }
            else {
                alert(res.error)
            }

        }).catch(err => {
            console.log(err)
        })
    }

    filterData = (data) => {
        this.joblist(1, data)
    }



    render() {
        console.log(this.props);
        const { includeJobsInTitle, JOB_LIST, JOB_COUNT, CURRENT_PAGE, aboutJobName, isLocation, CITIES, TOP_COMPANY_IMAGES, locatlities } = this.state
        const title = includeJobsInTitle ? `Jobs in  ${capitalizeWords(this.props.match.params.url.split('-')).join(' ')} - Rozgar.com` : `${capitalizeWords(this.props.match.params.url.split('-')).join(' ')} Jobs - Rozgar.com`
        return (
            <React.Fragment >
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
                <JobLists
                    JOB_LIST={JOB_LIST}
                    JOB_COUNT={JOB_COUNT}
                    joblist={(page, data) => { this.joblist(page, data) }}
                    CURRENT_PAGE={CURRENT_PAGE}
                    aboutJobName={aboutJobName}
                    isLocation={isLocation}
                    CITIES={CITIES}
                    TOP_COMPANY_IMAGES={TOP_COMPANY_IMAGES}
                    locatlities={locatlities}
                    filterData={(data) => this.filterData(data)}
                    props={this.props}
                />
            </React.Fragment >
        )
    }
}
