import React, { Component } from 'react'
import constant from '../../constant';
import FullStackJobs from '../../components/JobSearchIndia/FullStackJobs';
import { FullStackDeveloperJobsInIndia } from '../../action/JobSearchIndia';
import { Helmet } from 'react-helmet';
import { capFirstLetterInSentence } from '../../utils';

export default class FullStackJobsIndia extends Component {
    constructor(props){
        super(props);
        this.state={
          fullStackJobs: '',
        }

    }
    componentDidMount(){
      //  document.title = constant.title.SeoKeywordsJob
        if(this.props.match.params.KEYWORD_URL){
          FullStackDeveloperJobsInIndia({KEYWORD_URL:this.props.match.params.KEYWORD_URL}).then(res => {
              if (res.status) {
                  this.setState({fullStackJobs:res.result,showShimmer: false})
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
    }
  render() {
   const {fullStackJobs} = this.state;
    return (
      <React.Fragment>
       <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Search &amp; Apply Premimum Full Stack Developer Jobs at Rozgar. Explore Full Stack Developer Jobs and Vacancies in your desired locations now!"} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

{/* og meta tag */}
<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Search &amp; Apply Premimum Full Stack Developer Jobs at Rozgar. Explore Full Stack Developer Jobs and Vacancies in your desired locations now!"} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" />

{/* Twitter Meta Tag */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Search &amp; Apply Premimum Full Stack Developer Jobs at Rozgar. Explore Full Stack Developer Jobs and Vacancies in your desired locations now!"} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />

</Helmet>

        <FullStackJobs 
        fullStackJobs={fullStackJobs}
        />
      </React.Fragment>
    )
  }
}
