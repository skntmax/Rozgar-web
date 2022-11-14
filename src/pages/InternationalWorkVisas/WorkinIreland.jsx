import React, { Component } from 'react'
import WorkinIreland from '../../components/InternationalWorkVisas/WorkinIreland';
import constant from '../../constant';

export default class workinIreland extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.workinIreland
    }
  render() {
    return (
       <React.Fragment>
         <WorkinIreland />
       </React.Fragment>
    )
  }
}
