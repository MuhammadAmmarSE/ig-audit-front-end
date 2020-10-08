import React, { Component } from 'react';
import AppBar from './Appbar'
 import MyBox from './box'

class View1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>

            <AppBar/>
                  <MyBox/>

        </div> );
    }
}
 
export default View1;