import React, { Component } from 'react'
import { forgotPassword } from '../../action/CandidateAction';
import ForgotPasswords from '../../components/forgotPassword/forgotPassword'
import constant from '../../constant'
import swal from 'sweetalert'
import { Helmet } from 'react-helmet';
import { capFirstLetterInSentence } from '../../utils';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      showMessage: false,
      showLoader: false,
    }
  }
  componentDidMount() {
    document.title = constant.title.ForgotPassword
    window.scrollTo(0, 0)
  }

  onSubmit = (model) => {
    this.setState({ showLoader: true })
    forgotPassword(model).then((res) => {
      if (res.status) {
        this.setState({
          message: res.result.message,
          showMessage: true,
          showLoader: false,
        })
        setTimeout(() => {
          this.setState({
            message: '',
            showMessage: false
          })
        }, 7000)
      } else {
        swal({
          icon: "error",
          text: res.error,
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,

        });
        this.setState({ showLoader: false })
      }
    });
  }

  render() {
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
        <ForgotPasswords onSubmit={this.onSubmit} message={this.state.message} showMessage={this.state.showMessage} showLoader={this.state.showLoader} />
      </React.Fragment>
    )
  }
}
