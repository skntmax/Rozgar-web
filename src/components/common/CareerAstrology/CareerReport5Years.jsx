import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import constant from '../../../constant'
import { capFirstLetterInSentence } from '../../../utils';
import CareerAstrologyRightSection from './CareerAstrologyRightSection'

export default class CareerReport5Years extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.careerReport5Years
    }
  render() {
    return (
        <React.Fragment>
             <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Career Report 5 Year is a perfect report for those looking forward for planning & preparing strategy in their career based on the favourable & unfavourable periods for the next 5 years along with accurate Astrological Guidance and predictions."} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Career Report 5 Year is a perfect report for those looking forward for planning & preparing strategy in their career based on the favourable & unfavourable periods for the next 5 years along with accurate Astrological Guidance and predictions."} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Career Report 5 Year is a perfect report for those looking forward for planning & preparing strategy in their career based on the favourable & unfavourable periods for the next 5 years along with accurate Astrological Guidance and predictions."} />
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
                            <h1 className='text-center'>Career Report 5 Years</h1>
                            <ol className='breadcrumb-list-bx'>
                                <li><a href={constant.component.homepage.url}>Home</a></li>
                                <li><a href={constant.component.careerAstrology.url}>Career Astrology Services</a></li>
                              
                               
                                <li><a href=''>Career Report 5 Years</a></li>
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
                            <div className='asto-images-bx'><img src={'./assets/images/career-report-year5.jpg'} alt='Image' /></div>
                            <h4>Get Rewarding Career Solutions For Five Years With Career Report 5 Years,</h4>
                            <h5>Detailed Solutions With Career Report 5 Years</h5>
                            <p>Career Report 5 Year is a perfect report for those looking forward for planning & preparing strategy in their career based on the favourable & unfavourable periods for the next 5 years along with accurate Astrological Guidance and predictions.</p>
                            <p>Business Report 1 Year, Remedial Solution for Business, Strength Reading for Business are our astrological solutions offered to you when you consult our famous astrologer. Astrological report consists of useful answers, guidance and reading to improve your understanding of situations around you and prompt you how to get success through remedial measures as described in the report.</p>
                           

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
