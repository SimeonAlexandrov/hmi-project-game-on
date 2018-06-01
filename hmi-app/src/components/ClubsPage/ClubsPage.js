import React, { Component } from 'react'
import NavigationBar from '../common/NavigationBar'
import '../../style/general.css'
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
                <div className="content">
                    Clubs
                </div>
            </div>
        </div>
    );   
    }

}

export default ClubsPage;