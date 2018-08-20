import React from 'react';
import { BarChart, Legend, XAxis, Bar, YAxis, Tooltip } from 'recharts';
import ChartBar from './charts/ChartBar';
import ChartPie from './charts/ChartPie';
import FullScreen from './icons/FullScreen';

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
		// const inside = 	<ChartBar report={report} dataKeyX={dataKeyX} data={data} width={width * 90 / 100} height={height * 80 / 100} />
		return (
			<div className="grid--item">
				<button>
					<FullScreen />
				</button>
				<ChartBar report={report} dataKeyX={dataKeyX} data={data} width={width * 90 / 100} height={height * 80 / 100} />
			</div>
		);
	}
	if (reportType === 'PieChart') {
		return (
			<div className="grid--item">
				<ChartPie report={report} dataKeyX="amount" data={data} width={width * 99 / 100} height={height * 60 / 100} />
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
