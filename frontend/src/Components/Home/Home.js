import React from 'react';
import Styles from "./Home.module.css"
import { FaJava, FaReact, FaDatabase } from 'react-icons/fa'

const Home = () => {

    return (
        <>
        <div className={Styles.Main}>
        <h1 className={Styles.title}>Hello, My name is Joakim.</h1>
        <h3 className={Styles.text}>I'm a Software & Full-stack Web developer</h3>
        <div className={Styles.Icons}>
        <FaJava size="2em" /> <FaReact size="2em" /> <FaDatabase size="2em" />
        </div>
        </div>
        </>
    )
}
export default Home