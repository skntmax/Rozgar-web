import React, { Component } from 'react'
import StudyInNewZealands from '../../components/StudyAbroad/StudyInNewZealand';
import constant from '../../constant';

export default class StudyInNewZealand extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.studyInNewZealand
    }
  render() {
    return (
      <React.Fragment>
        <StudyInNewZealands/>
      </React.Fragment>
    )
  }
}
