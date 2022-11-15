import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import constant from '../../../constant'
import { capFirstLetterInSentence } from '../../../utils';
import CareerAstrologyRightSection from './CareerAstrologyRightSection'

export default class CareerReport1Year extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.careerReport1Year
    }
  render() {
    return (
       <React.Fragment>
          <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Our renowned astrologer is the solution in the form of Remedial Solution for Career, Strength Reading For Career, Career Ask 1 Question so that you can get covered solutions for your career related problems. Get your questions answered and find the direction of how to choose a right career or make the one growth-centric for you."} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Our renowned astrologer is the solution in the form of Remedial Solution for Career, Strength Reading For Career, Career Ask 1 Question so that you can get covered solutions for your career related problems. Get your questions answered and find the direction of how to choose a right career or make the one growth-centric for you."} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Our renowned astrologer is the solution in the form of Remedial Solution for Career, Strength Reading For Career, Career Ask 1 Question so that you can get covered solutions for your career related problems. Get your questions answered and find the direction of how to choose a right career or make the one growth-centric for you."} />
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
                                    <h1 className='text-center'>Career Report 1 Year</h1>
                                    <ol className='breadcrumb-list-bx'>
                                        <li><a href={constant.component.homepage.url}>Home</a></li>
                                        <li><a href={constant.component.careerAstrology.url}>Career Astrology Services</a></li>
                                      
                                       
                                        <li><a href=''>Career Report 1 Year</a></li>
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
                                    <div className='asto-images-bx'><img src={'./assets/images/career-report-year1.jpg'} alt='Image' /></div>
                                    <h4>Growth and Success With Comprehensive Career Predictions.</h4>
                                    <h5>Rewarding Professional Career Report 1 Year</h5>
                                    <p>Want to see growth and success in your chosen career? Well, Career Horoscope Report, career astrology report, and Comprehensive Career Predictions are designed to ensure that your chosen endeavors in professional area get success and desired growth. Our Career Horoscope report consists of planetary information related to cosmic energies, celestial bodies and their relative impacts on your career. This further explains as to why growth in your chosen career doesn’t happen. With comprehensive career solution offered by our educated astrologer, you can make an inroad to your career’s success. We offer trusted and composite Career Report 1 Year containing guidance and effective remedial measures to succeed your career.</p>
                                    <p>Our renowned astrologer is the solution in the form of Remedial Solution for Career, Strength Reading For Career, Career Ask 1 Question so that you can get covered solutions for your career related problems. Get your questions answered and find the direction of how to choose a right career or make the one growth-centric for you.</p>
                                   

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
