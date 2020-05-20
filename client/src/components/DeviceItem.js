import React, { Component } from 'react'
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'; 
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const OnOffSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

export class DeviceItem extends Component {
    state = {
        checkedStatus: null
    };
    
    handleChange = (event) => {
        console.log("EVENT CHECKED", event.target.checked)
        this.setState({checkedStatus : event.target.checked});

    this.setState({ ...this.state, [event.target.name]: event.target.checked });
        //this.props.device.STATUS = parseInt(event.target.checked)
    };


    getStyle = () => {
        return {
            background : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            display: 'flex'        }      
    }

    render() {
        const { id, title, STATUS} = this.props.device;
        return (
            
            <div style={this.getStyle()}>
                
                    <p style={{flex:'5',  padding:'5px'}}>{ title}</p>
                    <Typography component="div" style={{flex:'2',padding:'5px'}}>
                        <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item>Off</Grid>
                        <Grid item>
                            <OnOffSwitch checked={STATUS!==0?true:false} onChange={this.props.markComplete.bind(this, id)} name="checkedStatus" />
                        </Grid>
                        <Grid item>On</Grid>
                        </Grid>
                    </Typography>

                    <IconButton aria-label="delete" style={btnStyle} onClick={this.props.delDevice.bind(this, id)}>
                        <DeleteIcon />
                    </IconButton>
                
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
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
}
export default DeviceItem
