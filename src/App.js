import './App.css';

import React, { useState } from 'react'

import Munebar from "./Component/Menubar";
import Content from "./Component/Content";

import ThemeComponent, { themes } from './ThemeComponent'

import {BrowserRouter as Router} from "react-router-dom";


function App() {
   
  const [theme, setTheme] = useState(themes.light)

  return (
    <div className="App">
     <Router>
      <ThemeComponent.Provider value = {theme} >
         

              <section className='parent'>

                <Munebar/>
                {theme === themes.light ? (
              <button className='btntheme btn'  style={{...theme}} onClick={() => setTheme(themes.dark)}>Dark Mood</button>
            ) : (
              <button className='btntheme btn'  style={{...theme}} onClick={() => setTheme(themes.light)}>Light Mood</button>
            )}
                <Content/>
              </section>

      </ThemeComponent.Provider>
      </Router>

    </div>
  );
}

export default App;
