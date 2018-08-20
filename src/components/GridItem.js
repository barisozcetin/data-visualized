import React from 'react';
import { BarChart, Legend, XAxis, Bar, YAxis, Tooltip } from 'recharts';
import ChartBar from './charts/ChartBar';
import ChartPie from './charts/ChartPie';
import FullScreen from './icons/FullScreen';

const GridItem = ({ report, reportType, data, height, width, showLabel }) => {
	let dataKeyX = '';
	let inside;
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
		inside = (
			<ChartBar report={report} dataKeyX={dataKeyX} data={data} width={width * 90 / 100} height={height * 80 / 100} />
		);

	}
	if (reportType === 'PieChart') {
		inside = (
			<ChartPie report={report} dataKeyX="amount" data={data} width={width * 99 / 100} height={height * 75 / 100} showLabel={showLabel} />
		);

	}
	return (
		<div className="grid--item">

			{inside}
			<style jsx>{`
				.grid--item {
					margin-top: 12px;
				}
				.button {
					position: absolute;
					top: 5px;
					left: 50%;
					transform: translateX(-50%);
					transition: all 0.3s ease-in-out;
					cursor: pointer;
				}
				.button:hover {
					transform: translateX(-50%) scale(1.2, 1.2);
				}
			`}</style>
		</div>
	);
};

export default GridItem;
