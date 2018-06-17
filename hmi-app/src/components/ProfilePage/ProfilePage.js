import React, { Component } from 'react'

import ProfileForm from './ProfileForm'
import NavigationBar from '../common/NavigationBar'

import { getProfile } from '../../actions/profile.action'

import '../../style/general.css'

class ProfilePage extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        var profile = getProfile();
    return (
        <div>
            <NavigationBar />
            <div className="content">
                <ProfileForm name={profile.name} image={profile.picture}/>
            </div>
        </div>
    );   
    }

}

export default ProfilePage;