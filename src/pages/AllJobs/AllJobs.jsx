import React, { Component } from 'react'
import AllJobs from '../../components/AllJobs/AllJobs'
import constant from '../../constant'
export default class allJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    document.title = constant.title.AllJobs
  }
  
  render() {

    return (
      <React.Fragment>
        <AllJobs />
      </React.Fragment>
    )
  }
}
