import React from 'react';
import s from './Header.module.css';
import logo from '../../logo.svg'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return <header className={s.header}>
    <img src={logo} />

   <div className={s.loginBlock}>
       {props.isAuth 
       ? <div className={s.logOutBlock}><button className={s.logOutBlock} onClick={props.logout}>{props.login} <br /> Logout</button></div>
       : <NavLink to={'/login'}>Login</NavLink> }
       
   </div>
 </header>
}

export default Header; 