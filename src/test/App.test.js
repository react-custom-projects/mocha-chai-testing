import React from 'react';
//components
import App from '../App';
import CurrentCounter from '../js/containers/CurrentCounter';
//helpers
import { doDecrement, doIncrement } from '../js/constants/Helpers';

describe('<App/> Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	//unit test
	it('Renders a message', () => {
		const message = <h1>Counter app</h1>;
		expect(wrapper).to.contain(message);
	});

	//integration test
	it('Contains <CurrentCounter/> component', function () {
		expect(wrapper.find(CurrentCounter)).to.have.length(1);
	});
});

describe('Local State', () => {
	it('Should increment the counter in state', () => {
		const state = 0,
			newState = doIncrement(state);

		expect(newState).to.equal(1);
	});

	it('Should decrement the counter in state', () => {
		const state = 0,
			newState = doDecrement(state);

		expect(newState).to.equal(-1);
	});
});
