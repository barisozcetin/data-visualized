import { SET_LOADING, HIDE_LOADING } from '../actions/loading';

export default (state = true, action) => {
	switch (action.type) {
		case SET_LOADING:
			return true;
		case HIDE_LOADING:
			return false;
		default:
			return state;
	}
};
