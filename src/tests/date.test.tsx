import * as React from 'react';
import DateComponent from '../ts/components/city';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
