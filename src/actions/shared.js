import { getDailySales, getMonthlySales } from './sales';
// import { hideLoading } from './loading';
import { getInitialData } from './../utils/API';

export const handleInitialData = () => (dispatch) => {
	return getInitialData().then(({ dailySales, monthlySales }) => {
		dispatch(getDailySales(dailySales));
		dispatch(getMonthlySales(monthlySales));
	});
};
