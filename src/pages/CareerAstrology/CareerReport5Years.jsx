import React, { Component } from 'react'
import CareerReport5Years from '../../components/common/CareerAstrology/CareerReport5Years';
import constant from '../../constant';

export default class careerReport5Years extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.careerReport5Years
    }
  render() {
    return (
       <React.Fragment>
         <CareerReport5Years/>
       </React.Fragment>
    )
  }
}
