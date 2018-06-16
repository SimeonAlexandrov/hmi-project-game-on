import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

import '../../style/general.css'

class TextField extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Segment inverted color='teal' textAlign='center'>
                <Form.Input label={this.props.label} required={false || this.props.required} icon={this.props.icon} fluid={true}/>
            </Segment>
        )
    }
}

export default TextField;