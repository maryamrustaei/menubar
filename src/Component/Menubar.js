import  { useState ,useEffect } from 'react'


import  "https://unpkg.com/boxicons@2.1.1/dist/boxicons.js";

import  "../App.css";
import ThemeComponent from '../ThemeComponent'
import {Link,} from "react-router-dom";


let menuItems = [
  {
    iconName: "menu",
  },
  {
    name: "Home",
    iconName: "home",
    type: "solid",
  },
  {
    name: "Explore",
    iconName: "compass",
    type: "solid",
  },

];
let navItems = [
  
  {
    name: "Explore",
    iconName: "compass",
    type: "solid",
  },

];
let bottomItems = [
  
  {
    name: "Messages",
    iconName: "envelope",
    type: "solid",
  },
  {
    name: "Resources",
    iconName: "spreadsheet",
    type: "solid",
  },
  {
    name: "Starred",
    iconName: "star",
    type: "solid",
  },
  {
    name: "Settings",
    iconName: "cog",
    type: "solid",
  },
  {
    name: "RST",
    iconName: "user",
    color: "red",
    // rotate: "180",
  },

];

export default function Menubar() {


    const useMediaQuery = (query) => {
      const [matches, setMatches] = useState(false);
  
      useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
          setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
      }, [matches, query]);
  
      return matches;
    }
   
    const [hovered, setHovered] = useState(null);
    const [active, setActive] = useState(1);
    const [animate, setAnimate] = useState(false);
    const [expanded, setExpanded] = useState(true);
    const changeSmall = useMediaQuery("(max-height: 550px)");

    let delay = 1;
    useEffect(() => {
      setAnimate(true);
      let timer = setTimeout(() => setAnimate(false), delay * 1000);
  
      return () => {
        clearTimeout(timer);
      };
    }, [active, delay]);
  
    return (

      <ThemeComponent.Consumer>
      {theme =>(
        
    
      <div style={{...theme}}  className={`Menubar ${expanded && "expanded"}`}>
        {menuItems.map((item, index) => {
          let middle = false;
          if (!(index === 0 )) {
            middle = true;
          }
          return (
            <div style={{...theme}}
              class={`boxicon-container ${
                expanded && "expanded-boxicon-container"
              }`}
              onMouseEnter={() => {
                if (middle) {
                  setHovered(index);
                }
              }}
              onMouseLeave={() => {
                if (middle) {
                  setHovered(null);
                }
              }}
              onClick={() => {
                if (middle) {
                  setActive(index);
                }
                if (index === 0) {
                  setExpanded(!expanded);
                }
              }}
              key={index}
            >
              <box-icon style={{...theme}} 
                class={`${middle && "boxicon"} 
                        ${!middle && "first-and-last-trash-fix"}
                        ${active === index && "active"}
                        `}
                size={changeSmall ? "sm" : "md"}
                name={item.iconName}
                type={item.type}
                // color={
                //   hovered === index || active === index ? "darkblue" : "blue"
                // }
                animation={active === index && animate ? "tada" : ""}
                rotate={item.rotate}
              ></box-icon>
              <Link className='link'  to='#'>

              <p style={{...theme,background:'transparent'}} 
                className={`description 
              ${expanded && "show-description"}
              ${active === index && "active-description"}`}
              >
                {item.name}
              </p>
              </Link>
       
            </div>
          );
        })}

        <span>maryam</span>


        {navItems.map((item, index) => {
          let middle = false;
          if ((index === 0 )) {
            middle = true;
          }
          return (
            <div style={{...theme}}
              class={`boxicon-container ${
                expanded && "expanded-boxicon-container"
              }`}
              onMouseEnter={() => {
                if (middle) {
                  setHovered(index);
                }
              }}
              onMouseLeave={() => {
                if (middle) {
                  setHovered(null);
                }
              }}
              onClick={() => {
                if (middle) {
                  setActive(index);
                }
                if (index === 0) {
                  setExpanded(!expanded);
                }
              }}
              key={index}
            >
              <box-icon style={{...theme}} 
                class={`${middle && "boxicon"} 
                        ${!middle && "first-and-last-trash-fix"}
                        ${active === index && "active"}
                        `}
                size={changeSmall ? "sm" : "md"}
                name={item.iconName}
                type={item.type}
                // color={
                //   hovered === index || active === index ? "darkblue" : "blue"
                // }
                animation={active === index && animate ? "tada" : ""}
                rotate={item.rotate}
              ></box-icon>
              <Link className='link'  to='#'>

              <p style={{...theme,background:'transparent'}} 
                className={`description 
              ${expanded && "show-description"}
              ${active === index && "active-description"}`}
              >
                {item.name}
              </p>
              </Link>
       
            </div>
          );
        })}

<span>maryam</span>

{bottomItems.map((item, index) => {
          let middle = false;
          if ((  menuItems.length - 1)) {
            middle = true;
          }
          return (
            <div style={{...theme}}
              class={`boxicon-container ${
                expanded && "expanded-boxicon-container"
              }`}
              onMouseEnter={() => {
                if (middle) {
                  setHovered(index);
                }
              }}
              onMouseLeave={() => {
                if (middle) {
                  setHovered(null);
                }
              }}
              onClick={() => {
                if (middle) {
                  setActive(index);
                }
                if (index === 0) {
                  setExpanded(!expanded);
                }
              }}
              key={index}
            >
              <box-icon style={{...theme}} 
                class={`${middle && "boxicon"} 
                        ${!middle && "first-and-last-trash-fix"}
                        ${active === index && "active"}
                        `}
                size={changeSmall ? "sm" : "md"}
                name={item.iconName}
                type={item.type}
                // color={
                //   hovered === index || active === index ? "darkblue" : "blue"
                // }
                animation={active === index && animate ? "tada" : ""}
                rotate={item.rotate}
              ></box-icon>
              <Link className='link'  to='#'>

              <p style={{...theme,background:'transparent'}} 
                className={`description 
              ${expanded && "show-description"}
              ${active === index && "active-description"}`}
              >
                {item.name}
              </p>
              </Link>
       
            </div>
          );
        })}

      </div>

)}

  </ThemeComponent.Consumer>
    )
  }




