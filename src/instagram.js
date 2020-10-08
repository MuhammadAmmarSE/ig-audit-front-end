import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Instagramlogo from './instagram.jpg';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import ClearIcon from '@material-ui/icons/Clear';
import Avatar from './avatar.png'
import Loader from './loading.gif'

import './instagram.css';

const UrlH="https://still-beyond-57046.herokuapp.com/"


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
      display:'block',
      overflow:'auto'
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

  

  function Instagram(props) {

    const [ele, setEle] = React.useState(0);
    const [scolor, setScolor] = React.useState('lightblue');
    const [sborder,setBorder] = React.useState('none');
    const [search,setSearch] = React.useState(0);
    const [sprofile,setSprofile] = React.useState('');

    const [sfollowers,setSfollowers] = React.useState('');
    const [sfollowing,setSfollowing] = React.useState('');

    const [sfname,setSfname] = React.useState('');
    const [spost,setSpost] = React.useState('');
    const [sallpost,setSallpost] = React.useState('');
    const [smember,setSmember] = React.useState('');
    const [sliked,setSliked] = React.useState('');
    const [scomment,setScomment] = React.useState('');
    const [sprofilepic,setSprofilepic] = React.useState('');

    const [averageLikes,setAverageLikes] = React.useState(0);


    const [error,setError] = React.useState(false);
    const [errorMessage,setErrorMessage] = React.useState(false);

    const [response,setResponse] = React.useState(false);


    
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
    
      const Search = (e) => {

        e.preventDefault();
        
         if(sprofile.length>0)
         {
          setSearch(1);
          setResponse(false);
          setError(false);
          fetch(UrlH+'?url='+sprofile,{
            method:'GET',
          })
          .then(
            response=> 
            { console.log(response)
              response.json()
              .then( response => 
                {
                  console.log(response)

                  if(response.responseCode=='Success')
                  {
                    setSfollowers(response.followers)
                    setSfollowing(response.following)

                    setSfname(response.fName)
                    setSpost(response.post)
                    setSallpost(response.allPost)
                    setSmember(response.member)
                    setSliked(response.liked)
                    setScomment(response.comment)
                    setSprofilepic(response.profilePic)
                    let sum=0;
                    for(let i=0;i<response.liked.length;i++)
                    {
                      sum=sum+response.liked[i];
                    }
                    let average = sum/response.liked.length;
                    setAverageLikes(Math.round(average))
            
                  }

                  else
                  {
                    setError(true);
                    setErrorMessage(response.errorMessage);
                  }

                  setResponse(true);
                  setSearch(0);
        
                })
            }
          )
          //.then(body => console.log(body))
          // .then(response=> console.log(response))
          .catch(err => console.log(err))
         }
     else alert('Please enter a valid profile name')
    console.log(sprofile)
      };
    
      const handleProfile = (event) => {
        console.log(event.target.value)
        setSprofile(event.target.value);
      };
    
   
    

        const {classes}=props;
        return ( <div style={{background:'',width:'100%',height:'100%',display:'block'}}>
  <div className={classes.left}>
        <div style={{height:'30%'}}>

        <ClickAwayListener onClickAway={()=>handleAway(0)}>
        <Paper elevation={ele} component="form" className={classes.searchroot} style={{border:sborder}}>
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

      <IconButton  type="submit" className={classes.iconButton} aria-label="search" onClick={Search}>
        <SearchIcon style={{color:scolor}}  />
      </IconButton>
 
      
     
    </Paper>
    </ClickAwayListener>


        </div>

  <div style={{height:'70%'}}> <img width="80%"src={Instagramlogo} alt="instagram" /></div>
      </div> 


      <div className={classes.right}>

<div style={{width:'100%',background:'',textAlign:'left'}}>
<img src={response==true?error==false?sprofilepic:Avatar:Avatar} style={{

width:search==1||response==true?'35%':"75%", minWidth:'100px',

transition:'all 1s',
marginLeft:search==1||response==true?'calc(0%) ':'12.5%',marginTop:search==1||response==true?'10px':'calc(25% - 17.5%)',

 position:'relative'



}}/>

</div>


    {response==true?
    
    error==false?
    <div style={{marginTop:'calc(10px)'}}>
      <span className="instagramtext1">Name</span>             :      <span className="instagramtext2"> {sfname}      </span>  <br/>
      <span className="instagramtext1">Total posts</span>      :      <span className="instagramtext2"> {spost}       </span>  <br/>
      <span className="instagramtext1">Followers</span>        :      <span className="instagramtext2"> {sfollowers}  </span>  <br/>
      <span className="instagramtext1">Following</span>        :      <span className="instagramtext2"> {sfollowing}  </span>  <br/>

     <div style={{float:'left',paddingTop:'5px'}}> <span className="instagramtext1">Average Likes</span>        :      <span className="instagramtext2"> {averageLikes} </span> </div>  <br/>
     <div style={{float:'right',paddingTop:'5px'}}> <span className="instagramtext1">Engagement Rate</span>        :      <span className="instagramtext2"> {Math.round((averageLikes/sfollowers*100) +  "e+2") / 100}% </span> </div>  <br/>
      {/* <span>like</span>      :      <span>    </span> */}
    </div>
    :<div style={{marginTop:'calc(10px)'}}>
      <span>
        {errorMessage}
      </span>
     </div>
    
    :
    search==1?
    <div>

      <div style={{position:'absolute',bottom:'50px',left:'calc(75% - 75px)'}}><img width='150px' src={Loader}/> </div>

    </div>
  :null}
  
  {search==1||response==true?  <div style={{position:'absolute',top:'18px',right:'calc(10px)'}}>
  <IconButton className={classes.iconButton} aria-label="search" onClick={()=>{ setSearch(0); setResponse(false)} } >
        <ClearIcon style={{color:'red'}}  />
  </IconButton>
     </div>:null}

      </div>





        </div> );
    }

 
export default withStyles(style)(Instagram);