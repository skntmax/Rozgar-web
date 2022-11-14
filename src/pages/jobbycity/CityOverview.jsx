import React, { Component, Suspense } from 'react'
import { cityAnOverView } from '../../action/cityOverview';
import Shimmer from '../../components/common/Shimmer';
// import CityOverview from '../../components/jobbycity/cityOverview';
import constant from '../../constant'
const CityOverview = React.lazy(() => import('../../components/jobbycity/cityOverview'));
export default class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityDetail: undefined,
            jobsCount: undefined,
            localities: [],
            jobs: [],
            showShimmer: true
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        
        cityAnOverView(this.props.match.params.city).then(res => {
            if (res.status) {
                this.setState({ cityDetail: res.result.cityDetail, jobsCount: res.result.jobsCount, localities: res.result.localities, jobs: res.result.jobs, showShimmer: false })
                document.title = res.result.cityDetail.CITY + ' - An Overview'
            }
            else {
                alert(res.error)
            }

        }).catch(err => {
            alert(err)
        })
    }
    render() {
        console.log("paramssssss>>>>>>>", this.props.match.params);
        const { cityDetail,
            jobsCount,
            localities,
            jobs,
            showShimmer } = this.state
        return (
            <React.Fragment>
                <Suspense fallback={<div><Shimmer /></div>}>
                    <CityOverview
                        cityDetail={cityDetail}
                        jobsCount={jobsCount}
                        localities={localities}
                        jobs={jobs}
                        showShimmer={showShimmer}
                    />
                </Suspense>

            </React.Fragment>
        )
    }
}
