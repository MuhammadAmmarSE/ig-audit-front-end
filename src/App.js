import React from 'react';
import View1 from './view1';
import View2 from './view2';
import View3 from './view3';
import './App.css';
import { Button } from '@material-ui/core';



function App(props) {

  const [value, setValue] = React.useState(0);
 
  return (
    <div className="App">
      {
        <View3 theme={"light"}/>
      }
   {/* {  value==0? <div style={{margin:'auto',paddingTop:"45vh"}}>
     <Button variant='contained' onClick={()=>setValue(1)} > View 1 </Button> 
     <Button variant='contained' onClick={()=>setValue(2)} > View 2 </Button>
     <Button variant='contained' onClick={()=>setValue(3)} > View 3 </Button>    </div> :null }
{  value==1?<View1/>: value==2?<View2/>:value==3?<View3/>:null } */}



      
    </div>
  );
}

export default App;
