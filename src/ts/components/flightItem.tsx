import * as React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import styles from './styles';
import { SetCity } from '../actions/AppStoreActions';
import { IFlightAppState, IFlight, ICity } from '../Store';

// interface IFlightDate {
//     flightItem: IFlight;
// }

interface IFlightItemProps {
    flightItem: IFlight;
}

export default class Flight extends React.Component<IFlightItemProps, {}> {
    constructor(props) {
        super(props);

        // this.state = { city: {fromCity: 'Mumbai', toCity: 'New Delhi'} };
    }

    public render() {
        return (
            <div className="flight-item">
            <div className="city">{`${this.props.flightItem.city.fromCity}   -   ${this.props.flightItem.city.toCity}`}</div>
            <div className="price">{`Rs. ${this.props.flightItem.price}`}</div>
            <div className="date">{this.props.flightItem.date}</div>
            </div>
        );
    }
}

// const mapStateToProps = (state: IFlightAppState): IFlightItemProps => ({
//     flightItem: state.flightList
// });

// const mapDispatchToProps = (dispatch: any): IDateDispatchProps => ({
//     setCity: (city: ICity) => {dispatch(SetCity(city))},
// });

// const FlightItemComponent: React.ComponentClass<{}> = connect(mapStateToProps, mapDispatchToProps)(Flight);
// export default FlightItemComponent;
