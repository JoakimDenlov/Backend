import React from 'react';
import { NavLink } from "react-router-dom";
import Styles from '../SideBar/Sidebar.module.css'
import Photo from '../../utils/images/Photo.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg'

const Sidebar = () => {


    return (
        <>
        <div className={Styles.SideBar}>
        <img src={Photo} alt="Me" className={Styles.Photo} />
        <p className={Styles.text} >Software & Web developer</p>
            <div>
            <NavLink className={Styles.Link} activeClassName={Styles.Active}  exact to="/">
            <p>Home</p>
            </NavLink>
            
            <NavLink className={Styles.Link} activeClassName={Styles.Active} to="/resume">
            <p>Resume</p>
            </NavLink>
            
            <NavLink className={Styles.Link} activeClassName={Styles.Active} to="/timeline">
            <p>Timeline</p>
            </NavLink>
            
            <NavLink className={Styles.Link} activeClassName={Styles.Active} to="/review">
            <p>Review</p>
            </NavLink>

            <p className = {Styles.text }> Contact me! </p>
            <div>
            <FaGithub onClick = {() => window.location.assign('https://github.com/JoakimDenlov') } className={Styles.Icons} size="2em" />
            <FaLinkedin onClick = {() => window.location.assign('https://www.linkedin.com/in/joakim-denlov-66245b1a8/') } className={Styles.Icons} size="2em" />
            <CgMail  className={Styles.Icons} size="2em" />
            </div>
            
            </div>
        </div>
        </>
    )
}
export default Sidebar