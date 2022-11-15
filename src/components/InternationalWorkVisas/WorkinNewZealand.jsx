import React, { Component } from 'react'
import InternationalWorkEnquryRight from './InternationalWorkEnquryRight'
import constant from '../../constant'
import { Helmet } from 'react-helmet';
import { capFirstLetterInSentence } from '../../utils';

export default class WorkinNewZealand extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.workinNewZealand
    }
  render() {
    return (
      <React.Fragment>
               <Helmet >
{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " Do you want to build a career and life abroad? As one of the world’s leading overseas career specialists and a leading work visa agent, Rozgar has helped thousands of individuals and families settle in the world’s most liveable countries."} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " Do you want to build a career and life abroad? As one of the world’s leading overseas career specialists and a leading work visa agent, Rozgar has helped thousands of individuals and families settle in the world’s most liveable countries."} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " Do you want to build a career and life abroad? As one of the world’s leading overseas career specialists and a leading work visa agent, Rozgar has helped thousands of individuals and families settle in the world’s most liveable countries."} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
</Helmet>
         <main id="rg-main" className="rg-main rg-haslayout pt-0 ">
        <div className='breadcrumb-banner-area work-in-new-zealand-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='breadcrumb-text work-country'>
                            <h1 className='text-center'>Work in New Zealand</h1>
                            <ol className='breadcrumb-list-bx'>
                                <li><a href={constant.component.homepage.url}>Home</a></li>
                                <li><a href={constant.component.internationalWorkVisas.url}>International work Visas</a></li>
                                <li><a href=''>Work in New Zealand</a></li>
                            </ol>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='main-section-box '>
            <div className='container'>
                <div className='row'>

                    <div className='col-md-8'>
                        <div className='content-main-box'>
                            <div className='asto-images-bx'><img src={'./assets/images/work-new-zealand.jpg'} alt='Image' /></div>
                            <h4>Work & Settle Abroad With Your Family</h4>
                            
                            <p>Do you want to build a career and life abroad? As one of the world’s leading overseas career specialists and a leading work visa agent, Rozgar has helped thousands of individuals and families settle in the world’s most liveable countries. We’ve seen firsthand how moving abroad can dramatically improve not just the migrant’s life but that of their family and parents. With our comprehensive overseas career solutions, we are the #1 choice for professionals seeking to work abroad.</p>
                            <h4>End To End Job Search Services*</h4>
                            <p>Rozgar has streamlined the steps involved in working abroad to make your journey smoother. Our process is aimed at making your profile more accessible, attractive and engaging. Our services begin with helping you create a resume that meets international standards and help you craft an engaging LinkedIn profile. We then market your profile in the countries of your choice and work to get you interview calls. A dedicated Job Search consultant will work with you on your international career, guiding you through the process.</p>
                           
                            <h4>Our job search services* include the following:</h4>
                          
                           
                             <ul className='study-list-bx'>
                                <li><b>Job Search Strategy Report:</b> With the help of experts, we create a comprehensive report based on your profile and decide on positioning it in your target country</li>
                                <li><b>Opportunity Research:</b> We identify industry trends and job sources to get you more job offers. We help you modify your profile to present it on different platforms</li>
                                <li><b>Job Applications:</b> We register your profile on various portals and job sites and even apply to relevant job postings on your behalf</li>
                               

                             </ul>
                            


                           

                        </div>

                    </div>
                    {<InternationalWorkEnquryRight/>}
                   
                    
                 
                </div>
            </div>
        </section>
        
    </main>
      </React.Fragment>
    )
  }
}
