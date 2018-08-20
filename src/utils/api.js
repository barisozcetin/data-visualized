import { _getDailySales, _getMonthlySales, _getSalesByProduct } from './_data';

export function getInitialData() {
	return Promise.all([
		_getDailySales(),
		_getMonthlySales(),
		_getSalesByProduct()
	]).then(([ dailySales, monthlySales, salesByProduct ]) => {
		return { dailySales, monthlySales, salesByProduct };
	});
}
