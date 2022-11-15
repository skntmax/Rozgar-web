import React, { Component } from 'react'
import Error from '../../components/Error/error';
import constant from '../../constant';
export default class error extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
  render() {
    return (
      <React.Fragment>
        <Error/>
      </React.Fragment>
    )
  }
}
