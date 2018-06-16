import React, { Component } from 'react'
import { Button, Segment } from 'semantic-ui-react'

import '../../style/general.css'

class HeaderButton extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return <Button size ='huge' content={this.props.name} primary ={this.props.primary}/>
    }

}

class ButtonHeader extends Component {

    render(){
        return (
            <Segment className = "centered-content" compact={true} inverted color='black'>
                <Button.Group widths='3' inverted color= 'blue'>
                    <HeaderButton name="Tournament" primary={false}/>
                    <HeaderButton name="Session" primary={true}/>
                    <HeaderButton name="Promo" primary={false}/>
                </Button.Group>
            </Segment>
        );
    }
}

export default ButtonHeader;