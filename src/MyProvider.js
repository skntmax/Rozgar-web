import React, { Component } from 'react';
//make a new Context
export const MyContext = React.createContext();
//Create a provider Component
export default class MyProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dialog: false,
            showToast: false,
            load: undefined,
            tempContext: {},
            dsubmit: false,
            Change: false,
        }
        this.toggleToast = this.toggleToast.bind(this)
        this.loadBack = this.loadBack.bind(this)
        this.removeBack = this.removeBack.bind(this)
        this.toggledialog = this.toggledialog.bind(this)
        this.loadStatefromContext = this.loadStatefromContext.bind(this)
        this.stateChange = this.stateChange.bind(this)
    }
    stateChange() {
        this.setState({ Change: false })
    }
    toggledialog() {
        const { dialog } = this.state
        const Value = !dialog
        this.setState({ dialog: Value })
    }
    toggleToast() {
        const { showToast } = this.state
        const Value = !showToast
        this.setState({ showToast: Value })
    }

    loadBack(context) {

        let val = context.state
        this.setState({ tempContext: val, Change: true })
    }
    removeBack() {
        this.setState({ tempContext: {} })
    }

    render() {
        return (
            <MyContext.Provider value="Hello World">
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
