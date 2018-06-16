import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

import NavigationBar from '../common/NavigationBar'
import Bubble from './Bubble'
import { getSessions, getPromos, getTournaments} from '../../actions/homePage.actions'
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sessions: getSessions(),
            promos: getPromos(),
            tournaments: getTournaments()
        }
    }
    render() {
    return (
        <div >
            <div >
                <NavigationBar />
                <div className="content">
                    <Header>Home</Header>
                    <Grid columns={3} divided className='home'>
                        <Grid.Row>
                        <Grid.Column>
                        <Header as='h3' block>
                            Sessions
                        </Header>
                        </Grid.Column>
                        <Grid.Column>
                        <Header as='h3' block>
                            Promos
                        </Header>
                        </Grid.Column>
                        <Grid.Column>
                        <Header as='h3' block>
                            Tournaments
                        </Header>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column>
                            {
                                this.state.sessions.map((session) => {
                                    return (
                                        <Bubble key={session.id} session={session}/>
                                    )
                                })
                            }
                        </Grid.Column>
                        <Grid.Column>
                        {
                            this.state.promos.map((promo) => {
                                return (
                                    <Bubble key={promo.id} promo={promo}/>
                                )
                            })
                        }
                        </Grid.Column>
                        <Grid.Column>
                        {
                            this.state.tournaments.map((tournament) => {
                                return (
                                    <Bubble key={tournament.id} tournament={tournament}/>
                                )
                            })
                        }
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>       
                </div>
            </div>
        </div>
    );   
    }

}

export default HomePage;