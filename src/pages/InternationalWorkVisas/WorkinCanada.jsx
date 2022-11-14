import React, { Component } from 'react'
import WorkinCanada from '../../components/InternationalWorkVisas/WorkinCanada';
import constant from '../../constant';

export default class workinCanada extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.workinCanada
    }
  render() {
    return (
       <React.Fragment>
         <WorkinCanada/>
       </React.Fragment>
    )
  }
}
