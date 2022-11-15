import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import ResumeWritingServices from '../../components/StudyAbroad/ResumeWritingServices';
import constant from '../../constant';
import { capFirstLetterInSentence } from '../../utils';

export default class resumeWritingServices extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.resumeWritingServices
    }
  render() {
    return (
      <React.Fragment>
        <Helmet >


{/* <title> Create Free CV - Template-01 -Rozgar.com  </title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content="Create a CV in Minutes, Free CV Builder, Free CV Templates, Free Online CV Generator, Create Free Resume Online, Rozgar CV" />
<meta name="description" content=" A well-written and informative resume acts as the best medium through which you can highlight your whole professional and academic career, so as to make a good impression on the employer. So, let’s dig deeper into what is a Resume? What is a CV? How to write an effective resume and the best resume writing services in India?"/>
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

{/* og meta tag */}
<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content= "Create Free CV - Template-01 -Rozgar.com" />
<meta property="og:description" content=" A well-written and informative resume acts as the best medium through which you can highlight your whole professional and academic career, so as to make a good impression on the employer. So, let’s dig deeper into what is a Resume? What is a CV? How to write an effective resume and the best resume writing services in India?" />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" />

{/* Twitter Meta Tag */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ " Create your Free CV Online - Use " + capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " A well-written and informative resume acts as the best medium through which you can highlight your whole professional and academic career, so as to make a good impression on the employer. So, let’s dig deeper into what is a Resume? What is a CV? How to write an effective resume and the best resume writing services in India?"} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />

</Helmet>
        <ResumeWritingServices/>
      </React.Fragment>
    )
  }
}
