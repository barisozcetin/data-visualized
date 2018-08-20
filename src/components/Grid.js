import React, { Component } from 'react';
import { SortablePane, Pane } from 'react-sortable-pane';
import { connect } from 'react-redux';

import GridItem from './GridItem';
import Modal from './Modal';

export class Grid extends Component {
	state = {
		modalActive: false,
		sales: [ { name: 'ali', amount: 100 }, { name: 'baris', amount: 146 }, { name: 'osman', amount: 167 } ],
		order: [ 'dailySales', 'productSales', 'monthlySales', 'salesByAgeGroup' ],
		panes: {
			dailySales: { height: 300, width: 250 },
			monthlySales: { height: 300, width: 250 },
			productSales: { height: 300, width: 250 },
			salesByAgeGroup: { height: 300, width: 250 }
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
			salesByAgeGroup: {
				name: 'salesByAgeGroup',
				description: 'Sales by Customer Age',
				type: 'RadialBarChart'
			}
		},
		activeReports: [ 'dailySales', 'productSales', 'monthlySales', 'salesByAgeGroup' ],
		data: {
			dailySales: ''
		}
	};

	componentDidMount() {
		// console.log(this.props)
	}

	toggleActiveReport = (report) => {
		if (this.state.activeReports.includes(report)) {
			this.setState((prev) => ({ activeReports: prev.activeReports.filter((val) => val !== report) }));
			this.setState((prev) => ({ order: prev.order.filter((val) => val !== report) }));
		} else {
			this.setState((prev) => ({ activeReports: [ ...prev.activeReports, report ] }));
			this.setState((prev) => ({ order: [ ...prev.order, report ] }));
		}
	};

	toggleModal = (report) => {
		console.log('aaa toggle ' + report);
		if (!report) {
			console.log('aloooo toggle');
			this.setState({ modalActive: false });
		}
	};

	modalContent = <div>aa</div>;

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
		// let modalContent;
		console.log('mc: ' + this.modalContent);
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
								<button
									className="button button--transparent button-fullscreen"
									onClick={() => {
										this.modalContent = (
											<GridItem
												num={1}
												report={report}
												data={this.props[report] ? this.props[report] : this.state.sales}
												height={600}
												width={800}
												reportType={this.state.reports[report].type}
												showLabel
											/>
										);
										console.log(this.modalContent);
										this.setState({ modalActive: true });
									}}
								>
									<img
										src="https://res.cloudinary.com/dydyt6wbt/image/upload/v1534731037/icons/fullscreen.svg"
										alt="FullScreen"
										className="image is-16x16 ico-fs"
									/>
								</button>
								<GridItem
									num={1}
									report={report}
									data={this.props[report] ? this.props[report] : this.state.sales}
									height={this.state.panes[report].height}
									width={this.state.panes[report].width}
									reportType={this.state.reports[report].type}

									// report={this.state.reports.dailySales}
								/>
							</Pane>
						);
					})}
				</SortablePane>
				<div className="filters">{reportsList}</div>
				<Modal isActive={this.state.modalActive} onClose={() => this.toggleModal()}>
					{this.modalContent}
				</Modal>
				<style jsx>{`
					.grid {
						display: grid;
						min-height: 100vh;
						grid-template-rows: 650px auto;
						margin: 20px;
					}
				`}</style>
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({
// 	dailySales: state.sales.dailySales,
// 	monthlySales: state.sales.monthlySales,
// 	productSales: state.sales.productSales,
// 	salesByAgeGroup
// });

const mapStateToProps = (state) => {
	const { dailySales, monthlySales, productSales, salesByAgeGroup } = state.sales;
	return { dailySales, monthlySales, productSales, salesByAgeGroup };
};

export default connect(mapStateToProps)(Grid);
