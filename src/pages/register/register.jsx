import React, { Component } from 'react'
import Register from '../../components/register/register'
import constant from '../../constant';
import { candidateRegister, googleLogin, googleLoginAuth, phoneVerification, reMobSendOTP, resetSendOTP } from '../../action/CandidateAction';
import swal from 'sweetalert';
import { SpinnerCircular } from 'spinners-react';
import { capFirstLetterInSentence, getsessionStorage, getStorage, setsessionStorage } from '../../utils';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Helmet } from 'react-helmet';


 class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      CANDIDATE_ID: '',
      loginDatas: null,
      showLoader: false,
      detail: getStorage(constant.keys.cd),
    }
  }
  componentDidMount() {
    document.title = constant.title.Register
    window.scrollTo(0, 0)
    let auth = getStorage(constant.keys.ctoken)
    let cd=getStorage(constant.keys.cd)
    sessionStorage.removeItem('addAndUpdate')
    sessionStorage.removeItem('saveJobId')

    if (auth && cd) {
      this.props.history.push(constant.component.editProfile.url)
    }
    const {JOB_ID} = this.props.location.state && this.props.location.state.Job_Id ? this.props.location.state.Job_Id : ''
    if(JOB_ID){
      setsessionStorage('addAndUpdate',this.props.location.state.Job_Id)
    }
    const saveJobId=this.props.location.state && this.props.location.state.saveJobId ? this.props.location.state.saveJobId : ''
    if(saveJobId){
      setsessionStorage('saveJobId',this.props.location.state.saveJobId)
    }
  }

  onSubmit = (formData) => {
    this.setState({ showLoader: true })
    candidateRegister(formData).then((res) => {
      this.setState({showLoader:false})
          if (res.status) {
            this.setState({showLoader:false})
            this.setState({
                showModal:true,
                CANDIDATE_ID: res.result.CANDIDATE_ID
            })
          } else {
            this.setState({showLoader:false})
            swal({
              icon: "error",
              text:res.error,
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false,
            });
          }
        });

    }

  setShowModel = (showModal) => {
    this.setState({
      showModal: showModal
    })
  }

  phoneVerification = (mob_otp) => {
    // const Url = this.state.detail
    // const saveJobId = this.state.data
    // const jobListByCity = getStorage("jobListByCity")
    let auth = getStorage(constant.keys.ctoken)
    const {JOB_ID} = this.props.location.state && this.props.location.state.Job_Id ? this.props.location.state.Job_Id : ''
    if(JOB_ID){
      setsessionStorage('addAndUpdate',this.props.location.state.Job_Id)
    }
    const saveJobId=this.props.location.state && this.props.location.state.saveJobId ? this.props.location.state.saveJobId : ''
    if(saveJobId){
      setsessionStorage('saveJobId',this.props.location.state.saveJobId)
    }
    phoneVerification({ CANDIDATE_ID: this.state.CANDIDATE_ID, mob_otp: mob_otp }).then((res) => {
      if (res.status) {
        this.setState({
          showModal: false
        })

        swal({
          icon: "success",
          text: res.messageCode,
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        });
     
        if(saveJobId && auth){
          this.props.history.push(constant.component.savedJobs.url)
        }
        else if(JOB_ID && auth){
            this.props.history.push(constant.component.recommendedJobs.url)
        }
        else{
          this.props.history.push(constant.component.editProfile.url)
        }
      } else {
        this.setState({showLoader:false})
        swal({
          icon: "error",
          text: "Something went wrong!!",
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    });
  }

  reSendOTP = () => {
    reMobSendOTP({ CANDIDATE_ID: this.state.CANDIDATE_ID }).then((res) => {
      if (res.status) {
        swal({
          icon: "success",
          text: "OTP has been sent to your registered Mobile number",
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      } else {
        swal({
          icon: "error",
          text: "Something went wrong!!",
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    });
  }

  googleLoginHandler = (googleData) => {
    // const saveJobId = this.state.data
    // const {JOB_ID} = this.state.addUpdate ? this.state.addUpdate : ''
  
    const {JOB_ID} = this.props.location.state && this.props.location.state.Job_Id ? this.props.location.state.Job_Id : ''
    if(JOB_ID){
      setsessionStorage('addAndUpdate',this.props.location.state.Job_Id)
    }
    const saveJobId=this.props.location.state && this.props.location.state.saveJobId ? this.props.location.state.saveJobId : ''
    if(saveJobId){
      setsessionStorage('saveJobId',this.props.location.state.saveJobId)
    }

    googleLoginAuth(googleData).then((res) => {
      if (res.status) {
        this.setState({
          loginDatas: res
        })
        let auth = getStorage(constant.keys.ctoken)
        if(JOB_ID && auth){
          this.props.history.push(constant.component.recommendedJobs.url)
        }
        else if(saveJobId && auth){
          this.props.history.push(constant.component.savedJobs.url)
        }
        else{
          this.props.history.push(constant.component.editProfile.url)
        }
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

  componentWillUnmount=()=>{
    if (this.props.history.action === "POP") {
      if(this.state.detail){
        this.props.history.push(constant.component.editProfile.url)
      }
  }
  }

  render() {
    const { Spinner } = this.state
    return (
      <React.Fragment>
        {/* { Spinner &&
              <RingLoader color={'rgb(230,46,45)'} loading={true}  size={60} speedMultiplier={1} style={{position:'fixed',zIndex:999, top:'50%',right:'50%',backgroundImage:'none',backgroundColor:'rgba(0,0,0,0.4)'}} placeholder="loading"/>
        } */}
                        <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title>
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

        <Register
          onSubmit={this.onSubmit}
          phoneVerification={this.phoneVerification}
          reSendOTP={this.reSendOTP}
          showModal={this.state.showModal}
          setShowModel={this.setShowModel}
          googleLoginHandler={this.googleLoginHandler}
          loginData={this.props.loginDatas}
          showLoader={this.state.showLoader}
          history={this.props.history}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(register)
