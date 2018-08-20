import React from 'react';
import { BarChart, Legend, XAxis, Bar, YAxis, Tooltip } from 'recharts';

const ChartBar = ({ report, dataKeyX, data, height, width }) => {
	// console.log('datakeyx: ' + dataKeyX);
	// console.log(report);
	// const useQuantity = report === 'dailySales' || report === 'monthlySales';
	// console.log('useqty: ' + useQuantity);
	return (
		<BarChart width={width} height={height} data={data}>
			<XAxis dataKey={dataKeyX} />
			<YAxis />
			<Tooltip />
			<Legend />

			<Bar dataKey="amount" fill="#8884d8" />
			{/* {useQuantity && <Bar dataKey="quantity" fill="#8b34d8" />} */}
		</BarChart>
	);
};

export default ChartBar;
