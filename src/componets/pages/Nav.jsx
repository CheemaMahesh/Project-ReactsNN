import React from "react";
import styles from "../styles/Nav.module.css";

//import useValue for using ContextAPI
import { useValue } from "../../ContextApi";

export default function Nav(){

    const {n,chickenCurry}=useValue();

    return(
        <div className={styles.Nav}>
                <h1>{n}</h1>
                <h2>{chickenCurry}</h2>
        </div>
    )
}