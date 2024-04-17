import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/dogs`);
      const dogs = apiData.data;
      dispatch({ type: GET_DOGS, payload: dogs });
    } catch (error) {
      console.error("Error fetching dogs:", error);
    }
  };
};

export const getById = (id) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/dogs/${id}`);
      const dog = apiData.data;
      dispatch({ type: GET_DOG_BY_ID, payload: dog });
    } catch (error) {
      console.error(`Error fetching dog`, error);
    }
  };
};

export function getDogsByName(name) {
  return async function (dispatch) {
      const { data } = await axios.get(`http://localhost:3001/dogs?name=${name}`);
      return dispatch({
          type: "GET_DOGS_BY_NAME",
          payload: data
      });
  };
}

export function getDogsByTemperament(temperament) {
  return async function (dispatch) {
      const { data } = await axios.get(`http://localhost:3001/dog/?temperament=${temperament}`);
      return dispatch({
          type: "GET_DOGS_BY_TEMPERAMENT",
          payload: data
      });
  };
}


export function orderByName(payload) {
  return {
      type: 'ORDER_BY_NAME',
      payload
  }
}

export function orderByWeight(payload) {
  return {
      type: 'ORDER_BY_WEIGHT',
      payload
  }
}


export function filterDogsByMAXWeight(payload) {
  return {
      type: 'FILTER_BY_MAX_WEIGHT',
      payload
  }
}

export function filterDogsByMINWeight(payload) {
  return {
      type: 'FILTER_BY_MIN_WEIGHT',
      payload
  }
}



export function getTemperamentsList() {
  return async function (dispatch) {
      var json = await axios.get('http://localhost:3001/temperament');
      var listOfTemperaments = json.data.map(el => el.name)
      return dispatch({
          type: 'GET_TEMPERAMENTS_LIST',
          payload: listOfTemperaments
      });
  }
}



export function getDogsByBreed(payload) {
  return async function (dispatch) {
      try {
          var json = await axios.get(`http://localhost:3001/breedGroup?breedGroup=${payload}`);
          return dispatch({
              type: 'GET_DOGS_BY_BREED',
              payload: json.data
          })
      } catch (error) {
          console.log(error, "Error on the filters in actions file")
      }
  }
}

export function getBreeds() {
  return async function (dispatch) {
      var json = await axios.get('http://localhost:3001/breedGroups');
      return dispatch({
          type: 'GET_BREEDS',
          payload: json.data
      });
  }
}

export function filterDogsByTemperament(payload) {
  return async function (dispatch) {
      try {
          var json = await axios.get(`http://localhost:3001/dog/?temperament=${payload}`);
          return dispatch({
              type: 'GET_DOGS_BY_TEMP',
              payload: json.data
          })
      } catch (error) {
          console.log(error, "Error on the filters in actions file")
      }
  }
}
export function filterCreated(payload) {
  return {
      type: 'FILTER_CREATED',
      payload
  }
}

//https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

//https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}