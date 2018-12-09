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
	welcomeMessage: string; // remove this
}