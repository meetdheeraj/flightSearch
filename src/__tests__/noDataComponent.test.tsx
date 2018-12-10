import * as React from 'react';
import { createStore } from 'redux';
import { AppReducer } from '../ts/reducers/appReducer';
import { Provider } from 'react-redux';
import NoDataContainer from '../ts/components/noDataComponent';
import * as ReactShallowRenderer from 'react-test-renderer/shallow';

describe('<NoDataContainer />', () => {
  it('should render successfully', () => {
    const store = createStore(AppReducer);
    const renderer = new ReactShallowRenderer();

    expect(renderer.render(
      <Provider store={store}><NoDataContainer /></Provider>
    )).toMatchSnapshot()
  })
});
