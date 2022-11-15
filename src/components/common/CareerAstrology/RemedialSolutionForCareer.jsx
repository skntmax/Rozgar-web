import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import constant from '../../../constant'
import { capFirstLetterInSentence } from '../../../utils';
import CareerAstrologyRightSection from './CareerAstrologyRightSection'

export default class RemedialSolutionForCareer extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.remedialSolutionForCareer
    }
  render() {
    return (
      <React.Fragment>
                        <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + "Get remedial solution for career or career problem solutions based on your astrological chart. Career remedies offered by Astrologer Umesh can be deemed potentially useful for your chosen career, in terms of bringing desired growth in it and helping you experience promotion and growth in salary and designation etc"} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + "Get remedial solution for career or career problem solutions based on your astrological chart. Career remedies offered by Astrologer Umesh can be deemed potentially useful for your chosen career, in terms of bringing desired growth in it and helping you experience promotion and growth in salary and designation etc"} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + "Get remedial solution for career or career problem solutions based on your astrological chart. Career remedies offered by Astrologer Umesh can be deemed potentially useful for your chosen career, in terms of bringing desired growth in it and helping you experience promotion and growth in salary and designation etc"} />
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
                                    <h1 className='text-center'>Remedial Solution for Career</h1>
                                    <ol className='breadcrumb-list-bx'>
                                        <li><a href={constant.component.homepage.url}>Home</a></li>
                                        <li><a href={constant.component.careerAstrology.url}>Career Astrology Services</a></li>
                                      
                                       
                                        <li><a href=''>Remedial Solution for Career</a></li>
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
                                    <div className='asto-images-bx'><img src={'./assets/images/remedial-solution-career.jpg'} alt='Image' /></div>
                                    <h4>The Ultimate And Trusted Remedial Solution For Career For You</h4>
                                    <h5>Remedial Solution For Career Using Best Gemstone You Should Wear.</h5>
                                    <p>Get remedial solution for career or career problem solutions based on your astrological chart. Career remedies offered by Astrologer Umesh can be deemed potentially useful for your chosen career, in terms of bringing desired growth in it and helping you experience promotion and growth in salary and designation etc. Our Remedial Solutions for Career or Career Remedies involve deep study of your planets and their transits, plus consideration of other factors as per Vedic Astrology principles. Based on study and result thereafter, recommendation about career Gemstone you should wear, and other effective astrological tips for career growth will be given to you.</p>
                                    <p>Our famous astrologer offers constructive solutions through services such as Career Ask 3 Question, Business Report 1 Year, Remedial Solution for Business. Problem originating from any source of your life, our astrologer can address the same with efficient remedial measure. Consult for more details and guidance.</p>
                                   

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
