import { fontSize } from '@mui/system';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { topPremiumFeaturedCompanyList } from '../../action/dashboard';
import { InterviewQuestionSearch, InterviewQuestionSkillByUrl } from '../../action/SkillsQuestionAction';
import constant from '../../constant'
import addAnswer from '../../pages/InterviewQuestions/AddAnswer'
import { capFirstLetterInSentence, getStorage } from '../../utils';
import Shimmer from '../common/Shimmer';
import Parser from "html-react-parser"
import { SpinnerCircular } from 'spinners-react';
import LoadingOverlay from 'react-loading-overlay';
import { Helmet } from 'react-helmet';
export default class CommonSearchQuestion extends Component {
  constructor(props){
    super(props);
   this.state = {
    detail:getStorage(constant.keys.cd),
    submited:false,
    inputChange:this.props.history.location.state.SearchQuestion,
    id:undefined,
    urlDetail:undefined,
    detailList:undefined,
    shimmer:false,
    List:undefined,
    path:"",
    PREMIUM_COMPANIES:undefined,
    change:false,
    loader:false
   }
}
onInputClick = (e) =>{
  const {inputChange} = this.state
  // const {searchQuestion} = this.props.history.location.state
//  var Value = e.target.value
//  this.setState({inputChange:Value})
 if(inputChange && inputChange !=undefined && inputChange != ""){
  this.InterviewQuestion(inputChange)
  this.setState({change:false})
//  this.props.history.push({state:{SearchQuestion:inputChange}})
 this.props.history.push({
  pathname:constant.component.commonSearchQuestion.url.replace(':Keyword',inputChange.replace(/ /g,"-")),
  state:{SearchQuestion:inputChange}
})
 }else{
    this.setState({change:true})
 }
}
componentDidMount(){
  console.log("history",this.props.history.location.state);
  const {SearchQuestion} =  this.props.history.location.state
  console.log("responses",SearchQuestion);
  this.setState({path:window.location.href})
  this.TopPremiumFeaturedCompanyList()
  // this.InterviewQuestion(SearchQuestion);
  // const {skillId} = this.props.history.location.state
  // this.setState({id:skillId })
  // this.setState({urlDetail:window.location.href})
  // this.InterviewQuestionSkill()

  // if(window.location.href == `http://localhost:3000/interview-search-questions/`){
  //   this.InterviewQuestion()
  // }
}
componentDidUpdate(){
  // if(window.location.href !== this.state.urlDetail){
  // this.InterviewQuestionSkill()
  // this.setState({urlDetail:window.location.href})
  // }
}

// InterviewQuestionSkill = () =>{
//   const data = window.location.href
//   const d1 = data.split('/skills/')
//   const URL = d1[1]
//   InterviewQuestionSkillByUrl(URL).then((res)=>{
//     this.setState({detailList:res.result})
//   }).catch(err => {
//     alert(err)
//   })
// }

InterviewQuestion = (SearchQuestion = "") =>{
  this.setState({loader:true})
  console.log("response22",SearchQuestion)
  InterviewQuestionSearch(SearchQuestion).then((res)=>{
    this.setState({List:res.result.list,loader:false})
    console.log("response21",res.result.list);
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
  render() {
    const {List,PREMIUM_COMPANIES,inputChange} = this.state
    const {SearchQuestion} =  this.props.history.location.state
    if(this.state.path !== window.location.href){
        // const {SearchQuestion} =  this.props.history.location.state
    // this.InterviewQuestion(SearchQuestion)
    this.setState({path:window.location.href})
    this.InterviewQuestion(SearchQuestion)
    }
  
    document.title = constant.title.commonInterviewAnswer.replace('Questions',SearchQuestion)
    // window.scroll(0,0)
    // const {COMPANY_ID,id,shimmer} = this.state
    // const {jobList,PREMIUM_COMPANIES} = this.props
    // const {skillId} = this.props.history.location.state
    // this.setState({id:skillId})

    // const URL = window.location.href
    // const d1 = URL.split('/interview-questions/')
    // const SearchQuestion = d1[1]
    // const data = SearchQuestion

    // const {searchQuestion} = this.props.history.location.state
   
    // if(skillId != id){
    //   this.setState({inputChange:undefined})
    //   this.setState({id:skillId})
    // }
    
    return (
      <React.Fragment>
    <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}>{capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " , By Skill , By Company, By Designations"}></meta>
<meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "The most common job interview questions that employers ask, examples of the best answers for each question, and tips for how to prepare and respond."} />
<link rel="canonical" href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "The most common job interview questions that employers ask, examples of the best answers for each question, and tips for how to prepare and respond."} />
<meta property="og:url" content={window.location.href} />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + "The most common job interview questions that employers ask, examples of the best answers for each question, and tips for how to prepare and respond."} />
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

       <main id="rg-main" className="rg-main rg-haslayout pt-0">
                    <div className="rg-sectionspace rg-haslayout pt-0">
                        <div className="rozgar-jobbylocsearch">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 offset-2">
                                        <div className="rozgar-jobbylocsearchbox">
                                            <div className="rozgar-formbox">
                                                <div className="rozgar-jobbylocsearchcontent">
                                                    <div className="form-group">
                                                        <i className="lnr lnr-magnifier"></i>
                                                        <input type="text" name="keyword"
                                                        value={this.state.inputChange ? this.state.inputChange : ''}
                                                        className="form-control" placeholder="Search by Questions" 
                                                        onKeyDown={(e)=>{
                                                          if(e.key=='Enter'){
                                                            this.onInputClick()
                                                          }
                                                          }}
                                                         onChange={(e)=>this.setState({inputChange:e.target.value})} />
                                                    </div>
                                                </div>
                                                <div className="rozgar-jobbylocsearchbtn"onClick={this.onInputClick} style={{cursor:'pointer'}}>
                                                    <a style={{color:'white'}}><i className="lnr lnr-magnifier"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        {this.state.change ?<span style={{color:'red'}}>Please Insert Some Value</span>:null}
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='breadcrumb-section'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='breadcrumbF'>
                                            <ul>
                                                <li><a href='/'>Home</a></li>
                                                <li><a href ='/interview-questions'>Interview Question</a></li>
                                                {SearchQuestion && <li className='active' style={{cursor:'pointer'}}> Search Result <a href=''>"{SearchQuestion.charAt(0).toUpperCase() + SearchQuestion.slice(1).replace(/ /g," ")}"</a> </li>}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='interview-questions-company'>
                             <div className="container">
                                <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className='company-header-main'>
                                    <div className='company-info-box skillsinfo-box'>
                                        <div className='aboutCom-Main'>
                                        <div className='companyNameBox'>
                                            <h3>{SearchQuestion.charAt(0).toUpperCase() + SearchQuestion.slice(1).replace(/ /g," ")}</h3>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                    </div>
                  <div className='row'>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className='interviw-tab-company'>
                      <ul>
                        {/* <li><a href='#.'>Salaries <spna>9.6k</spna></a></li> */}
                        <li><a href='javascript:void(0)' className='active'>Interviews 
                        </a></li>
                        {/* <li><Link target="_blank" to={constant.component.joblist.url.replace(":url",skill_Name)}>Jobs 
                        </Link></li> */}
                        {/* <li><a href='#.'>Q&A  */}
                        {/* <spna>3</spna> */}
                        {/* </a></li> */}

                      </ul>
                    </div>
                  </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='SectionDetailsBox'>
                          <div className='simple-header bold-title-l company-header'>
                            {/* <h3 style={{textTransform:'capitalize'}}>{skill_Name.replaceAll("-"," ")} Interview Questions</h3> */}
                            {/* <h3 style={{textTransform:'capitalize'}}>{this.state.detailList && this.state.detailList[0].SKILL} Interview Questions</h3> */}
                          </div>
                          <div className='company-interview-section'>
                            <div className='PopularJoblistBox'>
                          <div className='totalcountinterviews' style={{marginTop:'5px'}}>
                            <div className='cont-filter-box'>
                              {/* {List?.length?<span className='total-count-interview' style={{fontSize:'16px',fontWeight:'bold'}}>{List ? List.length > 0?<p>{List.length} result found</p>
                              :<p style={{color:'#e62e2d',textTransform:'capitalize'}}>No Interview question available in {SearchQuestion}.</p> :<p style={{color:'#e62e2d',textTransform:'capitalize'}}>No Interview question available in {SearchQuestion}.</p>}</span>
                              :null} */}
                               {List?.length?
                               <span className='total-count-interview' style={{fontSize:'16px',fontWeight:'bold'}}>
                                {
                                   <p>{List.length} result found</p>
                                }
                                </span>
                              :<span className='total-count-interview' style={{fontSize:'16px',fontWeight:'bold'}}>
                              {
                                  // <p style={{color:'#e62e2d',textTransform:'capitalize'}}>No Interview question available in {skill_Name.replaceAll("-"," ")}</p>
                              }
                              </span>}
                            </div>
                          </div>
                          {console.log("List",List)}
                        { List ? List.map((i,index)=>{
                          return(
                          <div className='card-company-interviews' style={{marginTop:'5px',padding:'20px 20px 5px 20px'}}>
                               <div className='rg-company-name-box'>
                                 {/* {i.COMPANY_LOGO ?<div className='company-icon-box'>
                                  { i.COMPANY_LOGO && i.COMPANY_LOGO != 'NA'?
                                    <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${i.COMPANY_LOGO}`} alt={i.COMPANY_NAME} />:
                                    null
                                  }
                                  </div>:null
                                  } */}
                                  {/* {i.COMPANY_NAME?
                                  <div className='company-text-box'>
                                    <a target='_blank' href={constant.component.companydetails.url.replace(":url",`${i.URL}-${i.EMPLOYER_ID}`)}>
                                    <span  className="rg-onMouseHover">{i.COMPANY_NAME}</span>
                                  </a></div>
                                   :null} */}
                                    </div>
                               <div className='data-wrapper'>
                                    <ul>
                                        <li>
                                            <p style={{marginTop:'0.8em'}}><span style={{color:'#e62e2d'}}>Q{index +1}. </span>{i.QUESTION_TITLE.charAt(0).toUpperCase() + i.QUESTION_TITLE.slice(1)} <span className='detail-links-box' style={{marginLeft:'0.7em'}}><Link style={{cursor:'pointer'}} to ={{
                                               pathname:constant.component.commonSearchAnswer.url.replace(':url', i.URL),
                                               state:{INTERVIEW_QUESTIONS_ID:i.INTERVIEW_QUESTIONS_ID,QUESTION_TITLE:i.QUESTION_TITLE}
                                            }}><i class='fa fa-external-link' value={i.INTERVIEW_QUESTIONS_ID}></i></Link></span></p>

                                            <Link className='answer-link-view' style={{cursor:'pointer'}} to={{
                                              pathname: constant.component.commonSearchAnswer.url.replace(':url', i.URL),
                                              state:{INTERVIEW_QUESTIONS_ID:i.INTERVIEW_QUESTIONS_ID,QUESTION_TITLE:i.QUESTION_TITLE}
                                              
                                            }}>Add Answer ({i?.answerCount?.total?i?.answerCount?.total -1:0})</Link>
                                        </li>
                                        
                                    </ul>  

                               </div>
                               
                          </div> 
                      )
                      }):<Shimmer/>
                    }                                               
                          </div>
                          <div className='company-interview-right-section'>
                                <div className='questions-top-designations-Box'>
                                    <h5> Interview Question's by Top Skills</h5>
                                    <ul>
                                    <li>
                                    <Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'php'),
                                    state:{skillId:11}
                                      }}>PHP</Link></li>
                                        <li>
                                    <Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'software-testing'),
                                    state:{skillId:2}
                                      }}>Software Testing</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'networking'),
                                    state:{skillId:1}
                                      }}>Networking</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'java'),
                                    state:{skillId:13} 
                                      }}>Java</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'aws'),
                                    state:{skillId:960}
                                      }}>AWS</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'apache-web-server'),
                                    state:{skillId:194}
                                      }}>Apache Web Server</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'linux'),
                                    state:{skillId:27}
                                      }}>Linux</Link></li>
                                       <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'tally'),
                                    state:{skillId:35}
                                      }}>Tally</Link></li>
                                      <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', '-net'),
                                    state:{skillId:9}
                                      }}>.NET</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'video-editing'),
                                    state:{skillId:50}
                                      }}>Video Editing</Link></li>
                                      <li><Link className='rg-backgroundHover' to = {{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'web-designing'),
                                    state:{skillId:24}
                                      }}>Web Designing</Link></li>
                                    </ul>
                                    <Link to={constant.component.interviewQuestionBySkills.url} target="_blank"><div className='more-item-box'><a className='rg-onHoverButton'>Explore more skills</a> </div></Link>
                                </div> 

                                 {/* <div className='SimilarCompanies-Box JobsatCompanies-Box'>

                            <h5>Latest Jobs </h5>
                              {jobList && jobList.length>0 && jobList.map((item)=>(
                            <div className='SimilarCompanies-item' style={{display:'flex'}}>
                              <div className='SimilarCompanies-img'>
                                { item.COMPANY_LOGO && item.COMPANY_LOGO != 'NA'?
                                   <h3><img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} /></h3>:
                                  <h3> { item.COMPANY_NAME.split('')[0]}</h3>
                                }
                              </div>

                              <div className='SimilarCompaniesContent jobCompaniesContent'>
                                <h4>
                                  <Link to={constant.component.joblist.url.replace(":url",item.JOB_TITLE.toLowerCase().replace(/ /g ,'-'))}>
                                    {item.JOB_TITLE}
                                    </Link>
                                    </h4>
                                <div className='companyReviews'>

                                  <p className='companytotaladdress'><i className="fa fa-map-marker" aria-hidden="true"></i> Bengaluru/Bangalore</p>


                                </div>
                                <div className='infojobSimilarCompanies'>
                                  <ul>
                                    <li><i className="ti-location-pin"></i> 5-10 Yrs</li>
                                    <li>
                                        <i className="ti-crown"></i> {item.LISTNING_TYPE == 1 ? ' REGULAR' : item.LISTNING_TYPE == 2 ? ' FEATURED' : ' PREMIUM'}
                                    </li>
                                  </ul>
                                </div>
                              </div>


                            </div>
                  ))}
                            <div className='viewallbox'><a href={constant.component.latestfresherjob.url}>Explore more jobs</a></div>

                          </div> */}
                          <div className='SimilarCompanies-Box'>
                            <h5>Popular Companies</h5>
                        {PREMIUM_COMPANIES && PREMIUM_COMPANIES.length>0 && PREMIUM_COMPANIES.map((item)=>(
                            <div className='SimilarCompanies-item'>
                              <div className='SimilarCompanies-img'>
                                { item.COMPANY_LOGO && item.COMPANY_LOGO != 'NA'?
                                    <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} />:
                                  <h3> { item.COMPANY_NAME.split(' ')[0]}</h3>
                                }
                                </div>
                              <div className='SimilarCompaniesContent'>
                              <Link target="_blank" to={constant.component.companydetails.url.replace(":url",`${item.URL}-${item.EMPLOYER_ID}`)}>
                                <h4  className="rg-onMouseHover">{item.COMPANY_NAME}</h4>
                              </Link>
                                <div className='companyReviews'>
                                  <i className='fa fa-star' style={{color:'#f3c618'}}></i>
                                  <p class="companytotalReviews" style={{color:'#e62e2d' ,paddingLeft:"3px"}}>
                                     0 reviews
                                    </p>
                                </div>
                              </div>
                            </div>
                        ))}

                            <div className='viewallbox'><a href={constant.component.companieslist.url} target="_blank" className='rg-onHoverButton'>View all</a></div>

                          </div>


                          </div>

                          </div>
                        </div>

                    </div>
                </div>
                </div>
                </div>
            
          
                </div>
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
              </div>
              }
                </main>        
      </React.Fragment>
    )
  }
}
