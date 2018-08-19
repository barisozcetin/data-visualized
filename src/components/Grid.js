import React, { Component } from 'react';
import { SortablePane, Pane } from 'react-sortable-pane';
import { LineChart, Line } from 'recharts';

import GridItem from './GridItem';

export class Grid extends Component {
	state = {
		sales: [ { name: 'ali', amount: 100 }, { name: 'baris', amount: 146 }, { name: 'osman', amount: 167 } ],
		order: [ '2', '1', '0' ],
		panes: { '0': { height: 100, width: 250 }, '1': { height: 200, width: 250 }, '2': { height: 300, width: 250 } },
		reports: {
			dailySales: {
				name: 'Daily Sales',
				// Keeping the name same with the components in charts folder
				type: 'BarChart'
			},
			productSales: {
				name: 'Product Sales',
				type: 'PieChart'
			}
		}
	};
	render() {
		// const panes = [ 0, 1, 2 ].map((key) => (
		// 	<Pane key={key} defaultSize={{ width: '400', height: 250 }} style={{border:'1px solid black'}} >
		// 		00{key}
		// 		<GridItem data={this.state.sales} />
		// 	</Pane>
		// ));
		return (
			<div className="grid">
				<SortablePane
					direction="horizontal"
					order={this.state.order}
					onOrderChange={(order) => {
						this.setState({ order });
					}}
					onResizeStop={(e, key, dir, ref, d) => {
						this.setState({
							panes: {
								...this.state.panes,
								[key]: { height: this.state.panes[key].height + d.height, width: this.state.panes[key].width + d.width }
							}
						});
					}}
					// onResize={(e, key, dir, ref, d) => {
					// 	this.setState({
					// 		panes: {
					// 			...this.state.panes,
					// 			[key]: { height: this.state.panes[key].height + d.height, width: this.state.panes[key].width + d.width }
					// 		}
					// 	});
					// }}
					margin={20}
					defaultOrder={[ '0', '1', '2' ]}
				>
					{[ 0, 1, 2 ].map((key) => (
						<Pane
							key={key}
							size={{ width: this.state.panes[key].width, height: this.state.panes[key].height }}
							style={{ border: '1px solid black', padding: '10px' }}
						>
							<GridItem
								num={key}
								data={this.state.sales}
								height={this.state.panes[key].height}
								width={this.state.panes[key].width}
								report={this.state.reports.dailySales}
							/>
						</Pane>
					))}
				</SortablePane>
				<style jsx>{`
					.grid {
						// margin: 10px;
					}
				`}</style>
			</div>
		);
	}
}

export default Grid;
