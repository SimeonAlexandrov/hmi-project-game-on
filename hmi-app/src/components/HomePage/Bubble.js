import React, { Component } from 'react'
import { Button, Segment } from 'semantic-ui-react'
class Bubble extends Component {
    renderSessionDetails() {
        let session = this.props.session
        return ( 
            <Segment piled>
                Created by: {session.author}
                <br/>
                Game: {session.game}
                <br/>
                Place: {session.place}
                <br/>
                From: {session.from}
                <br/>
                To: {session.to}
                <br/>
                Description: {session.description}
                <br/>
                <Button> Join </Button> 
            </Segment>
           
        )
    }

    renderPromoDetails() {
        
    }

    renderTournamentDetails() {
        
    }

    render() {
        return(
            <div>
                  {this.props.session ? this.renderSessionDetails() : ''}
                  {this.props.promo ? this.renderSessionDetails() : ''}
                  {this.props.tournament ? this.renderSessionDetails() : ''}
            </div>
        )
    }
}



export default Bubble