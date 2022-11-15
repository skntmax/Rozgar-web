import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { topCompanyImages } from '../../action/dashboard';
import { isLocationUrl } from '../../action/jobDetail';
import { latestfresherjobs } from '../../action/jobsByActions';
import Joblist from '../../components/joblist/joblist'
import constant from '../../constant';
import { capFirstLetterInSentence, capitalizeWords } from '../../utils';
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
            locatlities: []
        }

    }
    componentDidMount() {
        this.setState({ aboutJobName: 'Government Jobs' })
        document.title = constant.title.FresherJoblist
        window.scrollTo(0, 0)
        this.joblist(this.state.CURRENT_PAGE, {})
        // isLocationUrl(this.props.match.params.url).then(res => {
        //     if (res.status) {
        //         this.setState({ isLocation: res.result.status, CITIES: res.result.cities, locatlities: res.result.locatlities })
        //     }
        //     else {
        //         alert(res.error)
        //     }
        // }).catch(err => {
        //     
        //     alert(err)
        // })

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

    joblist = (page, data) => {
        this.setState({ JOB_COUNT: undefined })
        this.setState({
            JOB_LIST: [],
        })
        latestfresherjobs({
            limit: 25,
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
            alert(err)
        })
    }
    filterData = (data) => {

        this.joblist(1, data)
    }

    render() {
        const { JOB_LIST, JOB_COUNT, CURRENT_PAGE, aboutJobName, isLocation, CITIES, TOP_COMPANY_IMAGES, locatlities } = this.state
        return (
            <React.Fragment >
                  <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " | Rozgar.com"}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))  + " | Rozgar.com"}</title>
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
                    joblist={(page, data) => { this.joblist(page, data) }}
                    CURRENT_PAGE={CURRENT_PAGE}
                    aboutJobName={aboutJobName}
                    isLocation={isLocation}
                    CITIES={CITIES}
                    TOP_COMPANY_IMAGES={TOP_COMPANY_IMAGES}
                    locatlities={locatlities}
                    filterData={(data) => this.filterData(data)}
                />
            </React.Fragment >
        )
    }
}
