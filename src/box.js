import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';

import Typography from '@material-ui/core/Typography';

import Instagram from './instagram'
import Facebook from './facebook';

import './box.css';



const style = theme => ({
    root: {
      
      position:'absolute',
     padding:'0px',
      minWidth:'350px',
      maxWidth:'50%',
      height:'70vh',
      margin:'auto',
      marginTop:'10px',
      left:'0px',
      right:'0px',
      
    },
  
    approot: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },});
  


function TabPanel(props) {


    
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

  function MyBox(props) {

    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleChangeIndex = index => {
      setValue(index);
    };
  
    const {classes}=props;
    return (
      <div style={{background:'yellow',margin:'0px',padding:'0px'}}>
  
        
 
         <Paper className={classes.root}>
  
         <div className={classes.approot}>
        <AppBar position="static" id="boxAppbar">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Instagram" {...a11yProps(0)} />
            <Tab label="Facebook" {...a11yProps(1)}  />
            <Tab label="Twitter" {...a11yProps(2)} disabled/>
          </Tabs>
        </AppBar>
        
      </div>
  
      <div style={{width:'100%',height:'100%'}}>
      <SwipeableViews
          axis={ 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
         
        >
          <div style={{width:'100%',height:'70vh'}}>  <Instagram/></div>
         
          <div style={{width:'100%',height:'70vh'}}>  <Facebook/> </div>
          
           
        
        </SwipeableViews>
        </div>
  

      </Paper>
  
  
       
      </div>
    );
  }
  
  export default withStyles(style)(MyBox);
  