import React, { Component } from 'react'
import constant from '../../constant';
import CareerReport2Year from '../../components/common/CareerAstrology/CareerReport2Year';

export default class careerReport2Year extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.careerReport2Year
    }
  render() {
    return (
       <React.Fragment>
         <CareerReport2Year/>
       </React.Fragment>
    )
  }
}
