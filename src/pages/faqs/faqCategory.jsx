import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { FaqbyCategory, FAQCategoryList } from '../../action/FAQAction';
import FaqCategory from '../../components/faqs/FaqCategory'
import constant from '../../constant';
import { capFirstLetterInSentence, capitalizeWords } from '../../utils';
export default class faqCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            data: [],
            keyword: "",
            showQuickShimmer: true,
            showBrowseShimmer: true,

        }

    }
    componentDidMount() {
        this.getfaqCategoryList()
        this.getfaqbyCategory(this.state.keyword)
        document.title = constant.title.faqCategory
        window.scrollTo(0, 0)

    }

    getfaqCategoryList = () => {
        this.setState({ showQuickShimmer: true })
        FAQCategoryList().then((res) => {
            this.setState({ data: res.result })
            this.setState({ showQuickShimmer: false })
        }).catch((err) => {
            alert(err)
        })
    }

    getfaqbyCategory = (keyword) => {
        const urlType = this.props.match.path
        if (urlType === constant.component.faqCategory.url) {
            const URL = this.props.match.params.URL
            FaqbyCategory(URL, { KEYWORD: keyword }).then((res) => {
                this.setState({ showBrowseShimmer: true })
                this.setState({ list: res.result })
                this.setState({ showBrowseShimmer: false })
                document.title = "FAQ - " + capitalizeWords(this.props.match.params.URL.split('-')).join(' ') + " - Rozgar.com"
            }).catch((err) => {
                alert(err)
            })
        }
    }

    updateKeyword = (keyword) => {
        this.setState({ KEYWORD: keyword })
        this.getfaqbyCategory(keyword)
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
                <FaqCategory list={this.state.list}
                    data={this.state.data}
                    showQuickShimmer={this.state.showQuickShimmer}
                    showBrowseShimmer={this.state.showBrowseShimmer}
                    keyword={(e) => { this.updateKeyword(e) }} />
            </React.Fragment>
        )
    }
}
