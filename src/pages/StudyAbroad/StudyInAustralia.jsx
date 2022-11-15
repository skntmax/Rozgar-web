import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import StudyInAustralia from '../../components/StudyAbroad/StudyInAustralia';
import constant from '../../constant';
import { capFirstLetterInSentence } from '../../utils';

export default class studyInAustralia extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.studyInAustralia
    }
  render() {
    return (
      <React.Fragment>
               <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " | Rozgar.com"}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Australia is a land of wonders- from the fantastically diverse wildlife to the astonishingly beautiful places, Australia is a country full of potential. Australia also has a booming economy- it is the 14th largest economy in the world. It is also a welcoming place, with immigrants accounting for 30% of the population which makes Australia the country with the highest proportion of immigrants among those with a population of over 10 million. India- Australia relations are also very good, and like India, Australia is also a democracy. In fact, it is the eighth-highest ranked democracy globally."} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + "  -Australia is a land of wonders- from the fantastically diverse wildlife to the astonishingly beautiful places, Australia is a country full of potential. Australia also has a booming economy- it is the 14th largest economy in the world. It is also a welcoming place, with immigrants accounting for 30% of the population which makes Australia the country with the highest proportion of immigrants among those with a population of over 10 million. India- Australia relations are also very good, and like India, Australia is also a democracy. In fact, it is the eighth-highest ranked democracy globally."} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Australia is a land of wonders- from the fantastically diverse wildlife to the astonishingly beautiful places, Australia is a country full of potential. Australia also has a booming economy- it is the 14th largest economy in the world. It is also a welcoming place, with immigrants accounting for 30% of the population which makes Australia the country with the highest proportion of immigrants among those with a population of over 10 million. India- Australia relations are also very good, and like India, Australia is also a democracy. In fact, it is the eighth-highest ranked democracy globally."} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
</Helmet>
        <StudyInAustralia/>
      </React.Fragment>
    )
  }
}
