import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import LoadingOverlay from 'react-loading-overlay';
import { SpinnerCircular } from 'spinners-react';
import { CompanyQuestionSearch, interviewByCompany } from '../../action/CompanyQuestionAction';
import { topPremiumFeaturedCompanyList } from '../../action/dashboard';
import { InterviewQuestionCompanyByUrl } from '../../action/SkillsQuestionAction';
import ByCompanies from '../../components/InterviewQuestions/ByCompany';
import constant from '../../constant'
export default class ByCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: undefined,
      PREMIUM_COMPANIES: [],
      path: undefined,
      loader: false,
      CompanyId: undefined
    }
  }
  componentDidMount() {
    // const {EMPLOYER_NAME} = this.props.history.location.state
    this.setState({ path: this.props.history.location.pathname })
    // document.title = constant.title.interviewQuestionCompany.replace("Company",EMPLOYER_NAME)
    this.IdByUrl()
    // this.InterviewByCompany()
    this.TopPremiumFeaturedCompanyList()

    //   const {searchQuestion}= this.props.history.location.state

    // if (searchQuestion){
    //   this.onInputSearch(searchQuestion)
    // }
  }

  InterviewByCompany = (EMPLOYER_ID) => {
    this.setState({ loader: true })
    // const EMPLOYER_ID = this.state?.CompanyId[0]?.EMPLOYER_ID
    // const {EMPLOYER_ID} = this.props.history.location.state
    interviewByCompany(EMPLOYER_ID).then((res) => {
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

  IdByUrl = () => {
    const data = window.location.href
    const d1 = data.split('/company/')
    const URL = d1[1]
    InterviewQuestionCompanyByUrl(URL).then(res => {
      if (res.status) {
        console.log("data1", res.result);
        this.setState({ CompanyId: res.result })
      }
      this.InterviewByCompany(res.result[0].EMPLOYER_ID)
    }).catch((err) => {
      alert(err)
    })
  }

  onInputSearch = (value = "") => {
    this.setState({ loader: true })
    // const {EMPLOYER_ID} = this.props.location.state
    const EMPLOYER_ID = this.state?.CompanyId
    const modal = {
      EMPLOYER_ID: EMPLOYER_ID,
      KEYWORD: value,
    }
    CompanyQuestionSearch(modal).then((res) => {
      if (res.result) {
        this.setState({ loader: false })
      }
      this.setState({ list: res.result })
    }).catch(err => {
      alert(err)
    })
  }
  render() {
    window.scroll(0, 0);
    if (this.props.history.location.pathname !== this.state.path) {
      // const {searchQuestion}= this.props.history.location.state
      this.setState({ path: this.props.history.location.pathname })
      this.IdByUrl()
      // if (searchQuestion){
      // this.onInputSearch(searchQuestion)
      // }
      // else{
      // this.InterviewByCompany()
      this.TopPremiumFeaturedCompanyList()
      // }
    }
    const { PREMIUM_COMPANIES } = this.state
    const { list } = this.state
    return (
      <React.Fragment>
        {/* <Helmet>
                <meta charSet="utf-8" />
                <title>{constant.title.interviewQuestionCompany.replace("Company",EMPLOYER_NAME)}</title>
                <link rel="canonical" href="" />
                <meta name="distribution" content="reusme makign metagtag " ></meta>
            </Helmet> */}
        <ByCompanies
          PREMIUM_COMPANIES={PREMIUM_COMPANIES}
          history={this.props.history}
          List={list}
          // onInputSearch={this.onInputSearch}
          EMPLOYER_ID={this.state.CompanyId}
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
          </div>
        }
      </React.Fragment>
    )
  }
}
