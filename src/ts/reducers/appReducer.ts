import { Reducer } from 'redux';
import * as object_assign from 'object-assign';

import { IFlightAppState } from '../StoreTypes';
import { IFlightAppAction } from '../actions/AppStoreActions';

export const initialState: IFlightAppState = {
  date: new Date().toString(),
  city: {
    fromCity: 'Pune',
    toCity: 'Bangalore'
  },
  flightList: [
    {
      city: {
        fromCity: 'Pune',
        toCity: 'Bangalore'
      },
      price: 1145,
      date: new Date().toString()
    }
  ]
};

export function AppReducer(
  state: IFlightAppState,
  action: IFlightAppAction
): IFlightAppState {
  if (typeof state === 'undefined') {
    return initialState;
  }

  let newState: IFlightAppState = {
    ...state
  };

  switch (action.type) {
    case 'SET_DATE':
      newState = {
        ...state,
        date: action.date
      };

      return object_assign({}, state, newState);

    case 'SET_CITY':
      newState = {
        ...state,
        city: action.city
      };

      return object_assign({}, state, newState);

    case 'SET_FLIGHT_LIST':
      newState = {
        ...state,
        flightList: action.flightList
      };

      return object_assign({}, state, newState);
  }

  return state;
}
