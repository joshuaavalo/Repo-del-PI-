import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes";

const Landing = () => {
    return(
        
        <div className={`${style.container} ${style.containerWithoutScroll}`}>
             <div className={style.content}>
                <h1 className={style.title1}>Bienvenidos a mi proyecto personal DOGS.</h1>
                <h2 className={style.title}>Espero les guste.</h2>
                <Link to={PATHROUTES.HOME}className={style.button}>Presione aquí para ingresar</Link>
            </div>
        </div>
    )
}

export default Landing;