import React, { Component } from 'react'
import WorkinAustralia from '../../components/InternationalWorkVisas/WorkinAustralia';
import constant from '../../constant';

export default class workinAustralia extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.workinAustralia
    }
  render() {
    return (
      <React.Fragment>
        <WorkinAustralia/>
      </React.Fragment>
    )
  }
}
