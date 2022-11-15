import React, { Component } from 'react'
import InboxMessage from '../../components/myAccount/InboxMessage';
import constant from '../../constant';
export default class InboxMessage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }
  render() {
    return (
      <React.Fragment>
        <InboxMessage/>
      </React.Fragment>
    )
  }
}
