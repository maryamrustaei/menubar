import './App.css';

import React, { useState } from 'react'

import Menubar from "./Component/Menubar";
import Content from "./Component/Content";

import ThemeComponent, { themes } from './ThemeComponent'

import {BrowserRouter as Router} from "react-router-dom";

import { ReactComponent as Bulb } from './bulb.svg';



function App() {
   
  const [theme, setTheme] = useState(themes.light)

  return (
    <div className="App">
     <Router>
      <ThemeComponent.Provider value = {theme} >
         
              <section className='parent'>
       
                <Menubar/>
                {theme === themes.light ? (
                  
                  <button className='btntheme btn '  style={{...theme}} onClick={() => setTheme(themes.dark)}><Bulb/></button>
                ) : (
                  <button className='btntheme btn'  style={{...theme}} onClick={() => setTheme(themes.light)}><Bulb/></button>
                )}
             
                <Content/>
              </section>

      </ThemeComponent.Provider>
      </Router>

    </div>
  );
}

export default App;
