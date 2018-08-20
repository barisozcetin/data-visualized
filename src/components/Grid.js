import React, { Component } from 'react';
import { SortablePane, Pane } from 'react-sortable-pane';

import GridItem from './GridItem';

export class Grid extends Component {
	state = {
		sales: [ { name: 'ali', amount: 100 }, { name: 'baris', amount: 146 }, { name: 'osman', amount: 167 } ],
		order: [ 'dailySales', 'productSales', 'monthlySales', 'salesByAge' ],
		panes: {
			dailySales: { height: 300, width: 250 },
			monthlySales: { height: 300, width: 250 },
			productSales: { height: 300, width: 250 },
			salesByAge: { height: 300, width: 250 }
		},
		reports: {
			dailySales: {
				name: 'dailySales',
				description: 'Daily Sales',
				type: 'BarChart'
			},
			monthlySales: {
				name: 'monthlySales',
				description: 'Monthly Sales',
				type: 'BarChart'
			},
			productSales: {
				name: 'productSales',
				description: 'Product Sales',
				type: 'PieChart'
			},
			salesByAge: {
				name: 'salesByAge',
				description: 'Sales by Customer Age',
				type: 'RadialBarChart'
			}
		},
		activeReports: [ 'dailySales', 'productSales', 'monthlySales', 'salesByAge' ],
		data: {
			dailySales: ''
		}
	};

	componentDidMount() {}

	toggleActiveReport = (report) => {
		if (this.state.activeReports.includes(report)) {
			this.setState((prev) => ({ activeReports: prev.activeReports.filter((val) => val !== report) }));
			this.setState((prev) => ({ order: prev.order.filter((val) => val !== report) }));
		} else {
			this.setState((prev) => ({ activeReports: [ ...prev.activeReports, report ] }));
			this.setState((prev) => ({ order: [ ...prev.order, report ] }));
		}
	};
	render() {
		const reportsList = (
			<ul>
				{Object.keys(this.state.reports).map((report) => (
					<li key={report}>
						<input
							type="checkbox"
							name={report}
							id=""
							checked={this.state.activeReports.includes(report)}
							onChange={() => this.toggleActiveReport(report)}
						/>
						<label htmlFor={report}>{this.state.reports[report].description}</label>
					</li>
				))}
			</ul>
		);
		return (
			<div className="grid">
				<SortablePane
					disableEffect
					syle={{ height: '600', maxWidth: '100vw' }}
					direction="horizontal"
					order={this.state.order}
					onOrderChange={(order) => {
						this.setState({ order });
						this.forceUpdate();
					}}
					onResizeStop={(e, key, dir, ref, d) => {
						console.log('height: ' + d.height + '-- width: ' + d.width);
						this.setState({
							panes: {
								...this.state.panes,
								[key]: { height: this.state.panes[key].height + d.height, width: this.state.panes[key].width + d.width }
							}
						});
					}}
					margin={20}
					onResize={(e, key, dir, ref, d) => {
						console.log(d);
					}}
				>
					{this.state.activeReports.map((report, index) => {
						return (
							<Pane
								key={report}
								defaultSize={{ width: '150', height: '600' }}
								size={{ width: this.state.panes[report].width, height: this.state.panes[report].height }}
								style={{ border: '1px solid black', padding: '10px' }}
								maxHeight="600"
								minHeight="100"
								minWidth="100"
								maxWidth="800"
							>
								<p>{report}</p>
								<GridItem
									num={1}
									data={this.state.sales}
									height={this.state.panes[report].height}
									width={this.state.panes[report].width}

									// report={this.state.reports.dailySales}
								/>
							</Pane>
						);
					})}
				</SortablePane>
				<div className="filters">{reportsList}</div>
				<style jsx>{`
					.grid {
						display: grid;
						min-height: 100vh;
						grid-template-rows: 650px auto;
					}
				`}</style>
			</div>
		);
	}
}

export default Grid;
