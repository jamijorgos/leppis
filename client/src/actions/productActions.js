import * as api from '../api';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.addProduct(product)

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id)

        dispatch({ type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error.message);
    }
}