//action types
import { SET_TEST_STRING } from '../appActionTypes';
//constants
import { updateObject } from '../../../constants/Helpers';

const initialState = {
	testString: 'initial',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TEST_STRING: {
			return updateObject(state, { testString: action.text });
		}
		default:
			return state;
	}
};

export default reducer;
