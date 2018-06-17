import React, { Component} from 'react'
import { Header, Segment } from 'semantic-ui-react'

class HomeHeader extends Component {
    render() {
        return (
            <Segment inverted color='grey' >
                <Header inverted color='teal' size='huge'>{this.props.title}</Header>
            </Segment>
        )
    }
}

export default HomeHeader