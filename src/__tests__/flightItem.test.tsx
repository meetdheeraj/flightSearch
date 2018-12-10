import * as React from 'react';
import { createStore } from 'redux';
import { AppReducer } from '../ts/reducers/appReducer';
import { Provider } from 'react-redux';
import Flight from '../ts/components/flightItem';
import * as ReactShallowRenderer from 'react-test-renderer/shallow';

describe('<Flight />', () => {
    it('should render successfully', () => {
        const store = createStore(AppReducer);
        const renderer = new ReactShallowRenderer();

        const flightItem = {
            city: {
                fromCity: 'Pune',
                toCity: 'Bangalore'
            },
            price: 4456,
            date: new Date().toString()
        }
        expect(renderer.render(
            <Provider store={store}><Flight flightItem={flightItem} /></Provider>
        )).toMatchSnapshot()
    })
});
