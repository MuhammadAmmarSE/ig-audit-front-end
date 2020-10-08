import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Facebooklogo from './facebook.jpg';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import ClearIcon from '@material-ui/icons/Clear';
import Avatar from './avatar.png'
import Loader from './loading.gif'



const style = theme => ({
    root: {
      
      position:'absolute',
     
      bottom:'100px',
      width:'50%',
      height:'70vh',
      margin:'auto',
      left:'0px',
      right:'0px'
    },
    left:{
      float:'left',
      width:'calc(50% - 40px)',
      height:'calc(100% - 40px - 48px)',
      background:'white',
      padding:'20px',
      display:'block'
    },
    right:{
      float:'right',
      width:'calc(50% - 40px)',
      height:'calc(100% - 40px - 48px)',
      background:'#F1F2F1',
      padding:'20px',
      display:'block'
    },
    approot: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    searchroot: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '95%',
      borderRadius:'10px',
      transition:'all 0.2s'
    
    }
    ,input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    
  
   
  });




  function Facebook(props) {

    const [ele, setEle] = React.useState(0);
    const [scolor, setScolor] = React.useState('lightblue');
    const [sborder,setBorder] = React.useState('none');
    const [search,setSearch] = React.useState(0);
    const [sprofile,setSprofile] = React.useState('');

    
    const handleEle = (newEle) => {
        setEle(newEle);
        setScolor('red');
        setBorder('3px lightblue solid');
      };
    
    
      const handleAway = (newEle) => {
        setEle(newEle);
        setScolor('lightblue');
        setBorder('none')
      };
    
      const Search = () => {
        
         if(sprofile.length>0)
    setSearch(1);
     else alert('Please enter a valid profile name')
    console.log(sprofile)
      };
    
      const handleProfile = (event) => {
        console.log(event.target.value)
        setSprofile(event.target.value);
      };
    
   
    

        const {classes}=props;
        return ( <div style={{width:'100%',height:'100%'}}>
  <div className={classes.left}>
        <div style={{height:'30%'}}>

        <ClickAwayListener onClickAway={()=>handleAway(0)}>
        <Paper elevation={ele} className={classes.searchroot} style={{border:sborder}}>
     <span style={{color:ele==1?'black':'grey',paddingLeft:'5px',paddingBottom:'3px'}}>@</span> 
      <InputBase
        className={classes.input}
        placeholder="Search Profile Here"
        inputProps={{ 'aria-label': 'search google maps' }}
        onFocus={()=>handleEle(1)}
        value={sprofile}
        onChange={handleProfile}
       
      />

      <Divider className={classes.divider} orientation="vertical" />

      <IconButton className={classes.iconButton} aria-label="search" onClick={Search}>
        <SearchIcon style={{color:scolor}}  />
      </IconButton>
 
      
     
    </Paper>
    </ClickAwayListener>


        </div>

  <div style={{height:'70%'}}><img width="80%"src={Facebooklogo} alt="facebook" /></div>
      </div> 


      <div className={classes.right}>

        

< img src={Avatar} width={search==0?"35%":'17%'} style={{
  
  transition:'all 1s',
  marginLeft:search==0?'calc(175% - 17.5%)':'calc(150% + 30px)',marginTop:search==0?'calc(25% - 17.5%)':'10px',
  
   position:'absolute',right:search==0?'0px':'calc(150% - 40px)',left:search==0?'0px':'0'
  
  
  
  }}/>


  {search==1?  <div style={{position:'absolute',bottom:'50px',left:'calc(175% - 75px)'}}><img width='150px' src={Loader}/> </div>:null}
  {search==1?  <div style={{position:'absolute',top:'18px',right:'calc(-100% + 10px)'}}>
  <IconButton className={classes.iconButton} aria-label="search" onClick={()=>setSearch(0)} >
        <ClearIcon style={{color:'red'}}  />
  </IconButton>
     </div>:null}

      </div>





        </div> );
    }

 
export default withStyles(style)(Facebook);