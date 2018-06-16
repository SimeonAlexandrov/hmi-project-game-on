import React, { Component } from 'react'
import { Button, Segment, Header, Icon } from 'semantic-ui-react'
class Bubble extends Component {
    renderSessionDetails() {
        let session = this.props.session
        return (
            <div> 
                <Header as='h2' attached='top'>
                    {session.game}
                </Header>
                <Segment attached className='bubble'>
                    <Icon  name='user' /> {session.author}
                    <br/>
                    <Icon name='map marker alternate' /> {session.place}
                    <br/>
                    <Icon name='clock outline' /> {session.from} - {session.to} 
                    <br/>
                    <Icon name='clipboard outline' /> {session.description}
                    <br/>
                    <Button> Join </Button> 
                </Segment>
           </div>
        )
    }

    renderPromoDetails() {
        let promo = this.props.promo
        return ( 
            <Segment >
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
            <div>
            <Header as='h2' attached='top'>
                {tournament.game}
            </Header>
            <Segment attached padded>
                Created by: {tournament.author}
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
           </div>
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