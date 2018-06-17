import React, { Component } from 'react'

import NavigationBar from '../common/NavigationBar'
import CreateMenu from './CreateMenu'
import '../../style/general.css'

class CreatePage extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <CreateMenu/>
            </div>
        );   
    }

}

export default CreatePage;