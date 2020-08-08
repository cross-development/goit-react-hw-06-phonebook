import { combineReducers } from 'redux';
import actionTypes from './contactsActionTypes';

const items = (state = [], { type, payload }) => {
	switch (type) {
		case actionTypes.ADD:
			return [...state, payload.contact];

		case actionTypes.REMOVE:
			return state.filter(({ id }) => id !== payload.contactId);

		default:
			return state;
	}
};

const filter = (state = '', { type, payload }) => {
	switch (type) {
		case actionTypes.CHANGE_FILTER:
			return payload.filter;

		default:
			return state;
	}
};

export default combineReducers({
	items,
	filter,
});
