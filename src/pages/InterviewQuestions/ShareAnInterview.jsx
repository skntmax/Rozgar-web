import React, { Component } from 'react'
import ShareAnInterview from '../../components/InterviewQuestions/ShareAnInterview';
import constant from '../../constant';

export default class shareAnInterview extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
 componentDidMount(){
    document.title = constant.title.ShareAnInterview
 }
  render() {
    return (
      <React.Fragment>
        <ShareAnInterview/>
      </React.Fragment>
    )
  }
}
