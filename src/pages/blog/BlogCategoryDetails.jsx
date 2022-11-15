import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { BlogbyCategoryURL, BlogbyURL } from '../../action/BlogAction';
import BlogDetails from '../../components/blog/blogDetails';
import constant from '../../constant';
import { capFirstLetterInSentence } from '../../utils';
export default class BlogCategoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
        }
    }

    componentDidMount() {

        const urlType = this.props.match.path
        console.log("urlType", urlType === constant.component.blogCategory.url)
        if (urlType === constant.component.blogCategory.url) {
            const url = this.props.match.params.category
            BlogbyCategoryURL(url).then((res) => {
                console.log("blog data ", res.result)
                this.setState({ data: res.result })
            }).catch((err) => {
                alert(err)
            })
        }
        else if (urlType == constant.component.blogCategory.url) {
            const url = this.props.match.params.url
            BlogbyURL(url).then((res) => {
                console.log("blog data ", res.result)
                this.setState({ data: res.result })
            }).catch((err) => {
                alert(err)
            })

        }
    }

    render() {
        return (
            <React.Fragment>

<Helmet>


<title title={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}>{capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))}</title>
<meta name="HandheldFriendly" content="True" />

<meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " ? Here are  8 tips for you to go about applying for your dream job abroad!"} />
<link rel="canonical"  href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

<meta property="og:site_name" content="Rozgar Official Blog" />
<meta property="og:type" content="article" />
<meta property="og:title"content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " ? Here are  8 tips for you to go about applying for your dream job abroad!"} />
<meta property="og:url" content= {window.location.href}  />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="article:published_time" content="2022-10-18T06:04:34.000Z" />
<meta property="article:modified_time" content="2022-10-18T06:04:37.000Z" />
<meta property="article:tag" content="Career Advice" />
<meta property="article:tag" content="Career Insights" />

<meta property="article:publisher" content= {window.location.href} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' '))} />
<meta name="twitter:description"  content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " ? Here are  8 tips for you to go about applying for your dream job abroad!"} />
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
                <BlogDetails />
            </React.Fragment>
        )
    }
}
