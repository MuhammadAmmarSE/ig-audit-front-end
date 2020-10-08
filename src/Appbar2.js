import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';

import Fab from '@material-ui/core/Fab';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
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

<AppBar position="static">
        <Toolbar>
        <Button color="default" aria-label="add" >
          
            <Typography variant="h6" className={classes.title}>
            Audit me
          </Typography>


          </Button>



          <div className={classes.grow} />

          <Fab  size="small"color="default" aria-label="add" className={classes.margin}>
          <InfoIcon />
        </Fab>

          

         
        </Toolbar>
      </AppBar>

     
            
        </div> );
    }
}
 
export default withStyles(styles)(Appbar);