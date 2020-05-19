import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class DeviceItem extends Component {
    getStyle = () => {
        return {
            background : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration : this.props.device.STATUS ? 'line-through' : 'none'
        }       
    }

    render() {
        const { id, title } = this.props.device;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> { ' '}
                    { title}
                    <button onClick={this.props.delDevice.bind(this, id)} style={btnStyle}></button></p>
            </div>
        )
    }
}


//PropTypes
DeviceItem.propTypes = {
    device : PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delDevice : PropTypes.func.isRequired
}

const btnStyle = {
    background : '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default DeviceItem
