import { param } from 'jquery';
import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { courseDetails, getCollegeDetail, getSimilarCollegeList } from '../../action/CandidateAction';
import CareerExplorerDetail from '../../components/StudentsExplorer/CareerExplorerDetail';
import constant from '../../constant';
import { capFirstLetterInSentence } from '../../utils';
export default class careerExplorerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similarListData: [],
      detailList: [],
      showShimmer: true,
      courseList:[]
    }
  }

  componentDidMount() {
    document.title = constant.title.CareerExplorerDetail
    const URL = this.props.match.params.url
    this.getSimilarColleges()
    this.getCollegeDetails(URL)
  }

  getSimilarColleges = () => {
    getSimilarCollegeList().then((res) => {
      if (res.status) {
        setTimeout(() => {
          this.setState({ showShimmer: false })
        }, 1000)
        this.setState({ similarListData: res.result.list })
      }
    }).catch((err => {
      alert(err)
    }))
  }

  getCollegeDetails = (ENTITY_ALIAS) => {
    getCollegeDetail(ENTITY_ALIAS).then((res) => {
      console.log("res.result.list ",res.result.list );
      if (res.status) {
        this.setState({ detailList: res.result.list })
        this.allCourses(res.result.list[0].COLLEGE_ID)
      }
    }).catch((err) => {
      alert(err)
    })
  }

  allCourses = (COLLEGE_ID) => {
    courseDetails(COLLEGE_ID).then((res)=>{
      this.setState({courseList:res.result})
    }).catch(err=>alert(err))
  }

  render() {

    return (
      <React.Fragment>

<Helmet>


<title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " Overview – Know more about job opportunities, employee feedback and Ratings, work culture, immediate hirings etc at Rozgar.com."}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />

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
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" />
</Helmet>
        <CareerExplorerDetail
          similarListData={this.state.similarListData}
          showShimmer={this.state.showShimmer}
          detailList={this.state.detailList}
          courseList={this.state.courseList}
        />
      </React.Fragment>
    )
  }
}
