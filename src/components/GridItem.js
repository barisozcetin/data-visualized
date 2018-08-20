import React from 'react';
import { BarChart, Legend, XAxis, Bar, YAxis, Tooltip } from 'recharts';
import ChartBar from './charts/ChartBar';

const GridItem = ({ report, reportType, data, height, width }) => {
	let dataKeyX = '';
	if (report === 'dailySales') {
		dataKeyX = 'date';
	}
	if (report === 'monthlySales') {
		dataKeyX = 'month';
	}
	if (report === 'productSales') {
		dataKeyX = 'product';
	}
	if (reportType === 'BarChart') {
		return (
			<div className="grid--item">
				{reportType === 'BarChart' && (
					<ChartBar
						report={report}
						dataKeyX={dataKeyX}
						data={data}
						width={width * 90 / 100}
						height={height * 90 / 100}
					/>
				)}
			</div>
		);
	}
	return (
		<div className="grid--item">
			<BarChart width={width * 90 / 100} height={height * 90 / 100} data={data}>
				<XAxis dataKey={dataKeyX} />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="amount" fill="#8884d8" />
			</BarChart>
		</div>
	);
};

export default GridItem;
