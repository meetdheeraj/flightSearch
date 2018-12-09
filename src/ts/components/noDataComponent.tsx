import * as React from 'react';

class NoDataContainer extends React.Component {
    render() {
        return (
            <div className="no-data-container" >
                <div className="no-data-text">
                <div>Try a valid search criteria to get <br />
                        list of flights available here.</div>
                </div>
            </div>
        )
    }
}
export default NoDataContainer;