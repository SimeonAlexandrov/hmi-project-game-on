import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
class Bubble extends Comment {
    render() {
        return(
            <Segment>
                {this.props}
            </Segment>
        )
    }
}



export default Bubble