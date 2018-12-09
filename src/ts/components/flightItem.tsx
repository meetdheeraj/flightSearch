import * as React from 'react';
import { IFlight } from '../Store';

interface IFlightItemProps {
    flightItem: IFlight;
}

export default class Flight extends React.Component<IFlightItemProps, {}> {

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
