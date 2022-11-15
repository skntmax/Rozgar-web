import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { companylist } from '../../action/companyAction';
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
        document.title = constant.title.Companieslist
        window.scrollTo(0, 0)
        this.list(this.state.page, this.state.filterdata)

    }
    filterData = (data) => {
        this.list(1, data)
    }
    list = (page, data) => {
        companylist({
            page: page,
            KEYWORD: this.state.KEYWORD,
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
    onSearch = (page, filter, input) => {
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
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })
    }

    render() {
        const { COMPANY_LIST, COUNT } = this.state
        return (
            <React.Fragment>
                <Helmet>

                    
                <title title={ document.title = constant.title.Companydetails + " Overview  – Jobs, Work Culture - Rozgar.com"}></title>
                    <meta name="description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Overview – Know more about job opportunities, employee feedback and Ratings, work culture, immediate hirings etc at Rozgar.com."} />
                    <link rel="canonical"  href={window.location.href} />
                    <meta name="atdlayout" content="jobsearch" />
                    <meta name="robots" content="ALL" />
                    <meta name="classification" content="Jobs &amp; Career Opportunities: Job Posting, Job Search, Apply Jobs, Career Explorer, Free CV" />
                    <meta name="pragma" content="no-cache" />
                    <meta name="rating" content="general" />
                    <meta name="revisit-after" content="1 day" />
                    <meta name="distribution" content="GLOBAL" />
                    <meta name="resource-type" content="document" />
                    <meta name="author" content="www.rozgar.com" />
                    <meta name="content-language" content="EN" />
                    <meta name="copyright" content="2022 Rozgar.com" />

                    <meta property="fb:app_id" content="2077422969016028" />
                    <meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
                    <meta property="og:url" content={window.location.href }/>
                    <meta property="og:site_name" content="Rozgar.com" />
                    <meta property="og:description" content={ capFirstLetterInSentence(window.location.pathname.replace('/','').split('/').pop().split('-').join(' ')) + " - Overview – Know more about job opportunities, employee feedback and Ratings, work culture, immediate hirings etc at Rozgar.com."} />
                    <meta property="og:title" content={document.title + " Overview – Jobs, Work Culture - Rozgar.com"} />

                </Helmet>
                {<Companieslist
                    COMPANY_LIST={COMPANY_LIST}
                    COUNT={COUNT}
                    list={(page, filter) => { this.list(page, filter) }}
                    filterData={(data) => { this.filterData(data) }}
                    onSearch={(page, filter, input) => { this.onSearch(page, filter, input) }}
                />}
            </React.Fragment>
        )
    }
}