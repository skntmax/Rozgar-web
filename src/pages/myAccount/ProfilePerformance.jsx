import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { profilePreview, recruitorAction } from "../../action/profilePreviewAction";
import ProfilePerformance from "../../components/myAccount/ProfilePerformance";
import constant from "../../constant";
import { capFirstLetterInSentence, getStorage } from "../../utils";
export default class ProfilePerformances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: undefined,
      detail: getStorage(constant.keys.cd),
      list:undefined,
      status:undefined
    };
  }
  Preview = () => {
    const { detail } = this.state;
    const { CANDIDATE_ID } = detail ? detail : "";
    if (CANDIDATE_ID) {
      profilePreview(CANDIDATE_ID)
        .then((res) => {
          this.setState({count:res.result.count.total,list:res.result.res,status:res.result.status.total});
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  Recruit = () => {
    const { detail } = this.state;
    const { CANDIDATE_ID } = detail ? detail : "";
    if (CANDIDATE_ID) {
      recruitorAction(CANDIDATE_ID)
        .then((res) => {
          this.setState({list1:res.result.res,status:res.result.status.total});
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
  componentDidMount() {
    document.title = constant.title.ProfilePerformance;
    this.Preview();
    this.Recruit();
  }

  render() {
    const {list,count,status,list1} = this.state
    return (
      <React.Fragment>
           <Helmet >


<title title={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}>{capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " , Jobs in India, Jobs in Noida, Search & Apply Job"}></meta>
<meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<link rel="canonical" href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<meta property="og:url" content={window.location.href} />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + constant.metaDescription} />
<meta name="twitter:url" content={window.location.href} />
<meta name="twitter:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" />
</Helmet>
        <ProfilePerformance List = {list}
        List1 = {list1}
        Count = {count}
        Status = {status}
        />
      </React.Fragment>
    );
  }
}
