import React from 'react';
import ReactDOM from 'react-dom';
//components
import CurrentCounter from '../../js/containers/CurrentCounter';

describe('<CurrentCounter/> Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<CurrentCounter />);
	});

	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CurrentCounter />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('Name input works correctly', () => {
		const input = wrapper.find('[data-test="name"]');
		input.simulate('change', { target: { value: 'mango' } });
		expect(input).to.have.value('mango');

		const displayName = wrapper.find('[data-test="displayName"]');
		expect(displayName).to.contain.text('mango');
	});
});
