import React, { Component } from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'

class NavigationButton extends Component {
    constructor(props) {
        super(props)
    }

    selectIcon() {
        switch(this.props.name) {
            case 'Home':
                return 'home'
            case 'Clubs':
                return 'list layout'
            case 'Create':
                return 'plus'
            case 'Profile':
                return 'user'
            case 'Log out':
                return 'log out'
        }
    }

    render() {
        return (
            <Button >
                <Menu.Item name={this.props.name}>
                    <Icon name={this.selectIcon()} />
                    {this.props.name}
                </Menu.Item>
            </Button> 
        )
    }
}

export default NavigationButton