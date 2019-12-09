import React from 'react';
import { Form, Radio, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import TimerComponent from './TimerComponent';
import { score_final } from '../actions';

const data = [{ "id": 1, "Question": " What is the Capital of India ?", "Option_1": "Delhi", "Option_2": "Mumbai", "Option_3": "Bangalore", "Correct": "Delhi" },
{ "id": 2, "Question": "Financial Captial of India ? ", "Option_1": "Mumbai", "Option_2": "Ahmedabad", "Option_3": "Pune", "Correct": "Mumbai" },
{ "id": 3, "Question": "Marina Beach is located in which state ? ", "Option_1": "Tamil Nadu", "Option_2": "Karnataka", "Option_3": "Kerala", "Correct": "Tamil Nadu" },
{ "id": 4, "Question": " 2 + 3", "Option_1": "5", "Option_2": "6", "Option_3": "7", "Correct": "5" },
{ "id": 5, "Question": " Cricket World Cups won by India  ? ", "Option_1": "1", "Option_2": "2", "Option_3": "3", "Correct": "2" }];

class Common extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: 0,
      score: 0,
      correct_q: []
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

  onNextClickHandler = () => {
    const { q, correct_q, score, value } = this.state;

    value === data[q].Correct ?
      correct_q.includes(q) ?
        this.setState({
          q: q + 1
        }) :
        this.setState({
          score: score + 1,
          correct_q: [...correct_q, q],
          q: q + 1
        })
      :
      correct_q.includes(q) ?
        this.setState({
          score: score - 1,
          correct_q: correct_q.filter(item => item !== q),
          q: q + 1
        }) :
        this.setState({
          q: q + 1
        })

  }

  onPrevClickHandler = () => {

    const { q, correct_q, score, value } = this.state;
    value === data[q].Correct ?
      correct_q.includes(q) ?
        this.setState({
          q: q - 1
        }) :
        this.setState({
          score: score + 1,
          correct_q: [...correct_q, q],
          q: q - 1
        })
      :
      correct_q.includes(q) ?
        this.setState({
          score: score - 1,
          correct_q: correct_q.filter(item => item !== q),
          q: q - 1
        }) :
        this.setState({
          q: q - 1
        })

  }

   onSubmit = () => {
    const { q, correct_q, score, value } = this.state;
    value === data[q].Correct ?
      correct_q.includes(q) ?
        this.props.history.push('/final') :
        this.setState({
          score: score + 1
        })
      :
      correct_q.includes(q) ?
       this.setState({
          score: score - 1
        }) :
        this.props.history.push('/final')
    this.props.history.push('/final');
   }
  componentWillUnmount() {
    
    this.props.score_final(this.state.score);
  }

  render() {
    console.log(this.state.score);
    return (
      <div>
        <Form>
          <Form.Field>
            {`${data[this.state.q].Question}`}
          </Form.Field>
          <Form.Field>
            <Radio
              label={`${data[this.state.q].Option_1}`}
              name='radioGroup'
              value={`${data[this.state.q].Option_1}`}
              checked={this.state.value === `${data[this.state.q].Option_1}`}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label={`${data[this.state.q].Option_2}`}
              name='radioGroup'
              value={`${data[this.state.q].Option_2}`}
              checked={this.state.value === `${data[this.state.q].Option_2}`}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label={`${data[this.state.q].Option_3}`}
              name='radioGroup'
              value={`${data[this.state.q].Option_3}`}
              checked={this.state.value === `${data[this.state.q].Option_3}`}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button size='large' primary disabled={this.state.q <= 0} onClick={this.onPrevClickHandler} content="Previous" />
          <Button size='large' positive disabled={this.state.q >= data.length - 1} onClick={this.onNextClickHandler} content="Next" /> 
          <Button size='large' negative as = {Link} to = '/final' onClick={this.onSubmit } content="Submit Test" /> 
        </Form>
        <TimerComponent />
      </div>
    )
  }
}

const dispatchStateToProps = {
  score_final: score_final
}

export default withRouter(connect(null, dispatchStateToProps)(Common));