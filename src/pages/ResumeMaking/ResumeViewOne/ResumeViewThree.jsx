import React, { Component } from 'react'
import ResumeViewThree from '../../../components/ResumeMaking/ResumeViewOne/ResumeViewThree'
import '../../../../src/assets/css/rmaking/orbit-1.css'
import constant from '../../../constant'
import { getResumeData } from '../../../action/CandidateAction';
import { capFirstLetterInSentence, getStorage } from '../../../utils';
import { Helmet } from 'react-helmet';
export default class resumeViewThree extends Component {
  constructor() {
    super();
    this.state = {
      candidateList: [],
      detail: getStorage(constant.keys.cd)
    }
  }
  componentDidMount() {
    document.title = constant.title.ResumeViewThree
    this.getDetailsByResume()
  }

  getDetailsByResume = () => {
    const CANDIDATE_ID = this.state.detail.CANDIDATE_ID
    if (CANDIDATE_ID) {
      getResumeData(CANDIDATE_ID).then((res) => {
        this.setState({ candidateList: res.result })
      }).catch((err) => {
        alert(err)
      })
    }

  }


  render() {
    return (
      <React.Fragment>
        <Helmet >


          {/* <title title={" Create Free CV - " +  capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) +"-Rozgar.com"}>{  " Create Free CV - " +  capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) +"-Rozgar.com"}</title> */}
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
        <ResumeViewThree
          candidateLists={this.state.candidateList}
        />
      </React.Fragment>
    )
  }
}
