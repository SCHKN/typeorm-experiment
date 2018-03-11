import React from 'react'
import { Button, Form, Header, Segment, Grid } from 'semantic-ui-react'

class SignUp extends React.Component {
  render() {
    return (
      <div className="signup-form">
        <Grid
          verticalAlign='middle'
          style={{ height: '100%' }}
          textAlign='center'
          >
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='violet' textAlign='center'>
            {' '}Sign Up
            </Header>
          <Form>
            <Segment raised>
            <Form.Field>
              <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Name you will use on this website' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Password' type='password'/>
            </Form.Field>
            <Button type='submit' color='violet'>Submit</Button>
            </Segment>
          </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default SignUp;
