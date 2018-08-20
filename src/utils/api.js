import { _getDailySales, _getMonthlySales, _getProductSales } from './_data';

export function getInitialData() {
	return Promise.all([
		_getDailySales(),
		_getMonthlySales(),
		_getProductSales()
	]).then(([ dailySales, monthlySales, productSales ]) => {
		return { dailySales, monthlySales, productSales };
	});
}
