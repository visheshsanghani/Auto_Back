import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { createLogin } from '../actions';
import axios from 'axios';

import { Button, Form, Segment, Image } from 'semantic-ui-react';

class RegisterPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      admin : this.props.admin_login || false
    }
  }

  componentDidMount() {

    if (this.props.admin_login !== true) {
      this.props.history.push('/admin')
    }
  }

  state = {
    error: ''
  }

  onFormSubmit = values => {
    axios.post('http://localhost:3002/questions/add', values)
      .then(() => this.props.history.push('/adminhome'))
      .catch(err => console.log("Error : " + err))
  }

  onCheckMail = value => {
    axios.get('http://localhost:3002/users/check/')
      .then(response => {
        const arr = response.data.filter(obj => obj.Option_1 === value.target.value)
        arr.length > 0 ? this.setState({ error: 'Option_1 ID already Registered' }) : this.setState({ error: "" })
      })
  }

  // onCheckMail = value => {
  //   console.log("Object ", value);
  //   axios.get('http://localhost:3002/users/check/', {Option_1 : value.target.value})
  //   .then(res => console.log("response" , res))
  //   .then(res => res ? this.setState({ error: 'False' }) :  this.setState({ error : "True"}))  
  // }

  changeState = () => {
    this.setState({ error: '' })
  }

  logout = () =>{
    sessionStorage.removeItem('admin');
    this.props.history.push('/admin');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ 'marginLeft': '200px', 'paddingTop': '18px', 'marginRight': '200px', "fontSize": "30px" }}>
        <div>
          Please Enter the Question/Optioans and Correct Answer
        </div>
        <Segment inverted>
          <Form inverted onSubmit={handleSubmit(this.onFormSubmit)} className="ui huge form" autoComplete="off" >
            <div>
              <label htmlFor="Question">Question :</label>
              <Field name="Question" component="input" type="text" required />
            </div>
            <br />
            <div>
              <label htmlFor="Option_1">Option_1 : </label>
              <Field name="Option_1" component="input" type="text" onFocus={this.changeState} required />
              <br />
            </div>
            <br />
            <div>
              <label htmlFor="Option_2">Option_2 : </label>
              <Field name="Option_2" component="input" type="text" onFocus={this.changeState} required />
              <br />
            </div>
            <br />
            <div>
              <label htmlFor="Option_3">Option_3 : </label>
              <Field name="Option_3" component="input" type="text" onFocus={this.changeState} required />
              <br />
            </div>
            <br />
            <div>
              <label htmlFor="Correct">Correct : </label>
              <Field name="Correct" component="input" type="text" onFocus={this.changeState} required />
              <br />
            </div>
            <br />
            <Button primary type="submit">Submit</Button>
            <Button
              onClick={() => this.props.history.push('/adminhome')} content='Cancel'></Button>
          </Form>
        </Segment>
        <Button negative className="ui centered" size = 'huge' style ={{marginLeft : "350px"}}  onClick = {this.logout} content = "Log - Out" />
        <Image src="images/Perficient_logo.jpg" size='medium' className="ui centered image" style={{ "marginTop": "60px" }} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { admin_login: state.admin }
}

export default withRouter(connect(mapStateToProps, null)(reduxForm({ form: 'adminAddForm' })(RegisterPage)));