import React, { Component } from 'react'
import { Sidebar, Button, Menu} from 'semantic-ui-react'

import NavigationButton from './NavigationButton'

class NavigationBar extends Component {
  constructor(props) {
      super(props)

      this.state = { visible: true }
  }

  shouldComponentUpdate() {
    window.location.reload()
    return true
  }

  render() {
    return (
      <div>
        <Sidebar width='wide' as={Menu} direction='top' visible={this.state.visible} inverted>
            <Button.Group widths='5' color="blue">
                <NavigationButton  name="Home"/>
                <NavigationButton  name="Clubs"/>
                <NavigationButton  name="Create"/>
                <NavigationButton  name="Profile"/>
                <NavigationButton  name="Log out"/>
            </Button.Group>
        </Sidebar>
      </div>
    )
  }
}

export default NavigationBar;