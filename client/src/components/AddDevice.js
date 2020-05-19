import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddDevice extends Component {
    state = {
         title : ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addDevice(this.state.title);
        this.setState( {title: ' '})
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
              <input 
                type="text"
                name="title"
                style={{flex:'10', padding: '5px'}}
                placeholder="Add a smart device ..."
                value={this.state.tile}
                onChange={this.onChange}
              /> 
              <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{flex:'1'}}/> 
            </form>
        )
    }
}

//PropTypes
AddDevice.propTypes = {
     addDevice : PropTypes.func.isRequired
}

export default AddDevice