import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getById } from "../../redux/actions"; // Importa la acción para obtener los detalles del perro
import style from "./Detail.module.css";
import SideBar from "../../components/SideBar/SideBar";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();   // Obtiene el ID del perro de los parámetros de la URL
  const navigate = useNavigate();  // hook para volver
  const dogById = useSelector((state) => state.dogById); // Obtiene los detalles del perro del estado global
  console.log("soy el console log",dogById);
  useEffect(() => {
    dispatch(getById(id)); // Dispara la acción para obtener los detalles del perro
  }, [dispatch, id]);
  const goback = () =>{
    navigate(-1);
  }

  return (
    <div className={style.detail}>
      
      {dogById && (
        <>
          <div>
            <img className={style.image} src={dogById.image} alt={dogById.name}/>
          </div>
          <div className={style.text}>
            <h2>ID: {dogById.id}</h2>
            <h2>Nombre: {dogById.name}</h2>
            <p>Altura: min {dogById.height_min}cm - max {dogById.height_max}cm</p>
            <p>Peso: min {dogById.weight_min}kg - max {dogById.weight_max}kg</p>
            <p>Temperamentos: {dogById.temperament}</p>
            <p>Años de vida: {dogById.life_span}</p>
            <button onClick={goback}> volver </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;