import React, { Component } from 'react'
import { jobCountByTopCategory, topCompanyList, topCompanyImages } from '../../action/dashboard';
import { premiumCityList } from '../../action/jobsByActions';
import Hometabs from '../../components/home/hometabs'
import constant from '../../constant';
export default class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = constant.title.Homepage


    }

    render() {
        // const { LOCATION_LIST, JOB_COUNT_BY_TOP_CATEGORY, FEATURED_COMPANIES, PREMIUM_COMPANIES, TOP_COMPANY_IMAGES } = this.state
        return (
            <React.Fragment>
                {
                    // LOCATION_LIST && JOB_COUNT_BY_TOP_CATEGORY && FEATURED_COMPANIES && PREMIUM_COMPANIES && TOP_COMPANY_IMAGES &&
                    <Hometabs

                    />
                }
            </React.Fragment>
        )
    }
}
