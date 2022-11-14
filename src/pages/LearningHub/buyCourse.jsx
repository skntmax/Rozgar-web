import React, { Component } from 'react'
import BuyCourse from "../../../src/components/LearningHub/buyCourse"
import { courseListById } from '../../action/CandidateAction';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { capFirstLetterInSentence } from '../../utils';

class buyCourse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: undefined
    }
  }

  componentDidMount() {
    const url = this.props.match.params.url;
    courseListById(url).then((res) => {
      if (res.status) {
        this.setState({ details: res.result });
        document.title = res.result
          ? `${res.result?.COURSE_TITLE} || Learning Hub || Rozgar.com`
          : `Learning Hub || Rozgar.com`;
      }
    });
  }
  render() {
    console.log("details", this.state.details);
    return (
      <React.Fragment>
        <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Search &amp; Apply Premimum Full Stack Developer Jobs at Rozgar. Explore Full Stack Developer Jobs and Vacancies in your desired locations now!"} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Search &amp; Apply Premimum Full Stack Developer Jobs at Rozgar. Explore Full Stack Developer Jobs and Vacancies in your desired locations now!"} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Search &amp; Apply Premimum Full Stack Developer Jobs at Rozgar. Explore Full Stack Developer Jobs and Vacancies in your desired locations now!"} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
</Helmet>
        <BuyCourse
          details={this.state.details}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(buyCourse);