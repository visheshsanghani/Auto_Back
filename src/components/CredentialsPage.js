import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { newLogin } from '../actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Segment, Image } from 'semantic-ui-react';

class CredentialsPage extends React.Component {

  state ={
    login : ''
  }

  onLogin = values => {
    axios.get('http://localhost:3002/users/check/', { "UserName": "VisheshSanghani_111", "Password": "VisheshSanghani!2" })
      .then(res => console.log("response", res))
    //.then(res => res ? this.setState({ error: 'False' }) : this.setState({ error: "True" }))
  }

  onFormSubmit = value => {
    axios.get('http://localhost:3002/users/check/')
      .then(response => {
        const arr = response.data.filter(obj => obj.Email === value.Email && obj.Password === value.Password)
        this.props.newLogin(arr[0])
        sessionStorage.setItem('user',JSON.stringify(arr[0]))
        arr.length > 0 ? this.props.history.push('/test') : this.setState({ login: 'Please enter the correct Email / Password' })
      })
  }

  changeState = () => {
    this.setState({login : ''})
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ 'marginLeft': '200px', 'paddingTop': '25px', 'marginRight': '200px', "fontSize": "30px" }}>
        <div>
          Enter Your Details To Login
        </div>
        <Segment inverted>
          <Form inverted onSubmit={handleSubmit(this.onFormSubmit)} className="ui huge form" >
            <div>
              <label htmlFor="Email">Email :</label>
              <Field name="Email" component="input" onFocus = {this.changeState} type="email" required />
            </div>
            <br />
            <div>
              <label htmlFor="Password">Password : </label>
              <Field name="Password" component="input" onFocus = {this.changeState} type="Password" required />
            </div>
            <br />
            <Button primary
              type="submit">Submit</Button>
            <Button
              onClick={() => this.props.history.push('/')} content='Cancel'></Button>
          </Form>
          {this.state.login}
        </Segment>
        <div>
          If you do not have an account , <Link to = '/register'>To Register</Link>
        </div>
        <Image src="images/Perficient_logo.jpg" size='medium' className="ui centered image" style={{ "marginTop": "120px" }} />
      </div>
    )
  }
}

const dispatchStateToProps = {
  newLogin: newLogin
}


export default withRouter(connect(null, dispatchStateToProps)(reduxForm({ form: 'eventForm' })(CredentialsPage)));