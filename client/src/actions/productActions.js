import * as api from '../api';

// Action kutsut backendille
// Hae kaikki
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
// Lisää tuote
export const createProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.addProduct(product)

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}
// Poista tuote
export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id)

        dispatch({ type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error.message);
    }
}
// Päivitä tuotteen tietoja
export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const { data } = await api.updateProduct(id, product);
    
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}