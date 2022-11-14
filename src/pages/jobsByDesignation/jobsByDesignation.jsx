import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { DesignationList } from '../../action/jobsByActions';
import JobsByDesignation from '../../components/jobsByDesignation/jobsByDesignation'
import constant from '../../constant'
import { capFirstLetterInSentence } from '../../utils';
export default class jobsByDesignation extends Component {

 
  constructor(props) {
    super(props);
    this.state = {
      DESIGNATION_LIST: [],
      DESIGNATION_LIST_COUNT: undefined
    }
  }
  componentDidMount() {
    document.title = constant.title.JobsByDesignation
    window.scrollTo(0, 0)
    DesignationList().then(res => {
       
      if (res.status) {
        this.setState({ DESIGNATION_LIST: res.result.list, DESIGNATION_LIST_COUNT: res.result.count })
      }
      else {
        alert(res.error)
      }
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    const { DESIGNATION_LIST, DESIGNATION_LIST_COUNT } = this.state
     console.log("DESIGNATION_LIST>>>" , DESIGNATION_LIST);
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
        {DESIGNATION_LIST.length 
        ?
           <JobsByDesignation
          DESIGNATION_LIST={DESIGNATION_LIST}
          DESIGNATION_LIST_COUNT={DESIGNATION_LIST_COUNT}
        /> : null}
      </React.Fragment>
    )
  }
}
