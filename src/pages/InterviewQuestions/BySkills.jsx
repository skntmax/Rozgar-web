import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import LoadingOverlay from 'react-loading-overlay';
import { SpinnerCircular } from 'spinners-react';
import { topPremiumFeaturedCompanyList } from '../../action/dashboard';
import { latestfresherjobs } from '../../action/jobsByActions';
import { interviewBySkill, InterviewQuestionSkillByUrl, latestjobs, skillQuestionAnswer } from '../../action/SkillsQuestionAction';
import BySkill from '../../components/InterviewQuestions/BySkills';
import constant from '../../constant';
import { capFirstLetterInSentence } from '../../utils';

export default class BySkills extends Component {
    constructor(props){
        super(props);
        this.state = {
        list:undefined,
        JOB_LIST:[],
        PREMIUM_COMPANIES:[],
        page:1,
        counting:undefined,
        path:undefined,
        loader:false,
        }
    }
    componentDidMount(){
      // const {searchQuestion} = this.props.history.location.state
        this.setState({path:this.props.history.location.pathname})
        this.InterviewQuestionSkill()
        this.TopPremiumFeaturedCompanyList()
          this.LatestJobs()
        // document.title = constant.title.interviewQuestion
        // this.InterviewQuestionSkill()
        // this.InterviewBySkill()
        // this.LatestJobs()
        // this.TopPremiumFeaturedCompanyList()
        // // if (searchQuestion){
        //   this.onInputSearch(searchQuestion)
        // // }
        
    }
    //done 
    InterviewBySkill = (skillId) =>{
      this.setState({loader:true})
      // const skillId = this.props.location.state.skillId
      interviewBySkill(skillId).then((res)=>{
        this.setState({list:res.result,loader:false})
      }).catch(err => {
        alert(err)
      })
    }

    onInputSearch = (value = "") =>{
      const skillId = this.props.location.state.skillId
      const modal = {
        setSkillId:skillId,
        KEYWORD:value,
      }
      skillQuestionAnswer(modal).then((res)=>{
        this.setState({list:res.result})
      }).catch(err =>{
        alert(err)
      })

    }

    LatestJobs = () => {
      latestjobs().then((res)=>{
        this.setState({jobList:res.result})
      }).catch(err => {
        alert(err)
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

    InterviewQuestionSkill = () =>{
      const data = window.location.href
      const d1 = data.split('/skills/')
      const URL = d1[1]
      InterviewQuestionSkillByUrl(URL).then((res)=>{
        this.setState({detailList:res.result})
        this.InterviewBySkill(res.result[0].SKILL_ID)
      }).catch(err => {
        alert(err)
      })
    }

  render() {
    window.scroll(0,0) 
    // const {searchQuestion} = this.props.history.location.state

 if(this.props.history.location.pathname !==this.state.path){
      this.InterviewQuestionSkill()
      this.LatestJobs()
      this.TopPremiumFeaturedCompanyList()
      // this.onInputSearch()
      this.setState({path:this.props.history.location.pathname})
 }
    // if(this.props.history.location.pathname !==this.state.path){
    //     this.setState({path:this.props.history.location.pathname})
    //     // this.InterviewBySkill()
    //     // this.LatestJobs()
    //     // this.TopPremiumFeaturedCompanyList()
    //     if (searchQuestion){
    //       this.onInputSearch(searchQuestion)
    //     }else{
    //     this.InterviewQuestionSkill()
    //     this.InterviewBySkill()
    //     this.LatestJobs()
    //     this.TopPremiumFeaturedCompanyList()
    //     }
    // }
    // if(this.props.history.location.pathname !== this.state.path){
    //   this.setState({path:this.props.history.location.pathname})
    //   if (searchQuestion){
    //     this.onInputSearch(searchQuestion)
    //   }
    // }
    
    const {list,jobList,PREMIUM_COMPANIES} = this.state
    console.log("data2",list,jobList,PREMIUM_COMPANIES);

    const URL = window.location.href
    const d1 = URL.split('/skills/')
    const skill_Name = d1[1]
    document.title = constant.title.interviewQuestion.replace('skills',skill_Name)
    return (
      <React.Fragment>
          <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}>{capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "For every student, getting a job in India is the ultimate goal. Nevertheless, there is no clear definition of what 'good' actually means. A person's aspirations and desires ultimately determine their destiny. Search & Apply for Latest Job Vacancies across Top Companies in India. Register FREE Now!"} />
<link rel="canonical" href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

{/* og meta tag */}
<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " For every student, getting a job in India is the ultimate goal. Nevertheless, there is no clear definition of what 'good' actually means. A person's aspirations and desires ultimately determine their destiny. Search & Apply for Latest Job Vacancies across Top Companies in India. Register FREE Now!"} />
<meta property="og:url" content={window.location.href} />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" />

{/* Twitter Meta Tag */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " For every student, getting a job in India is the ultimate goal. Nevertheless, there is no clear definition of what 'good' actually means. A person's aspirations and desires ultimately determine their destiny. Search & Apply for Latest Job Vacancies across Top Companies in India. Register FREE Now!"} />
<meta name="twitter:url" content={window.location.href} />
<meta name="twitter:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />

</Helmet>
       { console.log("data1",list,jobList,PREMIUM_COMPANIES)}
        <BySkill
       jobList={jobList}
       PREMIUM_COMPANIES={PREMIUM_COMPANIES}
       List={list}
       history={this.props.history}
      //  InterviewBySkill={()this.InterviewBySkill()}
       onInputSearch = {(value)=>this.onInputSearch(value)}
       />
        { this.state.loader &&
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

              </div>}
      </React.Fragment>
    )
  }
}
