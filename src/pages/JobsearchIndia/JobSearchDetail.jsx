import React, { Component ,Suspense} from 'react'
import JobsSearchDetail from '../../components/JobSearchIndia/JobSearchDetail'
import Shimmer from '../../components/common/Shimmer';
import { jobsearchIndiaDetail } from '../../action/JobSearchIndia';
import { Joblistfresher } from '../../action/jobDetail';
import { Helmet } from 'react-helmet';
import { capFirstLetterInSentence } from '../../utils';

export default class JobSearchDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityDetail: undefined,
            jobsCount: undefined,
            localities: [],
            jobs: [],
            showShimmer: true,
            jobslist:"",
            pageNumber:1,
            limit:12,
            filter:''
        }



        
    }

    componentDidMount() {
        const {limit,pageNumber,filter}=this.state;
        window.scrollTo(0, 0)
        if(this.props.match.params.KEYWORD_URL){
        jobsearchIndiaDetail({KEYWORD_URL:this.props.match.params.KEYWORD_URL}).then(res => {
            if (res.status) {
                this.setState({cityDetail:res.result,showShimmer: false})
            //    this.setState({jobsCount: res.result.CLICKED_COUNT, localities: res.result.localities, jobs: res.result.jobs, showShimmer: false })
               // document.title = res.result.cityDetail.CITY + ' - An Overview'
             document.title = res.result.KEYWORD_NAME + ' | Rozgar.com'
            }
            else {
                alert(res.error)
            }

        }).catch(err => {
            alert(err)
        })
    }
    Joblistfresher({page:pageNumber,limit:limit,filter:filter}).then(res => {
        if (res.status) {
            console.log(res.result,"resultJoblist");
            this.setState({jobslist:res.result})
        }
    }).catch(err => {
        alert(err)
    })

    }


 
  render() {
    const { cityDetail,
        jobsCount,
        localities,
        jobs,
        showShimmer,jobslist } = this.state
    return (
        <React.Fragment>
             <Suspense fallback={<div><Shimmer /></div>}>
             <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}>{capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "For every student, getting a job in India is the ultimate goal. Nevertheless, there is no clear definition of what 'good' actually means. A person's aspirations and desires ultimately determine their destiny. Search & Apply for Latest Job Vacancies across Top Companies in India. Register FREE Now!"} />
<link rel="canonical" href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

{/* og meta tag */}
<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " For every student, getting a job in India is the ultimate goal. Nevertheless, there is no clear definition of what 'good' actually means. A person's aspirations and desires ultimately determine their destiny. Search & Apply for Latest Job Vacancies across Top Companies in India. Register FREE Now!"} />
<meta property="og:url" content={window.location.href} />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" />

{/* Twitter Meta Tag */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " For every student, getting a job in India is the ultimate goal. Nevertheless, there is no clear definition of what 'good' actually means. A person's aspirations and desires ultimately determine their destiny. Search & Apply for Latest Job Vacancies across Top Companies in India. Register FREE Now!"} />
<meta name="twitter:url" content={window.location.href} />
<meta name="twitter:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />

</Helmet>
           <JobsSearchDetail
            cityDetail={cityDetail}
            showShimmer={showShimmer}
            jobslist={jobslist}
           
           />
           </Suspense>
        </React.Fragment>
    )
  }
}
