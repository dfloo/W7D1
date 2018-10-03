import React from 'react';
import {createTodo} from '../../actions/todo_actions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      title: '',
      body: '',
      done: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uniqueId = this.uniqueId.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    // debugger
    if (e.currentTarget.id === 'title-input') {
      this.setState({
        title: input
      });
    } else {
      this.setState({
        body: input
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: this.uniqueId()});
    this.props.createTodo({todo}).then(
      () => this.setState({ title: '', body: ''})
    );
  }

  uniqueId() {
    return new Date().getTime();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>

        <label htmlFor='title-input'>Title: </label>
        <input
          id='title-input'
          type='text'
          onChange={this.handleChange}
          value={this.state.title}
        />
      <label htmlFor='body-input'>Body: </label>
        <input
          id='body-input'
          type='text'
          onChange={this.handleChange}
          value={this.state.body}
        />
        <input
          type='submit'
          value='Add Todo'
        />
      </form>
    );
  }
}
export default TodoForm;
