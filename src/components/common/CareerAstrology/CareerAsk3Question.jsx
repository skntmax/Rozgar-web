import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import constant from '../../../constant'
import { capFirstLetterInSentence } from '../../../utils';
import CareerAstrologyRightSection from './CareerAstrologyRightSection'

export default class CareerAsk3Question extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.careerAsk3Question
    }
  render() {
    return (
       <React.Fragment>
         <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Career Ask 1 Question and its answer given by expert astrologer, Pt. Umesh Chandra Pant will open the various avenues for growth, promotion and success in your chosen career endeavor. Question related to what underscores the problematic point of your professional activity can be asked to our astrologer"} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Career Ask 1 Question and its answer given by expert astrologer, Pt. Umesh Chandra Pant will open the various avenues for growth, promotion and success in your chosen career endeavor. Question related to what underscores the problematic point of your professional activity can be asked to our astrologer"} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Career Ask 1 Question and its answer given by expert astrologer, Pt. Umesh Chandra Pant will open the various avenues for growth, promotion and success in your chosen career endeavor. Question related to what underscores the problematic point of your professional activity can be asked to our astrologer"} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
</Helmet>
          <main id="rg-main" className="rg-main rg-haslayout pt-0 ">
                <div className='breadcrumb-banner-area header-inner-astrology'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='breadcrumb-text'>
                                    <h1 className='text-center'>Career Ask 3 Question</h1>
                                    <ol className='breadcrumb-list-bx'>
                                        <li><a href={constant.component.homepage.url}>Home</a></li>
                                        <li><a href={constant.component.careerAstrology.url}>Career Astrology Services</a></li>
                                      
                                       
                                        <li><a href=''>Career Ask 3 Question</a></li>
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
                                    <div className='asto-images-bx'><img src={'./assets/images/career-ask-question3.jpg'} alt='Image' /></div>
                                    <h4>Career Ask 3 Questions For New Insights Into Your Chosen Profession</h4>
                                    <h5>Get The Answer Of Your Career Questions To Create Positive Headway</h5>
                                    <p>For questions related to any aspect of your professional activities, choose our Career Ask 3 Questions for the remedial answers which will work in your situation positively. The answers to your questions are based on our astrologer’s acute analysis of your current situation. Besides, you can choose your Ask 3 Question from the troubling aspect of your career.</p>
                                    <p>Career Report 1 Year, Remedial Solution for Career, Strength Reading For Career are some of the astrological services that we make available at the most affordable price. Each of these services has its respective benefits for you. Consult our astrologer to get recommended to a better option for you based on your life’s ongoing problems.  </p>
                                   

                                </div>

                            </div>
                           
                           {<CareerAstrologyRightSection />}
                         
                        </div>
                    </div>
                </section>
                
            </main>
       </React.Fragment>
    )
  }
}
