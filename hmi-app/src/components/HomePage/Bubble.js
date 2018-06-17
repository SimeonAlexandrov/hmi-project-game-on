import React, { Component } from 'react'
import { Button, Segment, Header, Icon } from 'semantic-ui-react'

import BubbleDetail from './BubbleDetail'
class Bubble extends Component {

    render() {
        return(
            <div>
                <Header as='h2' attached='top' color='teal' inverted className='home-element'>
                    {this.props.content.game}
                </Header>
                <Segment attached className='bubble' inverted color='grey'>
                    {this.props.content.author ? (<BubbleDetail iconName='user' value={this.props.content.author}/>) : ''}
                    {this.props.content.place ? (<BubbleDetail iconName='map marker alternate' value={this.props.content.place}/>) : ''}
                    {this.props.content.time ? (<BubbleDetail iconName='clock outline' value={this.props.content.time}/>) : ''}
                    {this.props.content.prizes ? (<BubbleDetail iconName='trophy' value={this.props.content.prizes}/>) : ''}
                    {this.props.content.rules ? (<BubbleDetail iconName='law' value={this.props.content.rules}/>) : ''}
                    {this.props.content.description ? (<BubbleDetail iconName='clipboard outline' value={this.props.content.description}/>) : ''}
                    <br/>
                    <Button color='teal' inverted className="fluid ui button"> Join </Button>
                </Segment>
                <br/>
            </div>
        )
    }
}



export default Bubble