import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

class BubbleDetail extends Component {
    render() {
        return(
            <div className="bubble-detail">
              <Icon name={this.props.iconName} size='large'/> {this.props.value}   
            </div>
        )
    }
}

export default BubbleDetail