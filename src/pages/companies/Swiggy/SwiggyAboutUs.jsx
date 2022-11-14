import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { rozgarcompanydetail } from '../../../action/jobsByActions'
import SwiggyAbout from '../../../components/companies/Swiggy/SwiggyAboutUs'
import { capFirstLetterInSentence } from '../../../utils'
export default class SwiggyAboutUs extends Component {
  constructor(props){
    super(props);
    this.state = {
     swiggy:"",
     count:''
    }
}



componentDidMount() {
  window.scroll(0, 0)
  this.rozgarcompanydetails()
 }

 rozgarcompanydetails = () => {
   rozgarcompanydetail({ LINK: "swiggy-16264"}).then(res => {
       if (res.status) {
           this.setState({ swiggy:res.result ,count:res.result.jobs.count})
       }
       else {
           console.log(res.error)
       }

   }).catch(err => {
     console.log(err)
   })
}

  render() {
    const {count}=this.state
    return (
      <React.Fragment>
           <Helmet>
                 <title title={ capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " Overview  – Jobs, Work Culture - Rozgar.com"}>{capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " Overview  – Jobs, Work Culture - Rozgar.com"}</title>
                    <meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " Overview – Know more about job opportunities, employee feedback and Ratings, work culture, immediate hirings etc at Rozgar.com."} />
                   <link rel="canonical"  href={window.location.href} />
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
                    <meta property="og:url" content={window.location.href }/>
                    <meta property="og:site_name" content="Rozgar.com" />
                    <meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " )verview – Know more about job opportunities, employee feedback and Ratings, work culture, immediate hirings etc at Rozgar.com."} />
                    <meta property="og:title" content={document.title + " Overview – Jobs, Work Culture - Rozgar.com"} />

                </Helmet>
        <SwiggyAbout
                 swiggy={this.state.swiggy}
                 count={count}
        />
      </React.Fragment>
    )
  }
}
