import React, { Component, Suspense } from 'react'
import { jobCountByTopCategory, topCompanyList, topCompanyImages, topPremiumFeaturedCompanyList } from '../../action/dashboard';
import { premiumCityList } from '../../action/jobsByActions';
import Shimmer from '../../components/common/Shimmer';
import constant from '../../constant';
import HometabsWithShimmer from '../../components/home/hometabsWithShimmer'
import { MetaTags } from 'react-meta-tags';
const Hometabs = React.lazy(() => import('../../components/home/hometabs'));

export default class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LOCATION_LIST: null,
            JOB_COUNT_BY_TOP_CATEGORY: null,
            FEATURED_COMPANIES: null,
            PREMIUM_COMPANIES: null,
            TOP_COMPANY_IMAGES: null
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = constant.title.Homepage
        this.getPremiumCityList()
        jobCountByTopCategory().then(res => {
            if (res.status) {
                this.setState({ JOB_COUNT_BY_TOP_CATEGORY: res.result })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })

        topPremiumFeaturedCompanyList().then(res => {
            if (res.status) {
                this.setState({ FEATURED_COMPANIES: res.result.featured, PREMIUM_COMPANIES: res.result.premium })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })


        topCompanyImages().then(res => {
            if (res.status) {
                this.setState({ TOP_COMPANY_IMAGES: res.result.images })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })
    }

    getPremiumCityList = () => {
        premiumCityList().then(res => {
            if (res.status) {
                this.setState({ LOCATION_LIST: res.result })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const { LOCATION_LIST, JOB_COUNT_BY_TOP_CATEGORY, FEATURED_COMPANIES, PREMIUM_COMPANIES, TOP_COMPANY_IMAGES } = this.state

        return (<React.Fragment>
            <MetaTags>
                <meta name="description" content={document.title + constant.metaDescription} />
                <meta property="og:title" content={document.title} />
            </MetaTags>
            <div id="parentdiv">
                {/* {LOCATION_LIST === null || JOB_COUNT_BY_TOP_CATEGORY === null || FEATURED_COMPANIES === null
                    || PREMIUM_COMPANIES === null || TOP_COMPANY_IMAGES === null ||
                    <HometabsWithShimmer
                        JOB_COUNT_BY_TOP_CATEGORY={JOB_COUNT_BY_TOP_CATEGORY}
                        LOCATION_LIST={LOCATION_LIST}
                        FEATURED_COMPANIES={FEATURED_COMPANIES}
                        PREMIUM_COMPANIES={PREMIUM_COMPANIES}
                        TOP_COMPANY_IMAGES={TOP_COMPANY_IMAGES}
                    />} */}
                {
                    // LOCATION_LIST && JOB_COUNT_BY_TOP_CATEGORY && FEATURED_COMPANIES && PREMIUM_COMPANIES && TOP_COMPANY_IMAGES &&

                    <Suspense fallback={<>  <HometabsWithShimmer
                        JOB_COUNT_BY_TOP_CATEGORY={JOB_COUNT_BY_TOP_CATEGORY}
                        LOCATION_LIST={LOCATION_LIST}
                        FEATURED_COMPANIES={FEATURED_COMPANIES}
                        PREMIUM_COMPANIES={PREMIUM_COMPANIES}
                        TOP_COMPANY_IMAGES={TOP_COMPANY_IMAGES}
                    /></>}>
                        <Hometabs
                            history={this.props.history}
                            // JOB_COUNT_BY_TOP_CATEGORY={JOB_COUNT_BY_TOP_CATEGORY}
                            // LOCATION_LIST={LOCATION_LIST}
                            FEATURED_COMPANIES={FEATURED_COMPANIES}
                            PREMIUM_COMPANIES={PREMIUM_COMPANIES}
                            TOP_COMPANY_IMAGES={TOP_COMPANY_IMAGES}
                        // getPremiumCityList={this.getPremiumCityList}
                        />
                    </Suspense>

                }
            </div>
        </React.Fragment>

        )
    }
}
