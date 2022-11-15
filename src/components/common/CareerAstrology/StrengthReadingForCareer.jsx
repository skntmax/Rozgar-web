import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import constant from '../../../constant'
import { capFirstLetterInSentence } from '../../../utils';
import CareerAstrologyRightSection from './CareerAstrologyRightSection'

export default class StrengthReadingForCareer extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentDidMount(){
        document.title = constant.title.strengthReadingForCareer
    }
  render() {
    return (
        <React.Fragment>
                            <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " This involves deep study of your celestial bodies and their subjective influence in your chosen career. Thereafter, we decide whether the chosen career is good for your growth in future or you should better choose another career that fits your personality"} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " This involves deep study of your celestial bodies and their subjective influence in your chosen career. Thereafter, we decide whether the chosen career is good for your growth in future or you should better choose another career that fits your personality"} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " This involves deep study of your celestial bodies and their subjective influence in your chosen career. Thereafter, we decide whether the chosen career is good for your growth in future or you should better choose another career that fits your personality"} />
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
                                    <h1 className='text-center'>Strength Reading For Career</h1>
                                    <ol className='breadcrumb-list-bx'>
                                        <li><a href={constant.component.homepage.url}>Home</a></li>
                                        <li><a href={constant.component.careerAstrology.url}>Career Astrology Services</a></li>
                                      
                                       
                                        <li><a href=''>Strength Reading For Career</a></li>
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
                                    <div className='asto-images-bx'><img src={'./assets/images/strength-reading-career.jpg'} alt='Image' /></div>
                                    <h4>Get Strength Reading For Career For Career Headway And Solutions In It</h4>
                                    <h5>Create Headway With Strength Reading For Career To Know Your Strength</h5>
                                    <p>Get Comprehensive Guidance With Strength Reading For Career.</p>
                                    <p>Strength Reading for Career is our astrological offering to help you knowing your strengths through your Career Horoscope. This involves deep study of your celestial bodies and their subjective influence in your chosen career. Thereafter, we decide whether the chosen career is good for your growth in future or you should better choose another career that fits your personality. Furthermore, we can also let you use our expertise in astrology predictions why you don’t get desired growth in your chosen career. Recommendations what we give are based on our study through astrological approach. Get your career strength with our Astrology Services.</p>
                                    <p>Our solutions offered through Strength Reading for Business, Career Report 2 Year, Career Report 3 Year carry the weight of healing effects. Choose any of the above based on your life’s problem and get the solution right away. Our astrologer is famed for having solved problems of thousands of people in their pursuit of mental peace, happiness and prosperity.</p>
                                   

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
