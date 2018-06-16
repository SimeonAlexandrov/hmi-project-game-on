import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

import FormSelect from './FormSelect'
import DateTimeField  from './DateTimeField'
import TextField from './TextField'

import { getClubs } from '../../actions/clubs.actions'
import { getGameNames } from '../../actions/games.actions'

import '../../style/general.css'

class TournamentsForm extends Component {

    constructor(props){
        super(props)
    }

    clubNamesDropdown() { 
            return getClubs().map((club) => {
                var value = {kkey:club.name, value:club.name, text: club.name}
                return value;
        });
    }

    gameNamesDropdown() { 
            return getGameNames().map((game) => {
                var value = {kkey:game, value:game, text: game}
                return value;
        });
    }
    
    render(){
        return (
            <Segment className = "centered-content" inverted color='black' compact={true} size='huge'>
                <Form  widths='equal' color = 'teal'>
                        <FormSelect label='Location' placeholder='Location' options={this.clubNamesDropdown()}/>
                        <FormSelect label='Game Type' placeholder='Games' options={this.gameNamesDropdown()}/>
                        <DateTimeField/>
                        <TextField label='Description' icon='clipboard outline'/>
                        <TextField label='Rules' icon='ban' required/>
                        <TextField label='Prizes' icon='trophy' required/>
                        <Form.Button color = 'teal' content='CREATE'/>
                </Form>
            </Segment>
        );
    }
}

export default TournamentsForm;
