import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes"; // CON ESTO TENEMOS UN ACCESO RAPIDO A TODAS NUESTRAS RUTAS Y LAS PODEMOS ACTUALIZAR DESDE ALLI.
import style from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            <section>
                <h1>Soy el logo</h1>
            </section>
            <section>
                <Link to={PATHROUTES.LANDING}> Landing </Link>
                <Link to={PATHROUTES.HOME}> Home </Link>
                <Link to={PATHROUTES.DETAIL}> Detail </Link>
                <Link to={PATHROUTES.FORM}> form </Link>
                

            </section>
        </div>
    )
};

export default NavBar; 

//cuidado con los helpers
