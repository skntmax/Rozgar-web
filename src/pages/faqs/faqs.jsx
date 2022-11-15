import React, { Component } from 'react'
import Faqs from '../../components/faqs/faqs'
import constant from '../../constant'
import { FAQCategoryList, FAQList } from '../../action/FAQAction';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { capFirstLetterInSentence } from '../../utils';

export default class faqs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      data: [],
      keywordList: [],
      keyword: "",
      showQuickShimmer: true,
      showBrowseShimmer: true,

    }
  }

  componentDidMount() {
    const { keyword } = this.state
    document.title = constant.title.Faqs
    this.getFAQlist(this.state.keyword)
    this.getCategoryList()
    window.scrollTo(0, 0)

    console.log("props1", this.props.history);
  }

  getCategoryList = () => {
    this.setState({ showQuickShimmer: true })
    FAQCategoryList().then((res) => {
      this.setState({ data: res.result })
      this.setState({ showQuickShimmer: false })
    }).catch((err) => {
      alert(err)
    })
  }

  getFAQlist = (keyword) => {
    this.setState({ showBrowseShimmer: true })
    FAQList({ KEYWORD: keyword }).then((res) => {
      this.setState({ list: res.result })
      this.setState({ showBrowseShimmer: false })
    }).catch((err) => {
      alert(err)
    })
  }

  updateKeyword = (keyword) => {
    this.setState({ KEYWORD: keyword })
    this.getFAQlist(keyword)

  }


  render() {
    return (
      <React.Fragment>
           <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + ", Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Learn how to create Job profile, Search and Apply jobs and many more on  Rozgar.com."} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Learn how to create Job profile, Search and Apply jobs and many more on   Rozgar.com."} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" /><br/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Learn how to create Job profile, Search and Apply jobs and many more on   Rozgar.com."} />
<meta name="twitter:url"content= {window.location.href} />
<meta name="twitter:image"  content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png"  />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
</Helmet>
        <Faqs list={this.state.list} data={this.state.data}
          keyword={(e) => { this.updateKeyword(e) }}
          showQuickShimmer={this.state.showQuickShimmer}
          showBrowseShimmer={this.state.showBrowseShimmer}
        />

      </React.Fragment>
    )
  }

}
