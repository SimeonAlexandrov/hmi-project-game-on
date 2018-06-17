import React, { Component } from 'react'
import { Segment, Grid, Header, Rating, Image } from 'semantic-ui-react'

import SimpleMap from './Map'
class Club extends Component {
    render() {
        return (
            <Segment inverted color='grey'>
               <Grid columns={3} divided>
                <Grid.Row className="club-row">
                    <Grid.Column width={4}>
                        <Image size='small' src={this.props.club.imageSrc} alt="club image" centered className="club-image" circular/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Segment inverted color='grey' className='home-element'>
                            <Header inverted color='teal' size='huge'>{this.props.club.name}</Header>
                        </Segment>
                        {
                            this.props.club.description ? 
                            (<Segment inverted color='teal' textAlign='center'>
                            {this.props.club.description }
                            </Segment>) :
                            ''
                        }
                        <br/>
                        Working hours: {this.props.club.from} - {this.props.club.to}
                        <br/>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <SimpleMap club={this.props.club} />
                    </Grid.Column>
                </Grid.Row>
               </Grid>
            </Segment>
        )
    }
}

export default Club