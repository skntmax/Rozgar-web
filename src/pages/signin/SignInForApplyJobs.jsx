import React, { Component } from 'react'
import Signin from '../../components/signin/signinForModal'
import constant from '../../constant';
import { getsessionStorage, getStorage, setStorage } from '../../utils';
import swal from 'sweetalert'
import { candidateLogin, googleLoginAuth } from '../../action/CandidateAction'

export default class SignInForApplyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDatas: null,
      showLoader: false,
      detail: getStorage(constant.keys.cd),
      auth: getsessionStorage(constant.keys.ctoken),
      data: localStorage.getItem('JobUrl'),
      addUpdate:getsessionStorage(constant.keys.addAndUpdate),
      // saveJobId:getsessionStorage('saveJobId')
    }
  }
  componentDidMount() {
    document.title = constant.title.Signin
    window.scrollTo(0, 0)
  }

  onSubmit = (model) => {
    // const Url = this.state.data
    const {JOB_ID} = typeof(getsessionStorage(constant.keys.addAndUpdate))=='string' ? JSON.parse(getsessionStorage(constant.keys.addAndUpdate)) : getsessionStorage(constant.keys.addAndUpdate)
    this.setState({ showLoader: true })
    candidateLogin(model).then((res) => {
      if (res.status) {
        this.setState({ showLoader: false })
        let auth = getStorage(constant.keys.ctoken)
        // swal({
        //   icon: "success",
        //   text: "You have Successfully Signed In",
        //   timer: 1000,
        //   showCancelButton: false,
        //   showConfirmButton: false
        // });
        //have to check this on other cases
        this.props.onCloseModal()
        //have to check this on other cases

        if (JOB_ID && auth) {
          this.props.history.push(constant.component.recommendedJobs.url)
        }
        else {
          this.props.history.push(constant.component.editProfile.url)
        }
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
    // const Url = this.state.data
    const auth = this.state.auth
    const {JOB_ID} = typeof(getsessionStorage(constant.keys.addAndUpdate))=='string' ? JSON.parse(getsessionStorage(constant.keys.addAndUpdate)) : getsessionStorage(constant.keys.addAndUpdate)
    googleLoginAuth(googleData).then((res) => {
      if (res.status) {
        let auth = getStorage(constant.keys.ctoken)
        this.setState({
          loginDatas: res
        })
        //have to check this on other cases
        this.props.onCloseModal()
        //have to check this on other cases
        if (JOB_ID && auth) {
          this.props.history.push(constant.component.recommendedJobs.url)
        }
        else {
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

  render() {
    return (
      <React.Fragment>
        <Signin
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
