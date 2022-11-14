import React, { Component } from 'react'
import Profile from '../../components/myAccount/profile'
import constant from '../../constant';
import { RecommendedJobs, SaveJobs, getSaveJobList } from '../../action/CandidateAction';
import { topCompanyList } from '../../action/dashboard';
import { Helmet } from 'react-helmet';
import { capFirstLetterInSentence } from '../../utils';

export default class myRozgar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      featuredList: [],
      totalCount: "",
      showShimmer: true,
    }
  }
  componentDidMount() {
    document.title = constant.title.MyRozgar
    window.scrollTo(0, 0)
    this.RecommendedJobsList()
    this.FeaturedCompanyList()
  }

  RecommendedJobsList = () => {
    RecommendedJobs().then((res) => {
      if (res.status) {
        setTimeout(() => {
          this.setState({ showShimmer: false })
        }, 1000)
      }
      this.setState({ totalCount: res.result.total })
      this.setState({ list: res.result.recommendedJobList })
    }).catch((err) => {
            console.log(err)
    })
  }

  FeaturedCompanyList = () => {
    topCompanyList().then((res) => {
      this.setState({ featuredList: [res.result.featured2darr[0].one, res.result.featured2darr[0].two, res.result.featured2darr[0].three, res.result.featured2darr[0].four] })
    }).catch((err) => {
      console.log(err)
    })
  }

onProgress = () =>{
  this.props.history.push(constant.component.editProfile.url);
}


  render() {

    return (
      <React.Fragment>
          <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
</Helmet>
        <Profile
          totalCount={this.state.totalCount}
          list={this.state.list}
          recommendedJobList={this.RecommendedJobsList}
          featuredList={this.state.featuredList}
          FeaturedCompanyList={this.FeaturedCompanyList}
          showShimmer={this.state.showShimmer}
          onProgress = {this.onProgress}
        />
      </React.Fragment>
    )
  }
}
