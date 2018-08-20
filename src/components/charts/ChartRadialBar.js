import React from 'react';
import { RadialBarChart, RadialBar, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartRadialBar = ({ report, dataKeyX, data, height, width, showLabel }) => {
	console.log('----');
	console.log(data);
	console.log('----');

	return (
		<ResponsiveContainer width={width} height={height + 40}>
			<RadialBarChart
				width={width}
				height={height}
				innerRadius="10%"
				outerRadius="95%"
				// data={[ { name: 'ali', quantity: 10 }, { name: 'veli', quantity: 20 } ]}
				data={data}
				startAngle={180}
				endAngle={0}
				align="left"
				// style={{ marginRight: '125px' }}
				syle={{ left: '5px', marginLeft: '-30px' }}
			>
				<RadialBar
					minAngle={15}
					label={width > 250 && { fill: '#666', position: 'insideStart' }}
					background
					clockWise={true}
					dataKey="amount"
				/>
				<Legend
					iconSize={10}
					width={80}
					height={48}
					layout="horizontal"
					verticalAlign="top"
					align="center"
					style={{ marginLeft: '126px' }}
				/>
				<Tooltip />
			</RadialBarChart>
		</ResponsiveContainer>
	);
};

export default ChartRadialBar;
