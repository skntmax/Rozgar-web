import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant';
import { removeAllLocalStorage, removeStorage } from '../../utils';

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        removeAllLocalStorage()
        this.props.history.push(constant.component.signin.url)
    }
    render() {
        return (
            <React.Fragment>
                <div style={{textAlign:'center', fontWeight:'500'}}>Logout</div>
            </React.Fragment>

        )
    }


}
