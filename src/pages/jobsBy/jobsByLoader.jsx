import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import { SpinnerCircular } from 'spinners-react';
import Shimmer from '../../components/common/Shimmer';

export default class Loader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='jobsbylocationColumnBox'>
                   <Shimmer/>
                </div>
            </React.Fragment>
        )
    }
}
