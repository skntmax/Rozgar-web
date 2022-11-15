import React, { Component } from 'react'
import constant from '../../constant';
import CareerAsk1Question from '../../components/common/CareerAstrology/CareerAsk1Question';

export default class careerAsk1Question extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.careerAsk1Question
    }
  render() {
    return (
      <React.Fragment>
         <CareerAsk1Question/>
      </React.Fragment>
    )
  }
}
