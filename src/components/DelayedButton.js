// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    
    delayed = (e) => {
        setTimeout(() => {
            e.persist()
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.delayed}></button>
        )
    }
}
