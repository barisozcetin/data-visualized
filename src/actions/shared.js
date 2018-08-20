import { getDailySales, getMonthlySales, getProductSales, getSalesByAgeGroup } from './sales';
import { hideLoading } from './loading';
import { getInitialData } from './../utils/api';

export const handleInitialData = () => (dispatch) => {
	return getInitialData().then(({ dailySales, monthlySales, productSales, salesByAgeGroup }) => {
		dispatch(getDailySales(dailySales));
		dispatch(getMonthlySales(monthlySales));
		dispatch(getProductSales(productSales));
		dispatch(getSalesByAgeGroup(salesByAgeGroup));
		dispatch(hideLoading());
	});
};
