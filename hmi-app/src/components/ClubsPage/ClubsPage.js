import React, { Component } from 'react'
import NavigationBar from '../common/NavigationBar'

class ClubsPage extends Component {
    constructor(props) {
        super(props)
        
        this.state = {term: ''}
    }
    render() {
    return (
        <div>
            <div>
                <NavigationBar />
            </div>
        </div>
    );   
    }

}

export default ClubsPage;