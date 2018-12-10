import * as React from 'react';
import { createStore } from 'redux';
import { AppReducer } from '../ts/reducers/appReducer';
import { Provider } from 'react-redux';
import DateComponent from '../ts/components/date';
import * as ReactShallowRenderer from 'react-test-renderer/shallow';

describe('<CityComponent />', () => {
  it('should render successfully', () => {
    const store = createStore(AppReducer);
    const renderer = new ReactShallowRenderer();

    expect(renderer.render(
      <Provider store={store}><DateComponent /></Provider>
    )).toMatchSnapshot()
  })
});
