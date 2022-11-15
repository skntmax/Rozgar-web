import React, { Component } from 'react'
import Enquiry from '../../components/Enquiry/ServiceEnquiry';
import constant from '../../constant';

export default class ServiceEnquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    // console.log(this.props)
  }

  render() {
    return (
      <React.Fragment>
        <Enquiry
        />
      </React.Fragment>
    )
  }
}

