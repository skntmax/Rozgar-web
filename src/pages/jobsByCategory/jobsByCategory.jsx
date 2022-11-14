import React, { Component } from 'react'
import JobsByCategory from '../../components/jobsByCategory/jobsByCategory'
import constant from '../../constant'
export default class jobsByCategory extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.JobsByCategory
        window.scrollTo(0, 0)
    }
  render() {
    return (
      <React.Fragment>
          <JobsByCategory/>
      </React.Fragment>
    )
  }
}
