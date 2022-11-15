import React, { Component } from 'react'
import constant from '../../constant'
import { Link, NavLink } from 'react-router-dom';
import Loader from '../common/Loader';
export default class JobsearchIndia extends Component {
   
   state={
    detail:this.props
   }
    
componentDidMount(){
     window.scroll(0,0);
    // this.props.getAllJobSearchIndia()
}

    render() {
        console.log("detail",this.props.List);
        const {List} = this.props
        return (
            <React.Fragment>
                <main id="rg-main" className="rg-main rg-haslayout pt-0">
                    <div className="rg-sectionspace rg-haslayout pt-0">
                         <div className="rozgar-jobbylocsearch">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 offset-1">
                                    
                                    <h4 style={{fontSize:'35px', color:'white',textAlign:'center',width:'100%'}}>Job Search India</h4>
                                        
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className= 'rozgar-profile-main-content'>
                            <div className='container'>
                                <div className='row'>
                                    <div className= 'col-md-9' >
                                        <ul>{List?.map((item,index)=>{
                                            return(<li style={{width:'33%', float:'left'}}><Link style={{color:'#333333'}} to={constant.component.jobsearchIndiaDetail.url.replace(':KEYWORD_URL', item.KEYWORD_URL)}>{item.KEYWORD_NAME}</Link></li>)
                                        })}</ul>
                                        
                                      
                                        
                                
                                        
                                       
                                       

                                        

                                    </div>
                                    <div className='col-md-3'>
                                    <div className='rightform1'>
                                    

                                     <div className='roz-create-cv'>
                                        <div className='urgent-hiring-area'>
                                          <div className='hiring-img'>
                                            <img src='../assets/images/announce-img01.png' />
                                          </div>
                                          <div className='immediate-joiners'>
                                            <a href='/jobs/hiring-fresher'>Immediate Joiners</a>
                                          </div>
                                        </div>
                                        <a target='_blank' href='/resume-making'>
                                          <div className='imgfree'>
                                            <img src='../assets/images/cv-pic01.png' />
                                          </div>
                                          <div className='create-cv-bg'>
                                            <div className='create-text'>
                                              <div className='free-text'>Free</div>
                                              <h4>Create CV</h4>
                                            </div>
                                            <div className='btn-cv'>
                                              <i className='fa fa-angle-double-right'></i>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                       
                                      <div className='create-free-job-alert new-create-free'>
                                        <div className='create-free-job-box'>
                                            <h3>Create a Free Job Alert</h3>
                                            <p>Get an email on jobs matching your criteria</p>
                                            <span className='no-reg-r'>No registration required</span>
                                        </div>
                                        <div className='create-job-alert-btn'><a href={constant.component.CreateJobAlert.url}>CREATE JOB ALERT</a></div>
                                      </div>
                                      <div className='rg-adds rg-jobsearchadd swiggyjobs-bx'>
                                        <a target='_blank' href='https://recruit.rozgar.com/job-post' title=''>
                                          <figure>
                                            <img src='../../assets/images/post-a-job.jpg' alt='img description' style={{padding: "0px" }} />
                                          </figure>
                                        </a>
                                       
                                      </div>
                                      <div className='rg-adds rg-jobsearchadd swiggyjobs-bx'>
                                        <a target='_blank' href={constant.component.StudentsExplorer.url} title=''>
                                          <figure>
                                            <img src='../../assets/images/career-explorer.jpg' alt='img description' style={{padding: "0px" }} />
                                          </figure>
                                        </a>
                                       
                                      </div>

                                     <div className='rg-adds rg-jobsearchadd swiggyjobs-bx mb'>
                                        <a href='javascript:void(0);' title=''>
                                          <figure>
                                            <img src='../../assets/images/swiggyjobs.jpg' alt='img description' />
                                          </figure>
                                        </a>
                                        <span>Ad</span>
                                    </div>
                                   
                                    <div className='rg-adds rg-jobsearchadd'>
                                        <a href='javascript:void(0);' title=''>
                                          <figure>
                                            <img src='../../assets/images/adds-05.jpg' alt='img description' />
                                          </figure>
                                        </a>
                                        <span>Ad</span>
                                      </div>
                                      </div>
                                        <div className='rightform'>
                                            <h3>Popular Searches</h3>
                                            <ul className='popuraljobIncity'>
                                                <li><a href='https://rozgar.com/search-job?keyword=PHP%20Developer&location=Noida'>Latest PHP Jobs in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=full%20stack%20developer&location=noida">Full Stack Developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=React%20JS&location=noida">React Js Developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=JavaScript&location=noida">JavaScript Developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=UI%20Developer&location=noida">UI developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=mern%20developer&location=noida">Mern Developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=cloud%20computing&location=noida">Cloud Computing in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=IT&location=Noida">IT Jobs in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Python&location=noida">Python Developer in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=React%20JS&location=delhi">React Js Developer in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=JavaScript&location=delhi">JavaScript Developer in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=UI%20Developer&location=delhi">UI developer in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=cloud%20computing&location=delhi">Cloud Computing in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=PHP%20Developer&location=delhi">Latest PHP Jobs in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=full%20stack%20developer&location=delhi">Full Stack Developer in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=IT&location=delhi">IT Jobs in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Python&location=delhi">Python Developer in Delhi</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=JavaScript&location=pune">JavaScript Developer in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=UI%20Developer&location=pune">UI developer in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=cloud%20computing&location=pune">Cloud Computing in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=PHP%20Developer&location=pune">Latest PHP Jobs in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=full%20stack%20developer&location=pune">Full Stack Developer in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=full%20stack%20developer&location=pune">IT Jobs in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Python&location=pune">Python Developer in Pune</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=JavaScript&location=gurugram">JavaScript Developer in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=UI%20Developer&location=gurugram">UI developer in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=cloud%20computing&location=gurugram">Cloud Computing in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=PHP%20Developer&location=gurugram">Latest PHP Jobs in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=full%20stack%20developer&location=gurugram">Full Stack Developer in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=IT&location=gurugram">IT Jobs in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Python&location=gurugram">Python Developer in Gurugram</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=aws&location=noida">AWS in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Machine%20Learning&location=noida">Machine Learning in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=blockchain&location=noida">BlockChain in Noida</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=Java">Java Developer</a></li>
                                                <li><a href="https://rozgar.com/search-job?keyword=NLP">Natural Language Processing</a></li>
                                            </ul>
                                        </div>
                                        {/* Sponsered Add */}
                                        {/* <div class="rg-adds rg-jobsearchadd mb-20 mt-20">
                                            <a href="javascript:void(0);" title="">
                                                <figure>
                                                    <img src="./assets/images/adds-05.jpg" alt="img description" />
                                                </figure>
                                            </a>
                                            <span>Ad</span>
                                        </div> */}
                                        {/* Sponsered Add */}
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
