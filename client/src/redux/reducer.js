import { GET_DOGS, GET_DOG_BY_ID } from "./actions"; // Actualiza el nombre de la acción

const initialState = {
    dogs: [],
    alldogs:[],
    dogById: [], // Agrega una propiedad para almacenar los detalles del perro por ID

};


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DOGS:
            return { ...state, dogs: action.payload, alldogs: action.payload };
        case GET_DOG_BY_ID: // Maneja la acción GET_DOG_BY_ID
            return { ...state, dogById: action.payload }; // Almacena los detalles del perro por ID
        case "GET_DOGS_BY_NAME":
            return {
                 ...state, allDogs: action.payload,
                }
        case 'GET_DOGS_BY_TEMP':
            return {
                ...state, allDogs: action.payload,
                    }
        case 'GET_BREEDS':
            return {
                ...state,
                breeds: action.payload
            }
        case 'GET_TEMPERAMENTS_LIST':
                return {
                    ...state,
                    temperaments: action.payload
            }
        case 'GET_DOGS_BY_BREED':
                const allDogs = state.dogs
                if (action.payload === 'all') return allDogs
            return {
                    ...state,
                    allDogs: action.payload,
                    dogs: allDogs
                   }
        case 'FILTER_CREATED':
                const createdFilter = action.payload =='created' ?
                            state.dogs.filter(el => el.createdInDB === true) :
                            state.dogs.filter(el => !el.createdInDB);
            return {
                            ...state,
                            allDogs: createdFilter,
                        }
        case 'ORDER_BY_NAME':
                const sortedArr = action.payload === 'asc' ?
                            [...state.dogs].sort(function (a, b) {
                                if (a.name > b.name) { return 1 }
                                if (b.name > a.name) { return -1 }
                                return 0;
                            }) :
                            [...state.dogs].sort(function (a, b) {
                                if (a.name > b.name) { return -1; }
                                if (b.name > a.name) { return 1; }
                                return 0;
                            })
                return {
                            ...state,
                            allDogs: sortedArr
                        }
            case 'ORDER_BY_WEIGHT':
                        const sortedWeight = action.payload === 'asc' ?
                            [...state.dogs].sort(function (a, b) {
                                if(a.weight_min === null) { return 0 }
                                if (a.weight_min < b.weight_min) { return 1 }
                                if (b.weight_min < a.weight_min) { return -1 }
                                return 0;
                            }) :
                            [...state.dogs].sort(function (a, b) {
                                if(a.weight_min === null) { return 0 }
                                if (a.weight_min < b.weight_min) { return -1; }
                                if (b.weight_min < a.weight_min) { return 1; }
                                return 0;
                            })
                return {
                            ...state,
                            allDogs: sortedWeight
                        }
            case 'FILTER_BY_MAX_WEIGHT':
                        const everyDog = state.allDogs
                        const weightMAXFiltered = action.payload === 'all' ?
                            everyDog :
                            everyDog.filter(el => el.weight_max <= action.payload)
                return {
                            ...state,
                            allDogs: weightMAXFiltered
                        }
            case 'FILTER_BY_MIN_WEIGHT':
                        const allDoguis = state.allDogs
                        const weightMINFiltered = action.payload === 'all' ?
                            allDoguis :
                            allDoguis.filter(el => el.weight_min >= action.payload)
                return {
                            ...state,
                            allDogs: weightMINFiltered
                        }        
        default:
            return { ...state };
    }
};

export default rootReducer;