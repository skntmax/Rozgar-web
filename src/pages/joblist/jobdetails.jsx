import React, { Component } from 'react'
import { MetaTags } from 'react-meta-tags';
import { jobDetail } from '../../action/jobDetail';
import Jobdetails from '../../components/joblist/jobdetails'
import constant from '../../constant';
export default class jobdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: undefined
        }
    }
    componentDidMount() {
        document.title = constant.title.Jobdetails
        window.scrollTo(0, 0)

        jobDetail(this.props.match.params.url).then(res => {
            if (res.status) {
                this.setState({ detail: res.result.detail })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })

    }
    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <meta name="description" content={document.title + constant.metaDescription} />
                    <meta property="og:title" content={document.title} />
                </MetaTags>
                <Jobdetails detail={this.state.detail} />
            </React.Fragment>
        )
    }
}
