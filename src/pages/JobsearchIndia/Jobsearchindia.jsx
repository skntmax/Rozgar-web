import React, { Component } from 'react'
import { Jobskeywordsearchindia } from '../../action/jobDetail'
import Jobssearchindia from '../../components/JobSearchIndia/Jobsearchindia'
import constant from '../../constant'
import LoadingOverlay from 'react-loading-overlay';
import { SpinnerCircular } from 'spinners-react'
export default class Jobsearchindia extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[],
      showLoader: false
    }
  }
  
  componentDidMount(){
    document.title=constant.title.JobSearchIndia
    this.getAllJobSearchIndia()
  }

  getAllJobSearchIndia(){
    this.setState({ showLoader: true })
    Jobskeywordsearchindia().then(res=>{
      this.setState({ showLoader: false })
      this.setState({list:res.result})
    }).catch(err=>{
      console.log(err);
    })
  }

  render() {
    const {list} = this.state
    console.log("repo",list)
    return (
    <React.Fragment>
      			{this.state.showLoader &&
					<div style={{
						position: "fixed",
						zIndex: "999",
						left: "0",
						top: " 0",
						width: " 100%",
						height: " 100vh",
						overflow: "auto",
						padding: "210px",
						backgroundColor: "rgba(0, 0, 0, 0.4)"
					}}>
						<LoadingOverlay

							active={true}
							spinner={<SpinnerCircular color={'rgba(0,0,0,0.44)'} secondaryColor={'rgb(230,46,45)'} />}
						>
						</LoadingOverlay></div>}

      <Jobssearchindia getAllJobSearchIndia={this.getAllJobSearchIndia} List={list}/>
    </React.Fragment>
    )
  }
}
