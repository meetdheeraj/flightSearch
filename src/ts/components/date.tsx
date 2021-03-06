import * as React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { SetDate } from '../actions/AppStoreActions';
import { IFlightAppState, IFlight } from '../Store';
import 'react-datepicker/dist/react-datepicker.css';

interface IFlightDate {
    date: string;
}

interface IDateDispatchProps {
    setDate?: (date: string) => void;
}

class DateComp extends React.Component<IDateDispatchProps, IFlightDate> {
    constructor(props) {
        super(props);

        this.state = { date: new Date().toDateString() };
    }

    public render() {
        return (
            <div className="dateContainer">
                <div className="dateField">
                    <DatePicker
                    selected={new Date(this.state.date)}
                        onChange={this.handleChange}
                        dateFormat="yyyy/MM/dd"
                        minDate={new Date()}
                    />
                </div>
            </div>
        );
    }

    private handleChange = (value) => {
        this.setState({date: value.toDateString()});
        this.props.setDate(value.toString());
    }
}

const mapStateToProps = (state: IFlightAppState): IFlight => ({
    date: state.date.toString()
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = (dispatch: any): IDateDispatchProps => ({
    setDate: (date: string) => {dispatch(SetDate(date))},
});

const DateComponent: React.ComponentClass<{}> = connect(mapStateToProps, mapDispatchToProps)(DateComp);
export default DateComponent;
