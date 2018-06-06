import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

import NavigationBar from '../common/NavigationBar'
import Bubble from './Bubble'

class HomePage extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            sessions: [
                {
                    game: 'Catan',
                    autor: 'Bacho Kolio',
                    place: 'Trite trola',
                    from: '123',
                    to: '456',
                    description: 'best catan party ever'
                },
                {
                    autor: 'Bacho Kolio',
                    place: 'Trite trola',
                    from: '123',
                    to: '456',
                },
                {
                    autor: 'Bacho Kolio',
                    place: 'Trite trola',
                    from: '123',
                    to: '456',
                }
            ],
            promos: [

            ],
            tournaments: [
                
            ]
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
                            {/* Three separate lists*/}
                        </Grid.Row>
                    </Grid>       
                </div>
            </div>
        </div>
    );   
    }

}

export default HomePage;