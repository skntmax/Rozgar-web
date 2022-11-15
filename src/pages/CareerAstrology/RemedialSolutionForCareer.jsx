import React, { Component } from 'react'
import RemedialSolutionForCareer from '../../components/common/CareerAstrology/RemedialSolutionForCareer';
import constant from '../../constant';

export default class remedialSolutionForCareer extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.remedialSolutionForCareer
    }
  render() {
    return (
       <React.Fragment>
         <RemedialSolutionForCareer/>
       </React.Fragment>
    )
  }
}
