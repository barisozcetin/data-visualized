import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Grid from './components/Grid';
import { handleInitialData } from './actions/shared';
import Loading from './components/icons/Loading';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		if (this.props.loading) return <Loading />;

		return (
			<div className="App">
				<Grid />
			</div>
		);
	}
}
const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps)(App);
