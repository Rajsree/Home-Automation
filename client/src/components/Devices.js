import React, {Component} from 'react';
import DeviceItem from './DeviceItem.js';
import PropTypes from 'prop-types';

class Devices extends Component {
    

    render () {
        return this.props.devices.map((device) => (
            <DeviceItem key={device.id} device={device} markComplete={this.props.markComplete} delDevice={this.props.delDevice}/> 
        ));
    }

}

//PropTypes
Devices.propTypes = {
    devices : PropTypes.array.isRequired,
    markComplete : PropTypes.func.isRequired,
    delDevice : PropTypes.func.isRequired
}

export default Devices;
