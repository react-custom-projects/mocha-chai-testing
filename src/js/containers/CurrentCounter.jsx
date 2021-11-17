import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { setTestAction } from '../store/app/actions/AppActions';
//selectors
import { getAppTestString } from '../store/app/selectors/AppSelectors';

const CurrentCounter = ({ counter }) => {
	const dispatch = useDispatch(),
		[name, setName] = useState(''),
		testString = useSelector((state) => getAppTestString({ state }));

	const testStringHandler = () => {
		dispatch(setTestAction('final'));
	};

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
			<p>{testString}</p>
			<div>
				<button onClick={testStringHandler}>Change test string</button>
			</div>
		</>
	);
};

export default CurrentCounter;
