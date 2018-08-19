const dailySales = [
	{
		date: '9/29/2017',
		quantity: 12,
		amount: 121.91
	},
	{
		date: '8/23/2018',
		quantity: 17,
		amount: 34.98
	},
	{
		date: '12/14/2017',
		quantity: 11,
		amount: 44.32
	},
	{
		date: '1/25/2018',
		quantity: 11,
		amount: 67.26
	},
	{
		date: '9/29/2017',
		quantity: 8,
		amount: 98.74
	},
	{
		date: '11/21/2017',
		quantity: 12,
		amount: 121.32
	},
	{
		date: '7/2/2018',
		quantity: 6,
		amount: 113.25
	},
	{
		date: '3/22/2018',
		quantity: 10,
		amount: 63.34
	},
	{
		date: '11/12/2017',
		quantity: 9,
		amount: 74.94
	},
	{
		date: '2/6/2018',
		quantity: 11,
		amount: 141.12
	},
	{
		date: '4/15/2018',
		quantity: 8,
		amount: 73.5
	},
	{
		date: '3/12/2018',
		quantity: 10,
		amount: 73.82
	},
	{
		date: '12/14/2017',
		quantity: 11,
		amount: 37.39
	},
	{
		date: '8/15/2017',
		quantity: 15,
		amount: 48.44
	},
	{
		date: '5/28/2018',
		quantity: 22,
		amount: 106.21
	},
	{
		date: '8/21/2017',
		quantity: 19,
		amount: 113.54
	},
	{
		date: '6/24/2018',
		quantity: 6,
		amount: 24.53
	},
	{
		date: '8/17/2018',
		quantity: 17,
		amount: 81.07
	},
	{
		date: '3/18/2018',
		quantity: 16,
		amount: 81.23
	},
	{
		date: '1/14/2018',
		quantity: 14,
		amount: 116.07
	},
	{
		date: '3/5/2018',
		quantity: 8,
		amount: 81.09
	},
	{
		date: '4/3/2018',
		quantity: 6,
		amount: 53.62
	},
	{
		date: '1/17/2018',
		quantity: 23,
		amount: 43.07
	},
	{
		date: '6/24/2018',
		quantity: 12,
		amount: 66.8
	},
	{
		date: '6/25/2018',
		quantity: 16,
		amount: 47.79
	},
	{
		date: '12/6/2017',
		quantity: 25,
		amount: 106.47
	},
	{
		date: '7/10/2018',
		quantity: 22,
		amount: 124.35
	},
	{
		date: '7/14/2018',
		quantity: 16,
		amount: 104.85
	},
	{
		date: '11/26/2017',
		quantity: 12,
		amount: 90.42
	},
	{
		date: '1/29/2018',
		quantity: 19,
		amount: 76.28
	},
	{
		date: '7/13/2018',
		quantity: 7,
		amount: 109.28
	},
	{
		date: '3/21/2018',
		quantity: 15,
		amount: 37.22
	},
	{
		date: '1/12/2018',
		quantity: 8,
		amount: 136.53
	},
	{
		date: '7/31/2018',
		quantity: 12,
		amount: 101.67
	},
	{
		date: '2/22/2018',
		quantity: 22,
		amount: 95.11
	},
	{
		date: '8/7/2018',
		quantity: 21,
		amount: 136.61
	},
	{
		date: '7/24/2018',
		quantity: 17,
		amount: 130.35
	},
	{
		date: '1/25/2018',
		quantity: 15,
		amount: 116.05
	},
	{
		date: '8/21/2018',
		quantity: 9,
		amount: 77.31
	},
	{
		date: '8/4/2018',
		quantity: 18,
		amount: 49.69
	}
];

const salesByProduct = [
	{
		product: 'Bread - Bagels, Plain',
		quantity: 85,
		amount: 1488.7
	},
	{
		product: 'Paper Towel Touchless',
		quantity: 189,
		amount: 377.13
	},
	{
		product: 'Lotus Rootlets - Canned',
		quantity: 123,
		amount: 412.98
	},
	{
		product: 'Beer - Labatt Blue',
		quantity: 169,
		amount: 1071.71
	},
	{
		product: 'Turkey - Breast, Bone - In',
		quantity: 110,
		amount: 338.57
	}
];

export function _getDailySales() {
	// console.log(...data);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(...dailySales.sort((a, b) => new Date(b.date) - new Date(a.date)));
		}, 1000);
	});
}
