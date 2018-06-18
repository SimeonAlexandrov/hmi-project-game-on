import React, { Component } from 'react'
import { Button, Segment, Header, Icon, Image } from 'semantic-ui-react'

import BubbleDetail from './BubbleDetail'
import UserList from './UsersList'
class Bubble extends Component {

    render() {
        return(
            <div>
                <Header as='h2' attached='top' color='teal' inverted className='home-element'>
                    {this.props.content.game}
                </Header>
                <Segment attached className='bubble' inverted color='grey'>
                    <Segment color='teal' inverted>
                    {this.props.content.author ? (<div><Image avatar src='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'/>{this.props.content.author}</div>) : ''}
                    {this.props.content.place ? (<BubbleDetail iconName='map marker alternate' value={this.props.content.place}/>) : ''}
                    {this.props.content.time ? (<BubbleDetail iconName='clock outline' value={this.props.content.time} />) : ''}
                    {this.props.content.prizes ? (<BubbleDetail iconName='trophy' value={this.props.content.prizes}/>) : ''}
                    {this.props.content.rules ? (<BubbleDetail iconName='law' value={this.props.content.rules}/>) : ''}
                    {this.props.content.description ? (<BubbleDetail iconName='clipboard outline' value={this.props.content.description}/>) : ''}
                    <UserList />
                    <p className='joined'>have decided to join.</p>
                    </Segment>
                    <Button color='teal' inverted className="fluid ui button"> Join </Button>
                </Segment>
                <br/>
            </div>
        )
    }
}



export default Bubble