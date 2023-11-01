import {React, useRef} from 'react';
import routes from '../routes';
import { Container } from '@mui/material';
import img from "../download.png";
import './nav.css'

function Nav() {
    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };
  return (

        <Container sx={{display:"flex"}}>
      <img
        src={img}
        alt="logo"
        height="100px"
        style={{ paddingTop: "10px",  }}
      />
      <nav ref={navRef}>
          {routes
            .filter((route) => route.name)
            .map((route) => (
              <a className="routes-link" href={route.path}>
                {route.name}
              </a>
            ))}
            </nav>
            </Container>
  
  )
}

export default Nav
