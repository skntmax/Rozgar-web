import React, { Component } from 'react'
import FourZeroFours from '../../components/404/FourZeroFour';
import constant from '../../constant'
import MetaTags from 'react-meta-tags';
export default class FourZeroFour extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }
    
    componentDidMount(){
        document.title = constant.title.page404
    }
 
    render() {
    return (
      <React.Fragment>
        {/* <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags> */}
        <FourZeroFours />
      </React.Fragment>
    )
  }
}
