import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

import '../../style/general.css'

class TextField extends Component {

    render(){
        return (
            <Segment inverted color='teal' textAlign='center'>
                <Form.Input placeholder={this.props.placeholder} label={this.props.label} required={false || this.props.required} icon={this.props.icon} fluid={true}/>
            </Segment>
        )
    }
}

export default TextField;