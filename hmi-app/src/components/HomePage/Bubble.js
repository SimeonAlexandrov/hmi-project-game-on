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
        let promo = this.props.promo
        return ( 
            <Segment piled>
                Created by: {promo.author}
                <br/>
                Game: {promo.game}
                <br/>
                Place: {promo.place}
                <br/>
                From: {promo.from}
                <br/>
                To: {promo.to}
                <br/>
                Description: {promo.description}
                <br/>
                <Button> Join </Button> 
            </Segment>
           
        )
    }

    renderTournamentDetails() {
        let tournament = this.props.tournament
        return ( 
            <Segment piled>
                Created by: {tournament.author}
                <br/>
                Game: {tournament.game}
                <br/>
                Place: {tournament.place}
                <br/>
                From: {tournament.from}
                <br/>
                To: {tournament.to}
                <br/>
                Description: {tournament.description}
                <br/>
                <Button> Join </Button> 
            </Segment>
           
        )
    }

    render() {
        return(
            <div>
                  {this.props.session ? this.renderSessionDetails() : ''}
                  {this.props.promo ? this.renderPromoDetails() : ''}
                  {this.props.tournament ? this.renderTournamentDetails() : ''}
            </div>
        )
    }
}



export default Bubble