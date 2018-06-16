import React, { Component } from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'


class NavigationButton extends Component {
    constructor(props) {
        super(props)

        this.state = {redirect: false}
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
            default:
                return '??'
        }
    }

    selectRoute() {
        if (this.props.name === 'Home') {
            return '/'
        } else {
            return `/${this.props.name.toLowerCase()}`
        }
    }

    handleOnClick() {
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.selectRoute()} />;
        }
        return (
            <Button onClick={() => this.handleOnClick()}>
                    <Menu.Item name={this.props.name}>
                        <Icon name={this.selectIcon()} />
                        {this.props.name}
                    </Menu.Item>
            </Button> 
        )
    }
}

export default NavigationButton