import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import { qaCommentByThreadId, qaCommentReplyByCommentId, qaDiscussionThreadList, qaThreadbyId, ViewCountThread } from '../../action/discussionFormAction';
import DiscussionForumDetails from '../../components/DiscussionForum/DiscussionForumDetails';
import constant from '../../constant';
import { capFirstLetterInSentence, getStorage } from '../../utils';
import { SpinnerCircular } from 'spinners-react';
import { Helmet } from 'react-helmet';

export default class discussionForumDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: undefined,
      ThreadDetail: undefined,
      detail: getStorage(constant.keys.cd),
      commentbyId: undefined,
      commentReplyById: undefined,
      loader: false,
      path: undefined
    }
  }
  componentDidMount() {
    window.scroll(0, 0)
    this.setState({ path: window.location.href })
    const { id } = this.props.history.location.state
    this.ThreadbyId()
    this.DiscussionThreadList()
    this.CommentByThreadId()
    this.CountThread()
  }
  CommentReplyByCommentId = () => {
    this.setState({ loader: true })
    qaCommentReplyByCommentId().then((res) => {
      this.setState({ commentReplyById: res.result, loader: false })
    }).catch((err) => {
      alert(err)
    })
  }
  DiscussionThreadList = () => {
    this.setState({ loader: true })
    qaDiscussionThreadList().then((res) => {
      this.setState({ list: res.result, loader: false })
    }).catch((err) => {
      alert(err)
    })
  }

  ThreadbyId = async () => {
    this.setState({ loader: true })
    const { id } = this.props.history.location.state
    qaThreadbyId(id).then((res) => {
      this.setState({ ThreadDetail: res.result })
    }).catch((err) => {
      alert(err)
    })
    this.setState({ loader: false })
  }
  CommentByThreadId = () => {
    this.setState({ loader: true })
    const { id } = this.props.history.location.state
    qaCommentByThreadId(id).then((res) => {
      this.setState({ commentbyId: res.result,loader: false})
    }).catch((err) => {
      alert(err)
    })
    this.CommentReplyByCommentId()
  }

  CountThread = () => {
    const { id } = this.props.history.location.state
    const model = {
      DISCUSSION_THREAD_ID: id,
      VIEW_COUNT: +1
    }
    ViewCountThread(model).then((res) => {
    }).catch((err) => {
      alert(err)
    })
  }

  render() {
    const { path } = this.state
    if (path !== window.location.href) {
      this.DiscussionThreadList()
      this.ThreadbyId()
      this.CommentByThreadId()
      // this.CountThread()
      this.setState({ path: window.location.href })
    }
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
        <DiscussionForumDetails
          history={this.props.history}
          List={this.state.list}
          ThreadDetail={this.state.ThreadDetail}
          commentbyId={this.state.commentbyId}
          commentReplyById={this.state.commentReplyById}
          DiscussionThreadList={this.DiscussionThreadList}
          CommentByThreadId={this.CommentByThreadId}
          ThreadbyId={this.ThreadbyId}
          
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
