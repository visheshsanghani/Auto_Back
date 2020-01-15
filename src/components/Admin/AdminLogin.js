import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { admin_login } from '../../actions';
import axios from 'axios';
import { Button, Form, Segment, Image } from 'semantic-ui-react';

class AdminLogin extends React.Component {

  state ={
    login : ''
  }

  onLogin = values => {
    axios.get('http://localhost:3002/users/check/', { "UserName": "VisheshSanghani_111", "Password": "VisheshSanghani!2" })
      .then(res => console.log("response", res))
    //.then(res => res ? this.setState({ error: 'False' }) : this.setState({ error: "True" }))
  }

  onFormSubmit = value => {
    if(value.Admin === "admin" && value.Password === "admin"){
        sessionStorage.setItem('admin' , true);
        this.props.admin_login();
        this.props.history.push('/adminhome');
    }
    else{
        this.setState({
            login : 'Admin Credentials are Incorrect .'
        })
    }
  }

  changeState = () => {
    this.setState({login : ''})
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ 'marginLeft': '200px', 'paddingTop': '50px', 'marginRight': '200px', "fontSize": "30px" }}>
        <div>
          Enter Admin Credentials
        </div>
        <Segment inverted>
          <Form inverted onSubmit={handleSubmit(this.onFormSubmit)} className="ui huge form" autoComplete = "off">
            <div>
              <label htmlFor="Admin">Admin :</label>
              <Field name="Admin" component="input" onFocus = {this.changeState} type="text" required />
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
        
        <Image src="images/Perficient_logo.jpg" size='medium' className="ui centered image" style={{ "marginTop": "120px" }} />
      </div>
    )
  }
}

const dispatchStateToProps = {
  admin_login: admin_login
}


export default withRouter(connect(null, dispatchStateToProps)(reduxForm({ form: 'adminForm' })(AdminLogin)));