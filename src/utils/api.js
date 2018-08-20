import { _getDailySales, _getMonthlySales, _getProductSales, _getSalesByAgeGroup } from './_data';

export function getInitialData() {
	return Promise.all([
		_getDailySales(),
		_getMonthlySales(),
		_getProductSales(),
		_getSalesByAgeGroup()
	]).then(([ dailySales, monthlySales, productSales, salesByAgeGroup ]) => {
		return { dailySales, monthlySales, productSales, salesByAgeGroup };
	});
}
