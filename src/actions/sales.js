export const GET_DAILY_SALES = 'GET_DAILY_SALES';
export const GET_MONTHLY_SALES = 'GET_MONTHLY_SALES';
export const GET_PRODUCT_SALES = 'GET_PRODUCT_SALES';

export const getDailySales = (sales) => {
	return {
		type: GET_DAILY_SALES,
		sales
	};
};

export const getMonthlySales = (sales) => {
	console.log(sales);
	return {
		type: GET_MONTHLY_SALES,
		sales
	};
};

export const getProductSales = (sales) => {
	console.log(sales);
	return {
		type: GET_PRODUCT_SALES,
		sales
	};
};
