/**
 * redux store
 * @author: Arie M. Prasetyo (2019)
 */

import {createStore} from 'redux';

const defaultState = {
	user: {}
};

const reducer = (state = defaultState, action) => {
	return state;
};

export const store = createStore(reducer);