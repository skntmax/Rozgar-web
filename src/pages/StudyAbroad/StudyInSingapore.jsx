import React, { Component } from 'react'
import constant from '../../constant';
import StudyInSingapores from '../../components/StudyAbroad/StudyInSingapore';

export default class StudyInSingapore extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.studyInSingapore
    }
  render() {
    return (
      <React.Fragment>
        <StudyInSingapores/>
      </React.Fragment>
    )
  }
}
