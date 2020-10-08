import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Logo from './ai.png'
import Fab from '@material-ui/core/Fab';
import InfoIcon from '@material-ui/icons/Info';

import './appbar3.css';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      margin: '0px',
      padding:'0px'
    },
    title: {
      flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
      },
  });

class Appbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        const {classes}=this.props;
  return ( <div>

<AppBar position="static" id="appbar">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={Logo} width='80px'/>
           
          </IconButton>

          <span id="AppbarTitle" >
            Audit me
          </span>

          <div className={classes.grow} />

          <Fab  size="small" color="default" className={classes.margin}>
          <InfoIcon />
        </Fab>

          

         
        </Toolbar>
      </AppBar>

            
        </div> );
    }
}
 
export default withStyles(styles)(Appbar);