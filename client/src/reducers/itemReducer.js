
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "../actions/type";

const initialState = {
     items: [
    //     {id: uuidv4(), name: 'Eggs'},
    //     {id: uuidv4(), name: 'Milk'},
    //     {id: uuidv4(), name: 'Steak'},
    //     {id: uuidv4(), name: 'Potato'}
     ],
    loading : false //when loading turns it to true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading : false //loading to false since not loading anymore (already got the data from DB)
            }
        
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload )
            }

        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }

        case ITEMS_LOADING:
            return {
                ...state,
                loading : true
            }

        default:
            return state
    }
}