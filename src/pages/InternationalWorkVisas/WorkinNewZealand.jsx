import React, { Component } from 'react'
import WorkinNewZealand from '../../components/InternationalWorkVisas/WorkinNewZealand';
import constant from '../../constant';

export default class workinNewZealand extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.workinNewZealand
    }
  render() {
    return (
       <React.Fragment>
         <WorkinNewZealand/>
       </React.Fragment>
    )
  }
}
