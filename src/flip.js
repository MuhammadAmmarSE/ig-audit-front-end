import React , { useState }from 'react';
import FlipNumbers from 'react-flip-numbers';


export default function Flip (props) {

  const [nOne,setNone] = useState(0);
  const [nTwo,setNtwo] = useState(0);

  return ( <span style={{verticalAlign:'baseline',marginTop:'10px'}}>
    <FlipNumbers 
     height={25}
     width={13}
     nonNumberStyle={{fontSize:'11px',color:props.color}}
     numberStyle={{fontSize:'11px',color:props.color}}
     
     play 
     perspective={1000} 
     duration={5}
     delay={2}
     numbers={props.number} />
     
     
     {/* .
      <FlipNumbers 
     height={13}
     width={13}
     color="rgb(77, 77, 77)"
     nonNumberStyle={{fontSize:'5px',color:props.color}}
     numberStyle={{fontSize:15,color:props.color}}
     style={{color:'rgb(77, 77, 77)'}}
     play 
     perspective={100} 
     duration={5}
     delay={2}
     numbers={props.number} /> */}
     
     </span>
     );
};