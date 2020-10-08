import React, { Component } from 'react';
import AppBar from './Appbar3'
 import MyBox from './box'
 import Flip from './flip'

class View3 extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return ( <div>

 <AppBar/>
    <MyBox/>  {/* 70vh  + 10px*/}
     <div  style={{marginTop:'calc(70vh + 15px)'}}>
         
         <div style={{display:'inline-block',height:'40px',background:''}}>
             <span style={{fontSize:'12px',color:'#2F3A4C',fontWeight:'bold',verticalAlign:'baseline'}}>
                 Total Audits:
             </span>
             <span style={{display:'inline-block',verticalAlign:'top'}}>
                 <Flip color={"#2F3A4C"} number={"9.7"} />
             </span>
             <span style={{display:'inline-block',fontSize:'10px', color:'#808080',fontWeight:'bold'}}>
                 M
             </span>
         </div>

         <div style={{display:'inline-block'}}>
             <span style={{fontSize:'12px',paddingLeft:'30px',color:'#2F3A4C',fontWeight:'bold'}}>
                 Last 24 Hours:
             </span>
             <span style={{display:'inline-block', verticalAlign:'top'}}>
                 <Flip color={"#BE3C79"} number={"24.2"} />
             </span>
             <span style={{display:'inline-block',fontSize:'10px', color:'#808080',fontWeight:'bold'}}>
                 K
             </span>
         </div>

         <div style={{display:'inline-block'}}>
             <span style={{fontSize:'12px',paddingLeft:'30px',color:'#2F3A4C',fontWeight:'bold'}}>
                 Users:
             </span>
             <span style={{display:'inline-block' , verticalAlign:'top'}}>
                 <Flip color={"#EE7838"} number={"2.3"} />
             </span>
             <span style={{display:'inline-block',fontSize:'10px', color:'#808080',fontWeight:'bold'}}>
                 K
             </span>
         </div> 

     </div>
                  

        </div> );
    }
}
 
export default View3;