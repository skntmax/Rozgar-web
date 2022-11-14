import React, { Component } from 'react'
import { getCollegeList } from '../../action/CandidateAction';
import StudentsExplorer from '../../components/StudentsExplorer/StudentsExplorer';
import constant from '../../constant';

export default class studentsExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    document.title = constant.title.StudentsExplorer
    window.scroll(0, 0)
  }





  render() {
    return (
      <React.Fragment>
        <StudentsExplorer

        />
      </React.Fragment>
    )
  }
}
