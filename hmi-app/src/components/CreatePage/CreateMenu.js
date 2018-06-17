import React, { Component } from 'react'

import TournamentsForm from './TournamensForm'
import SessionsForm from './SessionsForm'
import PromosForm from './PromosForm'

import ButtonsHeader from './ButtonsHeader'

import '../../style/general.css'

class CreateMenu extends Component {
    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this);
        this.state = {currentForm: 'session'};
    }

    handleButton(formName) {
        this.setState({currentForm: formName});
    }

    pickForm(){
        switch (this.state.currentForm) {
            case 'session':
                return <SessionsForm/>;
            case 'tournament':
                return <TournamentsForm />;
            case 'promo':
                return <PromosForm/>;
        }
    }
  
    render() {
        return (
            <div className="content">
                <ButtonsHeader handleButton={this.handleButton}/>
                {this.pickForm()}
            </div>
        );
    }
}

export default CreateMenu