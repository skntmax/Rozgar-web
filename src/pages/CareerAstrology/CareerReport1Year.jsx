import React, { Component } from 'react'
import CareerReport1Year from '../../components/common/CareerAstrology/CareerReport1Year';
import constant from '../../constant';

export default class careerReport1Year extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        document.title = constant.title.careerReport1Year
    }
  render() {
    return (
      <React.Fragment>
        <CareerReport1Year/>
      </React.Fragment>
    )
  }
}
