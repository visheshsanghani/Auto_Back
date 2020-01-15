import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createLogin } from '../actions';
import axios from 'axios';

import { Button, Form, Segment, Image } from 'semantic-ui-react';

class RegisterPage extends React.Component {

  state = {
    error: ''
  }

  onFormSubmit = values => {
    axios.post('http://localhost:3002/users/add/', values)
      .then(() => this.props.createLogin(values))
      .then(() => this.props.history.push('/credentials'))
      .catch(err => console.log("Error : " + err))
  }

  onCheckMail = value => {
    axios.get('http://localhost:3002/users/check/')
      .then(response => {
        const arr = response.data.filter(obj => obj.Email === value.target.value)
        arr.length > 0 ?  this.setState({ error: 'Email ID already Registered' }) : this.setState({ error: "" }) 
      })
  }

  // onCheckMail = value => {
  //   console.log("Object ", value);
  //   axios.get('http://localhost:3002/users/check/', {Email : value.target.value})
  //   .then(res => console.log("response" , res))
  //   .then(res => res ? this.setState({ error: 'False' }) :  this.setState({ error : "True"}))  
  // }

  changeState = () => {
    this.setState({ error: '' })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ 'marginLeft': '200px', 'paddingTop': '18px', 'marginRight': '200px', "fontSize": "30px" }}>
        <div>
          Please Register Yourself
        </div>
        <Segment inverted>
          <Form inverted onSubmit={handleSubmit(this.onFormSubmit)} className="ui huge form" autoComplete="off" >
            <div>
              <label htmlFor="UserName">Name :</label>
              <Field name="UserName" component="input" type="text" required />
            </div>
            <br />
            <div>
              <label htmlFor="Email">Email - Address : </label>
              <Field name="Email" component="input" type="email" onFocus={this.changeState} onBlur={this.onCheckMail} required />
              <br />
              {this.state.error}
            </div>
            <br />
            <div>
              <label htmlFor="Password">Password : </label>
              <Field name="Password" component="input" type="Password" required />
            </div>
            <br />
            <Button primary
                disabled = {this.state.error === "Email ID already Registered" } type="submit">Submit</Button>
            <Button 
              onClick={() => this.props.history.push('/')} content='Cancel'></Button>
          </Form>
        </Segment>
        <Image src="images/Perficient_logo.jpg" size='medium' className="ui centered image" style={{ "marginTop": "60px" }} />
      </div>
    )
  }
}

const dispatchStateToProps = {
  createLogin: createLogin
}


export default withRouter(connect(null, dispatchStateToProps)(reduxForm({ form: 'registerForm' })(RegisterPage)));