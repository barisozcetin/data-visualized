import React, { Component } from 'react';
import { SortablePane, Pane } from 'react-sortable-pane';
import { connect } from 'react-redux';

import GridItem from './GridItem';
import Modal from './Modal';
import Close from './icons/Close';

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
		activeReports: [ 'dailySales', 'productSales', 'monthlySales', 'salesByAgeGroup' ]
	};

	componentDidMount() {
		// console.log(this.props)
	}

	toggleActiveReport = (report, event) => {
		if (event) event.preventDefault();
		console.log(report);
		if (this.state.activeReports.includes(report)) {
			this.setState((prev) => ({ activeReports: prev.activeReports.filter((val) => val !== report) }));
			this.setState((prev) => ({ order: prev.order.filter((val) => val !== report) }));
		} else {
			this.setState((prev) => ({ activeReports: [ ...prev.activeReports, report ] }));
			this.setState((prev) => ({ order: [ ...prev.order, report ] }));
		}
	};

	toggleModal = (report) => {
		if (!report) {
			this.setState({ modalActive: false });
		}
	};

	getMaxWidth = (report) => {
		const windowWidth = window.innerWidth;
		const { activeReports, panes } = this.state;
		const paneWidths = activeReports.map((report) => panes[report].width).reduce((a, b) => a + b, 0);
		return windowWidth - paneWidths + this.state.panes[report].width - 120;
	};
	getWidth = (report) => {
		return this.state.panes[report].width;
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
		return (
			<div className="grid">
				<div className="pane" style={{ height: 'auto', border: '1px dotted black' }}>
					<SortablePane
						disableEffect
						syle={{ height: '600', maxWidth: '100vw', border: '1px solid red' }}
						direction="horizontal"
						order={this.state.order}
						onOrderChange={(order) => {
							this.setState({ order });
							this.forceUpdate();
						}}
						onResizeStop={(e, key, dir, ref, d) => {
							// console.log('height: ' + d.height + '-- width: ' + d.width);
							this.setState({
								panes: {
									...this.state.panes,
									[key]: {
										height: this.state.panes[key].height + d.height,
										width: this.state.panes[key].width + d.width
									}
								}
							});
						}}
						margin={20}
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
									maxWidth={this.getMaxWidth(report)}
								>
									<button
										className="button is-small button--transparent button-fullscreen"
										onClick={() => {
											this.modalContent = (
												<GridItem
													num={1}
													report={report}
													data={this.props[report] ? this.props[report] : this.state.sales}
													height={window.innerHeight - 100}
													width={window.innerWidth - 100}
													reportType={this.state.reports[report].type}
													showLabel
												/>
											);
											this.setState({ modalActive: true });
										}}
										aria-label="full screen"
									>
										<span className="icon is-small">
											<img
												src="https://res.cloudinary.com/dydyt6wbt/image/upload/v1534731037/icons/fullscreen.svg"
												alt="FullScreen"
												className="image is-16x16 ico-fs"
											/>
										</span>
									</button>
									<span className="report--label">{this.state.reports[report].description}</span>
									<button
										className="button is-small button-close button--transparent"
										onClick={(e) => this.toggleActiveReport(report, e)}
									>
										<span className="icon is-small">
											<Close />
										</span>
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
				</div>
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
