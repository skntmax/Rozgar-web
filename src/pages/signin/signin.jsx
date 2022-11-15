import React, { Component } from 'react'
import Signin from '../../components/signin/signin'
import constant from '../../constant';
import { capFirstLetterInSentence, getStorage, setStorage } from '../../utils';
import swal from 'sweetalert'
import { candidateLogin, googleLoginAuth } from '../../action/CandidateAction'
import Signinwithotp from '../../components/signin/signinwithotp';
import { Helmet } from 'react-helmet';

export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'EMAIL',
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
    if (auth && cd) {
      this.props.history.push(constant.component.editProfile.url)
    }
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
        this.props.history.push(constant.component.editProfile.url)
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
  changeTab = (tab) => {
    debugger
    this.setState({ tab: tab })
  }


  render() {
    const { tab } = this.state;
    return (
      <React.Fragment>
        <Helmet >


          <meta name="HandheldFriendly" content="True" />
          <meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
          <meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
          <link rel="canonical" href={window.location.href} />
          <meta name="referrer" content="no-referrer-when-downgrade" />

          <meta property="og:site_name" content="Rozgar.com" />
          <meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
          <meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
          <meta property="og:image:width" content="4000" />
          <meta property="og:image:height" content="6000" /><br />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
          <meta name="twitter:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
          <meta name="twitter:url" content={window.location.href} />
          <meta name="twitter:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
          <meta name="twitter:label1" content="Written by" />
          <meta name="twitter:data1" content="Smita Nag" />
          <meta name="twitter:label2" content="Filed under" />
          <meta name="twitter:data2" content="Career Advice, Career Insights" />
          <meta name="twitter:site" content="@rozgar_india" />
        </Helmet>
        {tab === 'EMAIL' && <Signin
          changeTab={(tab) => this.changeTab(tab)}
          leftBar={this.props.leftBar}
          onSubmit={this.onSubmit}
          googleLoginHandler={this.googleLoginHandler}
          loginData={this.props.loginDatas}
          showLoader={this.state.showLoader}
        />}
        {tab === 'PHONE' && <Signinwithotp
          changeTab={(tab) => this.changeTab(tab)}
          leftBar={this.props.leftBar}
          onSubmit={this.onSubmit}
          googleLoginHandler={this.googleLoginHandler}
          loginData={this.props.loginDatas}
          showLoader={this.state.showLoader}
        />}

      </React.Fragment>
    )
  }

}
