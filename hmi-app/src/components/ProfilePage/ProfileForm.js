import React, { Component } from 'react'
import { Segment, Form, Image, Header} from 'semantic-ui-react'

import '../../style/general.css'

class ProfileForm extends Component {

    render(){
        return (
            <Segment className ="centered-content-small" inverted color='grey' compact={true} size='huge'>
                <Segment inverted color='teal' textAlign='center'>
                    <Header as='h3'>{this.props.name + "'s profile"}</Header>
                </Segment>
                <Form  widths='equal' inverted color='teal'>
                        <Segment  fluid={true} inverted color='teal' textAlign='center'>
                            <Image src={this.props.image} circular={true} centered={true} fluid={true} size='small'/>
                        </Segment>
                        <Segment inverted color='teal' textAlign='center'>
                            <Form.Input placeholder={this.props.oldName} label='Name' fluid={true}/>
                            <Form.Input placeholder={this.props.oldMail} label='Email' fluid={true}/>
                            <Form.Input placeholder='*******' label='Password' fluid={true}/>
                        </Segment>
                        <Form.Button color = 'teal' content='Update profile' fluid={true} size='huge'/>
                </Form>
            </Segment>
        );
    }
}

export default ProfileForm;