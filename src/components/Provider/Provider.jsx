import React, { Component } from "react";

export const MContext = React.createContext();  //exporting context object
class Provider extends Component {
    state = { message: "text" }
    render() {
        return (
            <MContext.Provider value={
                {
                    state: this.state,
                    appendMessage: (value) => {
                        const newValue = this.state.message + " " + value;
                        this.setState({
                            message: newValue
                        })
                    },
                    setMessage: (value) => this.setState({
                        message: value
                    })
                }}>
                {//this indicates that all the child tags with MyProvider as Parent can access the global store.
                    this.props.children}
            </MContext.Provider>)
    }
}

export default Provider;