import React, { Component } from 'react';

interface Props {
	name: string;
	age?: number;
  isClassy?: boolean;
};

class ClassyCustomer extends Component<Props, object> {
  render () {
    const { name, age, isClassy = true } = this.props;

    return (
      <div className={`customer ${isClassy ? 'classy' : ''}`}>
        <h2>Customer</h2>
        {
          isClassy && <div>...and this one is classy...</div>
        }
			  <div>Name: {name}{age ? `, Age: ${age}` : ''}</div>
      </div>
    )
  }
}

export default ClassyCustomer;