import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

import NavigationBar from '../common/NavigationBar'
import Bubble from './Bubble'
import HomeHeader from './HomeHeader'
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
                    <Grid columns={3} divided className='home'>
                        <Grid.Row>
                        <Grid.Column>
                            <HomeHeader title='Sessions' />
                        </Grid.Column>
                        <Grid.Column>
                            <HomeHeader title='Promos' />
                        </Grid.Column>
                        <Grid.Column>
                            <HomeHeader title='Tournaments' />
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column>
                            {
                                this.state.sessions.map((session) => {
                                    return (
                                        <Bubble key={session.id} content={session}/>
                                    )
                                })
                            }
                        </Grid.Column>
                        <Grid.Column>
                        {
                            this.state.promos.map((promo) => {
                                return (
                                    <Bubble key={promo.id} content={promo}/>
                                )
                            })
                        }
                        </Grid.Column>
                        <Grid.Column>
                        {
                            this.state.tournaments.map((tournament) => {
                                return (
                                    <Bubble key={tournament.id} content={tournament}/>
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