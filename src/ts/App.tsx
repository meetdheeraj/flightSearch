import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';

import AppStore from './Store';
import { SetNewMessage } from './actions/AppStoreActions';
import { IFlightAppState, IFlight, ICity } from './StoreTypes';
import DateComponent from './components/date';
import CityComponent from './components/city';
import FlightListComponent from './components/flightList';


interface AppStateProperties {
	date: string;
	city: ICity;
}

interface IAppState {
	searched?: boolean;
	flight: IFlight;
}

interface AppDispatchProperties {
	onInputChange: Function;
}

// notice: with "AppStateProperties & AppDispatchProperties" we merge the properties to get access and autocomplete to both objects
export class App extends React.Component<AppStateProperties & AppDispatchProperties, IAppState>
{
	constructor(props) {
		super(props);

		this.state = { searched: false,
		flight: { city: this.props.city, price: 4356, date: this.props.date } };
	}
	render() {
		// const flight: IFlight = {city: this.props.city, price: 4356, date: this.props.date};
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

// we need to map the !!root!! store state to the component properties
const mapStateToProps = (state: IFlightAppState, ownProp?: any): AppStateProperties => ({
	date: state.date,
	city: state.city
});

// here we define all actions that are exposed to the component through the component properties
const mapDispatchToProps = (dispatch: any): AppDispatchProperties => ({
	onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(SetNewMessage(event.target.value))
	}
});

// finally we need to export our redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(App);