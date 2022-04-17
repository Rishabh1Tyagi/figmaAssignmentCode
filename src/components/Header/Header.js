import React from "react";
// import classes from './MainHeader.module.css';
import classes from "../Header/MainHeader.module.css";
import { NavLink } from 'react-router-dom';

// header's
const Header = () => {
  return(
    <>
     <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeclassname={classes.active} to='/login'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname={classes.active} to='/shoppingCart'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}


export default Header;