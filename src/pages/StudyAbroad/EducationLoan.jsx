import React, { Component } from 'react'
import EducationLoan from '../../components/StudyAbroad/EducationLoan';
import constant from '../../constant';

export default class educationLoan extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.educationLoan
        window.scrollTo(0, 0)
    }
  render() {
    return (
      <React.Fragment>
        <EducationLoan/>
      </React.Fragment>
    )
  }
}
