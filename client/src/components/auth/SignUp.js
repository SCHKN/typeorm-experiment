import React from 'react'
import { Button, Form, Header, Segment, Grid, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: [],
      success: false,
      loading: false
    }
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  onSubmit = async() => {
    this.setState({
      loading: true,
      success: false,
      errors: []
    });
    const signUpResponse = await this.props.mutate({
      variables: this.state
    });
    this.setState({ loading: false });
    if( !signUpResponse.data.signup.success ) {
      this.setState({
        errors: signUpResponse.data.signup.errors
      })
    } else {
      this.setState({
        success: true
      })
    }
  }

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
              <input placeholder='Username' value={this.state.username} onChange={this.onChange} name="username"/>
            </Form.Field>
            <Form.Field>
              <input placeholder='Email' value={this.state.email} onChange={this.onChange} name="email" />
            </Form.Field>
            <Form.Field>
              <input placeholder='Password' type='password' value={this.state.password} onChange={this.onChange} name="password"/>
            </Form.Field>
            <Button type='submit' color='violet' onClick={this.onSubmit} loading={this.state.loading}>Submit</Button>
            <Message
              visible={this.state.errors.length > 0}
              error
              header='Oops! Something went wrong'
              list={this.state.errors.map(e => e.message)}
            />
            <Message
              visible={this.state.success}
              success
              header='Your user registration was successful'
              content='Welcome among us! You may know login with the credentials you have chosen'
            />
            </Segment>
          </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const signup = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(name: $username, email: $email, password: $password) {
      success
      errors {
        field
        message
      }
    }
  }
`;

export default graphql(signup)(SignUp);
