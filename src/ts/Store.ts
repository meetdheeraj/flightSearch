import { combineReducers, createStore, ReducersMapObject } from 'redux'

import { AppReducer, initialState } from './reducers/appReducer';

const reducers: ReducersMapObject = {
	AppReducer
}

// tslint:disable-next-line: no-any
declare var window: any;

export interface ICity {
	fromCity: string;
	toCity: string;
}

export interface IFlight {
	city?: ICity;
	price?: number;
	date?: string;
}

export interface IFlightAppState {
	date: string;
	city: ICity;
	flightList: IFlight[];
}

export default createStore(AppReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);
