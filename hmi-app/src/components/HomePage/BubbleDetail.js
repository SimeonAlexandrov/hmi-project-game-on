import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

class BubbleDetail extends Component {
    render() {
        return(
            <div>
              <Icon name={this.props.iconName} /> {this.props.value}   
            </div>
        )
    }
}

export default BubbleDetail