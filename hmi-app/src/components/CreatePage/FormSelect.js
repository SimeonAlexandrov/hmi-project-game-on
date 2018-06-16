import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

import '../../style/general.css'

class FormSelect extends Component {

    render(){
        return (
            <Segment inverted color='teal' textAlign='center'>
                 <Form.Select label={this.props.label} placeholder={this.props.placeholder} options={this.props.options} required={true}/>
            </Segment>
        );
    }
}

export default FormSelect;