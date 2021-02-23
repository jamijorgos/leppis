import { getProducts } from "../actions/productActions";

export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...state, action.payload];
        case 'DELETE':
            return state.filter((product) => product._id !== action.payload);
        default:
            return state;
    }
}