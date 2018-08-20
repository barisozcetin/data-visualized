import React from 'react';
import { PieChart, Pie } from 'recharts';

const ChartPie = ({ report, dataKeyX, data, height, width }) => {
	return (
		<PieChart width={730} height={250}>
			<Pie data={data} dataKey={dataKeyX} nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
			{/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
		</PieChart>
	);
};

export default ChartPie;
