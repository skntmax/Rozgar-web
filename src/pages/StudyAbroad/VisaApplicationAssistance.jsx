import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import VisaApplicationAssistance from "../../components/StudyAbroad/VisaApplicationAssistance"
import constant from '../../constant';
import { capFirstLetterInSentence } from '../../utils';

export default class visaApplicationAssistance extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.visaApplicationAssistance
    }
  render() {
    return (
      <React.Fragment>
                        <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " After you have decided on a course, chosen a country and secured an admission at the university, the formalities begin. The next big step in this process is securing a student visa for the country you are going to. Securing a visa may look easy on paper, but this process often becomes tiring and cumbersome. "} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " After you have decided on a course, chosen a country and secured an admission at the university, the formalities begin. The next big step in this process is securing a student visa for the country you are going to. Securing a visa may look easy on paper, but this process often becomes tiring and cumbersome. "} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " After you have decided on a course, chosen a country and secured an admission at the university, the formalities begin. The next big step in this process is securing a student visa for the country you are going to. Securing a visa may look easy on paper, but this process often becomes tiring and cumbersome. "} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
</Helmet>
         <VisaApplicationAssistance/>
      </React.Fragment>
    )
  }
}
