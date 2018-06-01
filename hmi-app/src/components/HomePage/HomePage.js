import React, { Component } from 'react'
import NavigationBar from '../common/NavigationBar'
class HomePage extends Component {
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
            <h3>HomePage</h3>
        </div>
    );   
    }

}

export default HomePage;