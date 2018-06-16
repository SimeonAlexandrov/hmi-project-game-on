import React, { Component } from 'react'
import { Dropdown, Form, Segment } from 'semantic-ui-react'

import { getClubs } from '../../actions/clubs.actions'
import '../../style/general.css'

class LocationDropdown extends Component {
    constructor(props){
        super(props);
    }

    getClubNames() { 
        return this.props.clubs.map((club) => {
            var value = {key:club.name, value: club.name, text: club.name}
            return value;
    });
    }

    render(){
        const columnNames = this.getClubNames()
        return (
            <Segment>
                 <Dropdown placeholder='Location' options={columnNames}/>
            </Segment>
        );
    }
}

class TournamentsForm extends Component {

    render(){
        return (
            <Segment className = "centered-content" inverted color='black' compact={true} size='huge'>
                <Form  widths='equal' color = 'teal'>
                        <LocationDropdown clubs={getClubs()}/>
                        <Form.Input color = 'teal' label='Game' />
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
