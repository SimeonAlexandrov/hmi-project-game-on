import React, { Component } from 'react'
import ButtonHeader from './ButtonHeader'
import TournamentsForm from './TournamensForm'

import NavigationBar from '../common/NavigationBar'
import '../../style/general.css'
class CreatePage extends Component {
    
    constructor(props) {
        super(props)
        
    }
    
    render() {
        return (
            <div>
                <NavigationBar />
                <div className="content">
                    <ButtonHeader/>
                    <TournamentsForm/>
                </div>
            </div>
        );   
    }

}

export default CreatePage;