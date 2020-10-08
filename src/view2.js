import React, { Component } from 'react';
 import MyBox from './box'
 import AppBar from './Appbar2';
 import Logo from './logo.png'

class View2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
<AppBar/>
<img src={Logo} style={{position:'absolute',top:'100px',left:'0px'}} />
    <MyBox/>
        </div> );
    }
}
 
export default View2;