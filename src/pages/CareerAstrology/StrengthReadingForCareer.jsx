import React, { Component } from 'react'
import StrengthReadingForCareer from '../../components/common/CareerAstrology/StrengthReadingForCareer';
import constant from '../../constant';


export default class strengthReadingForCareer extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.strengthReadingForCareer
    }
  render() {
    return (
      <React.Fragment>
        <StrengthReadingForCareer/>
      </React.Fragment>
    )
  }
}
