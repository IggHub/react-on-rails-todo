import React, { PropTypes } from 'react';
import {HelloWorldFooter} from './HelloWorldFooter';
import Todo from './Todo';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
    age: PropTypes.number.isRequired
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age
    };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  updateAge(e){
    this.setState({
      age: e.target.value
    })
  };

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          /> - age:
        <input
          id="age"
          type="text"
          value={this.state.age}
          onChange={this.updateAge.bind(this)}
        />
        </form>
        <p>I see you are {this.state.age} years old!</p>
        <HelloWorldFooter />
        <Todo />
      </div>
    );
  }
}
