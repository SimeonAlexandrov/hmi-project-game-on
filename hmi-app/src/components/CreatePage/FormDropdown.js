import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

import '../../style/general.css'

class FormDropdown extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Segment inverted color='teal' textAlign='center'>
                 <Form.Dropdown label={this.props.label} placeholder={this.props.placeholder} options={this.props.options} required={true}/>
            </Segment>
        );
    }
}

export default FormDropdown;