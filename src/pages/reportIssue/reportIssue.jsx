import React, { Component } from 'react'
import { reportIssue } from '../../action/dashboard';
import ReportIssue from '../../components/reportIssue/reportIssue'
import constant from '../../constant'
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { capFirstLetterInSentence } from '../../utils';

export default class ReportAnIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    document.title = constant.title.ReportIssue
    window.scrollTo(0, 0)
  }

  onSubmit = (model) => {

    reportIssue(model).then(res => {
      if (res.status) {
        // alert(res.messageCode)
        Swal.fire({
          icon: 'success',
          text: res.result.message,
          timer: 1500,
          showCancelButton: false,
          showConfirmButton: false
        })
        // window.location.reload()
      } else {
        Swal.fire({
          icon: 'error',
          text: res.error,
          timer: 1500,
          showCancelButton: false,
          showConfirmButton: false
        })
      }

    }).catch(err => {
      Swal.fire({
        icon: 'error',
        text: err,
        timer: 1500,
        showCancelButton: false,
        showConfirmButton: false
      })
    })

  }
  render() {
    return (
      <React.Fragment>
                        <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Our Help section will provide answers to Frequently Asked Questions (FAQs). If you wish to know more about our services or if you need our help in any matter, please fill in the form below and we will revert to the specified email address in 48 hours."} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Our Help section will provide answers to Frequently Asked Questions (FAQs). If you wish to know more about our services or if you need our help in any matter, please fill in the form below and we will revert to the specified email address in 48 hours."} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Our Help section will provide answers to Frequently Asked Questions (FAQs). If you wish to know more about our services or if you need our help in any matter, please fill in the form below and we will revert to the specified email address in 48 hours."} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
</Helmet>
        <ReportIssue
          onSubmit={this.onSubmit}
        />
      </React.Fragment>
    )
  }
}
