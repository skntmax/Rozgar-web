import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import LoadingOverlay from 'react-loading-overlay';
import { SpinnerCircular } from 'spinners-react';
import { topPremiumFeaturedCompanyList } from '../../action/dashboard';

import { DesignationQuestionSearch, interviewByDesignation, InterviewQuestionDesignationByUrl } from '../../action/SkillsQuestionAction';
import ByDesignations from '../../components/InterviewQuestions/ByDesignation';
import constant from '../../constant'
import { capFirstLetterInSentence } from '../../utils';
export default class ByDesignation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: undefined,
      PREMIUM_COMPANIES: [],
      path: undefined,
      loader: false,
      DESIGNATION_ID: '',
      DESIGNATION: ''
    }
  }
  componentDidMount() {
    // const {DESIGNATION} = this.props.history.location.state
    this.setState({ path: this.props.history.location.pathname })
    // document.title = constant.title.interviewQuestionByDesignation.replace(":Designation",DESIGNATION)
    // this.InterviewByDesignation()
    this.InterviewQuestionByUrl()
    this.TopPremiumFeaturedCompanyList()
    // const {searchQuestion}= this.props.history.location.state

    // if (searchQuestion){
    //   this.onInputSearch(searchQuestion)
    // }
  }

  InterviewByDesignation = (DESIGNATION_ID) => {
    this.setState({ loader: true })
    // const {DESIGNATION_ID} = this.props.history.location.state
    interviewByDesignation(DESIGNATION_ID).then((res) => {
      this.setState({ list: res.result, loader: false })
    }).catch((err) => {
      alert(err);
    })
  }

  TopPremiumFeaturedCompanyList = () => {
    topPremiumFeaturedCompanyList().then(res => {
      if (res.status) {
        this.setState({ PREMIUM_COMPANIES: res.result.premium })
      }
      else {
        alert(res.error)
      }
    }).catch(err => {
      alert(err)
    })
  }
  //useless now
  onInputSearch = (value = "") => {
    const { DESIGNATION_ID } = this.props.location.state
    const modal = {
      DESIGNATION_ID: DESIGNATION_ID,
      KEYWORD: value,
    }
    DesignationQuestionSearch(modal).then((res) => {
      this.setState({ list: res.result })
    }).catch(err => {
      alert(err)
    })
  }
  //useless now
  InterviewQuestionByUrl = () => {
    const URL = window.location.href
    const d1 = URL.split('/designations/')
    const DesignationUrl = d1[1]
    InterviewQuestionDesignationByUrl(DesignationUrl).then((res) => {
      this.InterviewByDesignation(res.result[0].DESIGNATION_ID)
      this.setState({ DESIGNATION: res.result[0].DESIGNATION })
      this.setState({ DESIGNATION_ID: res.result[0].DESIGNATION_ID })
      document.title = constant.title.interviewQuestionByDesignation.replace(":Designation", res.result[0].DESIGNATION)
    }).catch((err) => {
      alert(err)
    })

  }
  render() {
    const { DESIGNATION, DESIGNATION_ID } = this.state
    window.scroll(0, 0)
    const { PREMIUM_COMPANIES } = this.state
    const { list } = this.state
    if (this.props.history.location.pathname !== this.state.path) {
      // const {searchQuestion}= this.props.history.location.state
      this.setState({ path: this.props.history.location.pathname })
      // if (searchQuestion){
      //   this.onInputSearch(searchQuestion)
      // }
      // else{
      this.InterviewQuestionByUrl()
      // this.InterviewByDesignation()
      this.TopPremiumFeaturedCompanyList()
      // }
    }
    return (
      <React.Fragment>
         <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}>{capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " , By Skill , By Company, By Designations"}></meta>
<meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "The most common job interview questions that employers ask, examples of the best answers for each question, and tips for how to prepare and respond."} />
<link rel="canonical" href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "The most common job interview questions that employers ask, examples of the best answers for each question, and tips for how to prepare and respond."} />
<meta property="og:url" content={window.location.href} />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "The most common job interview questions that employers ask, examples of the best answers for each question, and tips for how to prepare and respond."} />
<meta name="twitter:url" content={window.location.href} />
<meta name="twitter:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" />
</Helmet>
        {/* <Helmet>
                    <meta charSet="utf-8" />
                    <title> {constant.title.interviewQuestionByDesignation.replace(":Designation",DESIGNATION)}  </title>
                    <link rel="canonical" href={window.location.href} />
                    <meta name="Keywords" content="Create a CV in Minutes, Free CV Builder, Free CV Templates, Free Online CV Generator, Create Free Resume Online, Rozgar CV"></meta>
                    <meta name="description" content="Create your Free CV Online - Use Template 03 for Free Online CV maker, allows you to create a perfect Resume in less than 5 minutes. See how easy it is to write a professional resume. Focus on building a career, not your CV. Create CV now!" />
                    <meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
                    <meta property="og:site_name" content="Rozgar.com" />
                    <meta property="og:description" content="Create your Free CV Online - Use Template 03 for Free Online CV maker, allows you to create a perfect Resume in less than 5 minutes. See how easy it is to write a professional resume. Focus on building a career, not your CV. Create CV now!" />
                    <meta property="og:title" content="Create a CV in Minutes, Free CV Builder, Free CV Templates, Free Online CV Generator, Create Free Resume Online, Rozgar CV" />
                    <base href="//www.rozgar.com" />
                    <meta name="twitter:url" content={window.location.href} />
                </Helmet> */}
        <ByDesignations
          PREMIUM_COMPANIES={PREMIUM_COMPANIES}
          history={this.props.history}
          List={list}
          DESIGNATION={DESIGNATION}
          DESIGNATION_ID={DESIGNATION_ID}
          onInputSearch={(value) => this.onInputSearch(value)}
        />
        {this.state.loader &&
          <div style={{
            position: "fixed",
            zIndex: "999",
            left: "0",
            top: " 0",
            width: " 100%",
            height: " 100%",
            overflow: "auto",
            padding: "210px",
            backgroundColor: "rgba(0, 0, 0, 0.4)"
          }}>
            <LoadingOverlay
              active={true}
              spinner={<SpinnerCircular color={'rgba(0,0,0,0.44)'} secondaryColor={'rgb(230,46,45)'} />}
            >
            </LoadingOverlay>
          </div>}
      </React.Fragment>
    )
  }
}
