import React, { Component } from 'react'
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
                    Create
                </div>
            </div>
        </div>
    );   
    }

}

export default CreatePage;