import React from 'react';

interface Props {
	name: string;
	age?: number;
};

const Customer = ({name, age}: Props) => {

	
	return(
		<div className="customer">
			<h2>Customer </h2>
			<div>Name: {name}{age ? `, Age: ${age}` : ''}</div>
		</div>
	)
};

export default Customer;