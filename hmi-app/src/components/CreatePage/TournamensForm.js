import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

import FormDropdown from './FormDropdown'
import DateTimeField  from './DateTimeField'

import { getClubs } from '../../actions/clubs.actions'
import { getGameNames } from '../../actions/games.actions'

import '../../style/general.css'

class TournamentsForm extends Component {

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
            <Segment className = "centered-content" inverted color='grey' compact={true} size='huge'>
                <Form  widths='equal' color = 'teal'>
                        <FormDropdown label='Location' placeholder='Location' options={this.clubNamesDropdown()}/>
                        <FormDropdown label='Game Type' placeholder='Games' options={this.gameNamesDropdown()}/>
                        <DateTimeField/>
                        <Form.Input color = 'teal' label='Description' />
                        <Form.Input color = 'teal' label='Rules' />
                        <Form.Input color = 'teal' label='Prizes' />
                        <Form.Button color = 'teal' content='BUTTON'/>
                </Form>
            </Segment>
        );
    }
}

export default TournamentsForm;
