import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

import '../../style/general.css'

class DateTimeField extends Component {

    render(){
        return (
            <Segment inverted color='teal'>
                <Form.Group>
                    <Form.Input label='Date' icon='calendar' color = 'teal' type='date' placeholder='Date' required={true} float='left'/>
                    <Form.Input label='Time' icon='clock' color = 'teal' type='hour' placeholder='Hour' required={true} float='right'/>
                </Form.Group>
            </Segment>
        );
    }

}

export default DateTimeField