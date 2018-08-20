import { GET_DAILY_SALES, GET_MONTHLY_SALES } from '../actions/sales';

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_DAILY_SALES:
			return { ...state, dailySales: action.sales };
		case GET_MONTHLY_SALES:
			return { ...state, monthlySales: action.sales };

		default:
			return state;
	}
};
