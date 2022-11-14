import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import constant from '../../constant';

export default class all extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        const { FUNCTIONAL_AREA_LIST, INDUSTRY_LIST, DESIGNATION_LIST, IT_SKILL_LIST, NON_IT_SKILL_LIST } = this.props
        return (
            <React.Fragment>
                <div className="rozgar-browseJobs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">


                                <div className='brows-by-locations-bx'>
                                    <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Locations</h2></div>
                                    <div className='hoz-location-bx'>
                                        <ul>
                                            <li><Link to={'/jobs-in-mumbai'}>

                                                <div className='images-box-location'><img src={'./assets/images/mumbai.png'} alt="img description" /></div>
                                                <h5>Jobs in Mumbai</h5>
                                            </Link>
                                            </li>
                                            <li><Link to={'/jobs-in-delhi'}>
                                                <div className='images-box-location'><img src={'./assets/images/delhi.png'} alt="img description" /></div>
                                                <h5>Jobs in Delhi</h5>
                                            </Link>
                                            </li>
                                            <li><Link to={'/jobs-in-bangalore'}>
                                                <div className='images-box-location'><img src={'./assets/images/bangalore.png'} alt="img description" /></div>
                                                <h5>Jobs in Bangalore</h5>
                                            </Link>
                                            </li>
                                            <li><Link to={'/jobs-in-hyderabad'}>
                                                <div className='images-box-location'><img src={'./assets/images/hyderabad.png'} alt="img description" /></div>

                                                <h5>Jobs in Hyderabad</h5>
                                            </Link>
                                            </li>
                                            <li><Link to={'/jobs-in-chennai'}>
                                                <div className='images-box-location'><img src={'./assets/images/chennai.png'} alt="img description" /></div>
                                                <h5>Jobs in Chennai</h5>
                                            </Link>
                                            </li>

                                            <li><Link to={'/jobs-in-noida'}>
                                                <div className='images-box-location'><img src={'./assets/images/noida.png'} alt="img description" /></div>
                                                <h5>Jobs in Noida</h5>
                                            </Link>
                                            </li>
                                        </ul>
                                        <div className='view-all-box'><Link to={constant.component.jobsByLocation.url}> View All Locations</Link></div>
                                    </div>

                                </div>

                                <div className='job-maincontaine-row'>
                                    <div className='brows-by-locations-bx '>
                                        <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Functional Areas</h2></div>
                                        <ul className='functional-area-list'>
                                            {FUNCTIONAL_AREA_LIST.length > 0 && FUNCTIONAL_AREA_LIST.map((item, index) => {
                                                if (index <= 9) {
                                                    return (
                                                        <li><Link to={constant.component.joblist.url.replace(':url', item.URL)}>{item.FUNCTIONAL_AREA}</Link></li>
                                                    )
                                                }
                                            })}
                                        </ul>
                                        <div className='view-all-box'>  <Link to={constant.component.jobsByCategory.url}>View All Functional Areas</Link></div>
                                    </div>
                                    <div className='brows-by-locations-bx '>
                                        <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Industries</h2></div>
                                        <ul className='functional-area-list'>
                                            {INDUSTRY_LIST.length > 0 && INDUSTRY_LIST.map((item, index) => {
                                                if (index < 9) {
                                                    return (<li><Link to={constant.component.joblist.url.replace(':url', item.URL)}>{item.INDUSTRY}</Link></li>)
                                                }
                                            })}
                                        </ul>
                                        <div className='view-all-box'><Link to={constant.component.jobsByCategory.url}>View All Industries</Link></div>
                                    </div>
                                </div>

                                <div className='brows-jobs-companies'>
                                    <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Companies</h2></div>
                                    <div className='companies-brows-list'>
                                        <ul>
                                            <li><Link to={'/jobs-in-tata-consultancy-service'}><img src={'./assets/images/tcs-company.png'} alt="TCS" /> <h6>TCS</h6></Link></li>
                                            <li><Link to={'/jobs-in--cognizant'}><img src={'./assets/images/cognizant-company.png'} alt="COGNIZANT" /><h6>Cognizant</h6></Link></li>
                                            <li><Link to={'/jobs-in-byju-s'}><img src={'./assets/images/byjus-company.png'} alt="Byjus" /><h6>Byjus</h6></Link></li>
                                            <li><Link to={'/jobs-in-amazon-inc-'}><img src={'./assets/images/amazon-company.png'} alt="Amazon" /><h6>Amazon</h6></Link></li>
                                            <li><Link to={'/jobs-in-accenture'}><img src={'./assets/images/accenture-company.png'} alt="Accenture" /><h6>Accenture</h6></Link></li>

                                        </ul>
                                        <div className='view-all-box'>  <Link to={constant.component.jobsByCompany.url}> View All Companies</Link> </div>
                                    </div>

                                </div>
                                <div className='job-maincontaine-row'>
                                    <div className='brows-by-locations-bx '>
                                        <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Designations</h2></div>
                                        <ul className='functional-area-list'>
                                            {DESIGNATION_LIST.length > 0 && DESIGNATION_LIST.map((item, index) => {
                                                if (index <= 9) {
                                                    return (<li><Link to={{
                                                        pathname: constant.component.joblist.url.replace(':url', item.URL),
                                                        state: [{ KEYWORD: item.DESIGNATION }]
                                                    }}>{item.DESIGNATION}</Link></li>)
                                                }
                                            })}

                                        </ul>
                                        <div className='view-all-box'><Link to={constant.component.jobsByDesignation.url}>View All Designations</Link></div>
                                    </div>
                                    <div className='brows-by-locations-bx '>
                                        <div className='by-locations-head'><h2 className='small_title'>Browse Jobs by Skills</h2></div>
                                        <ul className='functional-area-list'>
                                            {IT_SKILL_LIST.length > 0 && IT_SKILL_LIST.map((item, index) => {

                                                if (index <= 9) {
                                                    return (<li><Link to={constant.component.joblist.url.replace(':url', item.URL)}>{item.SKILL} Jobs</Link></li>)
                                                }


                                            })}



                                        </ul>
                                        <div className='view-all-box'>  <Link to={constant.component.jobsBySkill.url}>View All Skills </Link></div>
                                    </div>
                                </div>



                            </div>


                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
