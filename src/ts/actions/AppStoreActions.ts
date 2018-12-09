import { Action } from 'redux';
import { ICity, IFlight, } from '../Store';

export interface IFlightAppAction extends Action
{
	welcomeMessage?: string;
	date?: string;
    city?: ICity;
	flightList?: IFlight[];
	// you can define more properties here
	// append a question mark to make the property optional
	// you can still use the other properties in other actions
}

export const SetNewMessage = function(welcomeMessage: string): IFlightAppAction
{
	// we simply return an object for the reducer
	// if you need more properties in the reducer, define them in the interface
	return {
		type: "SET_WELCOME_MESSAGE",
		welcomeMessage: welcomeMessage
	};
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