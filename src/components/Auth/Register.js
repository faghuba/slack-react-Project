import React from 'react'
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Register extends React.Component {

    state = {}
    
    handleChange =() => { }

    render () {
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange" />
                        Register for DevChat
                    </Header>

                    <Form size="large">
                        <Segment stacked>
                            <Form.Input fluid name="username" Icon="user" iconPosition="left" placeholder="Username" 
                            onChange={this.handleChange} type="text" />

                            <Form.Input fluid name="email" Icon="mail" iconPosition="left" placeholder="Email Address" 
                            onChange={this.handleChange} type="email" />

                            <Form.Input fluid name="password" Icon="lock" iconPosition="left" placeholder="Password" 
                            onChange={this.handleChange} type="password" />

                            <Form.Input fluid name="passwordConfirmation" Icon="repeat" iconPosition="left" placeholder="Password Confirmation" 
                            onChange={this.handleChange} type="password" />

                            <Button color="orange" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Already a User? <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register;