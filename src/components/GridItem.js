import React from 'react';
import { BarChart, Legend, XAxis, Bar, YAxis, Tooltip } from 'recharts';

const GridItem = ({ data, height, width }) => {
	return (
		<div className="grid--item">
			<BarChart width={width * 90 / 100} height={height * 90 / 100} data={data}>
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="amount" fill="#8884d8" />
			</BarChart>
		</div>
	);
};

export default GridItem;
