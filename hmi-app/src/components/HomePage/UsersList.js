import React from 'react'
import { Image, List } from 'semantic-ui-react'

const UserList = () => (
  <List horizontal size='tiny' animated className='user-list' inverted>
    <List.Item className="list-item">
      <Image avatar src='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'/>
      <List.Content>
        <List.Header> Tom Jerry</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' />
      <List.Content>
        <List.Header>Christian Rocha</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' />
      <List.Content>
        <List.Header>Matt</List.Header>
      </List.Content>
    </List.Item>
  </List>
)

export default UserList