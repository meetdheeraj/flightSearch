import * as React from 'react';
import { connect } from 'react-redux';
import { IFlightAppState, IFlight, ICity } from './StoreTypes';
import DateComponent from './components/date';
import CityComponent from './components/city';
import FlightListComponent from './components/flightList';


interface IAppStateProperties {
	date: string;
	city: ICity;
}

interface IAppState {
	searched?: boolean;
	flight: IFlight;
}

interface IAppDispatchProperties {
	onInputChange: Function;
}

export class App extends React.Component<IAppStateProperties & IAppDispatchProperties, IAppState>
{
	constructor(props) {
		super(props);

		this.state = { searched: false,
		flight: { city: this.props.city, price: 4356, date: this.props.date } };
	}
	render() {
		return (
			<div>
				<div id="header">
					<DateComponent />
					<div className="button-container"><CityComponent />
					<button className="search-button" type="button" onClick={this.searchFlights}>Search Flights</button></div>
				</div>
				<div className="listContainer">
				<FlightListComponent searched={this.state.searched}/>
				</div>
			</div>
		);
	}

	public componentDidUpdate(prevProps) {
		if (prevProps != this.props) {
			this.setState({ flight: { city: this.props.city, price: 4356, date: this.props.date } });
		}
	}

	public searchFlights = () => {
		this.setState({searched: true});
	}
}

const mapStateToProps = (state: IFlightAppState): IAppStateProperties => ({
	date: state.date,
	city: state.city
});

export default connect(mapStateToProps, {})(App);