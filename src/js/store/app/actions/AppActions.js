import { SET_TEST_STRING } from '../appActionTypes';

export const setTestAction = (text) => ({
	type: SET_TEST_STRING,
	text,
});
