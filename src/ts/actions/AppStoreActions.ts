import { Action } from 'redux';
import { ICity, IFlight, } from '../Store';

export interface IFlightAppAction extends Action {
	date?: string;
	city?: ICity;
	flightList?: IFlight[];
}

export const SetDate = (date: string): IFlightAppAction => {
	return {
		type: 'SET_DATE',
		date
	};
}

export const SetCity = (city: ICity): IFlightAppAction => {
	return {
		type: 'SET_CITY',
		city
	};
}

export const SetFlightList = (flightList: IFlight[]): IFlightAppAction => {
	return {
		type: 'SET_FLIGHT_LIST',
		flightList
	};
}
