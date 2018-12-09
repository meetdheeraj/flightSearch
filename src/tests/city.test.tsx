import * as React from 'react';
import CityComponent from '../ts/components/city';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CityComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});