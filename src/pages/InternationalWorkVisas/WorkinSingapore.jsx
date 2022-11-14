import React, { Component } from 'react'
import WorkinSingapore from '../../components/InternationalWorkVisas/WorkinSingapore';
import constant from '../../constant';

export default class workinSingapore extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.workinSingapore
    }
  render() {
    return (
       <React.Fragment>
         <WorkinSingapore/>
       </React.Fragment>
    )
  }
}
