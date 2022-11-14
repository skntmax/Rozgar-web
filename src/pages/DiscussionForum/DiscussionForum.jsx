import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import { qadiscussionSearchByInput, qaDiscussionThreadList, qaDiscussionThreadListBycategory } from '../../action/discussionFormAction';
import DiscussionForum from '../../components/DiscussionForum/DiscussionForum'
import constant from '../../constant'
import { SpinnerCircular } from 'spinners-react';
import { Helmet } from 'react-helmet';
import { capFirstLetterInSentence } from '../../utils';
export default class discussionForum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: undefined,
      loader: false,
    }
  }
  componentDidMount() {
    // console.log("history", this.props.history.location);
    // const { DISCUSSION_CATEGORY_ID } = this.props.history.location.state
    window.scroll(0, 0)
    document.title = constant.title.DiscussionForum
    // if (DISCUSSION_CATEGORY_ID) {
    //   this.DiscussionThreadListBycategory(DISCUSSION_CATEGORY_ID)
    // } else {
    this.DiscussionSearchByInput()
    // }
  }
  DiscussionSearchByInput = (Value = "") => {
    this.setState({ loader: true })
    qadiscussionSearchByInput(Value).then((res) => {
      this.setState({ list: res.result, loader: false })
    }).catch((err) => {
      alert(err);
    })
  }
  DiscussionSearchByInput1 = (Value = "") => {
    qadiscussionSearchByInput(Value).then((res) => {
      this.setState({ list: res.result })
    }).catch((err) => {
      alert(err);
    })
  }

  DiscussionThreadListBycategory = (data) => {
    qaDiscussionThreadListBycategory(data).then((res) => {
      this.setState({ list: res.result })
    }).catch((err) => {
      alert(err)
    })
    this.props.history.push({ state: '' })
  }
  render() {
    const { list } = this.state
    return (
      <React.Fragment>
        <Helmet >


{/* <title title={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}>{capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))}</title> */}
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " , By Skill , By Company, By Designations"}></meta>
<meta name="description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " An environment where participants can pose issues for discussion and respond to any contribution, thus creating threaded discussions that can spawn a discussion tree where the discussion branches out in many directions or subthreads."} />
<link rel="canonical" href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " An environment where participants can pose issues for discussion and respond to any contribution, thus creating threaded discussions that can spawn a discussion tree where the discussion branches out in many directions or subthreads."} />
<meta property="og:url" content={window.location.href} />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description" content={capFirstLetterInSentence(window.location.pathname.replace('/', '').split('/').pop().split('-').join(' ')) + " An environment where participants can pose issues for discussion and respond to any contribution, thus creating threaded discussions that can spawn a discussion tree where the discussion branches out in many directions or subthreads."} />
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
        <DiscussionForum
          List={list}
          DiscussionList={this.DiscussionThreadList}
          DiscussionSearchByInput1={(Value) => this.DiscussionSearchByInput1(Value)}
          DiscussionSearchByInput={(Value) => this.DiscussionSearchByInput(Value)}
          DiscussionThreadListBycategory={(data) => this.DiscussionThreadListBycategory(data)}
          history={this.props.history}
        />
        {this.state.loader &&
          <div style={{
            position: "fixed",
            zIndex: "999",
            left: "0",
            top: " 0",
            width: " 100%",
            height: " 100%",
            overflow: "auto",
            padding: "210px",
            backgroundColor: "rgba(0, 0, 0, 0.4)"
          }}>
            <LoadingOverlay
              active={true}
              spinner={<SpinnerCircular color={'rgba(0,0,0,0.44)'} secondaryColor={'rgb(230,46,45)'} />}
            >
            </LoadingOverlay>

          </div>
        }
      </React.Fragment>
    )
  }
}
