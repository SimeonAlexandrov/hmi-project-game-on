import React, { Component } from 'react'
import { Button, Segment } from 'semantic-ui-react'

import '../../style/general.css'

class ButtonsHeader extends Component {
    render() {
        return (
            <Segment className = "centered-content" compact={true} inverted color='grey'>
                    <Button.Group widths='3' inverted color= 'blue'>
                            <Button onClick={() => this.props.handleButton('tournament')} content="Tournament" size ='huge'/>
                            <Button onClick={() => this.props.handleButton('session')} content="Session" size ='huge'/>
                            <Button onClick={() => this.props.handleButton('promo')} content="Promo" size ='huge'/>
                    </Button.Group>
                </Segment>
        );
    }
}

export default ButtonsHeader;