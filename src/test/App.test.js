import React from 'react';
import { describe, beforeEach, it } from 'mocha';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
//components
import App from '../App';
import TestComponent from '../js/containers/TestComponent';

describe('Testing <App/> Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('App renders a message', () => {
		const message = <h1>Hello World</h1>;
		expect(wrapper).to.contain(message);
	});

	it('contains <TestComponent/> component', function () {
		expect(wrapper.find(TestComponent)).to.have.length(1);
	});

	chai.use(chaiEnzyme());
});
