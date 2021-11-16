import React from 'react';
import ReactDOM from 'react-dom';
//components
import CurrentCounter from '../../js/containers/CurrentCounter';
//actions
import { setTestAction } from '../../js/store/app/actions/AppActions';
//action types
import { SET_TEST_STRING } from '../../js/store/app/appActionTypes';
//reducers
import app from '../../js/store/app/reducers/AppReducer';

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
		input.simulate('change', { target: { value: 'Adam' } });
		expect(input).to.have.value('Adam');

		const displayName = wrapper.find('[data-test="displayName"]');
		expect(displayName).to.contain.text('Adam');
	});

	it('should dispatch setTestAction and update app state', () => {
		//use the actual state of your redux store for testing
		const createState = (initialState) => (actions) => actions.reduce(app, initialState),
			initialState = createState({}),
			store = mockStore(initialState);

		// Dispatch the action
		store.dispatch(setTestAction('final'));

		// Test if your store dispatched the expected actions
		expect(store).to.have.dispatchedTypes([SET_TEST_STRING]);

		//check if state changed successfully
		expect(store.getState().testString).to.equal('final');
	});
});
