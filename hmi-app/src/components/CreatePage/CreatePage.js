import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react'

import NavigationBar from '../common/NavigationBar'
import '../../style/general.css'
class CreatePage extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
    return (
        <div>
            <div>
                <NavigationBar />
                <div className="content">
                <Header>Create</Header>
                    <div class="ui center aligned segment">
                        <Button.Group >
                            <Button >Tournament</Button>
                            <Button>Session</Button>
                            <Button>Promo</Button>
                        </Button.Group>
                        <br/>
                        Insert form here..

                    </div>
                </div>
            </div>
        </div>
    );   
    }

}

export default CreatePage;