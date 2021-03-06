import * as React from 'react';
import { connect } from 'react-redux';
import { SetCity } from '../actions/AppStoreActions';
import { IFlightAppState, IFlight, ICity } from '../Store';
import SelectList from './select';

interface IFlightDate {
    city: ICity;
}

interface IDateDispatchProps {
    setCity?: (city: ICity) => void;
}

class City extends React.Component<IDateDispatchProps, IFlightDate> {
    constructor(props) {
        super(props);

        this.state = { city: { fromCity: 'Mumbai', toCity: 'New Delhi' } };
    }

    public render() {
        return (
            <div className="city-container">
                <div className="fromCity">
                    <SelectList id="from-city" className="from-city" value={this.state.city.fromCity}
                        onChange={this.setFromCity} />
                    <SelectList id="to-city" className="to-city" value={this.state.city.toCity}
                        onChange={this.setToCity} />
                </div>
            </div>
        );
    }

    private setFromCity = (event) => {
        const city = {
            ...this.state.city,
            fromCity: event.target.value
        }
        this.setState({ city });
        this.props.setCity(city);
    }

    private setToCity = (event) => {
        const city = {
            ...this.state.city,
            toCity: event.target.value
        }
        this.setState({ city });
        this.props.setCity(city);
    }
}

const mapStateToProps = (state: IFlightAppState): IFlight => ({
    city: state.city
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = (dispatch: any): IDateDispatchProps => ({
    setCity: (city: ICity) => { dispatch(SetCity(city)) },
});

const CityComponent: React.ComponentClass<{}> = connect(mapStateToProps, mapDispatchToProps)(City);
export default CityComponent;
