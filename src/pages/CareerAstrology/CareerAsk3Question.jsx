import React, { Component } from 'react'
import constant from '../../constant';
import CareerAsk3Question from '../../components/common/CareerAstrology/CareerAsk3Question';

export default class careerAsk3Question extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.careerAsk3Question
    }
  render() {
    return (
      <React.Fragment>
        <CareerAsk3Question/>
      </React.Fragment>
    )
  }
}
