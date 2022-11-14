// import * as React from 'react';

// const Shimmer = () => {
//     return (
//         <div className="skeleton mb-3">
//             <div className="skeleton-wrapper">
//                 <div className="skeleton-wrapper-inner">
//                     <div className="skeleton-wrapper-body">
//                         {/* <div className="skeleton-avatar" />
//                         <div className="skeleton-author" />
//                         <div className="skeleton-label" /> */}
//                         <div className="skeleton-content-1" />
//                         <div className="skeleton-content-2" />
//                         <div className="skeleton-content-3" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Shimmer;





import React, { Component } from "react";
import Shimmer from "react-shimmer-effect";
import injectSheet from "react-jss";
 
const StyleSheet = {
  container: {
    border: "0px solid rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, .1)",
    borderRadius: "4px",
    background:'#f9f9f9',
    // display: "flex",
    padding: "16px",
    width: "100%"
  },
  circle: {
    height: "56px",
    width: "56px",
    borderRadius: "50%"
  },
  line: {
    width: "100%",
    height: "8px",
    alignSelf: "center",
    marginLeft: "16px",
    borderRadius: "8px"
  }
};
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Shimmer>
          {/* <div className={classes.circle} /> */}
          <div className={classes.line} />
          <div className={classes.line} />
          <div className={classes.line} />
        </Shimmer>
      </div>
    );
  }
}
 
export default injectSheet(StyleSheet)(App);