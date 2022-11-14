import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import { SpinnerCircular } from 'spinners-react';

export default class Loader extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ 
								position: "fixed", 
								zIndex: "999", 
								left: "0",
								top:" 0",
								width:" 100%",
								height:" 100%",
								overflow: "auto",
								padding:"210px",
								backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
				<LoadingOverlay
				
				active={true}
				spinner={<SpinnerCircular color={'rgba(0,0,0,0.44)'} secondaryColor={'rgb(230,46,45)'} />}
				>
			  </LoadingOverlay></div>
            </React.Fragment>
        )
    }
}
