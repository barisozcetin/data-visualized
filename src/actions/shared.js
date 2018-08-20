import { getDailySales, getMonthlySales, getProductSales } from './sales';
import { hideLoading } from './loading';
import { getInitialData } from './../utils/api';

export const handleInitialData = () => (dispatch) => {
	return getInitialData().then(({ dailySales, monthlySales, productSales }) => {
		dispatch(getDailySales(dailySales));
		dispatch(getMonthlySales(monthlySales));
		dispatch(getProductSales(productSales));
		dispatch(hideLoading());
	});
};
