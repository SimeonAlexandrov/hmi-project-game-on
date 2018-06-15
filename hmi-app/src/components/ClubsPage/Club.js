import React, { Component } from 'react'
import { Segment, Grid, Header } from 'semantic-ui-react'

class Club extends Component {
    render() {
        return (
            <Segment>
               <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <img className="ui small image" src="/images/wireframe/image.png" alt="club image"/>
                    </Grid.Column>
                    <Grid.Column>
                        <Header>{this.props.club.name}</Header>
                        <br/>
                        Working hours: {this.props.club.from} - {this.props.club.to}
                    </Grid.Column>
                    <Grid.Column>
                        google maps
                    </Grid.Column>
                </Grid.Row>
               </Grid>
            </Segment>
        )
    }
}

export default Club