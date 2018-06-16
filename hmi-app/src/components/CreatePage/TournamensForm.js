import React, { Component } from 'react'
import { Dropdown, Form, Segment } from 'semantic-ui-react'

import { getClubs } from '../../actions/clubs.actions'
import { getGameNames } from '../../actions/games.actions'
import '../../style/general.css'

class FormDropdown extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Segment inverted color='teal'>
                 <Dropdown placeholder={this.props.placeholder} options={this.props.options} fluid={true}/>
            </Segment>
        );
    }
}

class TournamentsForm extends Component {

    clubNamesDropdown() { 
            return getClubs().map((club) => {
                var value = {text: club.name}
                return value;
        });
    }

    gameNamesDropdown() { 
            return getGameNames().map((game) => {
                var value = {text: game}
                return value;
        });
    }
    
    render(){
        return (
            <Segment className = "centered-content" inverted color='grey' compact={true} size='huge'>
                <Form  widths='equal' color = 'teal'>
                        <FormDropdown placeholder='Location' options={this.clubNamesDropdown()}/>
                        <FormDropdown placeholder='Games' options={this.gameNamesDropdown()}/>
                        <Form.Input color = 'teal' label='Date' />
                        <Form.Input color = 'teal' label='From' />
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
