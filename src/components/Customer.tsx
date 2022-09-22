import React from 'react';

interface Props {
	name: string;
	age?: number;
};

let Customer = ({name, age}: Props) => {

	
	return(
		<>
			<h2>Customer Component {name}{age ? `, ${age}` : ''}</h2>
		</>
	)
};

export default Customer;