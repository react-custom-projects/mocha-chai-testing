import React from 'react';
//components
import App from '../App';
import CurrentCounter from '../js/containers/CurrentCounter';

describe('Testing <App/> Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	//unit test
	it('App renders a message', () => {
		const message = <h1>Counter app</h1>;
		expect(wrapper).to.contain(message);
	});

	//integration test
	it('contains <CurrentCounter/> component', function () {
		expect(wrapper.find(CurrentCounter)).to.have.length(1);
	});
});
