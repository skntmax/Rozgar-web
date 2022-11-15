import React, { Component } from 'react'
import constant from '../../constant';
import CareerReport3Year from '../../components/common/CareerAstrology/CareerReport3Year';

export default class careerReport3Year extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.careerReport3Year
    }
  render() {
    return (
      <React.Fragment>
         <CareerReport3Year/>
      </React.Fragment>
    )
  }
}
