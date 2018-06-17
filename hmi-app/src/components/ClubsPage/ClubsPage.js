import React, { Component } from 'react'
import NavigationBar from '../common/NavigationBar'
import { Header, Segment } from 'semantic-ui-react'
import '../../style/general.css'
import { getClubs } from '../../actions/clubs.actions'
import  Club  from './Club'
class ClubsPage extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            clubs: getClubs()
        } 
    }
    render() {
    return (
        <div>
            <div>
                <NavigationBar />
                <div className="page-content">
                {
                    this.state.clubs.map((club) => {
                        return (
                          <Club key={club.name.trim()} club={club} />
                        )
                    })
                }
                </div>
            </div>
        </div>
    );   
    }

}

export default ClubsPage;