import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'

export default class location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            STATE_LIST: this.props.LOCATION_LIST.state,
            CITY_LIST: this.props.LOCATION_LIST.city
        }

    }
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        const { STATE_LIST, CITY_LIST } = this.state
        const { LOCATION_LIST, TOP_LOCATION } = this.props
        console.log(STATE_LIST, CITY_LIST, TOP_LOCATION)
        return (
            <React.Fragment>
                <div className='jobsbylocationColumnBox'>

                    <div className='headtext'>Browse Jobs by Top States</div>
                    <div className='jobsbylocationColumn colCount_four'>
                        {STATE_LIST.length > 0 && STATE_LIST.map((item, index) => {

                            return (<Link to={{
                                pathname: constant.component.joblist.url.replace(':url', item.URL),
                                state: {
                                    hideJobAlert: false,
                                }
                            }}>Jobs in {item.STATE}</Link>)
                        })}
                        {/* <Link to={constant.component.jobsInNoida.url}>Jobs in Mumbai</Link> */}
                        {/* <a href='#'>Jobs in Bangalore</a>
                        <a href='#'>Jobs in Delhi</a>
                        <a href='#'>Jobs in Gurgaon</a>
                        <a href='#'>Jobs in NOIDA</a>
                        <a href='#'>Jobs in Chennai</a>
                        <a href='#'>Jobs in Pune</a>
                        <a href='#'>Jobs in Hyderabad</a>
                        <a href='#'>Jobs in Kolkata</a>
                        <a href='#'>Jobs in Ahmedabad</a>
                        <a href='#'>Jobs in Chandigarh</a> */}
                    </div>
                    {/* <div className='text-right pr-2 pb-1'>
                        <a href='' className='proknowmore'>View All</a>
                    </div> */}
                </div>
                {/* <div className='jobsbylocationColumnBox'>
                    <div className='headtext'>Browse Jobs by Top Localities</div>
                    <div className='jobsbylocationColumn colCount_four'>
                        <a href='#'>Top Localities In Hyderabad / Secunderabad</a>
                        <a href='#'>Top Localities In Pune</a>
                        <a href='#'>Top Localities In Chennai</a>
                        <a href='#'>Top Localities In Noida</a>
                        <a href='#'>Top Localities In Mumbai</a>
                        <a href='#'>Top Localities In Bengaluru/Bangalore</a>
                        <a href='#'>Top Localities In Delhi/NCR(National Capital Region)</a>
                        <a href='#'>Top Localities In Kolkata</a>
                        <a href='#'>Top Localities In Ahmedabad</a>
                    </div>
                </div> */}


                {/* <div className='jobsbylocationColumnBox'>
                    <div className='headtext'>Browse Jobs by Top Localities</div>
                    <div className='jobsbylocationColumn colCount_four'>
                        <a href='#'>Top Localities In Hyderabad / Secunderabad</a>
                        <a href='#'>Top Localities In Pune</a>
                        <a href='#'>Top Localities In Chennai</a>
                        <a href='#'>Top Localities In Noida</a>
                        <a href='#'>Top Localities In Mumbai</a>
                        <a href='#'>Top Localities In Bengaluru/Bangalore</a>
                        <a href='#'>Top Localities In Delhi/NCR(National Capital Region)</a>
                        <a href='#'>Top Localities In Kolkata</a>
                        <a href='#'>Top Localities In Ahmedabad</a>
                    </div>
                </div> */}


                <div className='jobsbylocationColumnBox'>

                    <div className='headtext'>Browse Jobs by Top Localities</div>
                    <div className='jobsbylocationColumn colCount_four'>
                        {TOP_LOCATION.length > 0 && TOP_LOCATION.map((item, index) => {

                            return (<Link to={{
                                pathname: constant.component.joblist.url.replace(':url', item.URL),
                                state: {
                                    hideJobAlert: false,
                                }
                            }}>Jobs in {item.CITY}</Link>)
                        })}

                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <h6>Jobs in States / Union Territories and Cities across India</h6>
                    </div>
                </div>
                <div className='row'>
                    {/* <div className='col-md-4'> */}
                    {CITY_LIST.length > 0 && CITY_LIST.map((item, index) => {
                        for (const [key, value] of Object.entries(item)) {
                            return (<div className='col-md-12'>
                                <div className='jobsbylocation1ColumnBox'>
                                    <div className='headtext'>Jobs in {key}</div>
                                    <div className='jobsbylocationColumn colCount_four'>
                                        {value.length && value.map((item, index) => {
                                            return (< Link to={{
                                                pathname: constant.component.joblist.url.replace(':url', item.URL),
                                                state: {
                                                    hideJobAlert: false,
                                                }
                                            }}>Jobs in {item.CITY}</Link>)
                                        })}

                                    </div>
                                </div>
                            </div>)
                        }
                    })}
                </div>
            </React.Fragment >
        )
    }
}
