import * as React from 'react';
import { connect } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import { SetFlightList } from '../actions/AppStoreActions';
import { IFlightAppState, IFlight, ICity } from '../Store';
import Flight from './flightItem';
import NoDataContainer from './noDataComponent';
var flightList = require('./../../json/data.json');

interface IFlightDate {
    flightList: IFlight[];
    searched?: boolean;
}

interface IDateDispatchProps {
    setFlightList?: (flightList: IFlight[]) => void;
}

interface IFlightListProps {
    date?: string;
    city?: ICity;
    searched?: boolean;
}

type IFlightListOwnProps = IDateDispatchProps & IFlightListProps;

class FlightList extends React.Component<IFlightListOwnProps, IFlightDate> {
    constructor(props: IFlightListOwnProps) {
        super(props);
        this.state = {
            flightList: this.getFilteredFlightList(flightList),
            searched: this.props.searched || false
        };
    }

    public render() {
        return (
            <div className="city-container">
                {this.props.searched && this.state.flightList.map((flight, index) => {
                    return <Flight key={index} flightItem={flight} />
                })}
                {(this.state.flightList.length === 0 || !this.props.searched) && <NoDataContainer />}
            </div>
        );
    }

    public componentDidUpdate(prevProps) {
        if (prevProps != this.props) {
            this.setState({ flightList: this.getFilteredFlightList(flightList) });
        }
    }

    private getFilteredFlightList = (flightList) => {
        return flightList.filter((item) => {
            return (
                item.city.fromCity === this.props.city.fromCity
                && item.city.toCity === this.props.city.toCity
                && (new Date(item.date).getTime() === new Date(this.props.date).getTime())
            )
        });
    }
}

const mapStateToProps = (state: IFlightAppState): IFlightListProps => ({
    city: state.city,
    date: state.date
});

const mapDispatchToProps = (dispatch: any): IDateDispatchProps => ({
    setFlightList: (flightList: IFlight[]) => { dispatch(SetFlightList(flightList)) },
});

export { IFlightListOwnProps };

const FlightListComponent = connect<IFlightListProps, IDateDispatchProps, IFlightListOwnProps, IFlightAppState>(mapStateToProps, mapDispatchToProps)(FlightList);
export default FlightListComponent;
