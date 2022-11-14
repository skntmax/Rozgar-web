
import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { companylist, nonregularcompanylist } from '../../action/companyAction';
import Companieslist from '../../components/companies/companieslist'
import constant from '../../constant';
import { capFirstLetterInSentence } from '../../utils';
export default class companieslist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            COMPANY_LIST: undefined,
            COUNT: 0,
            page: 1,
            filterdata: {
                LOCATION: [],
                CATEGORY: [],
                COMPANY_TYPE: []
            },
            KEYWORD: ''
        }
    }
    componentDidMount() {
        document.title = constant.title.topcompanies
        window.scrollTo(0, 0)
        this.list(this.state.page, this.state.filterdata)

    }

    list = (page, data) => {
        nonregularcompanylist({
            page: page,
            filter: data
        }).then(res => {
            if (res.status) {
                this.setState({ COMPANY_LIST: res.result.list, COUNT: res.result.count })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })
    }
    filterData = (data) => {
        this.list(1, data)
    }

    onSearch = (page, filter,input) => {
        this.setState({ KEYWORD: input })
        companylist({
            page: page,
            KEYWORD: input,
            filter: filter
        }).then(res => {
            if (res.status) {
                this.setState({ COMPANY_LIST: res.result.list, COUNT: res.result.count })
            }
            else {
                console.log(res.error)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const { COMPANY_LIST, COUNT } = this.state
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
                {<Companieslist
                    COMPANY_LIST={COMPANY_LIST}
                    COUNT={COUNT}
                    list={(page,filter) => { this.list(page,filter) }}
                    filterData={(data) => { this.filterData(data) }}
                    onSearch={(page, filter,input) => { this.onSearch(page, filter,input) }}
                />}
            </React.Fragment>
        )
    }
}