import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './js/generic/ErrorBoundaryFallback';
//components
import CurrentCounter from './js/containers/CurrentCounter';

const App = () => {
	const [counter, setCounter] = useState(0);

	const incrementHandler = () => {
		setCounter((prev) => prev + 1);
	};

	const decrementHandler = () => {
		setCounter((prev) => prev - 1);
	};

	return (
		<ErrorBoundary
			FallbackComponent={ErrorBoundaryFallback}
			onReset={() => {
				//Reset the state of your app so the error doesn't happen again
				console.log('Try again clicked');
			}}
		>
			<div className="container">
				<h1>Counter app</h1>
				<CurrentCounter counter={counter} />
				<button type="button" onClick={incrementHandler}>
					Increment
				</button>
				<button type="button" onClick={decrementHandler}>
					Decrement
				</button>
			</div>
		</ErrorBoundary>
	);
};

export default hot(App);
