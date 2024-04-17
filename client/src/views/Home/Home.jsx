// Home.js
import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, getDogsByTemperament } from '../../redux/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import style from './Home.module.css';
import NavBar from "../../components/NaBar/NavBar";
import SideBar from '../../components/SideBar/SideBar';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const dogs = useSelector((state) => state.dogs);

  const handleFilterByTemperament= (temperament) => {
    dispatch(getDogsByTemperament(temperament));
    // const filteredDogs = dogs.filter(dog => dog.temperament.includes(temperament));
    // Aquí podrías hacer algo con los perros filtrados, por ejemplo, actualizar el estado local
  };

  const handleFilterByOrigin = (origin) => {
    const filteredDogs = dogs.filter(dog => {
      if (origin === 'API') {
        return !dog.createdInDB;
      } else if (origin === 'Database') {
        return dog.createdInDB;
      }
      return true; // Retorna todos si no se especifica origen
    });
    // Aquí podrías hacer algo con los perros filtrados, por ejemplo, actualizar el estado local
  };

  const handleSortAlphabetically = () => {
    const sortedDogs = [...dogs].sort((a, b) => a.name.localeCompare(b.name));
    // Aquí podrías hacer algo con los perros ordenados alfabéticamente, por ejemplo, actualizar el estado local
  };

  const handleSortByWeight = () => {
    const sortedDogs = [...dogs].sort((a, b) => a.weight - b.weight);
    // Aquí podrías hacer algo con los perros ordenados por peso, por ejemplo, actualizar el estado local
  };

  return (
    <Fragment>
    <div className={style.homeContainer}>
      
      <h1 className={style.homeTitle}>HOME PAGE</h1>
      <div className={style.filters}>
        <SearchBar className={style.searchBar} />
        
        <button onClick={() => handleFilterByTemperament('Active')} className={style.filterButton}>
          Filtrar por Temperamento Activo
        </button>
        <button onClick={() => handleFilterByOrigin('API')} className={style.filterButton}>
          Filtrar por Origen API
        </button>
        <button onClick={() => handleFilterByOrigin('Database')} className={style.filterButton}>
          Filtrar por Origen Base de Datos
        </button> 
         <button onClick={handleSortAlphabetically} className={style.sortButton}>
          Ordenar Alfabéticamente
        </button>
        <button onClick={handleSortByWeight} className={style.sortButton}>
          Ordenar por Peso
        </button><br></br>
      </div>
      <br />
      <CardsContainer dogs={dogs} />
    </div>
    </Fragment>
  );
};

export default Home;
