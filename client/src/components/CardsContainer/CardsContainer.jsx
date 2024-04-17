// /**
//  * *este componente debe tomar un array de usuarios y por cada usuario debe, renderizar un componente card. 
//  */


import React from 'react';
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from "./CardsContainer.module.css"; // Importa el archivo de estilos
import {useState } from "react";


const CarsContainer = () => {
  const dogs = useSelector(state => state.dogs); // Conecta con el estado global de Redux
  const [Page, setPage] = useState(1);
  const dogPerPage = 8;

  const nPages = Math.ceil(dogs.length / dogPerPage);
  const start = (Page - 1) * dogPerPage;
  const end = start + dogPerPage;

  const dogPageContent = dogs.slice(start, end);

  const prevPage = () => {
    if (Page > 1) {
      setPage(Page - 1);
    }
  };

  const nextPage = () => {
    if (Page < nPages) {
      setPage(Page + 1);
    }
  };
  return (
    <div className={style.container}>
      
      {dogPageContent.map(dog => (
        <div className={style.card} key={dog.id}> {/* Usa la clase de estilos CSS */}
          <Card key={dog.id} props={dog}/>
        </div>
      ))}
      {nPages !== 0 ? (
        <div className={style.paginate}>
          <br />
          {" "}
          <button className="botonpage" onClick={prevPage}>
            Anterior
          </button>
          <h3 className="labelpage">
            Página: {Page} de {nPages}
          </h3>
          <button className="botonpage" onClick={nextPage}>
            Siguiente
          </button>
        </div>
      ):undefined}
    </div>
  );
};

export default CarsContainer;






// imagen={dog.image}
// nombre={dog.name}
// temperamentos={dog.temperaments ? dog.temperaments.join(', ') : ''}
// peso={`Imperial: ${dog.weight.imperial} Metric: ${dog.weight.metric}`}