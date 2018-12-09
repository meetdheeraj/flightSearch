import { Action } from 'redux';
import { ICity, IFlight, } from '../Store';

export interface IFlightAppAction extends Action
{
	date?: string;
    city?: ICity;
	flightList?: IFlight[];
}

export const SetDate = function(date: string): IFlightAppAction
{
	return {
		type: "SET_DATE",
		date: date
	};
}

export const SetCity = function(city: ICity): IFlightAppAction
{
	return {
		type: "SET_CITY",
		city: city
	};
}

export const SetFlightList = function(flightList: IFlight[]): IFlightAppAction
{
	return {
		type: "SET_FLIGHT_LIST",
		flightList: flightList
	};
}