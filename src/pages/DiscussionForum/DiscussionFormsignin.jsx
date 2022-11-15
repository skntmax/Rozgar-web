import React, { Component } from 'react'
import constant from '../../constant';
import { capFirstLetterInSentence, getStorage, setStorage } from '../../utils';
import swal from 'sweetalert'
import { candidateLogin, googleLoginAuth } from '../../action/CandidateAction'
import DiscussionFormsign from '../../components/DiscussionForum/DiscussionFormsign';
import { Helmet } from 'react-helmet';

export default class DiscussionFormsignin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDatas: null,
      showLoader: false,
      detail: getStorage(constant.keys.cd),
      data: localStorage.getItem('JobUrl')
    }
  }
  componentDidMount() {
    document.title = constant.title.Signin
    window.scrollTo(0, 0)
    let auth = getStorage(constant.keys.ctoken)
    let cd = getStorage(constant.keys.cd)
    //no need for this piece of code
    if (auth && cd) {
      this.props.history.goBack()
    }
    //no need for this piece of code
  }

  onSubmit = (model) => {
    const Url = this.state.data
    this.setState({ showLoader: true })
    candidateLogin(model).then((res) => {
      this.setState({ showLoader: false })
      if (res.status) {
        this.setState({ showLoader: false })
        swal({
          icon: "success",
          text: "You have Successfully Logged In",
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false
        });
        this.props.history.goBack()

      } else {
        this.setState({ showLoader: false })
        swal({
          icon: "error",
          text: res.error,
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    });
  }

  googleLoginHandler = (googleData) => {
    googleLoginAuth(googleData).then((res) => {
      if (res.status) {
        this.setState({
          loginDatas: res
        })
        this.props.history.goBack()
      } else {
        swal({
          icon: "error",
          text: res.error,
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    });
  }

  render() {
    console.log(sessionStorage.getItem('ThreadData'))
    return (
      <React.Fragment>
           <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}>{capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " , By Skill , By Company, By Designations"}></meta>
<meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " An environment where participants can pose issues for discussion and respond to any contribution, thus creating threaded discussions that can spawn a discussion tree where the discussion branches out in many directions or subthreads."} />
<link rel="canonical" href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " An environment where participants can pose issues for discussion and respond to any contribution, thus creating threaded discussions that can spawn a discussion tree where the discussion branches out in many directions or subthreads."} />
<meta property="og:url" content={window.location.href} />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " An environment where participants can pose issues for discussion and respond to any contribution, thus creating threaded discussions that can spawn a discussion tree where the discussion branches out in many directions or subthreads."} />
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
        <DiscussionFormsign
          leftBar={this.props.leftBar}
          onSubmit={this.onSubmit}
          googleLoginHandler={this.googleLoginHandler}
          loginData={this.props.loginDatas}
          showLoader={this.state.showLoader}
        />
      </React.Fragment>
    )
  }

}
