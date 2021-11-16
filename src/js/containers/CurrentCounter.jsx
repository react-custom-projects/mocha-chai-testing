import React, { useState } from 'react';

const CurrentCounter = ({ counter }) => {
	const [name, setName] = useState('');

	const nameHandler = ({ target: { value } }) => {
		setName(value);
	};

	return (
		<>
			<input
				data-test="name"
				type="text"
				onChange={nameHandler}
				value={name}
				placeholder="Enter a name"
			/>
			<p data-test="displayName">Name is: {name}</p>
			<p>Current counter: {counter}</p>
		</>
	);
};

export default CurrentCounter;
