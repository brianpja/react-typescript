import React, { Component } from 'react';

interface Props {
	name: string;
	age?: number;
  isClassy?: boolean;
  initialCount?: number;
};

interface State {
  count: number;
}

class ClassyCustomer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.initialCount || 0,
    }
  }

  addCount = () => this.setState({ count: this.state.count +1 });
  subtractCount = () => this.setState({ count: this.state.count - 1 })

  render () {
    const { name, age, isClassy = true } = this.props;

    return (
      <div className={`customer ${isClassy ? 'classy' : ''}`}>
        <h2>Customer</h2>
        {
          isClassy && <div>...and this one is classy...</div>
        }
			  <div>Name: {name}{age ? `, Age: ${age}` : ''}</div>
        <div>Count: {this.state.count}</div>
        <div>
          <button onClick={this.addCount}>add</button>
          <button onClick={this.subtractCount}>sub</button>
        </div>
      </div>
    )
  }
}

export default ClassyCustomer;