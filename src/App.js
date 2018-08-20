import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Grid from './components/Grid';
import { handleInitialData } from './actions/shared';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<div className="App">
				<Grid />
			</div>
		);
	}
}
const mapStateToProps = ({ loading }) => ({ loading });

export default connect()(App);
