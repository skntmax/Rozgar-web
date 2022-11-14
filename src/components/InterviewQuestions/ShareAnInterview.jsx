import React, { Component } from 'react'

export default class ShareAnInterview extends Component {
  render() {
    return (
        <main id="rg-main" className="rg-main rg-haslayout pt-0">
            <div className="rg-share-your-interview  rg-haslayout pt-0">
                <div className="rozgar-interviewShare">
                    <div className="container">
                        <div className="row">
                             <div className="col-12 col-sm-12 col-md-4">
                                <div className="fxt-bg-img interviewsformbox-left-box" data-bg-image={'./assets/images/share-jobs.png'}
										style={{
											background: "rgb(255 229 229) url(" + "./assets/images/share-jobs.png" + ")",
											backgroundPosition: 'bottom 30px center',
											backgroundSize: '75%',
											backgroundRepeat: 'no-repeat'
										}}>
                                        <h4 className='interview-titles-bx text-uppercase'>Share your<br/><span className='font-weight-normal sharintervtext'>interview questions</span> & help people get their<br/><span className='font-weight-normal sharintervtext'>dream job!</span></h4>

                                        
                                </div>      
                            </div>

                            <div className="col-12 col-sm-12 col-md-8">
                                <div className='interviewsformbox'>
                                    <div className='tob-Bling-box'>

                                         <h5><span><img src={'./assets/images/sare-user.png'} alt='img description' /> 296 people</span> shared their advice in the last hour! So can you!</h5>
                                    </div>
                                 
                                    <div className='interviewShare-form-box'>
                                            
                                           <form action=''>
                                              
                                                <div className='row'>
                                                    <div className='field col-md-6'>
                                                        <label for='comname'>Company*</label>
                                                        <input type='text' name='comname' id='comname' placeholder=' ' />
                                                    </div>
                                                    <div className='field col-md-6'>
                                                        <label for='jobtitle'>Job Title*</label>
                                                        <input type='text' name='jobtitle' id='jobtitle' placeholder=' ' />
                                                    </div>
                                                    <div className='field col-md-12 pt-2'>
                                                        <label for='skillsname'>Skills*</label>
                                                        <input type='text' name='skillsname' id='skillsname' placeholder=' ' />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                     <div className='field col-md-12'>
                                                        <div className='inter-process-heading'>
                                                            <h5>Share details of your interview process <img src={'./assets/images/interview-process.png'} alt='img description' /></h5>

                                                        </div>
                                                        <div className='inter-process-round-head'>
                                                            <h5>What was round 1? <a href=''><i className="fa fa-plus addmultiqus"></i></a></h5>
                                                        </div>
                                                        <div className='interview-round-chips-list'>
                                                            <a className='ab_chip body-medium'>Resume Shortlist</a>
                                                            <a className='ab_chip body-medium' data-toggle='collapse' data-target='#roundinterinput01'>Aptitude Test</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#roundinterinput02'>Coding Test</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#roundinterinput03'>Group Discussion</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#roundinterinput04'>Assignment</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#roundinterinput05'>Case Study</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#roundinterinputhr01'>HR</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#addinterviewquestion02'>Technical</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#addinterviewquestion'>One-on-one Round</a>

                                                            <a className='ab_chip body-medium other-input-bx'><input type='input' contenteditable='true' placeholder='Other' data-placeholder='Other' spellcheck='false' className='input-chip' /></a> 
                                                         
                                                            <div id='roundinterinput01' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                    <label for='fullname'>Share details of the aptitude test - duration, topics etc.</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className='field col-md-12'>
                                                                    <div className='field checkbox-final-round'>
                                                                        <div class='checkbox'>
                                                                        <label className='lablecheckbox'><input type='checkbox' value=''/> This was my final round.</label>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id='roundinterinput02' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                    <label for='fullname'>Share details of the aptitude test - duration, topics etc.</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className='field col-md-12'>
                                                                    <div className='field checkbox-final-round'>
                                                                        <div class='checkbox'>
                                                                        <label className='lablecheckbox'><input type='checkbox' value=''/> This was my final round.</label>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id='roundinterinput03' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                    <label for='fullname'>Share details of the aptitude test - duration, topics etc.</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className='field col-md-12'>
                                                                    <div className='field checkbox-final-round'>
                                                                        <div class='checkbox'>
                                                                        <label className='lablecheckbox'><input type='checkbox' value=''/> This was my final round.</label>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id='roundinterinput04' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                    <label for='fullname'>Share details of the aptitude test - duration, topics etc.</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className='field col-md-12'>
                                                                    <div className='field checkbox-final-round'>
                                                                        <div class='checkbox'>
                                                                        <label className='lablecheckbox'><input type='checkbox' value=''/> This was my final round.</label>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div> 

                                                            <div id='roundinterinputhr01' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                    <label for='fullname'>Add HR question</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                
                                                                    <div className='field col-md-12'>
                                                                    <div className='field checkbox-final-round'>
                                                                        <div class='checkbox'>
                                                                        <label className='lablecheckbox'><input type='checkbox' value=''/> This was my final round.</label>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                

                                                                </div>
                                                            </div>

                                                            <div id='addinterviewquestion02' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                        <label for='fullname'>Add interview question</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                  
                                                                    <div className='field col-md-12'>
                                                                    <div className='field checkbox-final-round'>
                                                                        <div class='checkbox'>
                                                                        <label className='lablecheckbox'><input type='checkbox' value=''/> This was my final round.</label>
                                                                        </div>
                                                                    </div>
                                                                    </div>

                                                                </div>
                                                            </div>   
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div className='row'>
                                                     <div className='field col-md-12 pt-5'>
                                                       
                                                        <div className='inter-process-round-head'>
                                                            <h5>What was round 2?  <a href=''><i className="fa fa-plus addmultiqus"></i></a></h5>

                                                        </div>
                                                        <div className='interview-round-chips-list'>
                                                            <a className='ab_chip body-medium'>Resume Shortlist</a>
                                                            <a className='ab_chip body-medium' data-toggle='collapse' data-target='#roundinterinput06'>Aptitude Test</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#roundinterinput07'>Coding Test</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#roundinterinput08'>Group Discussion</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#roundinterinput09'>Assignment</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#roundinterinput10'>Case Study</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#roundinterinputhr05'>HR</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#addinterviewquestion06'>Technical</a>
                                                            <a className='ab_chip body-medium'  data-toggle='collapse' data-target='#addinterviewquestion'>One-on-one Round</a>

                                                            <a className='ab_chip body-medium other-input-bx'><input type='input' contenteditable='true' placeholder='Other' data-placeholder='Other' spellcheck='false' className='input-chip' /></a> 
                                                         
                                                            <div id='roundinterinput06' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                    <label for='fullname'>Share details of the aptitude test - duration, topics etc.</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id='roundinterinput07' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                    <label for='fullname'>Share details of the aptitude test - duration, topics etc.</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id='roundinterinput08' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                    <label for='fullname'>Share details of the aptitude test - duration, topics etc.</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>   

                                                            <div id='roundinterinputhr05' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                    <label for='fullname'>Add HR question</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                  

                                                                </div>
                                                            </div>

                                                            <div id='addinterviewquestion06' class='collapse'>
                                                                <div className='row'>
                                                                    <div className='field col-md-12'>
                                                                    <label for='fullname'>Add interview question</label>
                                                                        <input type='text' name='fullname' placeholder='' contenteditable='true' data-placeholder=''  spellcheck='false' class='input-chip' />
                                                                        <div className='text-right'>
                                                                            <a href='' className='qaaddmore'><i class="fa fa-plus"></i> Add More</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>   
                                                        </div>
                                                    </div>
                                                </div> 

                                                  <div className='row'>
                                                     <div className='field field-textarea col-md-12'>
                                                     <div className='field job-seekers-lable' id='textarea-div'>
                                                        <label>Share advice for job seekers* <img src={'./assets/images/praying-hands.png'} alt='img description' /></label>
                                                        <textarea placeholder='Share your tips'  />
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                     <div className='field col-md-12'>
                                                     <div className='field'>
                                                        <div class='checkbox'>
                                                           <label className='lablecheckbox'><input type='checkbox' value=''/> Keep this interview anonymous</label>
                                                        </div>
                                                      </div>
                                                    </div>
                                                </div>
                                               
                                                <div className='row'>
                                                     <div className='field col-md-12'>
                                                     <div className='field'>
                                                     <button class="interview-Submit-btn">Submit</button>
                                                      </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                     <div className='field col-md-12'>
                                                     <div className='field-para-interview'>
                                                       <p>By submitting I agree to the <a href=''>community guidelines</a>, <a href=''>terms of use</a> and <a href=''>privacy policy </a> of Rozgar.com</p>
                                                      </div>
                                                    </div>
                                                </div>          
                                                    
                                                    
                                            </form>


                                    </div>    
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </main> 
    )
  }
}
