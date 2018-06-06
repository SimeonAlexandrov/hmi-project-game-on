import React, { Component } from 'react'
import NavigationBar from '../common/NavigationBar'
import '../../style/general.css'
class ProfilePage extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
    return (
        <div>
            <div>
                <NavigationBar />
                <div className="content">
                    Profile
                </div>
            </div>
        </div>
    );   
    }

}

export default ProfilePage;