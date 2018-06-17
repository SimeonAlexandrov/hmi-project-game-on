import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

import FormSelect from './FormSelect'
import DateTimeField  from './DateTimeField'
import TextField from './TextField'

import { getClubs } from '../../actions/clubs.actions'
import { getGameNames } from '../../actions/games.actions'

import '../../style/general.css'

class PromosForm extends Component {

    clubNamesDropdown() { 
        return getClubs().map((club) => {
            var value = {key:club.name, value:club.name, text: club.name}
            return value;
        });
    }

    render(){
        return (
            <Segment className = "centered-content" inverted color='grey' compact={true} size='huge'>
                <Form  widths='equal' color = 'teal'>
                        <FormSelect label='Location' placeholder='Location' options={this.clubNamesDropdown()}/>
                        <DateTimeField/>
                        <TextField placeholder='Additional tournament info' label='Description' icon='clipboard'/>
                        <Form.Button color = 'teal' content='CREATE'/>
                </Form>
            </Segment>
        )
    }
}

export default PromosForm;
    