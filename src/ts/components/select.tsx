import * as React from 'react';

interface ISelectListOwnProps {
    value: string;
    onChange: (event) => void;
    id: string;
    className?: string;

}

export default class SelectList extends React.Component<ISelectListOwnProps, {}> {

    public render() {
        return (
            <select id={this.props.id} className={`from-city ${this.props.className}`}
                value={this.props.value} onChange={this.props.onChange}>
                <option value="N/A">From City</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
            </select>
        );
    }
}
