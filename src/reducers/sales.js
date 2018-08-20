import { GET_DAILY_SALES, GET_MONTHLY_SALES, GET_PRODUCT_SALES, GET_SALES_BY_AGE_GROUP } from '../actions/sales';

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_DAILY_SALES:
			return { ...state, dailySales: action.sales };
		case GET_MONTHLY_SALES:
			return { ...state, monthlySales: action.sales };
		case GET_PRODUCT_SALES:
			return { ...state, productSales: action.sales };
		case GET_SALES_BY_AGE_GROUP:
			return { ...state, salesByAgeGroup: action.sales };

		default:
			return state;
	}
};
