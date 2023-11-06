import React from "react";
import  styles from "./Home.module.css"

export default function Home(){
    return(
        <div className={styles.Home}>
            <div className={styles.HomeO}></div>
        
            <div className={styles.HomeT}>
                    <div className={styles.HomeTO}>

                    </div>
                    
                    <div className={styles.HomeTT}>
                        <div className={styles.women}>

                        </div>
                        <div className={styles.men}>
                                
                        </div>

                    </div>
            </div>
        </div>
    )
}