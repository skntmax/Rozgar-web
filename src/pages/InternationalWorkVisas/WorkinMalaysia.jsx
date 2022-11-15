import React, { Component } from 'react'
import WorkinMalaysia from '../../components/InternationalWorkVisas/WorkinMalaysia';
import constant from '../../constant';

export default class workinMalaysia extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.workinMalaysia
    }
  render() {
    return (
       <React.Fragment>
         <WorkinMalaysia/>
       </React.Fragment>
    )
  }
}
