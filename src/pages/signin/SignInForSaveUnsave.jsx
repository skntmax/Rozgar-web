import React, { Component } from 'react'
import Signin from '../../components/signin/signinForModal'
import constant from '../../constant';
import { getsessionStorage, getStorage, setStorage } from '../../utils';
import swal from 'sweetalert'
import { candidateLogin, googleLoginAuth } from '../../action/CandidateAction'
import { withRouter } from 'react-router-dom';

 class SignInForSaveUnsave extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loginDatas:null,
          showLoader:false,
          detail:getStorage(constant.keys.cd),
          auth:getsessionStorage(constant.keys.ctoken),
          data:sessionStorage.getItem('saveJobId')
        }
    }
    componentDidMount() {
        document.title = constant.title.Signin
        window.scrollTo(0, 0)
    }

    onSubmit = (model) => {
      const saveJobId = typeof(getsessionStorage('saveJobId'))=='string' ? JSON.parse(getsessionStorage('saveJobId')) : getsessionStorage('saveJobId')
      this.setState({showLoader:true})
      candidateLogin(model).then((res) => {
          if (res.status) {
            let auth = getsessionStorage(constant.keys.ctoken)
            this.setState({showLoader:false})
            //have to check this on other cases
            this.props.onCloseModal()
             //have to check this on other cases
            if(saveJobId && auth){
                this.props.history.push(constant.component.savedJobs.url)
            }
            else{
                this.props.history.push(constant.component.editProfile.url)
            }
          } else {
            this.setState({showLoader:false})
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

  googleLoginHandler=(googleData)=>{
    const saveJobId = typeof(getsessionStorage('saveJobId'))=='string' ? JSON.parse(getsessionStorage('saveJobId')) : getsessionStorage('saveJobId')
    googleLoginAuth(googleData).then((res) => {
      if (res.status) {
        let auth = getsessionStorage(constant.keys.ctoken)
        this.setState({
          loginDatas:res
        })
         //have to check this on other cases
         this.props.onCloseModal()
         //have to check this on other cases
         if(saveJobId && auth){
            this.props.history.push(constant.component.savedJobs.url)
      }
      else{
         this.props.history.push(constant.component.editProfile.url)
      }
      }else {
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

export default withRouter(SignInForSaveUnsave);
