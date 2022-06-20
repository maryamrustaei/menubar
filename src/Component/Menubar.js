import React, { useState } from 'react'
import {Link,} from "react-router-dom";

import  "../App.css";
import ThemeComponent from '../ThemeComponent'
import { ReactComponent as MyLogo } from '../logo.svg';


const toggles = {
    
  open: {
    display: "inLine" 
     
  },
  close: {
    display: "none",

   
  }
}
export default function Munebar() {
  const [toggle, setToggle] = useState(toggles.open)





  return (
    
    <ThemeComponent.Consumer>
{theme =>(
  
  <div className='Munebar' style={{...theme}}>

    {toggle === toggles.open ? (<button  className='BtnMenu btn'  style={{...theme}} onClick={()=>(setToggle(toggles.close))} >close</button>
                ):(
    <button  className='BtnMenu btn' style={{...theme}} onClick={()=>(setToggle(toggles.open))}> open </button>
    
                  )}

                    <MyLogo className='Mainsvg' style={{...theme}} />

                    <span>analytics</span>

                    <div className='li'>
                      <MyLogo style={{...theme}} /><Link style={{...toggle}} className='linkRout' to='#'>dashboard</Link>
                      </div>

                    <div className='li'>
                      <MyLogo style={{...theme}} /><Link style={{...toggle}} className='linkRout' to='#'>performance</Link>
                      </div>

               
             
            
                    </div>
)}

  </ThemeComponent.Consumer>
  )
}
