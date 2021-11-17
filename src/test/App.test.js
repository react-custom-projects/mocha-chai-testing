import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//components
import App from '../App';
import CurrentCounter from '../js/containers/CurrentCounter';
//helpers
import { doDecrement, doIncrement } from '../js/constants/Helpers';
//reducers
import app from '../js/store/app/reducers/AppReducer';

describe('<App/> Component', () => {
	let wrapper,
		store = null;

	beforeEach(() => {
		store = mockedStore({ initialState: {}, reducer: app });
		wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
	});

	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});

	//unit test
	it('Renders a message', () => {
		const message = <h1>Counter app</h1>;
		expect(wrapper).to.contain(message);
	});

	//unit test
	it('Increment button works as expected', () => {
		const incrementButton = wrapper.find('[data-test="increment"]');
		incrementButton.simulate('click');

		const counterWrapper = wrapper.find(CurrentCounter);
		expect(counterWrapper.props().counter).to.equal(1);
	});

	//unit test
	it('Decrement button works as expected', () => {
		const decrementButton = wrapper.find('[data-test="decrement"]');
		decrementButton.simulate('click');

		const counterWrapper = wrapper.find(CurrentCounter);
		expect(counterWrapper.props().counter).to.equal(-1);
	});

	//unit test
	it('Contains <CurrentCounter/> component', function () {
		expect(wrapper.find(CurrentCounter)).to.have.length(1);
	});

	//integration test
	it('Passes all props to <CurrentCounter/> component', () => {
		const counterWrapper = wrapper.find(CurrentCounter);

		expect(counterWrapper.props().counter).to.equal(0);
	});
});

describe('<App/> Component Local State', () => {
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
