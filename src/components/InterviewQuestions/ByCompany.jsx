import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import constant from '../../constant'
import addAnswer from '../../pages/InterviewQuestions/AddAnswer'
import { getStorage } from '../../utils';
import Shimmer from '../common/Shimmer';
export default class ByCompanies extends Component {
  constructor(props){
    super(props);
   this.state = {
    // detail:getStorage(constant.keys.cd),
    // submited:false,
    
    // inputChange:this.props.history.location.state.searchQuestion,
    search:undefined,
   }
} 
// onInputChange = () =>{
//   const {searchQuestion} = this.props.history.location.state
//   const {inputChange} = this.state
// //  var Value = e.target.value
// //  this.setState({inputChange:Value})
// //  if(Value && Value!=undefined){
//   this.props.onInputSearch(inputChange)
// //  }
// }
onInputChange = () =>{
  const {inputChange} = this.state
  const {searchQuestion} = this.props.history.location.state
//  var Value = e.target.value
//  this.setState({inputChange:Value})
//  if(inputChange && inputChange !=undefined){
  // this.props.onInputSearch(inputChange)
  this.props.history.push({
    pathname:constant.component.commonSearchQuestion.url.replace(':Keyword',inputChange.replace( / /g,"-")),
    state:{SearchQuestion:inputChange}
  })
//  }
}

  render() {
    const {List}  =this.props
    // window.scroll(0,0)
    // const {COMPANY_ID} = this.state
    const {jobList,PREMIUM_COMPANIES} = this.props
    const EMPLOYER = this.props.EMPLOYER_ID
    console.log("responses",EMPLOYER);
    // const {EMPLOYER_NAME} = this.props.history.location.state
    const URL = window.location.href
    const d1 = URL.split('/company/')
    const skill_Name = d1[1]
    const data = skill_Name.toUpperCase()
    // const {searchQuestion} = this.props.history.location.state
    return (
      <React.Fragment>
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
                                                        <input type="text" name="keyword" value={this.state.inputChange ? this.state.inputChange : ''}
                                                        onKeyDown={(e)=>{
                                                          if(e.key=='Enter'){
                                                            this.onInputChange()
                                                          }
                                                          }}
                                                         className="form-control" placeholder="Search by Questions" onChange={(e)=>this.setState({inputChange:e.target.value})} />
                                                    </div>
                                                </div>
                                                <div className="rozgar-jobbylocsearchbtn" onClick={this.onInputChange} style={{cursor:'pointer'}}>
                                                    <a><i className="lnr lnr-magnifier" style={{color:'white'}}></i></a>
                                                </div>
                                            </div>
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
                                            <h3>{data.replaceAll("-"," ")} </h3>
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
                        {/* <spna>1k</spna> */}
                        </a></li>
                        <li><Link target="_blank" to={constant.component.joblist.url.replace(":url",skill_Name)}>Jobs 
                        {/* <spna>1.6k</spna> */}
                        </Link></li>
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
                            <h3 style={{textTransform:'capitalize'}}>{skill_Name.charAt(0).toUpperCase().replaceAll('-',"") + skill_Name.slice(1).replaceAll("-"," ")} Interview Questions</h3>

                          </div>
                          <div className='company-interview-section'>
                            <div className='PopularJoblistBox'>
                                {/* <div className='search-designation-box'>
                                  <div className="rozgar-jobbylocsearchcontent">
                                    <div className="form-group">
                                        <i className="lnr lnr-magnifier"></i>
                                        <input type="text" name="keyword" className="form-control" placeholder="Search by Skills" />
                                    </div>
                            
                                  </div>
                              </div> */}
                            {/* <div className='list-box list-box-Companies' style={{marginTop:'5px'}}>
                            <h4>Most Searched Companies</h4>
                            <ul>
                              <li>
                                    <Link to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'tata-consultancy-service'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 1,EMPLOYER_NAME: "tcs".toUpperCase()}
                                      }}>
                                        Tata Consultancy Service
                                      </Link></li>
                                        <li>
                                    <Link to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'wipro'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 2,EMPLOYER_NAME: "wipro".toUpperCase()}
                                      }}>Wipro</Link></li>
                                        <li><Link to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'infosys'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 3,EMPLOYER_NAME: "infosys".toUpperCase()}
                                      }}>Infosys</Link></li>
                                        <li><Link to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'hcl'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 4,EMPLOYER_NAME:"hcl".toUpperCase()}
                                      }}>Hcl</Link></li>
                                        <li><Link to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'tech mahindra'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 5,EMPLOYER_NAME: "tech mahindra".toUpperCase()}
                                      }}>Tech Mahindra</Link></li>
                                        <li><Link to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'cognizant'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 6,EMPLOYER_NAME: "cognizant".toUpperCase()}
                                      }}>Cognizant</Link></li>
                                        <li><Link to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'accenture'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 8,EMPLOYER_NAME: "accenture".toUpperCase()}
                                      }}>Accenture</Link></li>
                            </ul>
                          </div> */}
                          <div className='totalcountinterviews' style={{marginTop:'5px'}}>
                            <div className='cont-filter-box'>
                             {this.props.List ?
                            <span className='total-count-interview' style={{fontSize:'16px',fontWeight:'bold'}}>{this.props.List ? this.props.List.length > 0?<p>{this.props.List.length} result found</p>:<p style={{color:'#e62e2d',textTransform:'capitalize'}}>No Interview question available in {skill_Name.replaceAll("-"," ")} .</p> :<p style={{color:'#e62e2d',textTransform:'capitalize'}}>No Interview question available in {skill_Name.replaceAll("-"," ")} .</p>}</span>
                             :null}
                            </div>
                          </div>
                        { this.props.List ? this.props.List.map((i,index)=>{
                          return(
                          <div className='card-company-interviews' style={{marginTop:'5px',padding:'20px 20px 5px 20px'}} key={index}>
                               <div className='rg-company-name-box'>
                                 {/* <div className='company-icon-box'><a href="#">
                                  { i.COMPANY_LOGO && i.COMPANY_LOGO != 'NA'?
                                    <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${i.COMPANY_LOGO}`} alt={i.COMPANY_NAME} />:
                                  <h3> { i.SKILL.split(' ').map((i) => i.substring(0, 1)).join('')}</h3>
                                  }
                                  </a></div> */}
                                 <div className='company-text-box'>
                                  {/* <a target='_blank' href={constant.component.companydetails.url.replace(":url",`${i.URL}-${i.EMPLOYER_ID}`)}> */}
                                  {/* <span className="rg-onMouseHover" style={{fontWeight:'bold'}}>{i.SKILL_Name && i.SKILL_Name.map(i=>i.toUpperCase()).join()}</span> */}
                                  {/* </a> */}
                                  </div>

                               </div> 
                               <div className='data-wrapper'>
                                    {/* <h5>Interview Questions</h5> */}
                                    <ul>
                                        <li>
                                            <p style={{marginTop:'0.8em'}}><span style={{color:'#e62e2d'}}>Q{index +1}. </span>{i.QUESTION_TITLE.charAt(0).toUpperCase() + i.QUESTION_TITLE.slice(1)}<span className='detail-links-box' style={{marginLeft:'0.7em'}}>
                                              <Link style={{cursor:'pointer'}} to ={{
                                               pathname:constant.component.companyInterviewAnswer.url.replace(':url', i.QURL),
                                               state:{INTERVIEW_QUESTIONS_ID:i.INTERVIEW_QUESTIONS_ID,COMPANY_NAME:i.COMPANY_NAME,skill_Name:i.SKILL_Name}
                                            }}>
                                              <i className='fa fa-external-link' value={i.INTERVIEW_QUESTIONS_ID}></i></Link>
                                            </span></p>
                                            {/* <a href={constant.component.AddAnswer.url} className='answer-link-view'>Add Answer</a> */}
                                          {i.SKILL_Name?.length ?
                                          <div className='company-text-box'>
                                            <span className="rg-onMouseHover" style={{fontWeight:'400'}}>Relevant Skills -: {i.SKILL_Name && i.SKILL_Name.map(i=>`${i} `).join()}</span>
                                          </div>: null
                                          }
                                            <Link className='answer-link-view' style={{cursor:'pointer'}} to={{
                                              pathname: constant.component.companyInterviewAnswer.url.replace(':url', i.QURL),
                                              state:{INTERVIEW_QUESTIONS_ID:i.INTERVIEW_QUESTIONS_ID,COMPANY_NAME:i.COMPANY_NAME,skill_Name:i.SKILL_Name}
                                            }}>Add Answer ({i?.answerCount?.total?i?.answerCount?.total -1:0})</Link>
                                        </li>
                                        
                                    </ul>  

                               </div>
                               
                          </div> 
                    )
                    }):<Shimmer/>
                  }

                        {/* <div className='pagination-box'> 
                            <ul id="pagination">
                                <li><a class="" href="#">«</a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#" class="active">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">6</a></li>
                                <li><a href="#">7</a></li>
                                <li><a href="#">»</a></li>
                            </ul> 
                        </div> */}
                                                

                          </div>
                          <div className='company-interview-right-section'>
                                <div className='questions-top-designations-Box'>
                                    <h5>Interview Question's by Top Companies</h5>
                                    <ul>
                                    <li>
                                    <Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'tata-consultancy-service'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 1,EMPLOYER_NAME: "tcs".toUpperCase()}
                                      }}>
                                        Tata Consultancy Service
                                      </Link></li>
                                        <li>
                                    <Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'wipro'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 2,EMPLOYER_NAME: "wipro".toUpperCase()}
                                      }}>Wipro</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'infosys'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 3,EMPLOYER_NAME: "infosys".toUpperCase()}
                                      }}>Infosys</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'hcl'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 4,EMPLOYER_NAME:"hcl".toUpperCase()}
                                      }}>Hcl</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'amazon-inc-'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 16284,EMPLOYER_NAME: "Amazon".toUpperCase()}
                                      }}>Amazon</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'cognizant'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 6,EMPLOYER_NAME: "cognizant".toUpperCase()}
                                      }}>Cognizant</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'accenture'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 8,EMPLOYER_NAME: "accenture".toUpperCase()}
                                      }}>Accenture</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'deloitte'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 14,EMPLOYER_NAME: "Deloitte".toUpperCase()}
                                      }}>Deloitte</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'capgemini'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 10,EMPLOYER_NAME: "capgemini".toUpperCase()}
                                      }}>Capgemini</Link></li>
                                        <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'adobe systems'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 12,EMPLOYER_NAME: "adobe systems".toUpperCase()}
                                      }}>Adobe Systems</Link></li>
                                      <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionByCompanyId.url.replace(':id', 'byjus'.replace(/ /g,"-")),
                                    state:{EMPLOYER_ID: 17,EMPLOYER_NAME: "byjus".toUpperCase()}
                                      }}>Byjus</Link></li>
                                      {/* <li><Link to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'web-development'),
                                    state:{skillId:823}
                                      }}>Web Development</Link></li> */}
                                    </ul>
                                    <Link to={constant.component.interviewQuestionByCompany.url} target="_blank"><div className='more-item-box'><a className='rg-onHoverButton'>Explore more Companies</a> </div></Link>
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
                        {PREMIUM_COMPANIES && PREMIUM_COMPANIES.length>0 && PREMIUM_COMPANIES.map((item,index)=>(
                            <div className='SimilarCompanies-item' key={index}>
                              <div className='SimilarCompanies-img'>
                                { item.COMPANY_LOGO && item.COMPANY_LOGO != 'NA'?
                                    <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} />:
                                  <h3> { item.COMPANY_NAME.split(' ')[0]}</h3>
                                }
                                </div>
                              <div className='SimilarCompaniesContent'>
                              {/* <Link target="_blank" to={constant.component.companydetails.url.replace(":url",`${item.URL}-${item.EMPLOYER_ID}`)}>
                                <h4>{item.COMPANY_NAME}</h4>
                              </Link> */}
                              <Link to ={{
                                pathname:constant.component.interviewQuestionByCompanyId.url.replace(":id",`${item.URL}`),
                                state:{EMPLOYER_ID:item.EMPLOYER_ID}
                              }}>
                                 <h4 className='rg-onMouseHover'>{item.COMPANY_NAME}</h4>
                              </Link>
                                <div className='companyReviews'>
                                  <i className='fa fa-star' style={{color:'#f3c618'}}></i>
                                  <p class="companytotalReviews" style={{color:'#e62e2d',paddingLeft:'2px'}}>
                                    {/* {item.rating.toFixed(1)} */}
                                    0 reviews
                                   
                                    </p>

                                </div>
                              </div>
                            </div>
                        ))}

                            <div className='viewallbox'><a className='rg-onHoverButton' href={constant.component.companieslist.url} target="_blank">View all</a></div>

                          </div>


                          </div>

                          </div>
                        </div>

                    </div>
                </div>
                </div>
                </div>
            
                </div>
                </main>        
      </React.Fragment>
    )
  }
}
