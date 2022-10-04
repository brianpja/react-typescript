import React, { ChangeEvent, useState } from 'react';

interface Props {
	name: string;
	age?: number;
};

interface CustomerData {
	name: string,
	age?: number
}

const Customer = ({name, age}: Props) => {

	const [editMode, setEditMode] = useState<boolean> (false);
	const [customerData, setCustomerData] = useState<CustomerData> ({
		name,
		age
	});

	const toggleEditMode = (): void => {
		setEditMode(!editMode);
	}

	const updateValue = (e: ChangeEvent<HTMLInputElement>, fieldName: string): any => {
		const newData = { ...customerData, [fieldName]: e.target?.value };
		setCustomerData(newData);
	};
	
	return(
		<div className="customer">
			<h2>Customer </h2>
			<div>
				{
					editMode ? (
						<>
							<input value={customerData.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue(e, 'name')} />
							<input value={customerData.age} onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue(e, 'age')} />
						</>
					) :
					(
						<>
							<span>Name: {customerData.name}</span>
							<span>{customerData.age ? `, Age: ${customerData.age}` : ''}</span>
						</>
					)
				}
				
			</div>
			<button onClick={toggleEditMode}>{ editMode ? 'Save' : 'Edit' }</button>
			{
				editMode && <div>Edit Mode</div>
			}
		</div>
	)
};

export default Customer;