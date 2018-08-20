import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const ChartPie = ({ report, dataKeyX, data, height, width }) => {
	return (
		<PieChart width={width} height={height}>
			<Pie data={data} dataKey="amount" nameKey="product" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
			{/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
			<Tooltip />
			{height > 250 && <Legend />}
		</PieChart>
	);
};

export default ChartPie;
