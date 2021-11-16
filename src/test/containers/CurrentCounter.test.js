import React from 'react';
import ReactDOM from 'react-dom';
//components
import CurrentCounter from '../../js/containers/CurrentCounter';

describe('<CurrentCounter/> Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<CurrentCounter />);
	});

	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CurrentCounter />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
