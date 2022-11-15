import React, { Component } from 'react'
import WorkinUSA from '../../components/InternationalWorkVisas/WorkinUSA';
import constant from '../../constant';

export default class workinUSA extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.workinUSA
    }
  render() {
    return (
       <React.Fragment>
         <WorkinUSA/>
       </React.Fragment>
    )
  }
}
