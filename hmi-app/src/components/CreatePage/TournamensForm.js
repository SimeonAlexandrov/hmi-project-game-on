import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

import { getClubs } from '../../actions/clubs.actions'
import { getGameNames } from '../../actions/games.actions'
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

class DateTimeFields extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Segment inverted color='teal'>
                <Form.Group textAlign='center'>
                    <Form.Input label='Date' icon='calendar' color = 'teal' type='date' placeholder='Date' required={true} float='left'/>
                    <Form.Input label='Time' icon='clock' color = 'teal' type='hour' placeholder='Hour' required={true} float='right'/>
                </Form.Group>
            </Segment>
        );
    }

}

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
                        <DateTimeFields/>
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
