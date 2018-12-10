import * as React from 'react';
import { createStore } from 'redux';
import { AppReducer } from '../ts/reducers/appReducer';
import { Provider } from 'react-redux';
import FlightListComponent from '../ts/components/flightList';
import * as ReactShallowRenderer from 'react-test-renderer/shallow';

describe('<FlightListComponent />', () => {
  it('should render successfully', () => {
    const store = createStore(AppReducer);
    const renderer = new ReactShallowRenderer();

    expect(renderer.render(
      <Provider store={store}><FlightListComponent /></Provider>
    )).toMatchSnapshot()
  })
});
