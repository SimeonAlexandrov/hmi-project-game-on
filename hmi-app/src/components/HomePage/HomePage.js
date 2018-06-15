import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

import NavigationBar from '../common/NavigationBar'
import Bubble from './Bubble'
import { getSessions, getPromos, getTournaments} from '../../actions/homePage.actions'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sessions: getSessions()
        }
    }
    render() {
    return (
        <div>
            <div>
                <NavigationBar />
                <div className="content">
                    <Header>Home</Header>
                    <Grid columns={3} divided>
                        <Grid.Row>
                        <Grid.Column>
                            Sessions {/* Some special stylingfor the first row*/}
                        </Grid.Column>
                        <Grid.Column>
                            Promos
                        </Grid.Column>
                        <Grid.Column>
                            Tournaments
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column>
                            {this.state.sessions.map((session) => {
                                return (
                                    <Bubble />
                                )
                            })
                            }
                        </Grid.Column>
                        <Grid.Column>
                            Promos
                        </Grid.Column>
                        <Grid.Column>
                            Tournaments
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